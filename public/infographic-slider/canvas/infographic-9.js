var infographic_9_canvas, infographic_9_stage, infographic_9_exportRoot, infographic_9_anim_container, infographic_9_dom_overlay_container, infographic_9_fnStartAnimation;
function infographic_9_init() {
    if (jQuery('#infographic_9_animation_container').length > 0) {
        infographic_9_canvas = document.getElementById("infographic_9_canvas");
        infographic_9_anim_container = document.getElementById("infographic_9_animation_container");
        infographic_9_dom_overlay_container = document.getElementById("infographic_9_dom_overlay_container");
        var comp = AdobeAn.getComposition("510B49D90F975C4B87E131B9D22EEE58");
        var lib = comp.getLibrary();
        infographic_9_handleComplete({}, comp);
    }
}
function infographic_9_handleComplete(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    infographic_9_exportRoot = new lib.inf_g9();
    infographic_9_stage = new lib.Stage(infographic_9_canvas);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        infographic_9_stage.addChild(infographic_9_exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", infographic_9_stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            infographic_9_canvas.width = w*pRatio*sRatio;
            infographic_9_canvas.height = h*pRatio*sRatio;
            infographic_9_canvas.style.width = infographic_9_dom_overlay_container.style.width = infographic_9_anim_container.style.width =  w*sRatio+'px';
            infographic_9_canvas.style.height = infographic_9_anim_container.style.height = infographic_9_dom_overlay_container.style.height = h*sRatio+'px';
            infographic_9_stage.scaleX = pRatio*sRatio;
            infographic_9_stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            infographic_9_stage.tickOnUpdate = false;
            infographic_9_stage.update();
            infographic_9_stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
    jQuery(window).on('load', function(){
        makeResponsive(false,'both',false,1);
    });
}
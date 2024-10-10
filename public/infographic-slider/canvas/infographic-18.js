var infographic_18_canvas, infographic_18_stage, infographic_18_exportRoot, infographic_18_anim_container, infographic_18_dom_overlay_container, infographic_18_fnStartAnimation;
function infographic_18_init() {
    if(jQuery('#infographic_18_animation_container').length > 0) {
        infographic_18_canvas = document.getElementById("infographic_18_canvas");
        infographic_18_anim_container = document.getElementById("infographic_18_animation_container");
        infographic_18_dom_overlay_container = document.getElementById("infographic_18_dom_overlay_container");
        var comp = AdobeAn.getComposition("510B49D90F975C4B87E131B9D22EEE25");
        var lib = comp.getLibrary();
        infographic_18_handleComplete({}, comp);
    }
}
function infographic_18_handleComplete(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    infographic_18_exportRoot = new lib.inf_g18();
    infographic_18_stage = new lib.Stage(infographic_18_canvas);
    //Registers the "tick" event listener.
    infographic_18_fnStartAnimation = function() {
        infographic_18_stage.addChild(infographic_18_exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", infographic_18_stage);
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
            infographic_18_canvas.width = w*pRatio*sRatio;
            infographic_18_canvas.height = h*pRatio*sRatio;
            infographic_18_canvas.style.width = infographic_18_dom_overlay_container.style.width = infographic_18_anim_container.style.width =  w*sRatio+'px';
            infographic_18_canvas.style.height = infographic_18_anim_container.style.height = infographic_18_dom_overlay_container.style.height = h*sRatio+'px';
            infographic_18_stage.scaleX = pRatio*sRatio;
            infographic_18_stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            infographic_18_stage.tickOnUpdate = false;
            infographic_18_stage.update();
            infographic_18_stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    infographic_18_fnStartAnimation();
    jQuery(window).on('load', function(){
        makeResponsive(false,'both',false,1);
    })
}
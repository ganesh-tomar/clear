var infographic_15_canvas, infographic_15_stage, infographic_15_exportRoot, infographic_15_anim_container, infographic_15_dom_overlay_container, infographic_15_fnStartAnimation;
function infographic_15_init() {
    if (jQuery('#infographic_15_animation_container').length > 0) {
        infographic_15_canvas = document.getElementById("infographic_15_canvas");
        infographic_15_anim_container = document.getElementById("infographic_15_animation_container");
        infographic_15_dom_overlay_container = document.getElementById("infographic_15_dom_overlay_container");
        var comp = AdobeAn.getComposition("510B49D90F975C4B87E151B9D22EEE15");
        var lib = comp.getLibrary();
        infographic_15_handleComplete({}, comp);
    }
}
function infographic_15_handleComplete(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    infographic_15_exportRoot = new lib.inf_g15();
    infographic_15_stage = new lib.Stage(infographic_15_canvas);
    //Registers the "tick" event listener.
    infographic_15_fnStartAnimation = function() {
        infographic_15_stage.addChild(infographic_15_exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", infographic_15_stage);
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
            infographic_15_canvas.width = w*pRatio*sRatio;
            infographic_15_canvas.height = h*pRatio*sRatio;
            infographic_15_canvas.style.width = infographic_15_dom_overlay_container.style.width = infographic_15_anim_container.style.width =  w*sRatio+'px';
            infographic_15_canvas.style.height = infographic_15_anim_container.style.height = infographic_15_dom_overlay_container.style.height = h*sRatio+'px';
            infographic_15_stage.scaleX = pRatio*sRatio;
            infographic_15_stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            infographic_15_stage.tickOnUpdate = false;
            infographic_15_stage.update();
            infographic_15_stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    infographic_15_fnStartAnimation();
    jQuery(window).on('load', function(){
        makeResponsive(false,'both',false,1);
    });
}

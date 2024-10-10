var infographic_14_canvas, infographic_14_stage, infographic_14_exportRoot, infographic_14_anim_container, infographic_14_dom_overlay_container, infographic_14_fnStartAnimation;
function infographic_14_init() {
    if(jQuery('#infographic_14_animation_container').length > 0) {
        infographic_14_canvas = document.getElementById("infographic_14_canvas");
        infographic_14_anim_container = document.getElementById("infographic_14_animation_container");
        infographic_14_dom_overlay_container = document.getElementById("infographic_14_dom_overlay_container");
        var comp = AdobeAn.getComposition("FC55A3CA3D973743B86D68C149AB0853");
        var lib = comp.getLibrary();
        infographic_14_handleComplete({}, comp);
    }
}
function infographic_14_handleComplete(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    infographic_14_exportRoot = new lib.sandhill_ani14c();
    infographic_14_stage = new lib.Stage(infographic_14_canvas);
    //Registers the "tick" event listener.
    infographic_14_fnStartAnimation = function() {
        infographic_14_stage.addChild(infographic_14_exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", infographic_14_stage);
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
            infographic_14_canvas.width = w*pRatio*sRatio;
            infographic_14_canvas.height = h*pRatio*sRatio;
            infographic_14_canvas.style.width = infographic_14_dom_overlay_container.style.width = infographic_14_anim_container.style.width =  w*sRatio+'px';
            infographic_14_canvas.style.height = infographic_14_anim_container.style.height = infographic_14_dom_overlay_container.style.height = h*sRatio+'px';
            infographic_14_stage.scaleX = pRatio*sRatio;
            infographic_14_stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            infographic_14_stage.tickOnUpdate = false;
            infographic_14_stage.update();
            infographic_14_stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    infographic_14_fnStartAnimation();
    jQuery(window).on('load', function(){
        makeResponsive(false,'both',false,1);
    })
}
var infographic_17_canvas, infographic_17_stage, infographic_17_exportRoot, infographic_17_anim_container, infographic_17_dom_overlay_container, infographic_17_fnStartAnimation;
function infographic_17_init() {
    if(jQuery('#infographic_17_animation_container').length > 0) {
        infographic_17_canvas = document.getElementById("infographic_17_canvas");
        infographic_17_anim_container = document.getElementById("infographic_17_animation_container");
        infographic_17_dom_overlay_container = document.getElementById("infographic_17_dom_overlay_container");
        var comp=AdobeAn.getComposition("AD29F7A7C98393419290880E6FC3DDF8");
        var lib=comp.getLibrary();
        infographic_17_handleComplete({},comp);
    }
}
function infographic_17_handleComplete(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    infographic_17_exportRoot = new lib.sandhill_ani17b();
    infographic_17_stage = new lib.Stage(infographic_17_canvas);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        infographic_17_stage.addChild(infographic_17_exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", infographic_17_stage);
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
            infographic_17_canvas.width = w*pRatio*sRatio;
            infographic_17_canvas.height = h*pRatio*sRatio;
            infographic_17_canvas.style.width = infographic_17_dom_overlay_container.style.width = infographic_17_anim_container.style.width =  w*sRatio+'px';
            infographic_17_canvas.style.height = infographic_17_anim_container.style.height = infographic_17_dom_overlay_container.style.height = h*sRatio+'px';
            infographic_17_stage.scaleX = pRatio*sRatio;
            infographic_17_stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            infographic_17_stage.tickOnUpdate = false;
            infographic_17_stage.update();
            infographic_17_stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
    jQuery(window).on('load', function(){
        makeResponsive(false,'both',false,1);
    })
}
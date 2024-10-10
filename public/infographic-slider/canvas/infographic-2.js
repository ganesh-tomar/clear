var infographic_2canvas, infographic_2stage, infographic_2exportRoot, infographic_2anim_container, infographic_2dom_overlay_container, infographic_2fnStartAnimation;
function infographic_2_init() {
    if(jQuery('#infographic_2_animation_container').length > 0) {
        infographic_2canvas = document.getElementById("infographic_2_canvas");
        infographic_2anim_container = document.getElementById("infographic_2_animation_container");
        infographic_2dom_overlay_container = document.getElementById("infographic_2_dom_overlay_container");
        var comp = AdobeAn.getComposition("C2C0AF63CE78394B93137AF22E31F030");
        var lib = comp.getLibrary();
        infographic_2({}, comp);
    }
}
function infographic_2(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    infographic_2exportRoot = new lib.index();
    infographic_2stage = new lib.Stage(infographic_2canvas);
    //Registers the "tick" event listener.
    infographic_2fnStartAnimation = function() {
        infographic_2stage.addChild(infographic_2exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", infographic_2stage);
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
            infographic_2canvas.width = w*pRatio*sRatio;
            infographic_2canvas.height = h*pRatio*sRatio;
            infographic_2canvas.style.width = infographic_2dom_overlay_container.style.width = infographic_2anim_container.style.width =  w*sRatio+'px';
            infographic_2canvas.style.height = infographic_2anim_container.style.height = infographic_2dom_overlay_container.style.height = h*sRatio+'px';
            infographic_2stage.scaleX = pRatio*sRatio;
            infographic_2stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            infographic_2stage.tickOnUpdate = false;
            infographic_2stage.update();
            infographic_2stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    infographic_2fnStartAnimation();
    jQuery(window).on('load', function(){
        makeResponsive(false,'both',false,1);
    })
}
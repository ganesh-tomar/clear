var infographic_5canvas, infographic_5stage, infographic_5exportRoot, infographic_5anim_container, infographic_5dom_overlay_container, infographic_5fnStartAnimation;
function infographic_5_init() {
    if(jQuery('#infographic_5_animation_container').length > 0) {
        infographic_5canvas = document.getElementById("infographic_5_canvas");
        infographic_5anim_container = document.getElementById("infographic_5_animation_container");
        infographic_5dom_overlay_container = document.getElementById("infographic_5_dom_overlay_container");
        var comp = AdobeAn.getComposition("88BC3458F9D8C64C8EE385C92366514D");
        var lib = comp.getLibrary();
        infographic_5({}, comp);
    }
}
function infographic_5(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    infographic_5exportRoot = new lib.index();
    infographic_5stage = new lib.Stage(infographic_5canvas);
    //Registers the "tick" event listener.
    infographic_5fnStartAnimation = function() {
        infographic_5stage.addChild(infographic_5exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", infographic_5stage);
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
            infographic_5canvas.width = w*pRatio*sRatio;
            infographic_5canvas.height = h*pRatio*sRatio;
            infographic_5canvas.style.width = infographic_5dom_overlay_container.style.width = infographic_5anim_container.style.width =  w*sRatio+'px';
            infographic_5canvas.style.height = infographic_5anim_container.style.height = infographic_5dom_overlay_container.style.height = h*sRatio+'px';
            infographic_5stage.scaleX = pRatio*sRatio;
            infographic_5stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            infographic_5stage.tickOnUpdate = false;
            infographic_5stage.update();
            infographic_5stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    infographic_5fnStartAnimation();
    jQuery(window).on('load', function(){
        makeResponsive(false,'both',false,1);
    })
}
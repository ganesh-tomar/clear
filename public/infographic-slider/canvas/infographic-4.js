var infographic_4canvas, infographic_4stage, infographic_4exportRoot, infographic_4anim_container, infographic_4dom_overlay_container, infographic_4fnStartAnimation;
function infographic_4_init() {
    if(jQuery('#infographic_4_animation_container').length > 0) {
        infographic_4canvas = document.getElementById("infographic_4_canvas");
        infographic_4anim_container = document.getElementById("infographic_4_animation_container");
        infographic_4dom_overlay_container = document.getElementById("infographic_4_dom_overlay_container");
        var comp = AdobeAn.getComposition("03AD24DE11B17241ACA00A876314EF4C");
        var lib = comp.getLibrary();
        infographic_4({}, comp);
    }
}
function infographic_4(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    infographic_4exportRoot = new lib.index();
    infographic_4stage = new lib.Stage(infographic_4canvas);
    //Registers the "tick" event listener.
    infographic_4fnStartAnimation = function() {
        infographic_4stage.addChild(infographic_4exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", infographic_4stage);
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
            infographic_4canvas.width = w*pRatio*sRatio;
            infographic_4canvas.height = h*pRatio*sRatio;
            infographic_4canvas.style.width = infographic_4dom_overlay_container.style.width = infographic_4anim_container.style.width =  w*sRatio+'px';
            infographic_4canvas.style.height = infographic_4anim_container.style.height = infographic_4dom_overlay_container.style.height = h*sRatio+'px';
            infographic_4stage.scaleX = pRatio*sRatio;
            infographic_4stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            infographic_4stage.tickOnUpdate = false;
            infographic_4stage.update();
            infographic_4stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    infographic_4fnStartAnimation();
    jQuery(window).on('load', function(){
        makeResponsive(false,'both',false,1);
    })
}
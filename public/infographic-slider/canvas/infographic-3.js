var infographic_3canvas, infographic_3stage, infographic_3exportRoot, infographic_3anim_container, infographic_3dom_overlay_container, infographic_3fnStartAnimation;
function infographic_3_init() {
    if(jQuery('#infographic_3_animation_container').length > 0) {
        infographic_3canvas = document.getElementById("infographic_3_canvas");
        infographic_3anim_container = document.getElementById("infographic_3_animation_container");
        infographic_3dom_overlay_container = document.getElementById("infographic_3_dom_overlay_container");
        var comp = AdobeAn.getComposition("70738AA186A9A540A443469EEBCD7273");
        var lib = comp.getLibrary();
        infographic_3({}, comp);
    }
}
function infographic_3(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    infographic_3exportRoot = new lib.index();
    infographic_3stage = new lib.Stage(infographic_3canvas);
    //Registers the "tick" event listener.
    infographic_3fnStartAnimation = function() {
        infographic_3stage.addChild(infographic_3exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", infographic_3stage);
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
            infographic_3canvas.width = w*pRatio*sRatio;
            infographic_3canvas.height = h*pRatio*sRatio;
            infographic_3canvas.style.width = infographic_3dom_overlay_container.style.width = infographic_3anim_container.style.width =  w*sRatio+'px';
            infographic_3canvas.style.height = infographic_3anim_container.style.height = infographic_3dom_overlay_container.style.height = h*sRatio+'px';
            infographic_3stage.scaleX = pRatio*sRatio;
            infographic_3stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            infographic_3stage.tickOnUpdate = false;
            infographic_3stage.update();
            infographic_3stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    infographic_3fnStartAnimation();
    jQuery(window).on('load', function(){
        makeResponsive(false,'both',false,1);
    })
}
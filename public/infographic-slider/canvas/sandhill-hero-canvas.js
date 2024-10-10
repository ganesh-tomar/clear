
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function hero_init() {
    if(jQuery('#hero_animation_container').length > 0) {
        canvas = document.getElementById("hero_canvas");
        anim_container = document.getElementById("hero_animation_container");
        dom_overlay_container = document.getElementById("hero_dom_overlay_container");
        var comp = AdobeAn.getComposition("FDA0CCA9CB5FD441BFBD82ACB8EB6218");
        var lib_web_g1 = comp.getLibrary();
        hero_handleComplete({}, comp);
    }
}
function hero_handleComplete(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib_web_g1=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    exportRoot = new lib_web_g1.web_g1();
    stage = new lib_web_g1.Stage(canvas);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib_web_g1.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib_web_g1.properties.width, h = lib_web_g1.properties.height;
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
            canvas.width = w*pRatio*sRatio;
            canvas.height = h*pRatio*sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib_web_g1.properties.id);
    fnStartAnimation();
    jQuery(window).on('load', function () {
        makeResponsive(false, 'both', false, 1);
    })
}


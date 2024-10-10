var infographic_12_canvas, infographic_12_stage, infographic_12_exportRoot, infographic_12_anim_container, infographic_12_dom_overlay_container, infographic_12_fnStartAnimation;
function infographic_12_init() {
    if (jQuery('#infographic_12_animation_container').length > 0) {
        infographic_12_canvas = document.getElementById("infographic_12_canvas");
        infographic_12_anim_container = document.getElementById("infographic_12_animation_container");
        infographic_12_dom_overlay_container = document.getElementById("infographic_12_dom_overlay_container");
        var comp = AdobeAn.getComposition("510B49D90F975C4B87E131B9D22EEE58120");
        var lib = comp.getLibrary();
        infographic_12({}, comp);
    }
}
function infographic_12(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    infographic_12_exportRoot = new lib.inf_g12();
    infographic_12_stage = new lib.Stage(infographic_12_canvas);
    //Registers the "tick" event listener.
    infographic_12_fnStartAnimation = function() {
        infographic_12_stage.addChild(infographic_12_exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", infographic_12_stage);
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
            infographic_12_canvas.width = w*pRatio*sRatio;
            infographic_12_canvas.height = h*pRatio*sRatio;
            infographic_12_canvas.style.width = infographic_12_dom_overlay_container.style.width = infographic_12_anim_container.style.width =  w*sRatio+'px';
            infographic_12_canvas.style.height = infographic_12_anim_container.style.height = infographic_12_dom_overlay_container.style.height = h*sRatio+'px';
            infographic_12_stage.scaleX = pRatio*sRatio;
            infographic_12_stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            infographic_12_stage.tickOnUpdate = false;
            infographic_12_stage.update();
            infographic_12_stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    infographic_12_fnStartAnimation();
    jQuery(window).on('load', function(){
        makeResponsive(false,'both',false,1);
    });
}
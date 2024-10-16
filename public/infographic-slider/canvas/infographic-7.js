var infographic_7_canvas, infographic_7_stage, infographic_7_exportRoot, infographic_7_anim_container, infographic_7_dom_overlay_container, infographic_7_fnStartAnimation;
function infographic_7_init() {
    if (jQuery('#infographic_7_animation_container').length > 0) {
        infographic_7_canvas = document.getElementById("infographic_7_canvas");
        infographic_7_anim_container = document.getElementById("infographic_7_animation_container");
        infographic_7_dom_overlay_container = document.getElementById("infographic_7_dom_overlay_container");
        var comp = AdobeAn.getComposition("510B49D90F975C4B87E131B9D22EEE5868");
        var lib = comp.getLibrary();
        infographic_7({}, comp);
    }
}
function infographic_7(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    infographic_7_exportRoot = new lib.inf_g7();
    infographic_7_stage = new lib.Stage(infographic_7_canvas);
    //Registers the "tick" event listener.
    infographic_7_fnStartAnimation = function() {
        infographic_7_stage.addChild(infographic_7_exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", infographic_7_stage);
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
            infographic_7_canvas.width = w*pRatio*sRatio;
            infographic_7_canvas.height = h*pRatio*sRatio;
            infographic_7_canvas.style.width = infographic_7_dom_overlay_container.style.width = infographic_7_anim_container.style.width =  w*sRatio+'px';
            infographic_7_canvas.style.height = infographic_7_anim_container.style.height = infographic_7_dom_overlay_container.style.height = h*sRatio+'px';
            infographic_7_stage.scaleX = pRatio*sRatio;
            infographic_7_stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            infographic_7_stage.tickOnUpdate = false;
            infographic_7_stage.update();
            infographic_7_stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    infographic_7_fnStartAnimation();
    jQuery(window).on('load', function(){
        makeResponsive(false,'both',false,1);
    });
}
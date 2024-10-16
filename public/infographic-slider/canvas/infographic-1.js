var infographic_1_canvas, infographic_1_stage, infographic_1_exportRoot, infographic_1_anim_container, infographic_1_dom_overlay_container, infographic_1_fnStartAnimation;
function infographic_1_init() {
    if (jQuery('#infographic_1_animation_container').length > 0) {
        infographic_1_canvas = document.getElementById("infographic_1_canvas");
        infographic_1_anim_container = document.getElementById("infographic_1_animation_container");
        infographic_1_dom_overlay_container = document.getElementById("infographic_1_dom_overlay_container");
        var comp = AdobeAn.getComposition("316D21972193484D9C31259A2D6E8390");
        var lib = comp.getLibrary();
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", function (evt) {
            handleFileLoad(evt, comp)
        });
        loader.addEventListener("complete", function (evt) {
            infographic_1_handleComplete(evt, comp)
        });
        var lib = comp.getLibrary();
        loader.loadManifest(lib.properties.manifest);
    }
}

function handleFileLoad(evt, comp) {
    var images=comp.getImages();
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function infographic_1_handleComplete(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    infographic_1_exportRoot = new lib.sandhill_ani01d();
    infographic_1_stage = new lib.Stage(infographic_1_canvas);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        infographic_1_stage.addChild(infographic_1_exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", infographic_1_stage);
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
            infographic_1_canvas.width = w*pRatio*sRatio;
            infographic_1_canvas.height = h*pRatio*sRatio;
            infographic_1_canvas.style.width = infographic_1_dom_overlay_container.style.width = infographic_1_anim_container.style.width =  w*sRatio+'px';
            infographic_1_canvas.style.height = infographic_1_anim_container.style.height = infographic_1_dom_overlay_container.style.height = h*sRatio+'px';
            infographic_1_stage.scaleX = pRatio*sRatio;
            infographic_1_stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            infographic_1_stage.tickOnUpdate = false;
            infographic_1_stage.update();
            infographic_1_stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
    jQuery(window).on('load', function(){
        makeResponsive(false,'both',false,1);
    });
}
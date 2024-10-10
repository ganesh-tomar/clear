// var infographic_6_canvas, infographic_6_stage, infographic_6_exportRoot, infographic_6_anim_container, infographic_6_dom_overlay_container, infographic_6_fnStartAnimation;
// function infographic_6_init() {
//     if (jQuery('#infographic_6_animation_container').length > 0) {
//         infographic_6_canvas = document.getElementById("infographic_6_canvas");
//         infographic_6_anim_container = document.getElementById("infographic_6_animation_container");
//         infographic_6_dom_overlay_container = document.getElementById("infographic_6_dom_overlay_container");
//         var comp = AdobeAn.getComposition("BD747A241F0FAE46BF522F9A2F44EB2C");
//         var lib = comp.getLibrary();
//         infographic_6({}, comp);
//     }
// }
// function infographic_6(evt,comp) {
//     //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
//     var lib=comp.getLibrary();
//     var ss=comp.getSpriteSheet();
//     infographic_6_exportRoot = new lib.inf_g6();
//     infographic_6_stage = new lib.Stage(infographic_6_canvas);
//     //Registers the "tick" event listener.
//     infographic_6_fnStartAnimation = function() {
//         infographic_6_stage.addChild(infographic_6_exportRoot);
//         createjs.Ticker.setFPS(lib.properties.fps);
//         createjs.Ticker.addEventListener("tick", infographic_6_stage);
//     }
//     //Code to support hidpi screens and responsive scaling.
//     function makeResponsive(isResp, respDim, isScale, scaleType) {
//         var lastW, lastH, lastS=1;
//         window.addEventListener('resize', resizeCanvas);
//         resizeCanvas();
//         function resizeCanvas() {
//             var w = lib.properties.width, h = lib.properties.height;
//             var iw = window.innerWidth, ih=window.innerHeight;
//             var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
//             if(isResp) {
//                 if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
//                     sRatio = lastS;
//                 }
//                 else if(!isScale) {
//                     if(iw<w || ih<h)
//                         sRatio = Math.min(xRatio, yRatio);
//                 }
//                 else if(scaleType==1) {
//                     sRatio = Math.min(xRatio, yRatio);
//                 }
//                 else if(scaleType==2) {
//                     sRatio = Math.max(xRatio, yRatio);
//                 }
//             }
//             infographic_6_canvas.width = w*pRatio*sRatio;
//             infographic_6_canvas.height = h*pRatio*sRatio;
//             infographic_6_canvas.style.width = infographic_6_dom_overlay_container.style.width = infographic_6_anim_container.style.width =  w*sRatio+'px';
//             infographic_6_canvas.style.height = infographic_6_anim_container.style.height = infographic_6_dom_overlay_container.style.height = h*sRatio+'px';
//             infographic_6_stage.scaleX = pRatio*sRatio;
//             infographic_6_stage.scaleY = pRatio*sRatio;
//             lastW = iw; lastH = ih; lastS = sRatio;
//             infographic_6_stage.tickOnUpdate = false;
//             infographic_6_stage.update();
//             infographic_6_stage.tickOnUpdate = true;
//         }
//     }
//     makeResponsive(false,'both',false,1);
//     AdobeAn.compositionLoaded(lib.properties.id);
//     infographic_6_fnStartAnimation();
//     jQuery(window).on('load', function(){
//         makeResponsive(false,'both',false,1);
//     });
// }
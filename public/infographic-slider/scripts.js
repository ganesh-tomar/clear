var itemLength=0;
var itemstoshow = 0;
var a = 0;
var n = 0;
var speed = 800;
var scaleIndex;
var scaleparentIndex;
var y=0;
var downLength=0;
var wrappWidth=0;
var flag;
console.log('test');
function canvasDeploy(canvasIndex){
    jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .hover-content .bg-img").empty();
    jQuery(".infographic-slider .slide-item").each(function () {
        var $itemIndex = jQuery(this).attr("data-index");
        if(canvasIndex === $itemIndex){
            jQuery(this).find(".hover-content .bg-img").html("<iframe src='sandhill-canvas-html/inf_g"+canvasIndex+".html'></iframe>");
        }
    });
}

function itemClick(){
    jQuery(".infographic-slider .slide-item .slide-inner").on("click",function(e) {
        e.stopPropagation();
        var canvasIndex = jQuery(this).parent().attr("data-index");
        canvasDeploy(canvasIndex);
        var windowWidth = jQuery(window).width();
        if(windowWidth>812){
            if (!jQuery(this).hasClass("scale-item")) {
                jQuery(".infographic-slider .slide-item .slide-inner").removeClass("scale-item");
                jQuery(".infographic-slider .slide-wrapp").removeClass("scale-child scale-previous scale-down-parent").css({
                    "max-width": "1170px",
                    "width": "calc(100vw - 40px)"
                });
                jQuery(".infographic-slider .slide-item").removeClass("scale-parent scale-parent-previous scale-up scale-down");
                jQuery(".infographic-slider .slide-item").removeAttr("style");
                jQuery(this).css({"left":"0px"});

                jQuery(this).addClass("scale-item");
                jQuery(this).parent().addClass("scale-parent");
                jQuery(this).parents(".slide-wrapp").addClass("scale-child");

                /* Shift scale item to middle */
                var clickIndex = jQuery(this).parent().index();
                var prentsIndex = jQuery(this).parents(".slide-wrapp").index();
                var offsetLeft = jQuery(this).parent().offset().left;
                var winWidth = jQuery(window).width();
                var halfWidth = winWidth / 2;
                var itemWidth = (jQuery(".infographic-slider .slide-item").width()) / 2;
                var x = 0;
                var beforeLeft = jQuery(".infographic-slider .slider-wrapper .slide-wrapp").css('transform').replace(/[^0-9\-.,]/g, '').split(',');
                x = beforeLeft[12] || beforeLeft[4];

                var $activeIndex = (clickIndex+1)+(prentsIndex*itemstoshow);
                if(windowWidth>=1210){
                    wrappWidth = 1170;
                }else{
                    wrappWidth = windowWidth - 40;
                }
               // var wrappWidth = jQuery(".infographic-slider .slider-wrapper .slide-track .slide-wrapp").outerWidth();
                var $itemWidth = wrappWidth/itemstoshow;

                if (offsetLeft >= halfWidth) {/* if item offset is greater than middle */
                    var calculateSpace = (offsetLeft - halfWidth)+($itemWidth/2);
                    jQuery(".infographic-slider .slider-wrapper .slide-wrapp").addClass("forwardclick");
                    jQuery(".infographic-slider .slider-wrapper .slide-wrapp").css({
                        "transform": "translateX(" + (-(parseFloat(calculateSpace) + parseFloat(-x))) + "px)",
                        "transition": "transform 400ms linear"
                    });
                    setTimeout(function () {
                        jQuery(".infographic-slider .slide-wrapp").css({"transition": "all 0s linear"});
                    },400);

                    /* active nav */
                    var slideValue = (calculateSpace + itemWidth);
                    var slideItemlength = parseInt(slideValue/$itemWidth);
                    var currentItem = $activeIndex;
                    var currentwrappIndex = n;
                        jQuery(".infographic-slider .slide-arrow .slide-nav span").removeClass("active last-active");
                        n = parseInt(currentItem/itemstoshow);
                        var slideLength = jQuery(".infographic-slider .slide-arrow .slide-nav span").length;
                        if(currentItem>=(itemLength-1)){
                            jQuery(".infographic-slider .slide-arrow .next").removeClass("active");
                        }
                        var k=(currentItem-(itemstoshow-1));
                        var slideLength = jQuery(".infographic-slider .slide-arrow .slide-nav span").length;
                        if(k>(slideLength-itemstoshow)){
                            k=(slideLength-itemstoshow);
                        }else if(k<0){
                            k=0;
                            currentItem = itemstoshow-1;
                        }
                        if(k>0){
                            jQuery(".infographic-slider .slide-arrow .prev").addClass("active");
                        }else{
                            jQuery(".infographic-slider .slide-arrow .prev").removeClass("active");
                        }
                        for (k ; k <= currentItem; k++) {
                            jQuery(".infographic-slider .slide-arrow .slide-nav span:eq(" + k + ")").addClass("active");
                        }
                        a=currentItem+1;
                        jQuery(".infographic-slider .slide-arrow .slide-nav span.active").last().addClass("last-active");
                } else {
                    /* if item offset is less than middle */
                    var calculateSpace1 = (halfWidth - offsetLeft)-($itemWidth/2);
                    jQuery(".infographic-slider .slider-wrapper .slide-wrapp").addClass("backwardclick");
                    jQuery(".infographic-slider .slide-wrapp").css({
                        "transform": "translateX(" + (parseFloat(calculateSpace1) - parseFloat(-x)) + "px)",
                        "transition": "transform 400ms linear"
                    });
                    setTimeout(function () {
                        jQuery(".infographic-slider .slide-wrapp").css({"transition": "all 0s linear"});
                    },400);

                    /* active nav */
                    var slideValue1 = (calculateSpace1 - itemWidth);
                    var slideItemlength1 = parseInt(slideValue1/$itemWidth);
                    jQuery(".infographic-slider .slide-arrow .slide-nav span").removeClass("active last-active");
                    var currentwrappIndex = n;
                    n = parseInt($activeIndex/itemstoshow);

                    var k = ($activeIndex-2);
                    var u = ($activeIndex-2);
                    if(u<0){
                        u=0;
                    }
                    if(k<0){
                        k=0;
                    }

                    var lastValue = u+itemstoshow;
                    var slideLength = jQuery(".infographic-slider .slide-arrow .slide-nav span").length;
                    if(lastValue>slideLength){
                        k=slideLength - itemstoshow;
                        lastValue = slideLength;
                    }
                    for (k; k < (lastValue); k++) {
                        jQuery(".infographic-slider .slide-arrow .slide-nav span:eq(" + k + ")").addClass("active");
                    }
                    jQuery(".infographic-slider .slide-arrow .slide-nav span.active").last().addClass("last-active");
                    a = lastValue;
                    if(a<itemstoshow){
                        a=itemstoshow;
                    }
                    var slideLength = jQuery(".infographic-slider .slide-arrow .slide-nav span").length;
                    if ($activeIndex === 0) {
                        jQuery(".infographic-slider .slide-arrow .prev").removeClass("active");
                    }else if($activeIndex<=(slideLength-(itemstoshow-1))){
                        jQuery(".infographic-slider .slide-arrow .next").addClass("active");
                    }
                }
                /* Scale-up and scale-down items on click */
                var windowWidth = jQuery(window).width();
                if (windowWidth > 812) {
                    var $itemWidth = wrappWidth / itemstoshow;
                    var scaleWidth = $itemWidth * 1.47;
                    jQuery(".infographic-slider .slide-wrapp").addClass("hover-disable");
                    var scaleHeight = (jQuery(".infographic-slider .slider-wrapper").outerHeight()) * 1.05;
                    setTimeout(function () {
                        jQuery(".infographic-slider .slide-wrapp").each(function () {
                            jQuery(this).find(".slide-item").each(function () {
                                var $thisoffset = jQuery(this).offset().left;
                                if ($thisoffset >= 0 && $thisoffset <= (winWidth - jQuery(".infographic-slider .slide-item").width())) {
                                    var parentIndex = jQuery(this).parent().index();
                                    var itemIndex = jQuery(this).index();
                                    jQuery(".infographic-slider .slide-wrapp:eq(" + parentIndex + ") .slide-item").css({"width": (100 / itemstoshow) + "%"});
                                    if (!jQuery(this).find(".slide-inner").hasClass("scale-item")) {
                                        y = y + 1;
                                        jQuery(this).not(jQuery(".scale-parent")).addClass("scale-down");
                                    }
                                }
                            });
                        });
                        jQuery(".infographic-slider .slide-wrapp").each(function () {
                            if (jQuery(this).find(".slide-item").hasClass("scale-down") && !jQuery(this).find(".slide-item .slide-inner").hasClass("scale-item")) {
                                jQuery(this).addClass("scale-down-parent");
                                downLength = jQuery(this).find(".scale-down").length;
                            }
                        });
                        var scaledownLength = jQuery(".infographic-slider .slide-item .scale-item").parents(".slide-wrapp").find(".scale-down").length;
                        var newwrappWidth = (scaleWidth - $itemWidth) / y;
                        var $wrappWidth = 0;
                        if (windowWidth > 1210) {
                            $wrappWidth = "calc(100vw - 40px)";
                        } else {
                            $wrappWidth = (wrappWidth + (newwrappWidth * (y - scaledownLength))) + "px";
                        }

                        /* Assign width to click item relatives */
                        var scalewrappwidth = (parseInt(wrappWidth) + (newwrappWidth * (y - scaledownLength)));
                        var scaleitemLength = jQuery(".infographic-slider .slide-item .scale-item").parents(".slide-wrapp").find(".scale-down").length;
                        jQuery(".infographic-slider .slide-item .scale-item").parents(".slide-wrapp").css({
                            "max-width": scalewrappwidth + "px",
                            "width": $wrappWidth,
                            "transition":"all 0.4s linear"
                        });
                        var scaledownwidth = ((($itemWidth - ((scaleWidth - $itemWidth) / y))) * 100) / (wrappWidth + (newwrappWidth * (y - scaledownLength)));
                        var usedPercent = ((scaleWidth * 100) / scalewrappwidth) + (scaledownwidth * scaleitemLength);
                        var restPercent = (100 - usedPercent);
                        var restItems = itemstoshow - (scaleitemLength + 1);
                        jQuery(".infographic-slider .slide-item .scale-item").parents(".slide-wrapp").find(".slide-item").css({
                            "width": ((restPercent) / restItems) + "%",
                            "transition": "all 0.4s linear"
                        });
                        jQuery(".infographic-slider .slide-item .scale-item").parents(".slide-wrapp").find(".scale-down").css({
                            "width": scaledownwidth + "%",
                            "transition": "all 0.4s linear"
                        });
                        jQuery(".infographic-slider .slide-item .scale-item").parent().addClass("scale-up");
                        jQuery(".infographic-slider .slide-item .scale-item").parent().css({
                            "width": ((scaleWidth * 100) / scalewrappwidth) + "%",
                            "height": scaleHeight + "px",
                            "transition": "all 0.4s linear"
                        });
                        /* Assign width to scale-down item relatives */
                        jQuery(".infographic-slider .slide-item .scale-item").css({"transform":"translateX(0)"});
                        var scaledownparent = (wrappWidth - (newwrappWidth * downLength));
                        jQuery(".infographic-slider .slide-wrapp.scale-down-parent").css({
                            "max-width": scaledownparent + "px",
                            "transition":"all 0.4s linear"
                        });
                        var $scaledownwidth = (($itemWidth - ((scaleWidth - $itemWidth) / y)));
                        jQuery(".infographic-slider .slide-wrapp.scale-down-parent").each(function () {
                            var restItem = jQuery(this).find(".scale-down").length;
                            var totalpercent = (($scaledownwidth * 100) / scaledownparent) * restItem;
                            var eachpercent = (100 - totalpercent) / (itemstoshow - restItem);
                            jQuery(this).find(".slide-item").css({
                                "width": eachpercent + "%",
                                "transition": "all 0.4s linear"
                            });
                            jQuery(this).find(".scale-down").css({
                                "width": (($scaledownwidth * 100) / scaledownparent) + "%",
                                "transition": "all 0.4s linear"
                            });
                        });
                        setTimeout(function () {
                            jQuery(".infographic-slider .slide-wrapp").removeClass("hover-disable");
                        }, 900);
                    }, 400);
                }
            }
        }
        else{
            jQuery(".infographic-slider .slide-item .slide-inner").removeClass("scale-item");
            jQuery(".infographic-slider .slide-item").removeClass("scale-parent scale-up");
            jQuery(this).addClass("scale-item");
            jQuery(this).parent().addClass("scale-parent scale-up");
        }
    });


    /* On Document click */
    jQuery(document).on("click",function(){
        if(jQuery(".infographic-slider").length>0){
            y=0;
            downLength=0;
            jQuery(".infographic-slider .slide-item .slide-inner").removeClass("scale-item");
            jQuery(".infographic-slider .slide-item").removeClass("scale-parent scale-up scale-down scale-parent-previous").removeAttr("style");
            jQuery(".infographic-slider .slide-wrapp").removeClass("scale-child scale-down-parent");
            var windowWidth = jQuery(window).width();
            if(windowWidth>812){
                jQuery(".infographic-slider .slide-track").css({
                    "transform": "translateX(0px)",
                    "transition": "transform 400ms linear"
                });

                var wrappWidth = jQuery(".infographic-slider .slider-wrapper").width();
                var $itemWidth = wrappWidth/itemstoshow;
                var x = 0;
                var beforeLeft = jQuery(".infographic-slider .slider-wrapper .slide-wrapp").css('transform').replace(/[^0-9\-.,]/g, '').split(',');
                x = beforeLeft[12] || beforeLeft[4];
                var slideLength = jQuery(".infographic-slider .slide-arrow .slide-nav span").length;
                var maxLeft= $itemWidth*(slideLength-itemstoshow);
                jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .hover-content .bg-img").empty();
                var lastIndex = (jQuery(".infographic-slider .slide-arrow .slide-nav span.last-active").index()+1) - itemstoshow;
                jQuery(".infographic-slider .slide-wrapp").css({
                    "max-width":"1170px",
                    "width":"calc(100vw - 40px)",
                    "transform":"translateX(-"+($itemWidth*lastIndex)+"px)",
                    "transition": "all 0.4s linear"
                });
                setTimeout(function () {
                    jQuery(".infographic-slider .slide-wrapp").removeClass("forwardclick backwardclick");
                    jQuery(".infographic-slider .slide-wrapp").css({"max-width":"1170px","width":"calc(100vw - 40px)","transition": "all 0s linear"});
                },400);
            }
        }
    });
}

/*
 * Slider iniital function
 */
function sliderInitialize(){
    jQuery(".infographic-slider .slide-arrow .slide-nav span").removeClass("active last-active");
    jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item").addClass("active");
    jQuery(".infographic-slider .slide-arrow .slide-nav span.active").last().addClass("last-active");
    var containerWidth = jQuery(".infographic-slider .slider-wrapper").innerWidth();
    jQuery(".infographic-slider .slider-wrapper .slide-track").css({"width":(((containerWidth-40)/itemstoshow)*(itemLength+3))+"px"});
}

/*
 * Next Click
 */
function nextClick(){
    jQuery(document).one("click",".infographic-slider .slide-arrow .next.active",function (n) {
        n.stopPropagation();
        jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item").removeClass("active");
        if(itemLength>itemstoshow){
            var triggeritem = a+(itemstoshow);
            if(triggeritem<=itemLength){
                jQuery(".infographic-slider .slide-arrow .slide-nav span:eq("+(triggeritem-1)+")").trigger("click");
            }else{
                jQuery(".infographic-slider .slide-arrow .slide-nav span:eq("+(itemLength-1)+")").trigger("click");
            }
            setTimeout(function(){
                nextClick();
            },1600);
        }
    });
}


/*
 * Prev Click
 */
function prevClick(){
    jQuery(document).one("click",".infographic-slider .slide-arrow .prev.active",function (p) {
        p.stopPropagation();
        if(itemLength>itemstoshow){
            var triggerprevitem = a-itemstoshow;
            if(triggerprevitem>=itemstoshow){
                var triggerNav = (triggerprevitem-itemstoshow);
                jQuery(".infographic-slider .slide-arrow .slide-nav span:eq("+triggerNav+")").trigger("click");
            }else{
                jQuery(".infographic-slider .slide-arrow .slide-nav span:eq(0)").trigger("click");
            }
            setTimeout(function(){
                prevClick();
            },1600);
        }
    });
}

/*
 * Nav forward Click inner function
 */
var timerDelay = 0;
function forwardnavInner(currentItem,itemWidth,nextSlides,currentwrappIndex){
    y=0;
    downLength=0;
    jQuery(".infographic-slider .slide-track").css({
        "transform": "translateX(0px)",
        "transition": "transform 400ms cubic-bezier(0, 0, 1, 1)"
    });
    jQuery(".infographic-slider .slide-item .slide-inner").removeClass("scale-item hover-active");
    jQuery(".infographic-slider .slide-wrapp").css({"max-width":"1170px","width":"calc(100vw - 40px)"});
    jQuery(".infographic-slider .slide-wrapp").removeClass("scale-child scale-down-parent");
    jQuery(".infographic-slider .slide-item").removeClass("scale-parent scale-up scale-down scale-parent-previous").removeAttr("style");
    jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .bg-img").imageResponsive();
    jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .bg-img > div").canvasResponsive();
    jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .canvas-container > div").canvasResponsive();
    jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .canvas-container").imageResponsive();
    var leftMove = (a-itemstoshow)*itemWidth;
    var leftMoveitem = nextSlides*itemWidth;
    var parentLength = jQuery(".infographic-slider .slider-wrapper .slide-wrapp").length;
    var beforeLeft = jQuery(".infographic-slider .slider-wrapper .slide-wrapp").css('transform').replace(/[^0-9\-.,]/g, '').split(',');
    var x = beforeLeft[12] || beforeLeft[4];

    if(currentItem>=(itemLength-1)){
        jQuery(".infographic-slider .slide-arrow .next").removeClass("active");
    }
    for (var k = (currentItem-(itemstoshow-1)); k <= currentItem; k++) {
        jQuery(".infographic-slider .slide-arrow .slide-nav span:eq(" + k + ")").addClass("active");
    }
    jQuery(".infographic-slider .slide-arrow .slide-nav span:eq(" + currentItem + ")").addClass("last-active");
    for (var o = (currentwrappIndex-1); o <= n; o++) {
        jQuery(".infographic-slider .slider-wrapper .slide-track .slide-wrapp:eq("+o+") .slide-item").css({
            "transform": "translateX("+leftMoveitem+"px)"
        });
    }
    jQuery(".infographic-slider .slider-wrapper .slide-wrapp").css({
        "transition": "all 0ms cubic-bezier(0.79, 0.01, 0.3, 1)"
    });
    jQuery(".infographic-slider .slider-wrapper .slide-wrapp").css({
        "transform": "translateX(-"+leftMove+"px)"
    });
    if(n<(parentLength-1)){
        jQuery(".infographic-slider .slider-wrapper .slide-wrapp:eq("+(n+1)+")").css({
            "transform": "translateX("+x+"px)"
        });
    }
    timerDelay = 0;
    setTimeout(function(){
        for (var o = (currentwrappIndex-1); o <= n; o++) {
            var innerLength = jQuery(".infographic-slider .slider-wrapper .slide-track .slide-wrapp:eq(" + o + ") .slide-item").length;
            for(var t=0;t<innerLength;t++){
                timerDelay = timerDelay+100;
                jQuery(".infographic-slider .slider-wrapper .slide-track .slide-wrapp:eq(" + o + ") .slide-item:eq(" + t + ")").css({
                    "transform": "translateX(0px)",
                    "transition": "transform "+speed+"ms cubic-bezier(0.79, 0.01, 0.3, 1)",
                    "transition-delay":timerDelay+"ms"
                });

                if(o===n && t===(innerLength-1)){
                    setTimeout(function(){
                        jQuery(".infographic-slider .slider-wrapper .slide-wrapp:eq("+(n+1)+")").css({
                            "transform": "translateX(-"+leftMove+"px)",
                            "transition": "all "+speed+"ms cubic-bezier(0.79, 0.01, 0.3, 1)"
                        });
                    },(timerDelay+100));
                }
                if(o===n && t===(innerLength-1)){
                    setTimeout(function(){
                        jQuery(".infographic-slider .slider-wrapper .slide-wrapp .slide-item").removeAttr("style");
                        flag = true;
                    },(timerDelay+800));
                }
            }
        }
    },200);
    if(!jQuery(".infographic-slider .slide-arrow .prev").hasClass("active")){
        jQuery(".infographic-slider .slide-arrow .prev").addClass("active");
    }
}
/*
 * Forward navigation click
 */
function forwardnavClick(clickIndex){
    var wrappWidth = jQuery(".infographic-slider .slider-wrapper .slide-track .slide-wrapp").outerWidth();
    var itemWidth = wrappWidth/itemstoshow;
    var activeItem = jQuery(".infographic-slider .slide-arrow .slide-nav span.last-active").index();
    jQuery(".infographic-slider .slide-arrow .slide-nav span").removeClass("active last-active");
    var currentItem = clickIndex;
    var nextSlides = clickIndex - activeItem;
    var currentwrappIndex = n;
    n = parseInt(currentItem/itemstoshow);
    a = a+nextSlides;
    forwardnavInner(currentItem,itemWidth,nextSlides,currentwrappIndex);
    if(currentItem>=(itemLength-1)){
        jQuery(".infographic-slider .slide-arrow .next").removeClass("active");
    }
}

/*
 * Nav backward Click inner function
 */
function backwardnavInner(currentItem,itemWidth,nextSlides,currentwrappIndex){
    y=0;
    downLength=0;
    jQuery(".infographic-slider .slide-track").css({
        "transform": "translateX(0px)",
        "transition": "transform 400ms cubic-bezier(0, 0, 1, 1)"
    });
    jQuery(".infographic-slider .slide-item .slide-inner").removeClass("scale-item hover-active");
    jQuery(".infographic-slider .slide-wrapp").css({"max-width":"1170px"});
    jQuery(".infographic-slider .slide-wrapp").removeClass("scale-child scale-down-parent");
    jQuery(".infographic-slider .slide-item").removeClass("scale-parent scale-up scale-down scale-parent-previous").removeAttr("style");
    jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .bg-img").imageResponsive();
    jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .bg-img > div").canvasResponsive();
    jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .canvas-container > div").canvasResponsive();
    jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .canvas-container").imageResponsive();
    var leftMove = (a-itemstoshow)*itemWidth;
    var parentLength = jQuery(".infographic-slider .slider-wrapper .slide-wrapp").length;
    var beforeLeft = jQuery(".infographic-slider .slider-wrapper .slide-wrapp").css('transform').replace(/[^0-9\-.,]/g, '').split(',');
    var x = beforeLeft[12] || beforeLeft[4];
    for (var k = currentItem; k < (currentItem+itemstoshow); k++) {
        jQuery(".infographic-slider .slide-arrow .slide-nav span:eq(" + k + ")").addClass("active");
    }
    jQuery(".infographic-slider .slide-arrow .slide-nav span:eq("+(currentItem+3)+")").addClass("last-active");
    if (currentItem === 0) {
        jQuery(".infographic-slider .slide-arrow .prev").removeClass("active");
    }
    jQuery(".infographic-slider .slider-wrapper .slide-wrapp").css({"transition": "all 0ms cubic-bezier(0.79, 0.01, 0.3, 1)"});
    jQuery(".infographic-slider .slider-wrapper .slide-wrapp").css({"transform": "translateX(-"+leftMove+"px)"});
    for (var o = n; o <= (currentwrappIndex+1); o++) {
        var itemLeft = nextSlides*itemWidth;
        jQuery(".infographic-slider .slider-wrapper .slide-track .slide-wrapp:eq("+o+") .slide-item").css({"transform": "translateX(-"+itemLeft+"px)"});
    }
    if(n>0){
        jQuery(".infographic-slider .slider-wrapper .slide-wrapp:eq("+(n-1)+")").css({"transform": "translateX("+x+"px)"});
    }
    timerDelay=0;
    setTimeout(function(){
        for (var z = (currentwrappIndex+1); z >= n; z--) {
            var innerLength = jQuery(".infographic-slider .slider-wrapper .slide-track .slide-wrapp:eq(" + z + ") .slide-item").length;
            for(var t=(innerLength-1);t>=0;t--){
                timerDelay = timerDelay+100;
                jQuery(".infographic-slider .slider-wrapper .slide-track .slide-wrapp:eq(" + z + ") .slide-item:eq(" + t + ")").css({
                    "transform": "translateX(0px)",
                    "transition": "transform "+speed+"ms cubic-bezier(0.79, 0.01, 0.3, 1)",
                    "transition-delay": timerDelay+"ms"
                });
                if(z===n && t===0){
                    setTimeout(function(){
                        jQuery(".infographic-slider .slider-wrapper .slide-wrapp:eq("+(n-1)+")").css({
                            "transform": "translateX(-"+leftMove+"px)",
                            "transition": "all "+speed+"ms cubic-bezier(0.79, 0.01, 0.3, 1)"
                        });
                    },(timerDelay+200));
                }
                if(z===n && t===0){
                    setTimeout(function(){
                        jQuery(".infographic-slider .slider-wrapper .slide-wrapp .slide-item").removeAttr("style");
                        //navigationClick();
                        flag = true;
                    },(timerDelay+800));
                }
            }
        }
    },200);
    if(!jQuery(".infographic-slider .slide-arrow .next").hasClass("active")){
        jQuery(".infographic-slider .slide-arrow .next").addClass("active");
    }
}

/*
 * Backward navigation click
 */
function backwardnavClick(clickIndex){
    var itemWidth = wrappWidth/itemstoshow;
    var activeItem = jQuery(".infographic-slider .slide-arrow .slide-nav span.active").index();
    jQuery(".infographic-slider .slide-arrow .slide-nav span").removeClass("active last-active");
    var currentItem = clickIndex;
    var nextSlides = activeItem-clickIndex;
    var currentwrappIndex = n;
    n = parseInt(currentItem/itemstoshow);
    a = a-nextSlides;
    backwardnavInner(currentItem,itemWidth,nextSlides,currentwrappIndex);
    if (currentItem === 0) {
        jQuery(".infographic-slider .slide-arrow .prev").removeClass("active");
    }
}
/*
 * Navigation click
 */
function navigationClick(){
    jQuery(document).on("click",".infographic-slider .slide-arrow .slide-nav span",function(s){
        // infographicSlider();

        s.stopPropagation();
        if(!jQuery(this).hasClass("active")){
            if(flag === true){
                flag = false;
                var lastIndex = (jQuery(".infographic-slider .slide-arrow .slide-nav span.last-active").index()+1) - itemstoshow;
                var $itemWidth = jQuery(".infographic-slider .slider-wrapper").outerWidth() / itemstoshow;
                jQuery(".infographic-slider .slide-wrapp.backwardclick").css({
                    "max-width":"1170px",
                    "width":"calc(100vw - 40px)",
                    "transform":"translateX(-"+($itemWidth*lastIndex)+"px)",
                    "transition": "all 0.2s linear"
                });
                var clickIndex = jQuery(this).index();
                var lastActive = jQuery(".infographic-slider .slide-arrow .slide-nav span.last-active").index();
                if(itemLength>itemstoshow){
                    if(clickIndex>lastActive){
                        forwardnavClick(clickIndex);
                    }else if(clickIndex<lastActive){
                        backwardnavClick(clickIndex);
                    }
                }
            }
        }
    });
}


jQuery(document).ready(function(){
    msieversion();
    jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .hover-content .bg-img").empty();
    /*  Item Click action */
    itemClick();
    var windowWidth = jQuery(window).width();
    if(windowWidth>812){
        itemLength = jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item").length;
        var eachmargin = 100/(itemLength-1);
        for(var i=0;i<itemLength;i++){
            jQuery(".infographic-slider .slide-arrow .slide-nav").append("<span><div class='pop-up'><div class='bg-img'></div><h5></h5></div></span>");
            jQuery(".infographic-slider .slide-arrow .slide-nav span:eq("+i+")").css("left","calc("+(i*eachmargin)+"% - 5px)");
        }
        /* Slider Iniital function */
        sliderInitialize();
        /* Next Click : Slides */
        nextClick();

        /* Prev click : Slides */
        prevClick();
        jQuery(document).on("mouseenter",".infographic-slider .slide-arrow .slide-nav span",function(){
            var $thisindex = jQuery(this).index();
            var hoverindex = ($thisindex+1)%itemstoshow;
            var parentIndex = parseInt(($thisindex+1)/itemstoshow);
            if(hoverindex===0){
                parentIndex=parentIndex-1;
                hoverindex=itemstoshow;
            }
            var popupImg = jQuery(".infographic-slider .slider-wrapper .slide-track .slide-wrapp:eq("+parentIndex+") .slide-item:eq("+(hoverindex-1)+") .pop-up-img").html();
            jQuery(this).find(".bg-img").html(popupImg);
        });
    }else{

        jQuery('.infographic-slider .slider-wrapper .slide-track').slick({
            dots: true,
            infinite: false,
            arrows: true,
            speed: 600,
            autoplay: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 812,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
});

function msieversion()
/* Add class on Internet Explore*/
{
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0)
    {
        jQuery('html').addClass('ie-all');
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        jQuery('html').addClass('ie-all');
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        jQuery('html').addClass('ie-all');
    }

    return false;
}
var initNav=0;
var lastNav = 0;
function onloadanimation(){
    var devideLength = parseInt((jQuery(".infographic-slider .slider-wrapper .slide-track .slide-wrapp")).length/2);
    var itemWidth = wrappWidth/itemstoshow;
    if(devideLength>1){
        jQuery(".infographic-slider .slider-wrapper .slide-wrapp").css({"transform": "translateX(0px)"});
        a=6+itemstoshow;
        lastNav = itemstoshow;
        var divideValue = parseInt(6/itemstoshow);
        var restValue = 6%itemstoshow;
        if(restValue>0){
            n=divideValue+1;
        }else{
            n=divideValue;
        }
        flag = false;
        var navInterval = setInterval(function(){
            jQuery(".infographic-slider .slide-arrow .slide-nav span:eq("+(initNav-2)+")").removeClass("active");
            if(lastNav<=6+itemstoshow){
                initNav++;
                lastNav++;
            }else{
                flag = true;
                clearInterval(navInterval);
                jQuery(".infographic-slider .slide-arrow .slide-nav span.active").last().addClass("last-active");
            }
            for(var p=(initNav-1);p<(lastNav-1);p++){
                jQuery(".infographic-slider .slide-arrow .slide-nav span:eq("+p+")").addClass("active");
            }
        },50);
        jQuery(".infographic-slider .slider-wrapper .slide-wrapp").css({
            "transform": "translateX(-"+(itemWidth*6)+"px)",
            "transition":"all 1.2s cubic-bezier(0, 0.62, 1, 1)"
        });

    }else{
        var $itemWidth = jQuery(".infographic-slider .slider-wrapper .slide-track .slide-wrapp").width();
        var subtractlength = itemLength-itemstoshow;
        jQuery(".infographic-slider .slider-wrapper .slide-wrapp").css({
            "transform": "translateX(0px)"
        });
        jQuery(".infographic-slider .slider-wrapper .slide-wrapp").css({
            "transform": "translateX(-"+($itemWidth*subtractlength)+"px)",
            "transition":"all 1.2s cubic-bezier(0, 0.62, 1, 1)"
        });
    }
    setTimeout(function(){
        jQuery(".infographic-slider .slide-arrow .prev, .infographic-slider .slide-arrow .next").addClass("active");
        jQuery(".infographic-slider .slider-wrapper .slide-wrapp").css({
            "transition":"all 0s cubic-bezier(0, 0.62, 1, 1)"
        });
        /* Navigation click */
        flag = true;
        navigationClick();
    },1300);
}
function slideWrapper() {
    jQuery(".infographic-slider .slider-wrapper .slide-track").each(function (index, sel) {
        if (jQuery(sel).find(".slide-wrapp").length > 0) {
            jQuery(sel).find(".slide-wrapp .slide-item").unwrap();
        }
        var winWidth = jQuery(window).width();
        var n;
        itemLength = jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item").length;
        for (var i = 0; i < itemLength; i += itemstoshow) {
            if (i < itemLength) {
                n = i + itemstoshow;
            }
            var row = jQuery(sel).find(".slide-item").slice(i, n);
            row.wrapAll("<div class='slide-wrapp'></div>");
        }
        jQuery(".infographic-slider .slider-wrapper .slide-wrapp").addClass("deactive");
    });
}
jQuery(window).on("load",function () {
    var winWidth=jQuery(window).width();
    jQuery(window).on("resize",function () {
        var windowWidth = jQuery(window).width();
        if(windowWidth>1211){
            itemstoshow=4;
        }else if((windowWidth<=1210) && (windowWidth>=1025)){
            itemstoshow=4;
        }else if((windowWidth<=1024) && (windowWidth>=813)){
            itemstoshow=3;
        }else if((windowWidth<=812) && (windowWidth>=481)){
            itemstoshow=2;
        }else if(windowWidth<=480){
            itemstoshow=1;
            speed = 300;
        }
        if(windowWidth>=1210){
            wrappWidth = 1170;
        }else{
            wrappWidth = windowWidth - 40;
        }
        if(winWidth>812){
            jQuery(".infographic-slider .slider-wrapper").css({"overflow": "visible"});
            if(winWidth !== windowWidth){
                slideWrapper();
                sliderInitialize();
                a=itemstoshow;
                n=0;
                for(var p=0;p<itemstoshow;p++){
                    jQuery(".infographic-slider .slide-arrow .slide-nav span:eq("+p+")").addClass("active");
                }
                jQuery(".infographic-slider .slider-wrapper .slide-wrapp").css({"transform": "translateX(0px)"});
                jQuery(".infographic-slider .slide-track").css({
                    "transform": "translateX(0px)",
                    "transition": "transform 400ms cubic-bezier(0, 0, 1, 1)"
                });

                jQuery(".infographic-slider .slide-arrow .slide-nav span.active").last().addClass("last-active");
                jQuery(".infographic-slider .slide-arrow .prev").removeClass("active");
                jQuery(".infographic-slider .slide-arrow .next").addClass("active");
                jQuery(".infographic-slider .slider-wrapper .slide-item").removeAttr("style");

                y=0;
                downLength=0;
                jQuery(".infographic-slider .slide-item .slide-inner").removeClass("scale-item hover-active");
                jQuery(".infographic-slider .slide-wrapp").css({"max-width":"1170px","width":"calc(100vw - 40px)"});
                jQuery(".infographic-slider .slide-wrapp").removeClass("scale-child scale-down-parent");
                jQuery(".infographic-slider .slide-item").removeClass("scale-parent scale-up scale-down scale-parent-previous");
                jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .bg-img").imageResponsive();
                jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .bg-img > div").canvasResponsive();
                jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .canvas-container > div").canvasResponsive();
                jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .canvas-container").imageResponsive();
            }
            winWidth=jQuery(window).width();
            jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .bg-img").imageResponsive();
            jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .bg-img > div").canvasResponsive();
            jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .canvas-container > div").canvasResponsive();
            jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .canvas-container").imageResponsive();
        }

    }).resize();
    jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .bg-img").imageResponsive();
    jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .bg-img > div").canvasResponsive();
    jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .canvas-container > div").canvasResponsive();
    jQuery(".infographic-slider .slider-wrapper .slide-track .slide-item .slide-inner .canvas-container").imageResponsive();
    if(winWidth>812){
        jQuery(".infographic-slider .slide-track").css({
            "transform": "translateX(0px)"
        });
        slideWrapper();
        sliderInitialize();
        onloadanimation();
    }
});

jQuery.fn.imageResponsive = function () {
    return this.each(function () {
        var img = jQuery(this).children("img"),
            parentHeight = jQuery(this).height(),
            parentWidth = jQuery(this).width();
        img.css({"height": "auto", "width": "100%", "margin-left": "0px", "max-width":"inherit"});
        if (img.height() < parentHeight) {
            img.css({"height": "100%", "width": "auto"});
            var right_margin = (img.width() - parentWidth) / 2;
            img.css({"margin-left": "-" + right_margin + "px"});
        } else if (img.width() < parentWidth) {
            img.css({"height": "auto", "width": "100%", "margin-left": "0"});
        }
    });
};
jQuery.fn.canvasResponsive = function () {
    return this.each(function () {
        var img = jQuery(this).children("canvas"),
            parentHeight = jQuery(this).height(),
            parentWidth = jQuery(this).width();
        img.css({"height": "auto", "width": "100%", "margin-left": "0px"});
        if (img.height() < parentHeight) {
            img.css({"height": "100%", "width": "auto"});
            var right_margin = (img.width() - parentWidth) / 2;
            img.css({"margin-left": "-" + right_margin + "px"});
        } else if (img.width() < parentWidth) {
            img.css({"height": "auto", "width": "100%", "margin-left": "0"});
        }
    });
};
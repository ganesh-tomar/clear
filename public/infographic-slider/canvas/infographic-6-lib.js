(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib={};var ss={};var img={};
    lib.ssMetadata = [];


// symbols:
// helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }


    (lib.womanArm = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#204A62").s().p("ABlE4QgCixglhxQg7i0iWhLIAdhOQB/BCBFCVQBLCigFD2g");
        this.shape.setTransform(14.8,31.2);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#EB6B7E").s().p("AgKAvQgRgDAGgVQAHgbgBgEQgBgCgIAKQgKAKgFgBQgLgDAJgTQAHgRALgMIArgFQARAaAHAbQAIAhgSAFQgRAEgOAAIgNgBg");
        this.shape_1.setTransform(27.4,66.7);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.womanArm, new cjs.Rectangle(0,0,32.1,71.5), null);


    (lib.turn2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AhViMIAHgFIClEeIgIAFg");
        this.shape.setTransform(0,-0.1,1,1,116.8);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AgDCmIAAlLIAHAAIAAFLg");
        this.shape_1.setTransform(0,0,1,1,116.8);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AhWCNICmkeIAHAFIilEeg");
        this.shape_2.setTransform(0,0,1,1,116.8);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AiRBPIEeilIAFAIIkeClg");
        this.shape_3.setTransform(-0.1,0.1,1,1,116.8);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AikAEIAAgHIFJAAIAAAHg");
        this.shape_4.setTransform(-0.2,0,1,1,116.8);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AiQhOIADgHIEeCkIgDAHg");
        this.shape_5.setTransform(-0.3,0,1,1,116.8);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.turn2, new cjs.Rectangle(-16.5,-16.5,33.2,33.2), null);


    (lib.turn1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AhVCNICkkeIAIAFIimEeg");
        this.shape.setTransform(0.3,0.1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AgDCmIAAlLIAHAAIAAFLg");
        this.shape_1.setTransform(0.2,0);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AhWiMIAIgFIClEeIgHAFg");
        this.shape_2.setTransform(0.1,0.1);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AiRhOIAFgIIEeClIgFAIg");
        this.shape_3.setTransform(0,0.1);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AilAEIAAgHIFLAAIAAAHg");
        this.shape_4.setTransform(0,0.2);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AiRBPIEeikIAFAHIkeCkg");
        this.shape_5.setTransform(0,0.3);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.turn1, new cjs.Rectangle(-16.6,-16.5,33.2,33.2), null);


    (lib.top2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer_2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#205571").s().p("AghDaQAMlRAShiQANAAAXACIABAAIgBADIgaGug");
        this.shape.setTransform(5.1,10.2);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // Layer_1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#204A62").s().p("Ag8FAIgcofIBlhhIBMBtIgFBiQgXgCATADQgCCFgXEsg");

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = getMCSymbolPrototype(lib.top2, new cjs.Rectangle(-8.9,-32,17.9,64.2), null);


    (lib.top1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#204A62").s().p("AgvEtIgon1IBjhkIBMBoIgOHxg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.top1, new cjs.Rectangle(-8.8,-30.1,17.6,60.3), null);


    (lib.tie = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AhOD7IAgnsIAhhUIBcADIhYBaIAjHgIg+BOg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.tie, new cjs.Rectangle(-7.9,-32.6,15.9,65.2), null);


    (lib.subBuildings = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgCA3IAAhtIAFAAIAABtg");
        this.shape.setTransform(305.6,115.3,2,2);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AgCA3IAAhtIAFAAIAABtg");
        this.shape_1.setTransform(308.9,115.3,2,2);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AgCA3IAAhtIAFAAIAABtg");
        this.shape_2.setTransform(312.3,115.3,2,2);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AgCA3IAAhtIAFAAIAABtg");
        this.shape_3.setTransform(315.6,115.3,2,2);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AgCB6IAAjzIAFAAIAADzg");
        this.shape_4.setTransform(322.2,101.8,2,2);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AgCB6IAAjzIAFAAIAADzg");
        this.shape_5.setTransform(325.5,101.8,2,2);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AgCB6IAAjzIAFAAIAADzg");
        this.shape_6.setTransform(328.8,101.8,2,2);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFFFFF").s().p("AgCB6IAAjzIAFAAIAADzg");
        this.shape_7.setTransform(332.2,101.8,2,2);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#4D9BB7").s().p("AhVCsIAAijIBRgVIAAiiIBaBDIAAEag");
        this.shape_8.setTransform(319,97,2,2);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_9.setTransform(262.8,119.4,2,2);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_10.setTransform(262.8,108.7,2,2);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_11.setTransform(262.8,98,2,2);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_12.setTransform(262.8,87.3,2,2);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_13.setTransform(262.8,76.6,2,2);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_14.setTransform(262.8,65.9,2,2);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_15.setTransform(262.8,55.2,2,2);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_16.setTransform(258.2,119.4,2,2);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_17.setTransform(258.2,108.7,2,2);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_18.setTransform(258.2,98,2,2);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_19.setTransform(258.2,87.3,2,2);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_20.setTransform(258.2,76.6,2,2);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_21.setTransform(258.2,65.9,2,2);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_22.setTransform(258.2,55.2,2,2);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_23.setTransform(253.5,119.4,2,2);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_24.setTransform(253.5,108.7,2,2);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_25.setTransform(253.5,98,2,2);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_26.setTransform(253.5,87.3,2,2);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_27.setTransform(253.5,76.6,2,2);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_28.setTransform(253.5,65.9,2,2);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_29.setTransform(253.5,55.2,2,2);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_30.setTransform(248.9,119.4,2,2);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_31.setTransform(248.9,108.7,2,2);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_32.setTransform(248.9,98,2,2);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_33.setTransform(248.9,87.3,2,2);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_34.setTransform(248.9,76.6,2,2);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_35.setTransform(248.9,65.9,2,2);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_36.setTransform(248.9,55.2,2,2);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#4D9BB7").s().p("AhPARIAQghICAAAIAPAhg");
        this.shape_37.setTransform(122.4,51,2,2);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#FFFFFF").s().p("AgFAaIAAgzIALAAIAAAzg");
        this.shape_38.setTransform(132.9,123.9,2,2);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#FFFFFF").s().p("AgFAaIAAgzIALAAIAAAzg");
        this.shape_39.setTransform(128.7,123.9,2,2);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#FFFFFF").s().p("AgFAaIAAgzIALAAIAAAzg");
        this.shape_40.setTransform(124.5,123.9,2,2);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#FFFFFF").s().p("AgFAaIAAgzIALAAIAAAzg");
        this.shape_41.setTransform(120.2,123.9,2,2);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#FFFFFF").s().p("AgFAaIAAgzIAKAAIAAAzg");
        this.shape_42.setTransform(116,123.9,2,2);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#FFFFFF").s().p("AgEAaIAAgzIAKAAIAAAzg");
        this.shape_43.setTransform(111.8,123.9,2,2);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#FFFFFF").s().p("AgFB+IAAj7IALAAIAAD7g");
        this.shape_44.setTransform(132.9,91.1,2,2);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#FFFFFF").s().p("AgFB+IAAj7IALAAIAAD7g");
        this.shape_45.setTransform(128.7,91.1,2,2);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#FFFFFF").s().p("AgFB+IAAj7IALAAIAAD7g");
        this.shape_46.setTransform(124.5,91.1,2,2);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#FFFFFF").s().p("AgFB+IAAj7IALAAIAAD7g");
        this.shape_47.setTransform(120.2,91.1,2,2);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#FFFFFF").s().p("AgFB+IAAj7IAKAAIAAD7g");
        this.shape_48.setTransform(116,91.1,2,2);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#FFFFFF").s().p("AgEB+IAAj7IAKAAIAAD7g");
        this.shape_49.setTransform(111.8,91.1,2,2);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#4D9BB7").s().p("AhQC5IAAlyICiAAIAAFyg");
        this.shape_50.setTransform(122.3,93.1,2,2);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#FFFFFF").s().p("AgFAUIAAgnIALAAIAAAng");
        this.shape_51.setTransform(98.3,120.8,2,2);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_52.setTransform(92.6,120.8,2,2);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#FFFFFF").s().p("AgFAUIAAgnIALAAIAAAng");
        this.shape_53.setTransform(86.8,120.8,2,2);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_54.setTransform(81.1,120.8,2,2);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#FFFFFF").s().p("AgFAUIAAgnIALAAIAAAng");
        this.shape_55.setTransform(98.3,109.9,2,2);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_56.setTransform(92.6,109.9,2,2);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#FFFFFF").s().p("AgFAUIAAgnIALAAIAAAng");
        this.shape_57.setTransform(86.8,109.9,2,2);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_58.setTransform(81.1,109.9,2,2);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#FFFFFF").s().p("AgFAUIAAgnIALAAIAAAng");
        this.shape_59.setTransform(98.3,99.1,2,2);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_60.setTransform(92.6,99.1,2,2);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#FFFFFF").s().p("AgFAUIAAgnIALAAIAAAng");
        this.shape_61.setTransform(86.8,99.1,2,2);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_62.setTransform(81.1,99.1,2,2);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#FFFFFF").s().p("AgFAUIAAgnIALAAIAAAng");
        this.shape_63.setTransform(98.3,82.5,2,2);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_64.setTransform(92.6,82.5,2,2);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#FFFFFF").s().p("AgFAUIAAgnIALAAIAAAng");
        this.shape_65.setTransform(86.8,82.5,2,2);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_66.setTransform(81.1,82.5,2,2);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#FFFFFF").s().p("AgFAUIAAgnIALAAIAAAng");
        this.shape_67.setTransform(98.3,71.7,2,2);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_68.setTransform(92.6,71.7,2,2);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#FFFFFF").s().p("AgFAUIAAgnIALAAIAAAng");
        this.shape_69.setTransform(86.8,71.7,2,2);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_70.setTransform(81.1,71.7,2,2);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#FFFFFF").s().p("AgFAUIAAgnIALAAIAAAng");
        this.shape_71.setTransform(98.3,60.9,2,2);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_72.setTransform(92.6,60.9,2,2);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#FFFFFF").s().p("AgFAUIAAgnIALAAIAAAng");
        this.shape_73.setTransform(86.8,60.9,2,2);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_74.setTransform(81.1,60.9,2,2);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#FFFFFF").s().p("AgFAUIAAgnIALAAIAAAng");
        this.shape_75.setTransform(98.3,44.3,2,2);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_76.setTransform(92.6,44.3,2,2);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#FFFFFF").s().p("AgFAUIAAgnIALAAIAAAng");
        this.shape_77.setTransform(86.8,44.3,2,2);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_78.setTransform(81.1,44.3,2,2);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#FFFFFF").s().p("AgFAUIAAgnIALAAIAAAng");
        this.shape_79.setTransform(98.3,33.5,2,2);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_80.setTransform(92.6,33.5,2,2);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f("#FFFFFF").s().p("AgFAUIAAgnIALAAIAAAng");
        this.shape_81.setTransform(86.8,33.5,2,2);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_82.setTransform(81.1,33.5,2,2);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f("#FFFFFF").s().p("AgFAUIAAgnIALAAIAAAng");
        this.shape_83.setTransform(98.3,22.6,2,2);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_84.setTransform(92.6,22.6,2,2);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f("#FFFFFF").s().p("AgFAUIAAgnIALAAIAAAng");
        this.shape_85.setTransform(86.8,22.6,2,2);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f("#FFFFFF").s().p("AgGAUIAAgnIANAAIAAAng");
        this.shape_86.setTransform(81.1,22.6,2,2);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f("#4D9BB7").s().p("AhAFUIAAp4ICBgvIAAKng");
        this.shape_87.setTransform(89.4,71.9,2,2);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_88.setTransform(286.2,129.5,2,2);

        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIALAAIAAAbg");
        this.shape_89.setTransform(282.2,129.5,2,2);

        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_90.setTransform(278.2,129.5,2,2);

        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAKAAIAAAXg");
        this.shape_91.setTransform(286.2,121,2,2);

        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIALAAIAAAXg");
        this.shape_92.setTransform(282.2,121,2,2);

        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIAKAAIAAAXg");
        this.shape_93.setTransform(278.2,121,2,2);

        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAKAAIAAAXg");
        this.shape_94.setTransform(286.2,113.7,2,2);

        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIALAAIAAAXg");
        this.shape_95.setTransform(282.2,113.7,2,2);

        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIAKAAIAAAXg");
        this.shape_96.setTransform(278.2,113.7,2,2);

        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAKAAIAAAXg");
        this.shape_97.setTransform(286.2,106.3,2,2);

        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIALAAIAAAXg");
        this.shape_98.setTransform(282.2,106.3,2,2);

        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIAKAAIAAAXg");
        this.shape_99.setTransform(278.2,106.3,2,2);

        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAKAAIAAAXg");
        this.shape_100.setTransform(286.2,96.1,2,2);

        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIALAAIAAAXg");
        this.shape_101.setTransform(282.2,96.1,2,2);

        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIAKAAIAAAXg");
        this.shape_102.setTransform(278.2,96.1,2,2);

        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAKAAIAAAXg");
        this.shape_103.setTransform(286.2,88.7,2,2);

        this.shape_104 = new cjs.Shape();
        this.shape_104.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIALAAIAAAXg");
        this.shape_104.setTransform(282.2,88.7,2,2);

        this.shape_105 = new cjs.Shape();
        this.shape_105.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIAKAAIAAAXg");
        this.shape_105.setTransform(278.2,88.7,2,2);

        this.shape_106 = new cjs.Shape();
        this.shape_106.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAKAAIAAAXg");
        this.shape_106.setTransform(286.2,81.3,2,2);

        this.shape_107 = new cjs.Shape();
        this.shape_107.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIALAAIAAAXg");
        this.shape_107.setTransform(282.2,81.3,2,2);

        this.shape_108 = new cjs.Shape();
        this.shape_108.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIAKAAIAAAXg");
        this.shape_108.setTransform(278.2,81.3,2,2);

        this.shape_109 = new cjs.Shape();
        this.shape_109.graphics.f("#4D9BB7").s().p("AgoC+IAAkZIAHAAIAAgNIAIAAIAYgsIAAgpIADAAIAAApIAYAsIAIAAIAAANIAHAAIAAEZg");
        this.shape_109.setTransform(282.4,95.2,2,2);

        this.shape_110 = new cjs.Shape();
        this.shape_110.graphics.f("#FFFFFF").s().p("AgKAaIAAg0IAVAAIAAA0g");
        this.shape_110.setTransform(12.7,138.2,2,2);

        this.shape_111 = new cjs.Shape();
        this.shape_111.graphics.f("#FFFFFF").s().p("AgKAaIAAg0IAVAAIAAA0g");
        this.shape_111.setTransform(5.1,138.2,2,2);

        this.shape_112 = new cjs.Shape();
        this.shape_112.graphics.f("#FFFFFF").s().p("AgKAaIAAg0IAVAAIAAA0g");
        this.shape_112.setTransform(-2.5,138.2,2,2);

        this.shape_113 = new cjs.Shape();
        this.shape_113.graphics.f("#FFFFFF").s().p("AgKAaIAAg0IAVAAIAAA0g");
        this.shape_113.setTransform(-10,138.2,2,2);

        this.shape_114 = new cjs.Shape();
        this.shape_114.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_114.setTransform(12.7,126,2,2);

        this.shape_115 = new cjs.Shape();
        this.shape_115.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_115.setTransform(5.1,126,2,2);

        this.shape_116 = new cjs.Shape();
        this.shape_116.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_116.setTransform(-2.5,126,2,2);

        this.shape_117 = new cjs.Shape();
        this.shape_117.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_117.setTransform(-10,126,2,2);

        this.shape_118 = new cjs.Shape();
        this.shape_118.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_118.setTransform(12.7,115.7,2,2);

        this.shape_119 = new cjs.Shape();
        this.shape_119.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_119.setTransform(5.1,115.7,2,2);

        this.shape_120 = new cjs.Shape();
        this.shape_120.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_120.setTransform(-2.5,115.7,2,2);

        this.shape_121 = new cjs.Shape();
        this.shape_121.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_121.setTransform(-10,115.7,2,2);

        this.shape_122 = new cjs.Shape();
        this.shape_122.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_122.setTransform(12.7,101.3,2,2);

        this.shape_123 = new cjs.Shape();
        this.shape_123.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_123.setTransform(5.1,101.3,2,2);

        this.shape_124 = new cjs.Shape();
        this.shape_124.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_124.setTransform(-2.5,101.3,2,2);

        this.shape_125 = new cjs.Shape();
        this.shape_125.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_125.setTransform(-10,101.3,2,2);

        this.shape_126 = new cjs.Shape();
        this.shape_126.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_126.setTransform(12.7,91,2,2);

        this.shape_127 = new cjs.Shape();
        this.shape_127.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_127.setTransform(5.1,91,2,2);

        this.shape_128 = new cjs.Shape();
        this.shape_128.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_128.setTransform(-2.5,91,2,2);

        this.shape_129 = new cjs.Shape();
        this.shape_129.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_129.setTransform(-10,91,2,2);

        this.shape_130 = new cjs.Shape();
        this.shape_130.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_130.setTransform(12.7,80.7,2,2);

        this.shape_131 = new cjs.Shape();
        this.shape_131.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_131.setTransform(5.1,80.7,2,2);

        this.shape_132 = new cjs.Shape();
        this.shape_132.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_132.setTransform(-2.5,80.7,2,2);

        this.shape_133 = new cjs.Shape();
        this.shape_133.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_133.setTransform(-10,80.7,2,2);

        this.shape_134 = new cjs.Shape();
        this.shape_134.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_134.setTransform(12.7,66.3,2,2);

        this.shape_135 = new cjs.Shape();
        this.shape_135.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_135.setTransform(5.1,66.3,2,2);

        this.shape_136 = new cjs.Shape();
        this.shape_136.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_136.setTransform(-2.5,66.3,2,2);

        this.shape_137 = new cjs.Shape();
        this.shape_137.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_137.setTransform(-10,66.3,2,2);

        this.shape_138 = new cjs.Shape();
        this.shape_138.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_138.setTransform(12.7,56,2,2);

        this.shape_139 = new cjs.Shape();
        this.shape_139.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_139.setTransform(5.1,56,2,2);

        this.shape_140 = new cjs.Shape();
        this.shape_140.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_140.setTransform(-2.5,56,2,2);

        this.shape_141 = new cjs.Shape();
        this.shape_141.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_141.setTransform(-10,56,2,2);

        this.shape_142 = new cjs.Shape();
        this.shape_142.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_142.setTransform(12.7,45.7,2,2);

        this.shape_143 = new cjs.Shape();
        this.shape_143.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_143.setTransform(5.1,45.7,2,2);

        this.shape_144 = new cjs.Shape();
        this.shape_144.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_144.setTransform(-2.5,45.7,2,2);

        this.shape_145 = new cjs.Shape();
        this.shape_145.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_145.setTransform(-10,45.7,2,2);

        this.shape_146 = new cjs.Shape();
        this.shape_146.graphics.f("#4D9BB7").s().p("AhoFoIAAoUIATAAIAAgaIAUAAIA8hSIAAhQIAKAAIAABPIA9BTIATAAIAAAaIAUAAIAAIUg");
        this.shape_146.setTransform(1.5,73,2,2);

        this.shape_147 = new cjs.Shape();
        this.shape_147.graphics.f("#FFFFFF").s().p("AgHAMIAAgQQAAgHAHAAQAHAAAAAHIABAAIAAAQg");
        this.shape_147.setTransform(235.9,110.2,2,2);

        this.shape_148 = new cjs.Shape();
        this.shape_148.graphics.f("#FFFFFF").s().p("AgHAMIAAgQQABgHAGAAQAIAAAAAHIAAAQg");
        this.shape_148.setTransform(230.7,110.2,2,2);

        this.shape_149 = new cjs.Shape();
        this.shape_149.graphics.f("#FFFFFF").s().p("AgGAMIAAgQQAAgHAGAAQAIAAgBAHIAAAQg");
        this.shape_149.setTransform(225.6,110.2,2,2);

        this.shape_150 = new cjs.Shape();
        this.shape_150.graphics.f("#FFFFFF").s().p("AgHANIAAgRQAAgIAHABQAHgBAAAIIABAAIAAARg");
        this.shape_150.setTransform(235.9,102.7,2,2);

        this.shape_151 = new cjs.Shape();
        this.shape_151.graphics.f("#FFFFFF").s().p("AgHANIAAgRQABgIAGABQAIgBAAAIIAAARg");
        this.shape_151.setTransform(230.7,102.7,2,2);

        this.shape_152 = new cjs.Shape();
        this.shape_152.graphics.f("#FFFFFF").s().p("AgGANIAAgRQAAgIAGABQAIgBgBAIIAAARg");
        this.shape_152.setTransform(225.6,102.7,2,2);

        this.shape_153 = new cjs.Shape();
        this.shape_153.graphics.f("#FFFFFF").s().p("AgHANIAAgRQAAgIAHAAQAHAAAAAIIABAAIAAARg");
        this.shape_153.setTransform(235.9,133.9,2,2);

        this.shape_154 = new cjs.Shape();
        this.shape_154.graphics.f("#FFFFFF").s().p("AgHANIAAgRQABgIAGAAQAIAAAAAIIAAARg");
        this.shape_154.setTransform(230.7,133.9,2,2);

        this.shape_155 = new cjs.Shape();
        this.shape_155.graphics.f("#FFFFFF").s().p("AgGANIAAgRQAAgIAGAAQAIAAgBAIIAAARg");
        this.shape_155.setTransform(225.6,133.9,2,2);

        this.shape_156 = new cjs.Shape();
        this.shape_156.graphics.f("#FFFFFF").s().p("AgHANIAAgRQAAgIAHAAQAHAAAAAIIAAARg");
        this.shape_156.setTransform(220.5,133.9,2,2);

        this.shape_157 = new cjs.Shape();
        this.shape_157.graphics.f("#FFFFFF").s().p("AgHANIAAgRQABgIAGAAQAIAAAAAIIAAARg");
        this.shape_157.setTransform(215.4,133.9,2,2);

        this.shape_158 = new cjs.Shape();
        this.shape_158.graphics.f("#FFFFFF").s().p("AgHAMIAAgRQAAgCADgCQACgCACgBQAHABAAAGIABAAIAAARg");
        this.shape_158.setTransform(235.9,126.4,2,2);

        this.shape_159 = new cjs.Shape();
        this.shape_159.graphics.f("#FFFFFF").s().p("AgHAMIAAgRQABgCACgCQACgCACgBQAIABAAAGIAAARg");
        this.shape_159.setTransform(230.7,126.4,2,2);

        this.shape_160 = new cjs.Shape();
        this.shape_160.graphics.f("#FFFFFF").s().p("AgGAMIAAgRQgBgCADgCQACgCACgBQADABACACQACACAAACIAAARg");
        this.shape_160.setTransform(225.6,126.4,2,2);

        this.shape_161 = new cjs.Shape();
        this.shape_161.graphics.f("#FFFFFF").s().p("AgHAMIAAgRQAAgCADgCQACgCACgBQADABADACQABACAAACIAAARg");
        this.shape_161.setTransform(220.5,126.4,2,2);

        this.shape_162 = new cjs.Shape();
        this.shape_162.graphics.f("#FFFFFF").s().p("AgHAMIAAgRQABgCACgCQACgCACgBQADABADACQACACAAACIAAARg");
        this.shape_162.setTransform(215.4,126.4,2,2);

        this.shape_163 = new cjs.Shape();
        this.shape_163.graphics.f("#FFFFFF").s().p("AgHANIAAgRQAAgDADgDQACgBACAAQAHgBAAAIIABAAIAAARg");
        this.shape_163.setTransform(235.9,118.9,2,2);

        this.shape_164 = new cjs.Shape();
        this.shape_164.graphics.f("#FFFFFF").s().p("AgHANIAAgRQABgDACgDQACgBACAAQAIgBAAAIIAAARg");
        this.shape_164.setTransform(230.7,118.9,2,2);

        this.shape_165 = new cjs.Shape();
        this.shape_165.graphics.f("#FFFFFF").s().p("AgGANIAAgRQgBgDADgDQACgBACAAQADAAACABQACADAAADIAAARg");
        this.shape_165.setTransform(225.6,118.9,2,2);

        this.shape_166 = new cjs.Shape();
        this.shape_166.graphics.f("#FFFFFF").s().p("AgHANIAAgRQAAgDADgDQACgBACAAQADAAADABQABADAAADIAAARg");
        this.shape_166.setTransform(220.5,118.9,2,2);

        this.shape_167 = new cjs.Shape();
        this.shape_167.graphics.f("#FFFFFF").s().p("AgHANIAAgRQABgDACgDQACgBACAAQADAAADABQACADAAADIAAARg");
        this.shape_167.setTransform(215.4,118.9,2,2);

        this.shape_168 = new cjs.Shape();
        this.shape_168.graphics.f("#FFFFFF").s().p("AgKAPIAAgVQABgDADgCQADgDADAAQALAAAAAIIAAAVg");
        this.shape_168.setTransform(-336,125.7,2,2);

        this.shape_169 = new cjs.Shape();
        this.shape_169.graphics.f("#FFFFFF").s().p("AgJAPIAAgVQAAgDACgCQAEgDADAAQAKAAAAAIIAAAVg");
        this.shape_169.setTransform(-343.5,125.7,2,2);

        this.shape_170 = new cjs.Shape();
        this.shape_170.graphics.f("#FFFFFF").s().p("AgJAPIAAgUQAAgEACgCQAEgDADAAQAFAAADADQACACAAAEIAAAUg");
        this.shape_170.setTransform(-16.6,121.2,2,2);

        this.shape_171 = new cjs.Shape();
        this.shape_171.graphics.f("#FFFFFF").s().p("AgKAPIAAgUQAAgEAEgCQADgDADAAQAEAAADADQADACABAEIAAAUg");
        this.shape_171.setTransform(-24.1,121.2,2,2);

        this.shape_172 = new cjs.Shape();
        this.shape_172.graphics.f("#FFFFFF").s().p("AgKAPIAAgUQAAgEAEgCQADgDADAAQAEAAADADQADACABAEIAAAUg");
        this.shape_172.setTransform(-24.1,111.3,2,2);

        this.shape_173 = new cjs.Shape();
        this.shape_173.graphics.f("#FFFFFF").s().p("AgKAPIAAgUQAAgIAKAAQAEAAADACQADACAAAEIAAAUg");
        this.shape_173.setTransform(63.9,133.5,2,2);

        this.shape_174 = new cjs.Shape();
        this.shape_174.graphics.f("#FFFFFF").s().p("AgKAPIAAgUQABgEADgCQADgCADAAQAEAAADACQAEACAAAEIAAAUg");
        this.shape_174.setTransform(56.4,133.5,2,2);

        this.shape_175 = new cjs.Shape();
        this.shape_175.graphics.f("#FFFFFF").s().p("AgKAPIAAgUQAAgEADgCQADgDAEAAQAEAAADADQADACAAAEIAAAUg");
        this.shape_175.setTransform(63.9,123.6,2,2);

        this.shape_176 = new cjs.Shape();
        this.shape_176.graphics.f("#FFFFFF").s().p("AgKAPIAAgUQABgEADgCQADgDADAAQAEAAADADQAEACAAAEIAAAUg");
        this.shape_176.setTransform(56.4,123.6,2,2);

        this.shape_177 = new cjs.Shape();
        this.shape_177.graphics.f("#FFFFFF").s().p("AgKAPIAAgUQAAgEADgCQADgDAEAAQAEAAADADQADACAAAEIAAAUg");
        this.shape_177.setTransform(63.9,113.7,2,2);

        this.shape_178 = new cjs.Shape();
        this.shape_178.graphics.f("#FFFFFF").s().p("AgKAPIAAgUQABgEADgCQADgDADAAQAEAAADADQAEACAAAEIAAAUg");
        this.shape_178.setTransform(56.4,113.7,2,2);

        this.shape_179 = new cjs.Shape();
        this.shape_179.graphics.f("#FFFFFF").s().p("AgKAPIAAgVQAAgIAKAAQAEAAADADQADACAAADIAAAVg");
        this.shape_179.setTransform(63.9,103.8,2,2);

        this.shape_180 = new cjs.Shape();
        this.shape_180.graphics.f("#FFFFFF").s().p("AgKAPIAAgVQABgDADgCQADgDADAAQAEAAADADQAEACAAADIAAAVg");
        this.shape_180.setTransform(56.4,103.8,2,2);

        this.shape_181 = new cjs.Shape();
        this.shape_181.graphics.f("#FFFFFF").s().p("AgKAPIAAgVQAAgIAKAAQAEAAADADQADACAAADIAAAVg");
        this.shape_181.setTransform(63.9,93.9,2,2);

        this.shape_182 = new cjs.Shape();
        this.shape_182.graphics.f("#FFFFFF").s().p("AgKAPIAAgVQABgDADgCQADgDADAAQAEAAADADQAEACAAADIAAAVg");
        this.shape_182.setTransform(56.4,93.9,2,2);

        this.shape_183 = new cjs.Shape();
        this.shape_183.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_183.setTransform(34,122.6,2,2);

        this.shape_184 = new cjs.Shape();
        this.shape_184.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_184.setTransform(27.2,122.6,2,2);

        this.shape_185 = new cjs.Shape();
        this.shape_185.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_185.setTransform(20.5,122.6,2,2);

        this.shape_186 = new cjs.Shape();
        this.shape_186.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_186.setTransform(13.7,122.6,2,2);

        this.shape_187 = new cjs.Shape();
        this.shape_187.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAJAAAAAJIABAAIAAAWg");
        this.shape_187.setTransform(7,122.6,2,2);

        this.shape_188 = new cjs.Shape();
        this.shape_188.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgDQADgDADABQAEgBADADQADADAAAEIAAAXg");
        this.shape_188.setTransform(34,112.7,2,2);

        this.shape_189 = new cjs.Shape();
        this.shape_189.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgDQADgDADABQAEgBADADQADADAAAEIAAAXg");
        this.shape_189.setTransform(27.2,112.7,2,2);

        this.shape_190 = new cjs.Shape();
        this.shape_190.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgDQADgDADABQAEgBADADQADADAAAEIAAAXg");
        this.shape_190.setTransform(20.5,112.7,2,2);

        this.shape_191 = new cjs.Shape();
        this.shape_191.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgDQADgDADABQAEgBADADQADADAAAEIAAAXg");
        this.shape_191.setTransform(13.7,112.7,2,2);

        this.shape_192 = new cjs.Shape();
        this.shape_192.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgDQADgDADABQAJgBAAAKIABAAIAAAXg");
        this.shape_192.setTransform(7,112.7,2,2);

        this.shape_193 = new cjs.Shape();
        this.shape_193.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgDQADgDADABQAEgBADADQADADAAAEIAAAXg");
        this.shape_193.setTransform(34,102.8,2,2);

        this.shape_194 = new cjs.Shape();
        this.shape_194.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgDQADgDADABQAEgBADADQADADAAAEIAAAXg");
        this.shape_194.setTransform(27.2,102.8,2,2);

        this.shape_195 = new cjs.Shape();
        this.shape_195.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgDQADgDADABQAEgBADADQADADAAAEIAAAXg");
        this.shape_195.setTransform(20.5,102.8,2,2);

        this.shape_196 = new cjs.Shape();
        this.shape_196.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgDQADgDADABQAEgBADADQADADAAAEIAAAXg");
        this.shape_196.setTransform(13.7,102.8,2,2);

        this.shape_197 = new cjs.Shape();
        this.shape_197.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgDQADgDADABQAJgBAAAKIABAAIAAAXg");
        this.shape_197.setTransform(7,102.8,2,2);

        this.shape_198 = new cjs.Shape();
        this.shape_198.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_198.setTransform(160.8,124.2,2,2);

        this.shape_199 = new cjs.Shape();
        this.shape_199.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_199.setTransform(154.1,124.2,2,2);

        this.shape_200 = new cjs.Shape();
        this.shape_200.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_200.setTransform(147.3,124.2,2,2);

        this.shape_201 = new cjs.Shape();
        this.shape_201.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgCQADgEADAAQAEAAADAEQADACAAAEIAAAXg");
        this.shape_201.setTransform(160.8,113.3,2,2);

        this.shape_202 = new cjs.Shape();
        this.shape_202.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgCQADgEADAAQAEAAADAEQADACAAAEIAAAXg");
        this.shape_202.setTransform(154.1,113.3,2,2);

        this.shape_203 = new cjs.Shape();
        this.shape_203.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgCQADgEADAAQAEAAADAEQADACAAAEIAAAXg");
        this.shape_203.setTransform(147.3,113.3,2,2);

        this.shape_204 = new cjs.Shape();
        this.shape_204.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_204.setTransform(160.8,102.5,2,2);

        this.shape_205 = new cjs.Shape();
        this.shape_205.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_205.setTransform(154.1,102.5,2,2);

        this.shape_206 = new cjs.Shape();
        this.shape_206.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_206.setTransform(147.3,102.5,2,2);

        this.shape_207 = new cjs.Shape();
        this.shape_207.graphics.f("#FFFFFF").s().p("AgPAWIAAgeQAAgFAFgEQAEgEAGAAQAGAAAFAEQAEADAAAGIABAAIAAAeg");
        this.shape_207.setTransform(-70.8,131.1,2,2);

        this.shape_208 = new cjs.Shape();
        this.shape_208.graphics.f("#FFFFFF").s().p("AgOAWIAAgeQgBgFAFgEQAEgEAGAAQAGAAAFAEQAEAEABAFIAAAeg");
        this.shape_208.setTransform(-60.3,131.1,2,2);

        this.shape_209 = new cjs.Shape();
        this.shape_209.graphics.f("#FFFFFF").s().p("AgPAWIAAgeQAAgFAFgEQAEgEAGAAQAGAAAFAEQAEAEAAAFIABAAIAAAeg");
        this.shape_209.setTransform(-49.7,131.1,2,2);

        this.shape_210 = new cjs.Shape();
        this.shape_210.graphics.f("#FFFFFF").s().p("AgPAWIAAgfQAAgFAFgDQAEgEAGAAQAGAAAFAEQAEADAAAFIABAAIAAAfg");
        this.shape_210.setTransform(-70.8,117,2,2);

        this.shape_211 = new cjs.Shape();
        this.shape_211.graphics.f("#FFFFFF").s().p("AgOAWIAAgfQgBgFAFgDQAEgEAGAAQAGAAAFAEQAEADABAFIAAAfg");
        this.shape_211.setTransform(-60.3,117,2,2);

        this.shape_212 = new cjs.Shape();
        this.shape_212.graphics.f("#FFFFFF").s().p("AgPAWIAAgfQAAgFAFgDQAEgEAGAAQAGAAAFAEQAEADAAAFIABAAIAAAfg");
        this.shape_212.setTransform(-49.7,117,2,2);

        this.shape_213 = new cjs.Shape();
        this.shape_213.graphics.f("#FFFFFF").s().p("AgKAOIAAgUQAAgDAEgCQADgCADgBQALABAAAHIAAAUg");
        this.shape_213.setTransform(-249.8,128.2,2,2);

        this.shape_214 = new cjs.Shape();
        this.shape_214.graphics.f("#FFFFFF").s().p("AgKAOIAAgUQAAgDADgCQAEgCADgBQAFABADACQACACAAADIAAAUg");
        this.shape_214.setTransform(-242.3,128.2,2,2);

        this.shape_215 = new cjs.Shape();
        this.shape_215.graphics.f("#FFFFFF").s().p("AgKAOIAAgUQAAgDADgCQAEgCADgBQAFABADACQACACAAADIAAAUg");
        this.shape_215.setTransform(-242.3,118.3,2,2);

        this.shape_216 = new cjs.Shape();
        this.shape_216.graphics.f("#FFFFFF").s().p("AgJAPIAAgVQAAgHAJAAQAEAAAEACQACACAAADIAAAVg");
        this.shape_216.setTransform(-378.6,125.2,2,2);

        this.shape_217 = new cjs.Shape();
        this.shape_217.graphics.f("#FFFFFF").s().p("AgKAPIAAgVQAAgHAKAAQAEAAADACQAEACAAADIAAAVg");
        this.shape_217.setTransform(-371.1,125.2,2,2);

        this.shape_218 = new cjs.Shape();
        this.shape_218.graphics.f("#FFFFFF").s().p("AgJAPIAAgUQAAgEACgCQADgDAEAAQAEAAAEADQACACAAAEIAAAUg");
        this.shape_218.setTransform(-378.6,115.3,2,2);

        this.shape_219 = new cjs.Shape();
        this.shape_219.graphics.f("#FFFFFF").s().p("AgKAPIAAgUQABgEADgCQADgDADAAQAEAAADADQAEACAAAEIAAAUg");
        this.shape_219.setTransform(-371.1,115.3,2,2);

        this.shape_220 = new cjs.Shape();
        this.shape_220.graphics.f("#FFFFFF").s().p("AgJAPIAAgUQAAgEACgCQADgDAEAAQAEAAAEADQACACAAAEIAAAUg");
        this.shape_220.setTransform(-378.6,105.4,2,2);

        this.shape_221 = new cjs.Shape();
        this.shape_221.graphics.f("#FFFFFF").s().p("AgKAPIAAgUQABgEADgCQADgDADAAQAEAAADADQAEACAAAEIAAAUg");
        this.shape_221.setTransform(-371.1,105.4,2,2);

        this.shape_222 = new cjs.Shape();
        this.shape_222.graphics.f("#FFFFFF").s().p("AgJAPIAAgUQAAgJAJAAQAFAAADADQACACAAAEIAAAUg");
        this.shape_222.setTransform(-378.6,95.5,2,2);

        this.shape_223 = new cjs.Shape();
        this.shape_223.graphics.f("#FFFFFF").s().p("AgKAPIAAgUQAAgJAKAAQAEAAADADQAEACAAAEIAAAUg");
        this.shape_223.setTransform(-371.1,95.5,2,2);

        this.shape_224 = new cjs.Shape();
        this.shape_224.graphics.f("#FFFFFF").s().p("AgJAPIAAgVQAAgIAJAAQAEAAAEADQACACAAADIAAAVg");
        this.shape_224.setTransform(-378.6,85.6,2,2);

        this.shape_225 = new cjs.Shape();
        this.shape_225.graphics.f("#FFFFFF").s().p("AgKAPIAAgVQAAgIAKAAQAEAAADADQAEACAAADIAAAVg");
        this.shape_225.setTransform(-371.1,85.6,2,2);

        this.shape_226 = new cjs.Shape();
        this.shape_226.graphics.f("#FFFFFF").s().p("AgJAPIAAgVQAAgHAJAAQAEAAAEACQACACAAADIAAAVg");
        this.shape_226.setTransform(-216.4,125.2,2,2);

        this.shape_227 = new cjs.Shape();
        this.shape_227.graphics.f("#FFFFFF").s().p("AgJAPIAAgVQgBgHAKAAQAEAAAEACQADACAAADIAAAVg");
        this.shape_227.setTransform(-208.9,125.2,2,2);

        this.shape_228 = new cjs.Shape();
        this.shape_228.graphics.f("#FFFFFF").s().p("AgJAPIAAgUQAAgEACgCQADgDAEAAQAEAAAEADQACACAAAEIAAAUg");
        this.shape_228.setTransform(-216.4,115.3,2,2);

        this.shape_229 = new cjs.Shape();
        this.shape_229.graphics.f("#FFFFFF").s().p("AgJAPIAAgUQAAgEADgCQADgDADAAQAEAAAEADQADACAAAEIAAAUg");
        this.shape_229.setTransform(-208.9,115.3,2,2);

        this.shape_230 = new cjs.Shape();
        this.shape_230.graphics.f("#FFFFFF").s().p("AgJAPIAAgUQAAgEACgCQADgDAEAAQAEAAAEADQACACAAAEIAAAUg");
        this.shape_230.setTransform(-216.4,105.4,2,2);

        this.shape_231 = new cjs.Shape();
        this.shape_231.graphics.f("#FFFFFF").s().p("AgJAPIAAgUQAAgEADgCQADgDADAAQAEAAAEADQADACAAAEIAAAUg");
        this.shape_231.setTransform(-208.9,105.4,2,2);

        this.shape_232 = new cjs.Shape();
        this.shape_232.graphics.f("#FFFFFF").s().p("AgJAPIAAgUQAAgJAJAAQAFAAADADQACACAAAEIAAAUg");
        this.shape_232.setTransform(-216.4,95.5,2,2);

        this.shape_233 = new cjs.Shape();
        this.shape_233.graphics.f("#FFFFFF").s().p("AgJAPIAAgUQgBgJAKAAQAFAAADADQADACAAAEIAAAUg");
        this.shape_233.setTransform(-208.9,95.5,2,2);

        this.shape_234 = new cjs.Shape();
        this.shape_234.graphics.f("#FFFFFF").s().p("AgJAPIAAgVQAAgIAJAAQAEAAAEADQACACAAADIAAAVg");
        this.shape_234.setTransform(-216.4,85.6,2,2);

        this.shape_235 = new cjs.Shape();
        this.shape_235.graphics.f("#FFFFFF").s().p("AgJAPIAAgVQgBgIAKAAQAEAAAEADQADACAAADIAAAVg");
        this.shape_235.setTransform(-208.9,85.6,2,2);

        this.shape_236 = new cjs.Shape();
        this.shape_236.graphics.f("#FFFFFF").s().p("AgKAPIAAgVQAAgHAKAAQAEAAADACQAEACAAADIAAAVg");
        this.shape_236.setTransform(-103.1,125.2,2,2);

        this.shape_237 = new cjs.Shape();
        this.shape_237.graphics.f("#FFFFFF").s().p("AgJAPIAAgVQAAgHAJAAQAEAAADACQADACAAADIAAAVg");
        this.shape_237.setTransform(-95.6,125.2,2,2);

        this.shape_238 = new cjs.Shape();
        this.shape_238.graphics.f("#FFFFFF").s().p("AgKAPIAAgUQAAgEAEgCQADgDADAAQAEAAADADQAEACAAAEIAAAUg");
        this.shape_238.setTransform(-103.1,115.3,2,2);

        this.shape_239 = new cjs.Shape();
        this.shape_239.graphics.f("#FFFFFF").s().p("AgJAPIAAgUQAAgEACgCQAEgDADAAQAEAAADADQADACAAAEIAAAUg");
        this.shape_239.setTransform(-95.6,115.3,2,2);

        this.shape_240 = new cjs.Shape();
        this.shape_240.graphics.f("#FFFFFF").s().p("AgKAPIAAgUQAAgEAEgCQADgDADAAQAEAAADADQAEACAAAEIAAAUg");
        this.shape_240.setTransform(-103.1,105.4,2,2);

        this.shape_241 = new cjs.Shape();
        this.shape_241.graphics.f("#FFFFFF").s().p("AgJAPIAAgUQAAgEACgCQAEgDADAAQAEAAADADQADACAAAEIAAAUg");
        this.shape_241.setTransform(-95.6,105.4,2,2);

        this.shape_242 = new cjs.Shape();
        this.shape_242.graphics.f("#FFFFFF").s().p("AgKAPIAAgUQAAgJAKAAQAEAAADADQAEACAAAEIAAAUg");
        this.shape_242.setTransform(-103.1,95.5,2,2);

        this.shape_243 = new cjs.Shape();
        this.shape_243.graphics.f("#FFFFFF").s().p("AgJAPIAAgUQAAgJAJAAQAFAAACADQADACAAAEIAAAUg");
        this.shape_243.setTransform(-95.6,95.5,2,2);

        this.shape_244 = new cjs.Shape();
        this.shape_244.graphics.f("#FFFFFF").s().p("AgKAPIAAgVQAAgIAKAAQAEAAADADQAEACAAADIAAAVg");
        this.shape_244.setTransform(-103.1,85.6,2,2);

        this.shape_245 = new cjs.Shape();
        this.shape_245.graphics.f("#FFFFFF").s().p("AgJAPIAAgVQAAgIAJAAQAEAAADADQADACAAADIAAAVg");
        this.shape_245.setTransform(-95.6,85.6,2,2);

        this.shape_246 = new cjs.Shape();
        this.shape_246.graphics.f("#FFFFFF").s().p("AgJAQIAAgWIAAAAQAAgEADgCQADgDADgBQAEABADADQADACAAAEIAAAWg");
        this.shape_246.setTransform(-304,135.3,2,2);

        this.shape_247 = new cjs.Shape();
        this.shape_247.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgCQADgDADgBQAEABADADQADACAAAEIAAAWg");
        this.shape_247.setTransform(-297.2,135.3,2,2);

        this.shape_248 = new cjs.Shape();
        this.shape_248.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgCQADgDADgBQAEABADADQADACAAAEIAAAWg");
        this.shape_248.setTransform(-290.4,135.3,2,2);

        this.shape_249 = new cjs.Shape();
        this.shape_249.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgCQADgDADgBQAEABADADQADACAAAEIAAAWg");
        this.shape_249.setTransform(-283.7,135.3,2,2);

        this.shape_250 = new cjs.Shape();
        this.shape_250.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgCQADgDADgBQAEABADADQADACAAAEIAAAWg");
        this.shape_250.setTransform(-276.9,135.3,2,2);

        this.shape_251 = new cjs.Shape();
        this.shape_251.graphics.f("#FFFFFF").s().p("AgJAQIAAgWIAAAAQAAgEADgCQADgDADgBQAEABADADQADACAAAEIAAAWg");
        this.shape_251.setTransform(-304,125.4,2,2);

        this.shape_252 = new cjs.Shape();
        this.shape_252.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgCQADgDADgBQAEABADADQADACAAAEIAAAWg");
        this.shape_252.setTransform(-297.2,125.4,2,2);

        this.shape_253 = new cjs.Shape();
        this.shape_253.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgCQADgDADgBQAEABADADQADACAAAEIAAAWg");
        this.shape_253.setTransform(-290.4,125.4,2,2);

        this.shape_254 = new cjs.Shape();
        this.shape_254.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgCQADgDADgBQAEABADADQADACAAAEIAAAWg");
        this.shape_254.setTransform(-283.7,125.4,2,2);

        this.shape_255 = new cjs.Shape();
        this.shape_255.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgCQADgDADgBQAEABADADQADACAAAEIAAAWg");
        this.shape_255.setTransform(-276.9,125.4,2,2);

        this.shape_256 = new cjs.Shape();
        this.shape_256.graphics.f("#FFFFFF").s().p("AgJAQIAAgWIAAAAQAAgJAJAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_256.setTransform(-304,115.6,2,2);

        this.shape_257 = new cjs.Shape();
        this.shape_257.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_257.setTransform(-297.2,115.6,2,2);

        this.shape_258 = new cjs.Shape();
        this.shape_258.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_258.setTransform(-290.4,115.6,2,2);

        this.shape_259 = new cjs.Shape();
        this.shape_259.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_259.setTransform(-283.7,115.6,2,2);

        this.shape_260 = new cjs.Shape();
        this.shape_260.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_260.setTransform(-276.9,115.6,2,2);

        this.shape_261 = new cjs.Shape();
        this.shape_261.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAAIAAAWg");
        this.shape_261.setTransform(-410.7,127.8,2,2);

        this.shape_262 = new cjs.Shape();
        this.shape_262.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_262.setTransform(-404,127.8,2,2);

        this.shape_263 = new cjs.Shape();
        this.shape_263.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAAIAAAWg");
        this.shape_263.setTransform(-397.2,127.8,2,2);

        this.shape_264 = new cjs.Shape();
        this.shape_264.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAAIAAAWg");
        this.shape_264.setTransform(-410.7,117.6,2,2);

        this.shape_265 = new cjs.Shape();
        this.shape_265.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_265.setTransform(-404,117.6,2,2);

        this.shape_266 = new cjs.Shape();
        this.shape_266.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAKAAAAAJIAAAAIAAAWg");
        this.shape_266.setTransform(-397.2,117.6,2,2);

        this.shape_267 = new cjs.Shape();
        this.shape_267.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAAIAAAWg");
        this.shape_267.setTransform(-410.7,107.3,2,2);

        this.shape_268 = new cjs.Shape();
        this.shape_268.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_268.setTransform(-404,107.3,2,2);

        this.shape_269 = new cjs.Shape();
        this.shape_269.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAKAAAAAJIAAAAIAAAWg");
        this.shape_269.setTransform(-397.2,107.3,2,2);

        this.shape_270 = new cjs.Shape();
        this.shape_270.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_270.setTransform(-192.7,124.2,2,2);

        this.shape_271 = new cjs.Shape();
        this.shape_271.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAKAAAAAJIAAAAIAAAWg");
        this.shape_271.setTransform(-185.9,124.2,2,2);

        this.shape_272 = new cjs.Shape();
        this.shape_272.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_272.setTransform(-179.2,124.2,2,2);

        this.shape_273 = new cjs.Shape();
        this.shape_273.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgCQADgEADAAQAEAAADAEQADACAAAEIAAAXg");
        this.shape_273.setTransform(-192.7,113.3,2,2);

        this.shape_274 = new cjs.Shape();
        this.shape_274.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgCQADgEADAAQAEAAADAEQADACAAAEIAAAAIAAAXg");
        this.shape_274.setTransform(-185.9,113.3,2,2);

        this.shape_275 = new cjs.Shape();
        this.shape_275.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgCQADgEADAAQAEAAADAEQADACAAAEIAAAXg");
        this.shape_275.setTransform(-179.2,113.3,2,2);

        this.shape_276 = new cjs.Shape();
        this.shape_276.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_276.setTransform(-192.7,102.5,2,2);

        this.shape_277 = new cjs.Shape();
        this.shape_277.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAKAAAAAJIAAAAIAAAWg");
        this.shape_277.setTransform(-185.9,102.5,2,2);

        this.shape_278 = new cjs.Shape();
        this.shape_278.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_278.setTransform(-179.2,102.5,2,2);

        this.shape_279 = new cjs.Shape();
        this.shape_279.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_279.setTransform(-164.1,124.2,2,2);

        this.shape_280 = new cjs.Shape();
        this.shape_280.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQACADAAAEIABAAIAAAWg");
        this.shape_280.setTransform(-157.3,124.2,2,2);

        this.shape_281 = new cjs.Shape();
        this.shape_281.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_281.setTransform(-150.6,124.2,2,2);

        this.shape_282 = new cjs.Shape();
        this.shape_282.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgCQADgEADAAQAEAAADAEQADACAAAEIAAAXg");
        this.shape_282.setTransform(-164.1,113.3,2,2);

        this.shape_283 = new cjs.Shape();
        this.shape_283.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgCQADgEADAAQAEAAADAEQACACAAAEIABAAIAAAXg");
        this.shape_283.setTransform(-157.3,113.3,2,2);

        this.shape_284 = new cjs.Shape();
        this.shape_284.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgCQADgEADAAQAEAAADAEQADACAAAEIAAAXg");
        this.shape_284.setTransform(-150.6,113.3,2,2);

        this.shape_285 = new cjs.Shape();
        this.shape_285.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_285.setTransform(-164.1,102.5,2,2);

        this.shape_286 = new cjs.Shape();
        this.shape_286.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQACADAAAEIABAAIAAAWg");
        this.shape_286.setTransform(-157.3,102.5,2,2);

        this.shape_287 = new cjs.Shape();
        this.shape_287.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_287.setTransform(-150.6,102.5,2,2);

        this.shape_288 = new cjs.Shape();
        this.shape_288.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_288.setTransform(-134.8,124.2,2,2);

        this.shape_289 = new cjs.Shape();
        this.shape_289.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQACADAAAEIABAAIAAAWg");
        this.shape_289.setTransform(-128,124.2,2,2);

        this.shape_290 = new cjs.Shape();
        this.shape_290.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_290.setTransform(-121.3,124.2,2,2);

        this.shape_291 = new cjs.Shape();
        this.shape_291.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgCQADgEADAAQAEAAADAEQADACAAAEIAAAXg");
        this.shape_291.setTransform(-134.8,113.3,2,2);

        this.shape_292 = new cjs.Shape();
        this.shape_292.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgCQADgEADAAQAEAAADAEQACADAAADIABAAIAAAXg");
        this.shape_292.setTransform(-128,113.3,2,2);

        this.shape_293 = new cjs.Shape();
        this.shape_293.graphics.f("#FFFFFF").s().p("AgJARIAAgXQAAgEADgCQADgEADAAQAEAAADAEQADACAAAEIAAAXg");
        this.shape_293.setTransform(-121.3,113.3,2,2);

        this.shape_294 = new cjs.Shape();
        this.shape_294.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_294.setTransform(-134.8,102.5,2,2);

        this.shape_295 = new cjs.Shape();
        this.shape_295.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQACADAAAEIABAAIAAAWg");
        this.shape_295.setTransform(-128,102.5,2,2);

        this.shape_296 = new cjs.Shape();
        this.shape_296.graphics.f("#FFFFFF").s().p("AgJAQIAAgWQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAAWg");
        this.shape_296.setTransform(-121.3,102.5,2,2);

        this.shape_297 = new cjs.Shape();
        this.shape_297.graphics.f("#FFFFFF").s().p("AgPAWIAAgfQAAgFAFgDQAEgEAGAAQAGAAAFAEQAEADAAAFIABAAIAAAfg");
        this.shape_297.setTransform(-70.8,102.9,2,2);

        this.shape_298 = new cjs.Shape();
        this.shape_298.graphics.f("#FFFFFF").s().p("AgOAWIAAgfQgBgFAFgDQAEgEAGAAQAGAAAFAEQAEADABAFIAAAfg");
        this.shape_298.setTransform(-60.3,102.9,2,2);

        this.shape_299 = new cjs.Shape();
        this.shape_299.graphics.f("#FFFFFF").s().p("AgPAWIAAgfQAAgFAFgDQAEgEAGAAQAGAAAFAEQAEADAAAFIABAAIAAAfg");
        this.shape_299.setTransform(-49.7,102.9,2,2);

        this.shape_300 = new cjs.Shape();
        this.shape_300.graphics.f("#4D9BB7").s().p("AhRBzIAAiHIAxAAIAAheIByAAIAADlg");
        this.shape_300.setTransform(225.8,117.1,2,2);

        this.shape_301 = new cjs.Shape();
        this.shape_301.graphics.f("#4D9BB7").s().p("AhDBaIAAiYIAdgbIBNAAIAdAbIAACYg");
        this.shape_301.setTransform(-340.1,134.3,2,2);

        this.shape_302 = new cjs.Shape();
        this.shape_302.graphics.f("#4D9BB7").s().p("Ag8DaIAAmzIB5AAIAAGzg");
        this.shape_302.setTransform(256,87.9,2,2);

        this.shape_303 = new cjs.Shape();
        this.shape_303.graphics.f("#4D9BB7").s().p("Ah/B+IAAjHIA3g0ICRAAIA3A0IAADHg");
        this.shape_303.setTransform(21.2,114.4,2,2);

        this.shape_304 = new cjs.Shape();
        this.shape_304.graphics.f("#3C606A").s().p("AgKBgIAAi/IAVAAIAAC/g");
        this.shape_304.setTransform(-11,115.4,2,2);

        this.shape_305 = new cjs.Shape();
        this.shape_305.graphics.f("#4D9BB7").s().p("AhBB2IAAjrICDA8IAACvg");
        this.shape_305.setTransform(-18.9,121.8,2,2);

        this.shape_306 = new cjs.Shape();
        this.shape_306.graphics.f("#4D9BB7").s().p("AhACqIAAkXIBAg9IBBA9IAAEXg");
        this.shape_306.setTransform(154.6,118.2,2,2);

        this.shape_307 = new cjs.Shape();
        this.shape_307.graphics.f("#4D9BB7").s().p("Ag3DXIAAl5IA3g0IA4A0IAAF5g");
        this.shape_307.setTransform(61.7,117.6,2,2);

        this.shape_308 = new cjs.Shape();
        this.shape_308.graphics.f("#4D9BB7").s().p("AhBCLIAAkVICDAAIAAEVg");
        this.shape_308.setTransform(-404.2,124.6,2,2);

        this.shape_309 = new cjs.Shape();
        this.shape_309.graphics.f("#4D9BB7").s().p("AhBDFIAAmJICDAAIAAGJg");
        this.shape_309.setTransform(-374.9,112.9,2,2);

        this.shape_310 = new cjs.Shape();
        this.shape_310.graphics.f("#4D9BB7").s().p("AhBB2IAAivICDg8IAADrg");
        this.shape_310.setTransform(-247.3,128.8,2,2);

        this.shape_311 = new cjs.Shape();
        this.shape_311.graphics.f("#4D9BB7").s().p("AhBDKIAAlXIBBg9IBCABIAAGTg");
        this.shape_311.setTransform(-214.1,111.8,2,2);

        this.shape_312 = new cjs.Shape();
        this.shape_312.graphics.f("#4D9BB7").s().p("AhBCqIAAkXIBBg9IBCA9IAAEXg");
        this.shape_312.setTransform(-185.6,118.2,2,2);

        this.shape_313 = new cjs.Shape();
        this.shape_313.graphics.f("#4D9BB7").s().p("AhBCqIAAkXIBBg9IBCA9IAAEXg");
        this.shape_313.setTransform(-157.1,118.2,2,2);

        this.shape_314 = new cjs.Shape();
        this.shape_314.graphics.f("#4D9BB7").s().p("AhBCqIAAkXIBBg9IBCA9IAAEXg");
        this.shape_314.setTransform(-128.5,118.2,2,2);

        this.shape_315 = new cjs.Shape();
        this.shape_315.graphics.f("#4D9BB7").s().p("Ag4DXIAAl4IA4g1IA5A1IAAF4g");
        this.shape_315.setTransform(-100.9,109.3,2,2);

        this.shape_316 = new cjs.Shape();
        this.shape_316.graphics.f("#4D9BB7").s().p("Ah/B+IAAjHIA3g0ICRAAIA3A0IAADHg");
        this.shape_316.setTransform(-291.1,127.1,2,2);

        this.shape_317 = new cjs.Shape();
        this.shape_317.graphics.f("#4D9BB7").s().p("Ah/CqIAAkeIA3g1ICRAAIA3A1IAAEeg");
        this.shape_317.setTransform(-60.9,118.3,2,2);

        this.shape_318 = new cjs.Shape();
        this.shape_318.graphics.f("#FFFFFF").s().p("AgPAqIAAhTIAfAAIAABTg");
        this.shape_318.setTransform(-163.5,124.3,2,2);

        this.shape_319 = new cjs.Shape();
        this.shape_319.graphics.f("#FFFFFF").s().p("AgPAqIAAhTIAfAAIAABTg");
        this.shape_319.setTransform(-175.2,124.3,2,2);

        this.shape_320 = new cjs.Shape();
        this.shape_320.graphics.f("#FFFFFF").s().p("AgPAqIAAhTIAfAAIAABTg");
        this.shape_320.setTransform(-186.9,124.3,2,2);

        this.shape_321 = new cjs.Shape();
        this.shape_321.graphics.f("#FFFFFF").s().p("AgPAqIAAhTIAfAAIAABTg");
        this.shape_321.setTransform(-198.5,124.3,2,2);

        this.shape_322 = new cjs.Shape();
        this.shape_322.graphics.f("#FFFFFF").s().p("AgPAqIAAhTIAfAAIAABTg");
        this.shape_322.setTransform(-210.2,124.3,2,2);

        this.shape_323 = new cjs.Shape();
        this.shape_323.graphics.f("#FFFFFF").s().p("AgJANIAAgaIASAAIAAAag");
        this.shape_323.setTransform(-161.8,109.1,2,2);

        this.shape_324 = new cjs.Shape();
        this.shape_324.graphics.f("#FFFFFF").s().p("AgJANIAAgaIATAAIAAAag");
        this.shape_324.setTransform(-168.8,109.1,2,2);

        this.shape_325 = new cjs.Shape();
        this.shape_325.graphics.f("#FFFFFF").s().p("AgJANIAAgaIASAAIAAAag");
        this.shape_325.setTransform(-175.9,109.1,2,2);

        this.shape_326 = new cjs.Shape();
        this.shape_326.graphics.f("#FFFFFF").s().p("AgIANIAAgaIASAAIAAAag");
        this.shape_326.setTransform(-183,109.1,2,2);

        this.shape_327 = new cjs.Shape();
        this.shape_327.graphics.f("#FFFFFF").s().p("AgJANIAAgaIATAAIAAAag");
        this.shape_327.setTransform(-190.1,109.1,2,2);

        this.shape_328 = new cjs.Shape();
        this.shape_328.graphics.f("#FFFFFF").s().p("AgJANIAAgaIATAAIAAAag");
        this.shape_328.setTransform(-197.2,109.1,2,2);

        this.shape_329 = new cjs.Shape();
        this.shape_329.graphics.f("#FFFFFF").s().p("AgJANIAAgaIATAAIAAAag");
        this.shape_329.setTransform(-204.3,109.1,2,2);

        this.shape_330 = new cjs.Shape();
        this.shape_330.graphics.f("#FFFFFF").s().p("AgJANIAAgaIASAAIAAAag");
        this.shape_330.setTransform(-211.5,109.1,2,2);

        this.shape_331 = new cjs.Shape();
        this.shape_331.graphics.f("#FFFFFF").s().p("AgJANIAAgaIASAAIAAAag");
        this.shape_331.setTransform(-161.8,101.7,2,2);

        this.shape_332 = new cjs.Shape();
        this.shape_332.graphics.f("#FFFFFF").s().p("AgJANIAAgaIATAAIAAAag");
        this.shape_332.setTransform(-168.8,101.7,2,2);

        this.shape_333 = new cjs.Shape();
        this.shape_333.graphics.f("#FFFFFF").s().p("AgJANIAAgaIASAAIAAAag");
        this.shape_333.setTransform(-175.9,101.7,2,2);

        this.shape_334 = new cjs.Shape();
        this.shape_334.graphics.f("#FFFFFF").s().p("AgIANIAAgaIASAAIAAAag");
        this.shape_334.setTransform(-183,101.7,2,2);

        this.shape_335 = new cjs.Shape();
        this.shape_335.graphics.f("#FFFFFF").s().p("AgJANIAAgaIATAAIAAAag");
        this.shape_335.setTransform(-190.1,101.7,2,2);

        this.shape_336 = new cjs.Shape();
        this.shape_336.graphics.f("#FFFFFF").s().p("AgJANIAAgaIATAAIAAAag");
        this.shape_336.setTransform(-197.2,101.7,2,2);

        this.shape_337 = new cjs.Shape();
        this.shape_337.graphics.f("#FFFFFF").s().p("AgJANIAAgaIATAAIAAAag");
        this.shape_337.setTransform(-204.3,101.7,2,2);

        this.shape_338 = new cjs.Shape();
        this.shape_338.graphics.f("#FFFFFF").s().p("AgJANIAAgaIASAAIAAAag");
        this.shape_338.setTransform(-211.5,101.7,2,2);

        this.shape_339 = new cjs.Shape();
        this.shape_339.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIASAAIAAAag");
        this.shape_339.setTransform(-161.8,88.7,2,2);

        this.shape_340 = new cjs.Shape();
        this.shape_340.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIATAAIAAAag");
        this.shape_340.setTransform(-168.8,88.7,2,2);

        this.shape_341 = new cjs.Shape();
        this.shape_341.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIASAAIAAAag");
        this.shape_341.setTransform(-175.9,88.7,2,2);

        this.shape_342 = new cjs.Shape();
        this.shape_342.graphics.f("#FFFFFF").s().p("AgIAOIAAgaIASAAIAAAag");
        this.shape_342.setTransform(-183,88.7,2,2);

        this.shape_343 = new cjs.Shape();
        this.shape_343.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIATAAIAAAag");
        this.shape_343.setTransform(-190.1,88.7,2,2);

        this.shape_344 = new cjs.Shape();
        this.shape_344.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIATAAIAAAag");
        this.shape_344.setTransform(-197.2,88.7,2,2);

        this.shape_345 = new cjs.Shape();
        this.shape_345.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIATAAIAAAag");
        this.shape_345.setTransform(-204.3,88.7,2,2);

        this.shape_346 = new cjs.Shape();
        this.shape_346.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIASAAIAAAag");
        this.shape_346.setTransform(-211.5,88.7,2,2);

        this.shape_347 = new cjs.Shape();
        this.shape_347.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIASAAIAAAag");
        this.shape_347.setTransform(-161.8,79.3,2,2);

        this.shape_348 = new cjs.Shape();
        this.shape_348.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIATAAIAAAag");
        this.shape_348.setTransform(-168.8,79.3,2,2);

        this.shape_349 = new cjs.Shape();
        this.shape_349.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIASAAIAAAag");
        this.shape_349.setTransform(-175.9,79.3,2,2);

        this.shape_350 = new cjs.Shape();
        this.shape_350.graphics.f("#FFFFFF").s().p("AgIAOIAAgaIASAAIAAAag");
        this.shape_350.setTransform(-183,79.3,2,2);

        this.shape_351 = new cjs.Shape();
        this.shape_351.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIATAAIAAAag");
        this.shape_351.setTransform(-190.1,79.3,2,2);

        this.shape_352 = new cjs.Shape();
        this.shape_352.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIATAAIAAAag");
        this.shape_352.setTransform(-197.2,79.3,2,2);

        this.shape_353 = new cjs.Shape();
        this.shape_353.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIATAAIAAAag");
        this.shape_353.setTransform(-204.3,79.3,2,2);

        this.shape_354 = new cjs.Shape();
        this.shape_354.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIASAAIAAAag");
        this.shape_354.setTransform(-211.5,79.3,2,2);

        this.shape_355 = new cjs.Shape();
        this.shape_355.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_355.setTransform(-161.8,70,2,2);

        this.shape_356 = new cjs.Shape();
        this.shape_356.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_356.setTransform(-168.8,70,2,2);

        this.shape_357 = new cjs.Shape();
        this.shape_357.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_357.setTransform(-175.9,70,2,2);

        this.shape_358 = new cjs.Shape();
        this.shape_358.graphics.f("#FFFFFF").s().p("AgIAOIAAgbIASAAIAAAbg");
        this.shape_358.setTransform(-183,70,2,2);

        this.shape_359 = new cjs.Shape();
        this.shape_359.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_359.setTransform(-190.1,70,2,2);

        this.shape_360 = new cjs.Shape();
        this.shape_360.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_360.setTransform(-197.2,70,2,2);

        this.shape_361 = new cjs.Shape();
        this.shape_361.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_361.setTransform(-204.3,70,2,2);

        this.shape_362 = new cjs.Shape();
        this.shape_362.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_362.setTransform(-211.5,70,2,2);

        this.shape_363 = new cjs.Shape();
        this.shape_363.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIASAAIAAAag");
        this.shape_363.setTransform(-161.8,60.6,2,2);

        this.shape_364 = new cjs.Shape();
        this.shape_364.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIATAAIAAAag");
        this.shape_364.setTransform(-168.8,60.6,2,2);

        this.shape_365 = new cjs.Shape();
        this.shape_365.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIASAAIAAAag");
        this.shape_365.setTransform(-175.9,60.6,2,2);

        this.shape_366 = new cjs.Shape();
        this.shape_366.graphics.f("#FFFFFF").s().p("AgIAOIAAgaIASAAIAAAag");
        this.shape_366.setTransform(-183,60.6,2,2);

        this.shape_367 = new cjs.Shape();
        this.shape_367.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIATAAIAAAag");
        this.shape_367.setTransform(-190.1,60.6,2,2);

        this.shape_368 = new cjs.Shape();
        this.shape_368.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIATAAIAAAag");
        this.shape_368.setTransform(-197.2,60.6,2,2);

        this.shape_369 = new cjs.Shape();
        this.shape_369.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIATAAIAAAag");
        this.shape_369.setTransform(-204.3,60.6,2,2);

        this.shape_370 = new cjs.Shape();
        this.shape_370.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIASAAIAAAag");
        this.shape_370.setTransform(-211.5,60.6,2,2);

        this.shape_371 = new cjs.Shape();
        this.shape_371.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIASAAIAAAag");
        this.shape_371.setTransform(-161.8,51.2,2,2);

        this.shape_372 = new cjs.Shape();
        this.shape_372.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIATAAIAAAag");
        this.shape_372.setTransform(-168.8,51.2,2,2);

        this.shape_373 = new cjs.Shape();
        this.shape_373.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIASAAIAAAag");
        this.shape_373.setTransform(-175.9,51.2,2,2);

        this.shape_374 = new cjs.Shape();
        this.shape_374.graphics.f("#FFFFFF").s().p("AgIAOIAAgaIASAAIAAAag");
        this.shape_374.setTransform(-183,51.2,2,2);

        this.shape_375 = new cjs.Shape();
        this.shape_375.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIATAAIAAAag");
        this.shape_375.setTransform(-190.1,51.2,2,2);

        this.shape_376 = new cjs.Shape();
        this.shape_376.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIATAAIAAAag");
        this.shape_376.setTransform(-197.2,51.2,2,2);

        this.shape_377 = new cjs.Shape();
        this.shape_377.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIATAAIAAAag");
        this.shape_377.setTransform(-204.3,51.2,2,2);

        this.shape_378 = new cjs.Shape();
        this.shape_378.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIASAAIAAAag");
        this.shape_378.setTransform(-211.5,51.2,2,2);

        this.shape_379 = new cjs.Shape();
        this.shape_379.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_379.setTransform(-161.8,41.9,2,2);

        this.shape_380 = new cjs.Shape();
        this.shape_380.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_380.setTransform(-168.8,41.9,2,2);

        this.shape_381 = new cjs.Shape();
        this.shape_381.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_381.setTransform(-175.9,41.9,2,2);

        this.shape_382 = new cjs.Shape();
        this.shape_382.graphics.f("#FFFFFF").s().p("AgIAOIAAgbIASAAIAAAbg");
        this.shape_382.setTransform(-183,41.9,2,2);

        this.shape_383 = new cjs.Shape();
        this.shape_383.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_383.setTransform(-190.1,41.9,2,2);

        this.shape_384 = new cjs.Shape();
        this.shape_384.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_384.setTransform(-197.2,41.9,2,2);

        this.shape_385 = new cjs.Shape();
        this.shape_385.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_385.setTransform(-204.3,41.9,2,2);

        this.shape_386 = new cjs.Shape();
        this.shape_386.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_386.setTransform(-211.5,41.9,2,2);

        this.shape_387 = new cjs.Shape();
        this.shape_387.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_387.setTransform(-161.8,32.5,2,2);

        this.shape_388 = new cjs.Shape();
        this.shape_388.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_388.setTransform(-168.8,32.5,2,2);

        this.shape_389 = new cjs.Shape();
        this.shape_389.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_389.setTransform(-175.9,32.5,2,2);

        this.shape_390 = new cjs.Shape();
        this.shape_390.graphics.f("#FFFFFF").s().p("AgIAOIAAgbIASAAIAAAbg");
        this.shape_390.setTransform(-183,32.5,2,2);

        this.shape_391 = new cjs.Shape();
        this.shape_391.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_391.setTransform(-190.1,32.5,2,2);

        this.shape_392 = new cjs.Shape();
        this.shape_392.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_392.setTransform(-197.2,32.5,2,2);

        this.shape_393 = new cjs.Shape();
        this.shape_393.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_393.setTransform(-204.3,32.5,2,2);

        this.shape_394 = new cjs.Shape();
        this.shape_394.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_394.setTransform(-211.5,32.5,2,2);

        this.shape_395 = new cjs.Shape();
        this.shape_395.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_395.setTransform(-165.2,22.2,2,2);

        this.shape_396 = new cjs.Shape();
        this.shape_396.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_396.setTransform(-172.4,22.2,2,2);

        this.shape_397 = new cjs.Shape();
        this.shape_397.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_397.setTransform(-179.5,22.2,2,2);

        this.shape_398 = new cjs.Shape();
        this.shape_398.graphics.f("#FFFFFF").s().p("AgIAOIAAgbIASAAIAAAbg");
        this.shape_398.setTransform(-186.6,22.2,2,2);

        this.shape_399 = new cjs.Shape();
        this.shape_399.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_399.setTransform(-193.7,22.2,2,2);

        this.shape_400 = new cjs.Shape();
        this.shape_400.graphics.f("#FFFFFF").s().p("AgIAOIAAgbIASAAIAAAbg");
        this.shape_400.setTransform(-200.8,22.2,2,2);

        this.shape_401 = new cjs.Shape();
        this.shape_401.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_401.setTransform(-207.9,22.2,2,2);

        this.shape_402 = new cjs.Shape();
        this.shape_402.graphics.f("#FFFFFF").s().p("AgJANIAAgaIATAAIAAAag");
        this.shape_402.setTransform(-165.2,12.8,2,2);

        this.shape_403 = new cjs.Shape();
        this.shape_403.graphics.f("#FFFFFF").s().p("AgJANIAAgaIATAAIAAAag");
        this.shape_403.setTransform(-172.4,12.8,2,2);

        this.shape_404 = new cjs.Shape();
        this.shape_404.graphics.f("#FFFFFF").s().p("AgJANIAAgaIASAAIAAAag");
        this.shape_404.setTransform(-179.5,12.8,2,2);

        this.shape_405 = new cjs.Shape();
        this.shape_405.graphics.f("#FFFFFF").s().p("AgIANIAAgaIASAAIAAAag");
        this.shape_405.setTransform(-186.6,12.8,2,2);

        this.shape_406 = new cjs.Shape();
        this.shape_406.graphics.f("#FFFFFF").s().p("AgJANIAAgaIASAAIAAAag");
        this.shape_406.setTransform(-193.7,12.8,2,2);

        this.shape_407 = new cjs.Shape();
        this.shape_407.graphics.f("#FFFFFF").s().p("AgIANIAAgaIASAAIAAAag");
        this.shape_407.setTransform(-200.8,12.8,2,2);

        this.shape_408 = new cjs.Shape();
        this.shape_408.graphics.f("#FFFFFF").s().p("AgJANIAAgaIASAAIAAAag");
        this.shape_408.setTransform(-207.9,12.8,2,2);

        this.shape_409 = new cjs.Shape();
        this.shape_409.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIATAAIAAAag");
        this.shape_409.setTransform(-165.2,3.5,2,2);

        this.shape_410 = new cjs.Shape();
        this.shape_410.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIATAAIAAAag");
        this.shape_410.setTransform(-172.4,3.5,2,2);

        this.shape_411 = new cjs.Shape();
        this.shape_411.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIASAAIAAAag");
        this.shape_411.setTransform(-179.5,3.5,2,2);

        this.shape_412 = new cjs.Shape();
        this.shape_412.graphics.f("#FFFFFF").s().p("AgIAOIAAgaIASAAIAAAag");
        this.shape_412.setTransform(-186.6,3.5,2,2);

        this.shape_413 = new cjs.Shape();
        this.shape_413.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIASAAIAAAag");
        this.shape_413.setTransform(-193.7,3.5,2,2);

        this.shape_414 = new cjs.Shape();
        this.shape_414.graphics.f("#FFFFFF").s().p("AgIAOIAAgaIASAAIAAAag");
        this.shape_414.setTransform(-200.8,3.5,2,2);

        this.shape_415 = new cjs.Shape();
        this.shape_415.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIASAAIAAAag");
        this.shape_415.setTransform(-207.9,3.5,2,2);

        this.shape_416 = new cjs.Shape();
        this.shape_416.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_416.setTransform(-165.2,-5.8,2,2);

        this.shape_417 = new cjs.Shape();
        this.shape_417.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_417.setTransform(-172.4,-5.8,2,2);

        this.shape_418 = new cjs.Shape();
        this.shape_418.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_418.setTransform(-179.5,-5.8,2,2);

        this.shape_419 = new cjs.Shape();
        this.shape_419.graphics.f("#FFFFFF").s().p("AgIAOIAAgbIASAAIAAAbg");
        this.shape_419.setTransform(-186.6,-5.8,2,2);

        this.shape_420 = new cjs.Shape();
        this.shape_420.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_420.setTransform(-193.7,-5.8,2,2);

        this.shape_421 = new cjs.Shape();
        this.shape_421.graphics.f("#FFFFFF").s().p("AgIAOIAAgbIASAAIAAAbg");
        this.shape_421.setTransform(-200.8,-5.8,2,2);

        this.shape_422 = new cjs.Shape();
        this.shape_422.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_422.setTransform(-207.9,-5.8,2,2);

        this.shape_423 = new cjs.Shape();
        this.shape_423.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_423.setTransform(-165.2,-15.1,2,2);

        this.shape_424 = new cjs.Shape();
        this.shape_424.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_424.setTransform(-172.4,-15.1,2,2);

        this.shape_425 = new cjs.Shape();
        this.shape_425.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_425.setTransform(-179.5,-15.1,2,2);

        this.shape_426 = new cjs.Shape();
        this.shape_426.graphics.f("#FFFFFF").s().p("AgIAOIAAgbIASAAIAAAbg");
        this.shape_426.setTransform(-186.6,-15.1,2,2);

        this.shape_427 = new cjs.Shape();
        this.shape_427.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_427.setTransform(-193.7,-15.1,2,2);

        this.shape_428 = new cjs.Shape();
        this.shape_428.graphics.f("#FFFFFF").s().p("AgIAOIAAgbIASAAIAAAbg");
        this.shape_428.setTransform(-200.8,-15.1,2,2);

        this.shape_429 = new cjs.Shape();
        this.shape_429.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_429.setTransform(-207.9,-15.1,2,2);

        this.shape_430 = new cjs.Shape();
        this.shape_430.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_430.setTransform(-165.2,-24.4,2,2);

        this.shape_431 = new cjs.Shape();
        this.shape_431.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_431.setTransform(-172.4,-24.4,2,2);

        this.shape_432 = new cjs.Shape();
        this.shape_432.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_432.setTransform(-179.5,-24.4,2,2);

        this.shape_433 = new cjs.Shape();
        this.shape_433.graphics.f("#FFFFFF").s().p("AgIAOIAAgbIASAAIAAAbg");
        this.shape_433.setTransform(-186.6,-24.4,2,2);

        this.shape_434 = new cjs.Shape();
        this.shape_434.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_434.setTransform(-193.7,-24.4,2,2);

        this.shape_435 = new cjs.Shape();
        this.shape_435.graphics.f("#FFFFFF").s().p("AgIAOIAAgbIASAAIAAAbg");
        this.shape_435.setTransform(-200.8,-24.4,2,2);

        this.shape_436 = new cjs.Shape();
        this.shape_436.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_436.setTransform(-207.9,-24.4,2,2);

        this.shape_437 = new cjs.Shape();
        this.shape_437.graphics.f("#FFFFFF").s().p("AgJANIAAgaIATAAIAAAag");
        this.shape_437.setTransform(-165.2,-33.8,2,2);

        this.shape_438 = new cjs.Shape();
        this.shape_438.graphics.f("#FFFFFF").s().p("AgJANIAAgaIATAAIAAAag");
        this.shape_438.setTransform(-172.4,-33.8,2,2);

        this.shape_439 = new cjs.Shape();
        this.shape_439.graphics.f("#FFFFFF").s().p("AgJANIAAgaIASAAIAAAag");
        this.shape_439.setTransform(-179.5,-33.8,2,2);

        this.shape_440 = new cjs.Shape();
        this.shape_440.graphics.f("#FFFFFF").s().p("AgIANIAAgaIASAAIAAAag");
        this.shape_440.setTransform(-186.6,-33.8,2,2);

        this.shape_441 = new cjs.Shape();
        this.shape_441.graphics.f("#FFFFFF").s().p("AgJANIAAgaIASAAIAAAag");
        this.shape_441.setTransform(-193.7,-33.8,2,2);

        this.shape_442 = new cjs.Shape();
        this.shape_442.graphics.f("#FFFFFF").s().p("AgIANIAAgaIASAAIAAAag");
        this.shape_442.setTransform(-200.8,-33.8,2,2);

        this.shape_443 = new cjs.Shape();
        this.shape_443.graphics.f("#FFFFFF").s().p("AgJANIAAgaIASAAIAAAag");
        this.shape_443.setTransform(-207.9,-33.8,2,2);

        this.shape_444 = new cjs.Shape();
        this.shape_444.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIATAAIAAAag");
        this.shape_444.setTransform(-165.2,-43.1,2,2);

        this.shape_445 = new cjs.Shape();
        this.shape_445.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIATAAIAAAag");
        this.shape_445.setTransform(-172.4,-43.1,2,2);

        this.shape_446 = new cjs.Shape();
        this.shape_446.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIASAAIAAAag");
        this.shape_446.setTransform(-179.5,-43.1,2,2);

        this.shape_447 = new cjs.Shape();
        this.shape_447.graphics.f("#FFFFFF").s().p("AgIAOIAAgaIASAAIAAAag");
        this.shape_447.setTransform(-186.6,-43.1,2,2);

        this.shape_448 = new cjs.Shape();
        this.shape_448.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIASAAIAAAag");
        this.shape_448.setTransform(-193.7,-43.1,2,2);

        this.shape_449 = new cjs.Shape();
        this.shape_449.graphics.f("#FFFFFF").s().p("AgIAOIAAgaIASAAIAAAag");
        this.shape_449.setTransform(-200.8,-43.1,2,2);

        this.shape_450 = new cjs.Shape();
        this.shape_450.graphics.f("#FFFFFF").s().p("AgJAOIAAgaIASAAIAAAag");
        this.shape_450.setTransform(-207.9,-43.1,2,2);

        this.shape_451 = new cjs.Shape();
        this.shape_451.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_451.setTransform(-165.2,-52.4,2,2);

        this.shape_452 = new cjs.Shape();
        this.shape_452.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_452.setTransform(-172.4,-52.4,2,2);

        this.shape_453 = new cjs.Shape();
        this.shape_453.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_453.setTransform(-179.5,-52.4,2,2);

        this.shape_454 = new cjs.Shape();
        this.shape_454.graphics.f("#FFFFFF").s().p("AgIAOIAAgbIASAAIAAAbg");
        this.shape_454.setTransform(-186.6,-52.4,2,2);

        this.shape_455 = new cjs.Shape();
        this.shape_455.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_455.setTransform(-193.7,-52.4,2,2);

        this.shape_456 = new cjs.Shape();
        this.shape_456.graphics.f("#FFFFFF").s().p("AgIAOIAAgbIASAAIAAAbg");
        this.shape_456.setTransform(-200.8,-52.4,2,2);

        this.shape_457 = new cjs.Shape();
        this.shape_457.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_457.setTransform(-207.9,-52.4,2,2);

        this.shape_458 = new cjs.Shape();
        this.shape_458.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_458.setTransform(-165.2,-61.7,2,2);

        this.shape_459 = new cjs.Shape();
        this.shape_459.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_459.setTransform(-172.4,-61.7,2,2);

        this.shape_460 = new cjs.Shape();
        this.shape_460.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_460.setTransform(-179.5,-61.7,2,2);

        this.shape_461 = new cjs.Shape();
        this.shape_461.graphics.f("#FFFFFF").s().p("AgIAOIAAgbIASAAIAAAbg");
        this.shape_461.setTransform(-186.6,-61.7,2,2);

        this.shape_462 = new cjs.Shape();
        this.shape_462.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_462.setTransform(-193.7,-61.7,2,2);

        this.shape_463 = new cjs.Shape();
        this.shape_463.graphics.f("#FFFFFF").s().p("AgIAOIAAgbIASAAIAAAbg");
        this.shape_463.setTransform(-200.8,-61.7,2,2);

        this.shape_464 = new cjs.Shape();
        this.shape_464.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_464.setTransform(-207.9,-61.7,2,2);

        this.shape_465 = new cjs.Shape();
        this.shape_465.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_465.setTransform(-165.2,-71,2,2);

        this.shape_466 = new cjs.Shape();
        this.shape_466.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAbg");
        this.shape_466.setTransform(-172.4,-71,2,2);

        this.shape_467 = new cjs.Shape();
        this.shape_467.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_467.setTransform(-179.5,-71,2,2);

        this.shape_468 = new cjs.Shape();
        this.shape_468.graphics.f("#FFFFFF").s().p("AgIAOIAAgbIASAAIAAAbg");
        this.shape_468.setTransform(-186.6,-71,2,2);

        this.shape_469 = new cjs.Shape();
        this.shape_469.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_469.setTransform(-193.7,-71,2,2);

        this.shape_470 = new cjs.Shape();
        this.shape_470.graphics.f("#FFFFFF").s().p("AgIAOIAAgbIASAAIAAAbg");
        this.shape_470.setTransform(-200.8,-71,2,2);

        this.shape_471 = new cjs.Shape();
        this.shape_471.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIASAAIAAAbg");
        this.shape_471.setTransform(-207.9,-71,2,2);

        this.shape_472 = new cjs.Shape();
        this.shape_472.graphics.f("#4D9BB7").s().p("AgCAsIAAhYIAFAAIAABYg");
        this.shape_472.setTransform(-186.8,-126.4,2,2);

        this.shape_473 = new cjs.Shape();
        this.shape_473.graphics.f("#4D9BB7").s().p("AisJ6IAAoVIAaAAIAAoKIAaAAIAAgnIAaAAIAAgiIAYAAIAAgoIASAAIA0hkIA1BkIASAAIAAAoIAYAAIAAAiIAaAAIAAAnIAaAAIAAIKIAaAAIAAIVg");
        this.shape_473.setTransform(-186.8,6.9,2,2);

        this.shape_474 = new cjs.Shape();
        this.shape_474.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_474.setTransform(-239.1,108.8,2,2);

        this.shape_475 = new cjs.Shape();
        this.shape_475.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_475.setTransform(-247.3,108.8,2,2);

        this.shape_476 = new cjs.Shape();
        this.shape_476.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_476.setTransform(-255.4,108.8,2,2);

        this.shape_477 = new cjs.Shape();
        this.shape_477.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_477.setTransform(-263.6,108.8,2,2);

        this.shape_478 = new cjs.Shape();
        this.shape_478.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_478.setTransform(-271.7,108.8,2,2);

        this.shape_479 = new cjs.Shape();
        this.shape_479.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_479.setTransform(-279.9,108.8,2,2);

        this.shape_480 = new cjs.Shape();
        this.shape_480.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_480.setTransform(-288,108.8,2,2);

        this.shape_481 = new cjs.Shape();
        this.shape_481.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_481.setTransform(-239.1,99.1,2,2);

        this.shape_482 = new cjs.Shape();
        this.shape_482.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_482.setTransform(-247.3,99.1,2,2);

        this.shape_483 = new cjs.Shape();
        this.shape_483.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_483.setTransform(-255.4,99.1,2,2);

        this.shape_484 = new cjs.Shape();
        this.shape_484.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_484.setTransform(-263.6,99.1,2,2);

        this.shape_485 = new cjs.Shape();
        this.shape_485.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_485.setTransform(-271.7,99.1,2,2);

        this.shape_486 = new cjs.Shape();
        this.shape_486.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_486.setTransform(-279.9,99.1,2,2);

        this.shape_487 = new cjs.Shape();
        this.shape_487.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_487.setTransform(-288,99.1,2,2);

        this.shape_488 = new cjs.Shape();
        this.shape_488.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_488.setTransform(-239.1,89.4,2,2);

        this.shape_489 = new cjs.Shape();
        this.shape_489.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_489.setTransform(-247.3,89.4,2,2);

        this.shape_490 = new cjs.Shape();
        this.shape_490.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_490.setTransform(-255.4,89.4,2,2);

        this.shape_491 = new cjs.Shape();
        this.shape_491.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_491.setTransform(-263.6,89.4,2,2);

        this.shape_492 = new cjs.Shape();
        this.shape_492.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_492.setTransform(-271.7,89.4,2,2);

        this.shape_493 = new cjs.Shape();
        this.shape_493.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_493.setTransform(-279.9,89.4,2,2);

        this.shape_494 = new cjs.Shape();
        this.shape_494.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_494.setTransform(-288,89.4,2,2);

        this.shape_495 = new cjs.Shape();
        this.shape_495.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_495.setTransform(-239.1,79.7,2,2);

        this.shape_496 = new cjs.Shape();
        this.shape_496.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_496.setTransform(-247.3,79.7,2,2);

        this.shape_497 = new cjs.Shape();
        this.shape_497.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_497.setTransform(-255.4,79.7,2,2);

        this.shape_498 = new cjs.Shape();
        this.shape_498.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_498.setTransform(-263.6,79.7,2,2);

        this.shape_499 = new cjs.Shape();
        this.shape_499.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_499.setTransform(-271.7,79.7,2,2);

        this.shape_500 = new cjs.Shape();
        this.shape_500.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_500.setTransform(-279.9,79.7,2,2);

        this.shape_501 = new cjs.Shape();
        this.shape_501.graphics.f("#FFFFFF").s().p("AgIAPIAAgdIARAAIAAAdg");
        this.shape_501.setTransform(-288,79.7,2,2);

        this.shape_502 = new cjs.Shape();
        this.shape_502.graphics.f("#FFFFFF").s().p("AgXAkIAAgwQAAgJAGgGQAIgJAJAAQALAAAGAJQAHAGAAAJIAAAwg");
        this.shape_502.setTransform(-241.9,125.9,2,2);

        this.shape_503 = new cjs.Shape();
        this.shape_503.graphics.f("#FFFFFF").s().p("AgXAkIAAgwQAAgJAHgGQAHgJAJAAQAKAAAHAJQAHAGAAAJIAAAwg");
        this.shape_503.setTransform(-256.7,125.9,2,2);

        this.shape_504 = new cjs.Shape();
        this.shape_504.graphics.f("#FFFFFF").s().p("AgXAkIAAgwIAAAAQAAgJAHgGQAHgJAJAAQALAAAHAJQAGAGAAAJIAAAwg");
        this.shape_504.setTransform(-271.4,125.9,2,2);

        this.shape_505 = new cjs.Shape();
        this.shape_505.graphics.f("#FFFFFF").s().p("AgXAkIAAgwQAAgJAGgGQAIgJAJAAQALAAAGAJQAHAGAAAJIAAAwg");
        this.shape_505.setTransform(-286.2,125.9,2,2);

        this.shape_506 = new cjs.Shape();
        this.shape_506.graphics.f("#FFFFFF").s().p("AgSAXIAAgbQAAgHAFgFQAGgGAHAAQAIAAAGAGQAFAFAAAHIAAAbg");
        this.shape_506.setTransform(-246.2,67,2,2);

        this.shape_507 = new cjs.Shape();
        this.shape_507.graphics.f("#FFFFFF").s().p("AgSAXIAAgbIABAAQgBgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHIAAAbg");
        this.shape_507.setTransform(-257.8,67,2,2);

        this.shape_508 = new cjs.Shape();
        this.shape_508.graphics.f("#FFFFFF").s().p("AgSAXIAAgbQAAgHAFgFQAGgGAHAAQAIAAAGAGQAFAFAAAHIAAAbg");
        this.shape_508.setTransform(-269.3,67,2,2);

        this.shape_509 = new cjs.Shape();
        this.shape_509.graphics.f("#FFFFFF").s().p("AgSAXIAAgbQAAgHAFgFQAGgGAHAAQAIAAAGAGQAFAFAAAHIAAAbg");
        this.shape_509.setTransform(-280.9,67,2,2);

        this.shape_510 = new cjs.Shape();
        this.shape_510.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_510.setTransform(-252.7,51,2,2);

        this.shape_511 = new cjs.Shape();
        this.shape_511.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_511.setTransform(-258.1,51,2,2);

        this.shape_512 = new cjs.Shape();
        this.shape_512.graphics.f("#FFFFFF").s().p("AgFANIAAgZIALAAIAAAZg");
        this.shape_512.setTransform(-263.5,51,2,2);

        this.shape_513 = new cjs.Shape();
        this.shape_513.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_513.setTransform(-268.8,51,2,2);

        this.shape_514 = new cjs.Shape();
        this.shape_514.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_514.setTransform(-274.2,51,2,2);

        this.shape_515 = new cjs.Shape();
        this.shape_515.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_515.setTransform(-252.7,42,2,2);

        this.shape_516 = new cjs.Shape();
        this.shape_516.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_516.setTransform(-258.1,42,2,2);

        this.shape_517 = new cjs.Shape();
        this.shape_517.graphics.f("#FFFFFF").s().p("AgFANIAAgZIALAAIAAAZg");
        this.shape_517.setTransform(-263.5,42,2,2);

        this.shape_518 = new cjs.Shape();
        this.shape_518.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_518.setTransform(-268.8,42,2,2);

        this.shape_519 = new cjs.Shape();
        this.shape_519.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_519.setTransform(-274.2,42,2,2);

        this.shape_520 = new cjs.Shape();
        this.shape_520.graphics.f("#FFFFFF").s().p("AgGAMIAAgXIANAAIAAAXg");
        this.shape_520.setTransform(-252.7,33,2,2);

        this.shape_521 = new cjs.Shape();
        this.shape_521.graphics.f("#FFFFFF").s().p("AgGAMIAAgXIANAAIAAAXg");
        this.shape_521.setTransform(-258.1,33,2,2);

        this.shape_522 = new cjs.Shape();
        this.shape_522.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIALAAIAAAXg");
        this.shape_522.setTransform(-263.5,33,2,2);

        this.shape_523 = new cjs.Shape();
        this.shape_523.graphics.f("#FFFFFF").s().p("AgGAMIAAgXIANAAIAAAXg");
        this.shape_523.setTransform(-268.8,33,2,2);

        this.shape_524 = new cjs.Shape();
        this.shape_524.graphics.f("#FFFFFF").s().p("AgGAMIAAgXIANAAIAAAXg");
        this.shape_524.setTransform(-274.2,33,2,2);

        this.shape_525 = new cjs.Shape();
        this.shape_525.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_525.setTransform(-252.7,24.1,2,2);

        this.shape_526 = new cjs.Shape();
        this.shape_526.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_526.setTransform(-258.1,24.1,2,2);

        this.shape_527 = new cjs.Shape();
        this.shape_527.graphics.f("#FFFFFF").s().p("AgFANIAAgZIALAAIAAAZg");
        this.shape_527.setTransform(-263.5,24.1,2,2);

        this.shape_528 = new cjs.Shape();
        this.shape_528.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_528.setTransform(-268.8,24.1,2,2);

        this.shape_529 = new cjs.Shape();
        this.shape_529.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_529.setTransform(-274.2,24.1,2,2);

        this.shape_530 = new cjs.Shape();
        this.shape_530.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_530.setTransform(-252.7,15.1,2,2);

        this.shape_531 = new cjs.Shape();
        this.shape_531.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_531.setTransform(-258.1,15.1,2,2);

        this.shape_532 = new cjs.Shape();
        this.shape_532.graphics.f("#FFFFFF").s().p("AgFANIAAgZIALAAIAAAZg");
        this.shape_532.setTransform(-263.5,15.1,2,2);

        this.shape_533 = new cjs.Shape();
        this.shape_533.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_533.setTransform(-268.8,15.1,2,2);

        this.shape_534 = new cjs.Shape();
        this.shape_534.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_534.setTransform(-274.2,15.1,2,2);

        this.shape_535 = new cjs.Shape();
        this.shape_535.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_535.setTransform(-252.7,6.2,2,2);

        this.shape_536 = new cjs.Shape();
        this.shape_536.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_536.setTransform(-258.1,6.2,2,2);

        this.shape_537 = new cjs.Shape();
        this.shape_537.graphics.f("#FFFFFF").s().p("AgFANIAAgZIALAAIAAAZg");
        this.shape_537.setTransform(-263.5,6.2,2,2);

        this.shape_538 = new cjs.Shape();
        this.shape_538.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_538.setTransform(-268.8,6.2,2,2);

        this.shape_539 = new cjs.Shape();
        this.shape_539.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_539.setTransform(-274.2,6.2,2,2);

        this.shape_540 = new cjs.Shape();
        this.shape_540.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_540.setTransform(-252.7,-2.8,2,2);

        this.shape_541 = new cjs.Shape();
        this.shape_541.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_541.setTransform(-258.1,-2.8,2,2);

        this.shape_542 = new cjs.Shape();
        this.shape_542.graphics.f("#FFFFFF").s().p("AgFANIAAgZIALAAIAAAZg");
        this.shape_542.setTransform(-263.5,-2.8,2,2);

        this.shape_543 = new cjs.Shape();
        this.shape_543.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_543.setTransform(-268.8,-2.8,2,2);

        this.shape_544 = new cjs.Shape();
        this.shape_544.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_544.setTransform(-274.2,-2.8,2,2);

        this.shape_545 = new cjs.Shape();
        this.shape_545.graphics.f("#FFFFFF").s().p("AgGAMIAAgXIANAAIAAAXg");
        this.shape_545.setTransform(-252.7,-11.8,2,2);

        this.shape_546 = new cjs.Shape();
        this.shape_546.graphics.f("#FFFFFF").s().p("AgGAMIAAgXIANAAIAAAXg");
        this.shape_546.setTransform(-258.1,-11.8,2,2);

        this.shape_547 = new cjs.Shape();
        this.shape_547.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIALAAIAAAXg");
        this.shape_547.setTransform(-263.5,-11.8,2,2);

        this.shape_548 = new cjs.Shape();
        this.shape_548.graphics.f("#FFFFFF").s().p("AgGAMIAAgXIANAAIAAAXg");
        this.shape_548.setTransform(-268.8,-11.8,2,2);

        this.shape_549 = new cjs.Shape();
        this.shape_549.graphics.f("#FFFFFF").s().p("AgGAMIAAgXIANAAIAAAXg");
        this.shape_549.setTransform(-274.2,-11.8,2,2);

        this.shape_550 = new cjs.Shape();
        this.shape_550.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_550.setTransform(-252.7,-20.7,2,2);

        this.shape_551 = new cjs.Shape();
        this.shape_551.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_551.setTransform(-258.1,-20.7,2,2);

        this.shape_552 = new cjs.Shape();
        this.shape_552.graphics.f("#FFFFFF").s().p("AgFANIAAgZIALAAIAAAZg");
        this.shape_552.setTransform(-263.5,-20.7,2,2);

        this.shape_553 = new cjs.Shape();
        this.shape_553.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_553.setTransform(-268.8,-20.7,2,2);

        this.shape_554 = new cjs.Shape();
        this.shape_554.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_554.setTransform(-274.2,-20.7,2,2);

        this.shape_555 = new cjs.Shape();
        this.shape_555.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_555.setTransform(-252.7,-29.7,2,2);

        this.shape_556 = new cjs.Shape();
        this.shape_556.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_556.setTransform(-258.1,-29.7,2,2);

        this.shape_557 = new cjs.Shape();
        this.shape_557.graphics.f("#FFFFFF").s().p("AgFANIAAgZIALAAIAAAZg");
        this.shape_557.setTransform(-263.5,-29.7,2,2);

        this.shape_558 = new cjs.Shape();
        this.shape_558.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_558.setTransform(-268.8,-29.7,2,2);

        this.shape_559 = new cjs.Shape();
        this.shape_559.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_559.setTransform(-274.2,-29.7,2,2);

        this.shape_560 = new cjs.Shape();
        this.shape_560.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_560.setTransform(-252.7,-38.6,2,2);

        this.shape_561 = new cjs.Shape();
        this.shape_561.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_561.setTransform(-258.1,-38.6,2,2);

        this.shape_562 = new cjs.Shape();
        this.shape_562.graphics.f("#FFFFFF").s().p("AgFANIAAgZIALAAIAAAZg");
        this.shape_562.setTransform(-263.5,-38.6,2,2);

        this.shape_563 = new cjs.Shape();
        this.shape_563.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_563.setTransform(-268.8,-38.6,2,2);

        this.shape_564 = new cjs.Shape();
        this.shape_564.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_564.setTransform(-274.2,-38.6,2,2);

        this.shape_565 = new cjs.Shape();
        this.shape_565.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_565.setTransform(-252.7,-47.6,2,2);

        this.shape_566 = new cjs.Shape();
        this.shape_566.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_566.setTransform(-258.1,-47.6,2,2);

        this.shape_567 = new cjs.Shape();
        this.shape_567.graphics.f("#FFFFFF").s().p("AgFANIAAgZIALAAIAAAZg");
        this.shape_567.setTransform(-263.5,-47.6,2,2);

        this.shape_568 = new cjs.Shape();
        this.shape_568.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_568.setTransform(-268.8,-47.6,2,2);

        this.shape_569 = new cjs.Shape();
        this.shape_569.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_569.setTransform(-274.2,-47.6,2,2);

        this.shape_570 = new cjs.Shape();
        this.shape_570.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_570.setTransform(-252.7,-56.5,2,2);

        this.shape_571 = new cjs.Shape();
        this.shape_571.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_571.setTransform(-258.1,-56.5,2,2);

        this.shape_572 = new cjs.Shape();
        this.shape_572.graphics.f("#FFFFFF").s().p("AgFANIAAgZIALAAIAAAZg");
        this.shape_572.setTransform(-263.5,-56.5,2,2);

        this.shape_573 = new cjs.Shape();
        this.shape_573.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_573.setTransform(-268.8,-56.5,2,2);

        this.shape_574 = new cjs.Shape();
        this.shape_574.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_574.setTransform(-274.2,-56.5,2,2);

        this.shape_575 = new cjs.Shape();
        this.shape_575.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_575.setTransform(-252.7,-65.5,2,2);

        this.shape_576 = new cjs.Shape();
        this.shape_576.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_576.setTransform(-258.1,-65.5,2,2);

        this.shape_577 = new cjs.Shape();
        this.shape_577.graphics.f("#FFFFFF").s().p("AgFANIAAgZIALAAIAAAZg");
        this.shape_577.setTransform(-263.5,-65.5,2,2);

        this.shape_578 = new cjs.Shape();
        this.shape_578.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_578.setTransform(-268.8,-65.5,2,2);

        this.shape_579 = new cjs.Shape();
        this.shape_579.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_579.setTransform(-274.2,-65.5,2,2);

        this.shape_580 = new cjs.Shape();
        this.shape_580.graphics.f("#FFFFFF").s().p("AgIAlIAAhJIARAAIAABJg");
        this.shape_580.setTransform(-269.5,-80.6,2,2);

        this.shape_581 = new cjs.Shape();
        this.shape_581.graphics.f("#FFFFFF").s().p("AgIAlIAAhJIARAAIAABJg");
        this.shape_581.setTransform(-263.4,-80.6,2,2);

        this.shape_582 = new cjs.Shape();
        this.shape_582.graphics.f("#FFFFFF").s().p("AgIAlIAAhJIAQAAIAABJg");
        this.shape_582.setTransform(-257.2,-80.6,2,2);

        this.shape_583 = new cjs.Shape();
        this.shape_583.graphics.f("#FFFFFF").s().p("AgnATQAAgOALgLQALgNARABQARgBAMANQALALAAAOg");
        this.shape_583.setTransform(-263.1,-93.9,2,2);

        this.shape_584 = new cjs.Shape();
        this.shape_584.graphics.f("#4D9BB7").s().p("AgCB0IAAjnIAFAAIAADng");
        this.shape_584.setTransform(-263.4,-146.3,2,2);

        this.shape_585 = new cjs.Shape();
        this.shape_585.graphics.f("#4D9BB7").s().p("AipKwIAAk6IAeAAIAAhDIA1gdIAApzIAYAAIAAh6IA+jYIA/DYIAAB6IAYAAIAAJzIA0AdIAABDIAfAAIAAE6g");
        this.shape_585.setTransform(-263.4,-3.4,2,2);

        this.shape_586 = new cjs.Shape();
        this.shape_586.graphics.f("#4D9BB7").s().p("EghkABpIAAjRMBDJAAAIAADRg");
        this.shape_586.setTransform(0,148.6,2,2);

        this.shape_587 = new cjs.Shape();
        this.shape_587.graphics.f("#FFFFFF").s().p("AgFAaIAAgzIALAAIAAAzg");
        this.shape_587.setTransform(-35.1,123.9,2,2);

        this.shape_588 = new cjs.Shape();
        this.shape_588.graphics.f("#FFFFFF").s().p("AgFAaIAAgzIALAAIAAAzg");
        this.shape_588.setTransform(-39.7,123.9,2,2);

        this.shape_589 = new cjs.Shape();
        this.shape_589.graphics.f("#FFFFFF").s().p("AgFAaIAAgzIALAAIAAAzg");
        this.shape_589.setTransform(-44.4,123.9,2,2);

        this.shape_590 = new cjs.Shape();
        this.shape_590.graphics.f("#FFFFFF").s().p("AgFAaIAAgzIALAAIAAAzg");
        this.shape_590.setTransform(-49,123.9,2,2);

        this.shape_591 = new cjs.Shape();
        this.shape_591.graphics.f("#FFFFFF").s().p("AgFAaIAAgzIALAAIAAAzg");
        this.shape_591.setTransform(-53.6,123.9,2,2);

        this.shape_592 = new cjs.Shape();
        this.shape_592.graphics.f("#FFFFFF").s().p("AgFAaIAAgzIALAAIAAAzg");
        this.shape_592.setTransform(-58.3,123.9,2,2);

        this.shape_593 = new cjs.Shape();
        this.shape_593.graphics.f("#FFFFFF").s().p("AgFF+IAAr7IALAAIAAL7g");
        this.shape_593.setTransform(-35.1,40,2,2);

        this.shape_594 = new cjs.Shape();
        this.shape_594.graphics.f("#FFFFFF").s().p("AgFF+IAAr7IALAAIAAL7g");
        this.shape_594.setTransform(-39.7,40,2,2);

        this.shape_595 = new cjs.Shape();
        this.shape_595.graphics.f("#FFFFFF").s().p("AgFF+IAAr7IALAAIAAL7g");
        this.shape_595.setTransform(-44.4,40,2,2);

        this.shape_596 = new cjs.Shape();
        this.shape_596.graphics.f("#FFFFFF").s().p("AgFF+IAAr7IALAAIAAL7g");
        this.shape_596.setTransform(-49,40,2,2);

        this.shape_597 = new cjs.Shape();
        this.shape_597.graphics.f("#FFFFFF").s().p("AgFF+IAAr7IALAAIAAL7g");
        this.shape_597.setTransform(-53.6,40,2,2);

        this.shape_598 = new cjs.Shape();
        this.shape_598.graphics.f("#FFFFFF").s().p("AgFF+IAAr7IALAAIAAL7g");
        this.shape_598.setTransform(-58.3,40,2,2);

        this.shape_599 = new cjs.Shape();
        this.shape_599.graphics.f("#4D9BB7").s().p("AhYG5IAAtxICyAAIAANxg");
        this.shape_599.setTransform(-46.7,42,2,2);

        this.shape_600 = new cjs.Shape();
        this.shape_600.graphics.f("#FFFFFF").s().p("AgHAYIAAgvIAPAAIAAAvg");
        this.shape_600.setTransform(180.7,160.2,2,2);

        this.shape_601 = new cjs.Shape();
        this.shape_601.graphics.f("#FFFFFF").s().p("AgHAYIAAgvIAPAAIAAAvg");
        this.shape_601.setTransform(174.9,160.2,2,2);

        this.shape_602 = new cjs.Shape();
        this.shape_602.graphics.f("#FFFFFF").s().p("AgHAYIAAgvIAPAAIAAAvg");
        this.shape_602.setTransform(197.9,160.2,2,2);

        this.shape_603 = new cjs.Shape();
        this.shape_603.graphics.f("#FFFFFF").s().p("AgHAYIAAgvIAPAAIAAAvg");
        this.shape_603.setTransform(192.2,160.2,2,2);

        this.shape_604 = new cjs.Shape();
        this.shape_604.graphics.f("#FFFFFF").s().p("AgHAYIAAgvIAPAAIAAAvg");
        this.shape_604.setTransform(186.4,160.2,2,2);

        this.shape_605 = new cjs.Shape();
        this.shape_605.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAANg");
        this.shape_605.setTransform(178.4,150.8,2,2);

        this.shape_606 = new cjs.Shape();
        this.shape_606.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAKAAIAAANg");
        this.shape_606.setTransform(174.4,150.8,2,2);

        this.shape_607 = new cjs.Shape();
        this.shape_607.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAANg");
        this.shape_607.setTransform(198.4,150.8,2,2);

        this.shape_608 = new cjs.Shape();
        this.shape_608.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAANg");
        this.shape_608.setTransform(194.4,150.8,2,2);

        this.shape_609 = new cjs.Shape();
        this.shape_609.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAANg");
        this.shape_609.setTransform(190.4,150.8,2,2);

        this.shape_610 = new cjs.Shape();
        this.shape_610.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAANg");
        this.shape_610.setTransform(186.4,150.8,2,2);

        this.shape_611 = new cjs.Shape();
        this.shape_611.graphics.f("#FFFFFF").s().p("AgFAHIAAgNIAKAAIAAANg");
        this.shape_611.setTransform(182.4,150.8,2,2);

        this.shape_612 = new cjs.Shape();
        this.shape_612.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_612.setTransform(178.4,142.4,2,2);

        this.shape_613 = new cjs.Shape();
        this.shape_613.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_613.setTransform(174.4,142.4,2,2);

        this.shape_614 = new cjs.Shape();
        this.shape_614.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_614.setTransform(198.4,142.4,2,2);

        this.shape_615 = new cjs.Shape();
        this.shape_615.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_615.setTransform(194.4,142.4,2,2);

        this.shape_616 = new cjs.Shape();
        this.shape_616.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_616.setTransform(190.4,142.4,2,2);

        this.shape_617 = new cjs.Shape();
        this.shape_617.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_617.setTransform(186.4,142.4,2,2);

        this.shape_618 = new cjs.Shape();
        this.shape_618.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_618.setTransform(182.4,142.4,2,2);

        this.shape_619 = new cjs.Shape();
        this.shape_619.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_619.setTransform(178.4,133.9,2,2);

        this.shape_620 = new cjs.Shape();
        this.shape_620.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_620.setTransform(174.4,133.9,2,2);

        this.shape_621 = new cjs.Shape();
        this.shape_621.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_621.setTransform(198.4,133.9,2,2);

        this.shape_622 = new cjs.Shape();
        this.shape_622.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_622.setTransform(194.4,133.9,2,2);

        this.shape_623 = new cjs.Shape();
        this.shape_623.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_623.setTransform(190.4,133.9,2,2);

        this.shape_624 = new cjs.Shape();
        this.shape_624.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_624.setTransform(186.4,133.9,2,2);

        this.shape_625 = new cjs.Shape();
        this.shape_625.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_625.setTransform(182.4,133.9,2,2);

        this.shape_626 = new cjs.Shape();
        this.shape_626.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_626.setTransform(178.4,125.3,2,2);

        this.shape_627 = new cjs.Shape();
        this.shape_627.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_627.setTransform(174.4,125.3,2,2);

        this.shape_628 = new cjs.Shape();
        this.shape_628.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_628.setTransform(198.4,125.3,2,2);

        this.shape_629 = new cjs.Shape();
        this.shape_629.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_629.setTransform(194.4,125.3,2,2);

        this.shape_630 = new cjs.Shape();
        this.shape_630.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_630.setTransform(190.4,125.3,2,2);

        this.shape_631 = new cjs.Shape();
        this.shape_631.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_631.setTransform(186.4,125.3,2,2);

        this.shape_632 = new cjs.Shape();
        this.shape_632.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_632.setTransform(182.4,125.3,2,2);

        this.shape_633 = new cjs.Shape();
        this.shape_633.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_633.setTransform(178.4,116.7,2,2);

        this.shape_634 = new cjs.Shape();
        this.shape_634.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_634.setTransform(174.4,116.7,2,2);

        this.shape_635 = new cjs.Shape();
        this.shape_635.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_635.setTransform(198.4,116.7,2,2);

        this.shape_636 = new cjs.Shape();
        this.shape_636.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_636.setTransform(194.4,116.7,2,2);

        this.shape_637 = new cjs.Shape();
        this.shape_637.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_637.setTransform(190.4,116.7,2,2);

        this.shape_638 = new cjs.Shape();
        this.shape_638.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_638.setTransform(186.4,116.7,2,2);

        this.shape_639 = new cjs.Shape();
        this.shape_639.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_639.setTransform(182.4,116.7,2,2);

        this.shape_640 = new cjs.Shape();
        this.shape_640.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_640.setTransform(178.4,108.1,2,2);

        this.shape_641 = new cjs.Shape();
        this.shape_641.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_641.setTransform(174.4,108.1,2,2);

        this.shape_642 = new cjs.Shape();
        this.shape_642.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_642.setTransform(198.4,108.1,2,2);

        this.shape_643 = new cjs.Shape();
        this.shape_643.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_643.setTransform(194.4,108.1,2,2);

        this.shape_644 = new cjs.Shape();
        this.shape_644.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_644.setTransform(190.4,108.1,2,2);

        this.shape_645 = new cjs.Shape();
        this.shape_645.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_645.setTransform(186.4,108.1,2,2);

        this.shape_646 = new cjs.Shape();
        this.shape_646.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_646.setTransform(182.4,108.1,2,2);

        this.shape_647 = new cjs.Shape();
        this.shape_647.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_647.setTransform(178.4,99.5,2,2);

        this.shape_648 = new cjs.Shape();
        this.shape_648.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_648.setTransform(174.4,99.5,2,2);

        this.shape_649 = new cjs.Shape();
        this.shape_649.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_649.setTransform(198.4,99.5,2,2);

        this.shape_650 = new cjs.Shape();
        this.shape_650.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_650.setTransform(194.4,99.5,2,2);

        this.shape_651 = new cjs.Shape();
        this.shape_651.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_651.setTransform(190.4,99.5,2,2);

        this.shape_652 = new cjs.Shape();
        this.shape_652.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_652.setTransform(186.4,99.5,2,2);

        this.shape_653 = new cjs.Shape();
        this.shape_653.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_653.setTransform(182.4,99.5,2,2);

        this.shape_654 = new cjs.Shape();
        this.shape_654.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_654.setTransform(178.4,90.9,2,2);

        this.shape_655 = new cjs.Shape();
        this.shape_655.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_655.setTransform(174.4,90.9,2,2);

        this.shape_656 = new cjs.Shape();
        this.shape_656.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_656.setTransform(198.4,90.9,2,2);

        this.shape_657 = new cjs.Shape();
        this.shape_657.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_657.setTransform(194.4,90.9,2,2);

        this.shape_658 = new cjs.Shape();
        this.shape_658.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_658.setTransform(190.4,90.9,2,2);

        this.shape_659 = new cjs.Shape();
        this.shape_659.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_659.setTransform(186.4,90.9,2,2);

        this.shape_660 = new cjs.Shape();
        this.shape_660.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_660.setTransform(182.4,90.9,2,2);

        this.shape_661 = new cjs.Shape();
        this.shape_661.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_661.setTransform(178.4,82.3,2,2);

        this.shape_662 = new cjs.Shape();
        this.shape_662.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_662.setTransform(174.4,82.3,2,2);

        this.shape_663 = new cjs.Shape();
        this.shape_663.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_663.setTransform(198.4,82.3,2,2);

        this.shape_664 = new cjs.Shape();
        this.shape_664.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_664.setTransform(194.4,82.3,2,2);

        this.shape_665 = new cjs.Shape();
        this.shape_665.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_665.setTransform(190.4,82.3,2,2);

        this.shape_666 = new cjs.Shape();
        this.shape_666.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_666.setTransform(186.4,82.3,2,2);

        this.shape_667 = new cjs.Shape();
        this.shape_667.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_667.setTransform(182.4,82.3,2,2);

        this.shape_668 = new cjs.Shape();
        this.shape_668.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_668.setTransform(178.4,73.8,2,2);

        this.shape_669 = new cjs.Shape();
        this.shape_669.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_669.setTransform(174.4,73.8,2,2);

        this.shape_670 = new cjs.Shape();
        this.shape_670.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_670.setTransform(198.4,73.8,2,2);

        this.shape_671 = new cjs.Shape();
        this.shape_671.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_671.setTransform(194.4,73.8,2,2);

        this.shape_672 = new cjs.Shape();
        this.shape_672.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_672.setTransform(190.4,73.8,2,2);

        this.shape_673 = new cjs.Shape();
        this.shape_673.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_673.setTransform(186.4,73.8,2,2);

        this.shape_674 = new cjs.Shape();
        this.shape_674.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_674.setTransform(182.4,73.8,2,2);

        this.shape_675 = new cjs.Shape();
        this.shape_675.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_675.setTransform(194.4,62.6,2,2);

        this.shape_676 = new cjs.Shape();
        this.shape_676.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_676.setTransform(190.4,62.6,2,2);

        this.shape_677 = new cjs.Shape();
        this.shape_677.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_677.setTransform(186.4,62.6,2,2);

        this.shape_678 = new cjs.Shape();
        this.shape_678.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_678.setTransform(182.4,62.6,2,2);

        this.shape_679 = new cjs.Shape();
        this.shape_679.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_679.setTransform(178.4,62.6,2,2);

        this.shape_680 = new cjs.Shape();
        this.shape_680.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_680.setTransform(194.4,54.3,2,2);

        this.shape_681 = new cjs.Shape();
        this.shape_681.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_681.setTransform(190.4,54.3,2,2);

        this.shape_682 = new cjs.Shape();
        this.shape_682.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_682.setTransform(186.4,54.3,2,2);

        this.shape_683 = new cjs.Shape();
        this.shape_683.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_683.setTransform(182.4,54.3,2,2);

        this.shape_684 = new cjs.Shape();
        this.shape_684.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_684.setTransform(178.4,54.3,2,2);

        this.shape_685 = new cjs.Shape();
        this.shape_685.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_685.setTransform(194.4,46.1,2,2);

        this.shape_686 = new cjs.Shape();
        this.shape_686.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_686.setTransform(190.4,46.1,2,2);

        this.shape_687 = new cjs.Shape();
        this.shape_687.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_687.setTransform(186.4,46.1,2,2);

        this.shape_688 = new cjs.Shape();
        this.shape_688.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_688.setTransform(182.4,46.1,2,2);

        this.shape_689 = new cjs.Shape();
        this.shape_689.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_689.setTransform(178.4,46.1,2,2);

        this.shape_690 = new cjs.Shape();
        this.shape_690.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_690.setTransform(194.4,37.8,2,2);

        this.shape_691 = new cjs.Shape();
        this.shape_691.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_691.setTransform(190.4,37.8,2,2);

        this.shape_692 = new cjs.Shape();
        this.shape_692.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_692.setTransform(186.4,37.8,2,2);

        this.shape_693 = new cjs.Shape();
        this.shape_693.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_693.setTransform(182.4,37.8,2,2);

        this.shape_694 = new cjs.Shape();
        this.shape_694.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_694.setTransform(178.4,37.8,2,2);

        this.shape_695 = new cjs.Shape();
        this.shape_695.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_695.setTransform(194.4,29.5,2,2);

        this.shape_696 = new cjs.Shape();
        this.shape_696.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_696.setTransform(190.4,29.5,2,2);

        this.shape_697 = new cjs.Shape();
        this.shape_697.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_697.setTransform(186.4,29.5,2,2);

        this.shape_698 = new cjs.Shape();
        this.shape_698.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_698.setTransform(182.4,29.5,2,2);

        this.shape_699 = new cjs.Shape();
        this.shape_699.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_699.setTransform(178.4,29.5,2,2);

        this.shape_700 = new cjs.Shape();
        this.shape_700.graphics.f("#4D9BB7").s().p("AhQF7IAAnaIASgTIAAjOIAgg5IA9AAIAhA5IAADOIARATIAAHag");
        this.shape_700.setTransform(186.5,90.2,2,2);

        this.shape_701 = new cjs.Shape();
        this.shape_701.graphics.f("#FFFFFF").s().p("AgHAYIAAgvIAOAAIAAAvg");
        this.shape_701.setTransform(-116.1,123.7,2,2);

        this.shape_702 = new cjs.Shape();
        this.shape_702.graphics.f("#FFFFFF").s().p("AgHAYIAAgvIAPAAIAAAvg");
        this.shape_702.setTransform(-121.8,123.7,2,2);

        this.shape_703 = new cjs.Shape();
        this.shape_703.graphics.f("#FFFFFF").s().p("AgHAYIAAgvIAPAAIAAAvg");
        this.shape_703.setTransform(-98.8,123.7,2,2);

        this.shape_704 = new cjs.Shape();
        this.shape_704.graphics.f("#FFFFFF").s().p("AgHAYIAAgvIAPAAIAAAvg");
        this.shape_704.setTransform(-104.6,123.7,2,2);

        this.shape_705 = new cjs.Shape();
        this.shape_705.graphics.f("#FFFFFF").s().p("AgHAYIAAgvIAPAAIAAAvg");
        this.shape_705.setTransform(-110.3,123.7,2,2);

        this.shape_706 = new cjs.Shape();
        this.shape_706.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAANg");
        this.shape_706.setTransform(-118.3,114.3,2,2);

        this.shape_707 = new cjs.Shape();
        this.shape_707.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAANg");
        this.shape_707.setTransform(-122.3,114.3,2,2);

        this.shape_708 = new cjs.Shape();
        this.shape_708.graphics.f("#FFFFFF").s().p("AgFAHIAAgNIAKAAIAAANg");
        this.shape_708.setTransform(-98.4,114.3,2,2);

        this.shape_709 = new cjs.Shape();
        this.shape_709.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAKAAIAAANg");
        this.shape_709.setTransform(-102.4,114.3,2,2);

        this.shape_710 = new cjs.Shape();
        this.shape_710.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAANg");
        this.shape_710.setTransform(-106.3,114.3,2,2);

        this.shape_711 = new cjs.Shape();
        this.shape_711.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAANg");
        this.shape_711.setTransform(-110.3,114.3,2,2);

        this.shape_712 = new cjs.Shape();
        this.shape_712.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAANg");
        this.shape_712.setTransform(-114.3,114.3,2,2);

        this.shape_713 = new cjs.Shape();
        this.shape_713.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_713.setTransform(-118.3,106,2,2);

        this.shape_714 = new cjs.Shape();
        this.shape_714.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_714.setTransform(-122.3,106,2,2);

        this.shape_715 = new cjs.Shape();
        this.shape_715.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_715.setTransform(-98.4,106,2,2);

        this.shape_716 = new cjs.Shape();
        this.shape_716.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_716.setTransform(-102.4,106,2,2);

        this.shape_717 = new cjs.Shape();
        this.shape_717.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_717.setTransform(-106.3,106,2,2);

        this.shape_718 = new cjs.Shape();
        this.shape_718.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_718.setTransform(-110.3,106,2,2);

        this.shape_719 = new cjs.Shape();
        this.shape_719.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_719.setTransform(-114.3,106,2,2);

        this.shape_720 = new cjs.Shape();
        this.shape_720.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_720.setTransform(-118.3,97.4,2,2);

        this.shape_721 = new cjs.Shape();
        this.shape_721.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_721.setTransform(-122.3,97.4,2,2);

        this.shape_722 = new cjs.Shape();
        this.shape_722.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_722.setTransform(-98.4,97.4,2,2);

        this.shape_723 = new cjs.Shape();
        this.shape_723.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_723.setTransform(-102.4,97.4,2,2);

        this.shape_724 = new cjs.Shape();
        this.shape_724.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_724.setTransform(-106.3,97.4,2,2);

        this.shape_725 = new cjs.Shape();
        this.shape_725.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_725.setTransform(-110.3,97.4,2,2);

        this.shape_726 = new cjs.Shape();
        this.shape_726.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_726.setTransform(-114.3,97.4,2,2);

        this.shape_727 = new cjs.Shape();
        this.shape_727.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_727.setTransform(-118.3,88.8,2,2);

        this.shape_728 = new cjs.Shape();
        this.shape_728.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_728.setTransform(-122.3,88.8,2,2);

        this.shape_729 = new cjs.Shape();
        this.shape_729.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_729.setTransform(-98.4,88.8,2,2);

        this.shape_730 = new cjs.Shape();
        this.shape_730.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_730.setTransform(-102.4,88.8,2,2);

        this.shape_731 = new cjs.Shape();
        this.shape_731.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_731.setTransform(-106.3,88.8,2,2);

        this.shape_732 = new cjs.Shape();
        this.shape_732.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_732.setTransform(-110.3,88.8,2,2);

        this.shape_733 = new cjs.Shape();
        this.shape_733.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_733.setTransform(-114.3,88.8,2,2);

        this.shape_734 = new cjs.Shape();
        this.shape_734.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_734.setTransform(-118.3,80.2,2,2);

        this.shape_735 = new cjs.Shape();
        this.shape_735.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_735.setTransform(-122.3,80.2,2,2);

        this.shape_736 = new cjs.Shape();
        this.shape_736.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_736.setTransform(-98.4,80.2,2,2);

        this.shape_737 = new cjs.Shape();
        this.shape_737.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_737.setTransform(-102.4,80.2,2,2);

        this.shape_738 = new cjs.Shape();
        this.shape_738.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_738.setTransform(-106.3,80.2,2,2);

        this.shape_739 = new cjs.Shape();
        this.shape_739.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_739.setTransform(-110.3,80.2,2,2);

        this.shape_740 = new cjs.Shape();
        this.shape_740.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_740.setTransform(-114.3,80.2,2,2);

        this.shape_741 = new cjs.Shape();
        this.shape_741.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_741.setTransform(-118.3,71.6,2,2);

        this.shape_742 = new cjs.Shape();
        this.shape_742.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_742.setTransform(-122.3,71.6,2,2);

        this.shape_743 = new cjs.Shape();
        this.shape_743.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_743.setTransform(-98.4,71.6,2,2);

        this.shape_744 = new cjs.Shape();
        this.shape_744.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_744.setTransform(-102.4,71.6,2,2);

        this.shape_745 = new cjs.Shape();
        this.shape_745.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_745.setTransform(-106.3,71.6,2,2);

        this.shape_746 = new cjs.Shape();
        this.shape_746.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_746.setTransform(-110.3,71.6,2,2);

        this.shape_747 = new cjs.Shape();
        this.shape_747.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_747.setTransform(-114.3,71.6,2,2);

        this.shape_748 = new cjs.Shape();
        this.shape_748.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_748.setTransform(-118.3,63,2,2);

        this.shape_749 = new cjs.Shape();
        this.shape_749.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_749.setTransform(-122.3,63,2,2);

        this.shape_750 = new cjs.Shape();
        this.shape_750.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_750.setTransform(-98.4,63,2,2);

        this.shape_751 = new cjs.Shape();
        this.shape_751.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_751.setTransform(-102.4,63,2,2);

        this.shape_752 = new cjs.Shape();
        this.shape_752.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_752.setTransform(-106.3,63,2,2);

        this.shape_753 = new cjs.Shape();
        this.shape_753.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_753.setTransform(-110.3,63,2,2);

        this.shape_754 = new cjs.Shape();
        this.shape_754.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_754.setTransform(-114.3,63,2,2);

        this.shape_755 = new cjs.Shape();
        this.shape_755.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_755.setTransform(-118.3,54.4,2,2);

        this.shape_756 = new cjs.Shape();
        this.shape_756.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_756.setTransform(-122.3,54.4,2,2);

        this.shape_757 = new cjs.Shape();
        this.shape_757.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_757.setTransform(-98.4,54.4,2,2);

        this.shape_758 = new cjs.Shape();
        this.shape_758.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_758.setTransform(-102.4,54.4,2,2);

        this.shape_759 = new cjs.Shape();
        this.shape_759.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_759.setTransform(-106.3,54.4,2,2);

        this.shape_760 = new cjs.Shape();
        this.shape_760.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_760.setTransform(-110.3,54.4,2,2);

        this.shape_761 = new cjs.Shape();
        this.shape_761.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_761.setTransform(-114.3,54.4,2,2);

        this.shape_762 = new cjs.Shape();
        this.shape_762.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_762.setTransform(-118.3,45.9,2,2);

        this.shape_763 = new cjs.Shape();
        this.shape_763.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_763.setTransform(-122.3,45.9,2,2);

        this.shape_764 = new cjs.Shape();
        this.shape_764.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_764.setTransform(-98.4,45.9,2,2);

        this.shape_765 = new cjs.Shape();
        this.shape_765.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_765.setTransform(-102.4,45.9,2,2);

        this.shape_766 = new cjs.Shape();
        this.shape_766.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_766.setTransform(-106.3,45.9,2,2);

        this.shape_767 = new cjs.Shape();
        this.shape_767.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_767.setTransform(-110.3,45.9,2,2);

        this.shape_768 = new cjs.Shape();
        this.shape_768.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_768.setTransform(-114.3,45.9,2,2);

        this.shape_769 = new cjs.Shape();
        this.shape_769.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_769.setTransform(-118.3,37.3,2,2);

        this.shape_770 = new cjs.Shape();
        this.shape_770.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_770.setTransform(-122.3,37.3,2,2);

        this.shape_771 = new cjs.Shape();
        this.shape_771.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIAKAAIAAAbg");
        this.shape_771.setTransform(-98.4,37.3,2,2);

        this.shape_772 = new cjs.Shape();
        this.shape_772.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_772.setTransform(-102.4,37.3,2,2);

        this.shape_773 = new cjs.Shape();
        this.shape_773.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_773.setTransform(-106.3,37.3,2,2);

        this.shape_774 = new cjs.Shape();
        this.shape_774.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_774.setTransform(-110.3,37.3,2,2);

        this.shape_775 = new cjs.Shape();
        this.shape_775.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_775.setTransform(-114.3,37.3,2,2);

        this.shape_776 = new cjs.Shape();
        this.shape_776.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_776.setTransform(-102.4,26.1,2,2);

        this.shape_777 = new cjs.Shape();
        this.shape_777.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_777.setTransform(-106.3,26.1,2,2);

        this.shape_778 = new cjs.Shape();
        this.shape_778.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_778.setTransform(-110.3,26.1,2,2);

        this.shape_779 = new cjs.Shape();
        this.shape_779.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_779.setTransform(-114.3,26.1,2,2);

        this.shape_780 = new cjs.Shape();
        this.shape_780.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_780.setTransform(-118.3,26.1,2,2);

        this.shape_781 = new cjs.Shape();
        this.shape_781.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_781.setTransform(-102.4,17.9,2,2);

        this.shape_782 = new cjs.Shape();
        this.shape_782.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_782.setTransform(-106.3,17.9,2,2);

        this.shape_783 = new cjs.Shape();
        this.shape_783.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_783.setTransform(-110.3,17.9,2,2);

        this.shape_784 = new cjs.Shape();
        this.shape_784.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_784.setTransform(-114.3,17.9,2,2);

        this.shape_785 = new cjs.Shape();
        this.shape_785.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_785.setTransform(-118.3,17.9,2,2);

        this.shape_786 = new cjs.Shape();
        this.shape_786.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_786.setTransform(-102.4,9.6,2,2);

        this.shape_787 = new cjs.Shape();
        this.shape_787.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_787.setTransform(-106.3,9.6,2,2);

        this.shape_788 = new cjs.Shape();
        this.shape_788.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_788.setTransform(-110.3,9.6,2,2);

        this.shape_789 = new cjs.Shape();
        this.shape_789.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_789.setTransform(-114.3,9.6,2,2);

        this.shape_790 = new cjs.Shape();
        this.shape_790.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_790.setTransform(-118.3,9.6,2,2);

        this.shape_791 = new cjs.Shape();
        this.shape_791.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_791.setTransform(-102.4,1.3,2,2);

        this.shape_792 = new cjs.Shape();
        this.shape_792.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_792.setTransform(-106.3,1.3,2,2);

        this.shape_793 = new cjs.Shape();
        this.shape_793.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_793.setTransform(-110.3,1.3,2,2);

        this.shape_794 = new cjs.Shape();
        this.shape_794.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_794.setTransform(-114.3,1.3,2,2);

        this.shape_795 = new cjs.Shape();
        this.shape_795.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_795.setTransform(-118.3,1.3,2,2);

        this.shape_796 = new cjs.Shape();
        this.shape_796.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAKAAIAAAbg");
        this.shape_796.setTransform(-102.4,-7,2,2);

        this.shape_797 = new cjs.Shape();
        this.shape_797.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_797.setTransform(-106.3,-7,2,2);

        this.shape_798 = new cjs.Shape();
        this.shape_798.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_798.setTransform(-110.3,-7,2,2);

        this.shape_799 = new cjs.Shape();
        this.shape_799.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_799.setTransform(-114.3,-7,2,2);

        this.shape_800 = new cjs.Shape();
        this.shape_800.graphics.f("#FFFFFF").s().p("AgEAOIAAgbIAJAAIAAAbg");
        this.shape_800.setTransform(-118.3,-7,2,2);

        this.shape_801 = new cjs.Shape();
        this.shape_801.graphics.f("#4D9BB7").s().p("AhQF6IAAnZIARgUIAAjNIAhg5IA9AAIAgA5IAADNIASAUIAAHZg");
        this.shape_801.setTransform(-110.2,53.7,2,2);

        this.shape_802 = new cjs.Shape();
        this.shape_802.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_802.setTransform(389.6,131.8,2,2);

        this.shape_803 = new cjs.Shape();
        this.shape_803.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_803.setTransform(384.4,131.8,2,2);

        this.shape_804 = new cjs.Shape();
        this.shape_804.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_804.setTransform(379.1,131.8,2,2);

        this.shape_805 = new cjs.Shape();
        this.shape_805.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_805.setTransform(373.9,131.8,2,2);

        this.shape_806 = new cjs.Shape();
        this.shape_806.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_806.setTransform(368.7,131.8,2,2);

        this.shape_807 = new cjs.Shape();
        this.shape_807.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_807.setTransform(389.6,127.8,2,2);

        this.shape_808 = new cjs.Shape();
        this.shape_808.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_808.setTransform(384.4,127.8,2,2);

        this.shape_809 = new cjs.Shape();
        this.shape_809.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_809.setTransform(379.1,127.8,2,2);

        this.shape_810 = new cjs.Shape();
        this.shape_810.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_810.setTransform(373.9,127.8,2,2);

        this.shape_811 = new cjs.Shape();
        this.shape_811.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_811.setTransform(368.7,127.8,2,2);

        this.shape_812 = new cjs.Shape();
        this.shape_812.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_812.setTransform(389.6,123.7,2,2);

        this.shape_813 = new cjs.Shape();
        this.shape_813.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_813.setTransform(384.4,123.7,2,2);

        this.shape_814 = new cjs.Shape();
        this.shape_814.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_814.setTransform(379.1,123.7,2,2);

        this.shape_815 = new cjs.Shape();
        this.shape_815.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_815.setTransform(373.9,123.7,2,2);

        this.shape_816 = new cjs.Shape();
        this.shape_816.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_816.setTransform(368.7,123.7,2,2);

        this.shape_817 = new cjs.Shape();
        this.shape_817.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_817.setTransform(389.6,119.7,2,2);

        this.shape_818 = new cjs.Shape();
        this.shape_818.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_818.setTransform(384.4,119.7,2,2);

        this.shape_819 = new cjs.Shape();
        this.shape_819.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_819.setTransform(379.1,119.7,2,2);

        this.shape_820 = new cjs.Shape();
        this.shape_820.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_820.setTransform(373.9,119.7,2,2);

        this.shape_821 = new cjs.Shape();
        this.shape_821.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_821.setTransform(368.7,119.7,2,2);

        this.shape_822 = new cjs.Shape();
        this.shape_822.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_822.setTransform(389.6,115.7,2,2);

        this.shape_823 = new cjs.Shape();
        this.shape_823.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_823.setTransform(384.4,115.7,2,2);

        this.shape_824 = new cjs.Shape();
        this.shape_824.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_824.setTransform(379.1,115.7,2,2);

        this.shape_825 = new cjs.Shape();
        this.shape_825.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_825.setTransform(373.9,115.7,2,2);

        this.shape_826 = new cjs.Shape();
        this.shape_826.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_826.setTransform(368.7,115.7,2,2);

        this.shape_827 = new cjs.Shape();
        this.shape_827.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_827.setTransform(389.6,111.6,2,2);

        this.shape_828 = new cjs.Shape();
        this.shape_828.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_828.setTransform(384.4,111.6,2,2);

        this.shape_829 = new cjs.Shape();
        this.shape_829.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_829.setTransform(379.1,111.6,2,2);

        this.shape_830 = new cjs.Shape();
        this.shape_830.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_830.setTransform(373.9,111.6,2,2);

        this.shape_831 = new cjs.Shape();
        this.shape_831.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_831.setTransform(368.7,111.6,2,2);

        this.shape_832 = new cjs.Shape();
        this.shape_832.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_832.setTransform(389.6,107.6,2,2);

        this.shape_833 = new cjs.Shape();
        this.shape_833.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_833.setTransform(384.4,107.6,2,2);

        this.shape_834 = new cjs.Shape();
        this.shape_834.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_834.setTransform(379.1,107.6,2,2);

        this.shape_835 = new cjs.Shape();
        this.shape_835.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_835.setTransform(373.9,107.6,2,2);

        this.shape_836 = new cjs.Shape();
        this.shape_836.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_836.setTransform(368.7,107.6,2,2);

        this.shape_837 = new cjs.Shape();
        this.shape_837.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_837.setTransform(389.6,103.6,2,2);

        this.shape_838 = new cjs.Shape();
        this.shape_838.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_838.setTransform(384.4,103.6,2,2);

        this.shape_839 = new cjs.Shape();
        this.shape_839.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_839.setTransform(379.1,103.6,2,2);

        this.shape_840 = new cjs.Shape();
        this.shape_840.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_840.setTransform(373.9,103.6,2,2);

        this.shape_841 = new cjs.Shape();
        this.shape_841.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_841.setTransform(368.7,103.6,2,2);

        this.shape_842 = new cjs.Shape();
        this.shape_842.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_842.setTransform(389.6,99.5,2,2);

        this.shape_843 = new cjs.Shape();
        this.shape_843.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_843.setTransform(384.4,99.5,2,2);

        this.shape_844 = new cjs.Shape();
        this.shape_844.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_844.setTransform(379.1,99.5,2,2);

        this.shape_845 = new cjs.Shape();
        this.shape_845.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_845.setTransform(373.9,99.5,2,2);

        this.shape_846 = new cjs.Shape();
        this.shape_846.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_846.setTransform(368.7,99.5,2,2);

        this.shape_847 = new cjs.Shape();
        this.shape_847.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_847.setTransform(389.6,95.5,2,2);

        this.shape_848 = new cjs.Shape();
        this.shape_848.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_848.setTransform(384.4,95.5,2,2);

        this.shape_849 = new cjs.Shape();
        this.shape_849.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_849.setTransform(379.1,95.5,2,2);

        this.shape_850 = new cjs.Shape();
        this.shape_850.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_850.setTransform(373.9,95.5,2,2);

        this.shape_851 = new cjs.Shape();
        this.shape_851.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_851.setTransform(368.7,95.5,2,2);

        this.shape_852 = new cjs.Shape();
        this.shape_852.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_852.setTransform(389.6,91.5,2,2);

        this.shape_853 = new cjs.Shape();
        this.shape_853.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_853.setTransform(384.4,91.5,2,2);

        this.shape_854 = new cjs.Shape();
        this.shape_854.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_854.setTransform(379.1,91.5,2,2);

        this.shape_855 = new cjs.Shape();
        this.shape_855.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_855.setTransform(373.9,91.5,2,2);

        this.shape_856 = new cjs.Shape();
        this.shape_856.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_856.setTransform(368.7,91.5,2,2);

        this.shape_857 = new cjs.Shape();
        this.shape_857.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_857.setTransform(389.6,87.4,2,2);

        this.shape_858 = new cjs.Shape();
        this.shape_858.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_858.setTransform(384.4,87.4,2,2);

        this.shape_859 = new cjs.Shape();
        this.shape_859.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_859.setTransform(379.1,87.4,2,2);

        this.shape_860 = new cjs.Shape();
        this.shape_860.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_860.setTransform(373.9,87.4,2,2);

        this.shape_861 = new cjs.Shape();
        this.shape_861.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_861.setTransform(368.7,87.4,2,2);

        this.shape_862 = new cjs.Shape();
        this.shape_862.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_862.setTransform(387,81.4,2,2);

        this.shape_863 = new cjs.Shape();
        this.shape_863.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_863.setTransform(381.7,81.4,2,2);

        this.shape_864 = new cjs.Shape();
        this.shape_864.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_864.setTransform(376.5,81.4,2,2);

        this.shape_865 = new cjs.Shape();
        this.shape_865.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_865.setTransform(371.3,81.4,2,2);

        this.shape_866 = new cjs.Shape();
        this.shape_866.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_866.setTransform(387,77.3,2,2);

        this.shape_867 = new cjs.Shape();
        this.shape_867.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_867.setTransform(381.7,77.3,2,2);

        this.shape_868 = new cjs.Shape();
        this.shape_868.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_868.setTransform(376.5,77.3,2,2);

        this.shape_869 = new cjs.Shape();
        this.shape_869.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_869.setTransform(371.3,77.3,2,2);

        this.shape_870 = new cjs.Shape();
        this.shape_870.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_870.setTransform(387,73.2,2,2);

        this.shape_871 = new cjs.Shape();
        this.shape_871.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_871.setTransform(381.7,73.2,2,2);

        this.shape_872 = new cjs.Shape();
        this.shape_872.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_872.setTransform(376.5,73.2,2,2);

        this.shape_873 = new cjs.Shape();
        this.shape_873.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_873.setTransform(371.3,73.2,2,2);

        this.shape_874 = new cjs.Shape();
        this.shape_874.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_874.setTransform(387,69,2,2);

        this.shape_875 = new cjs.Shape();
        this.shape_875.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_875.setTransform(381.7,69,2,2);

        this.shape_876 = new cjs.Shape();
        this.shape_876.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_876.setTransform(376.5,69,2,2);

        this.shape_877 = new cjs.Shape();
        this.shape_877.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_877.setTransform(371.3,69,2,2);

        this.shape_878 = new cjs.Shape();
        this.shape_878.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_878.setTransform(387,64.9,2,2);

        this.shape_879 = new cjs.Shape();
        this.shape_879.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_879.setTransform(381.7,64.9,2,2);

        this.shape_880 = new cjs.Shape();
        this.shape_880.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_880.setTransform(376.5,64.9,2,2);

        this.shape_881 = new cjs.Shape();
        this.shape_881.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_881.setTransform(371.3,64.9,2,2);

        this.shape_882 = new cjs.Shape();
        this.shape_882.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_882.setTransform(387,60.8,2,2);

        this.shape_883 = new cjs.Shape();
        this.shape_883.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_883.setTransform(381.7,60.8,2,2);

        this.shape_884 = new cjs.Shape();
        this.shape_884.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_884.setTransform(376.5,60.8,2,2);

        this.shape_885 = new cjs.Shape();
        this.shape_885.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_885.setTransform(371.3,60.8,2,2);

        this.shape_886 = new cjs.Shape();
        this.shape_886.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_886.setTransform(387,56.7,2,2);

        this.shape_887 = new cjs.Shape();
        this.shape_887.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_887.setTransform(381.7,56.7,2,2);

        this.shape_888 = new cjs.Shape();
        this.shape_888.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_888.setTransform(376.5,56.7,2,2);

        this.shape_889 = new cjs.Shape();
        this.shape_889.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_889.setTransform(371.3,56.7,2,2);

        this.shape_890 = new cjs.Shape();
        this.shape_890.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_890.setTransform(387,52.6,2,2);

        this.shape_891 = new cjs.Shape();
        this.shape_891.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_891.setTransform(381.7,52.6,2,2);

        this.shape_892 = new cjs.Shape();
        this.shape_892.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_892.setTransform(376.5,52.6,2,2);

        this.shape_893 = new cjs.Shape();
        this.shape_893.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_893.setTransform(371.3,52.6,2,2);

        this.shape_894 = new cjs.Shape();
        this.shape_894.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_894.setTransform(384.4,46.7,2,2);

        this.shape_895 = new cjs.Shape();
        this.shape_895.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_895.setTransform(379.2,46.7,2,2);

        this.shape_896 = new cjs.Shape();
        this.shape_896.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_896.setTransform(373.9,46.7,2,2);

        this.shape_897 = new cjs.Shape();
        this.shape_897.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_897.setTransform(384.4,42.7,2,2);

        this.shape_898 = new cjs.Shape();
        this.shape_898.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_898.setTransform(379.2,42.7,2,2);

        this.shape_899 = new cjs.Shape();
        this.shape_899.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_899.setTransform(373.9,42.7,2,2);

        this.shape_900 = new cjs.Shape();
        this.shape_900.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_900.setTransform(384.4,38.7,2,2);

        this.shape_901 = new cjs.Shape();
        this.shape_901.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_901.setTransform(379.2,38.7,2,2);

        this.shape_902 = new cjs.Shape();
        this.shape_902.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_902.setTransform(373.9,38.7,2,2);

        this.shape_903 = new cjs.Shape();
        this.shape_903.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_903.setTransform(384.4,34.7,2,2);

        this.shape_904 = new cjs.Shape();
        this.shape_904.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_904.setTransform(379.2,34.7,2,2);

        this.shape_905 = new cjs.Shape();
        this.shape_905.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_905.setTransform(373.9,34.7,2,2);

        this.shape_906 = new cjs.Shape();
        this.shape_906.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_906.setTransform(384.4,30.7,2,2);

        this.shape_907 = new cjs.Shape();
        this.shape_907.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_907.setTransform(379.2,30.7,2,2);

        this.shape_908 = new cjs.Shape();
        this.shape_908.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_908.setTransform(373.9,30.7,2,2);

        this.shape_909 = new cjs.Shape();
        this.shape_909.graphics.f("#4D9BB7").s().p("AgHAXIAAgtIAPAAIAAAtg");
        this.shape_909.setTransform(384.4,142.6,2,2);

        this.shape_910 = new cjs.Shape();
        this.shape_910.graphics.f("#4D9BB7").s().p("AgHAXIAAgtIAPAAIAAAtg");
        this.shape_910.setTransform(379.2,142.6,2,2);

        this.shape_911 = new cjs.Shape();
        this.shape_911.graphics.f("#4D9BB7").s().p("AgHAXIAAgtIAPAAIAAAtg");
        this.shape_911.setTransform(373.9,142.6,2,2);

        this.shape_912 = new cjs.Shape();
        this.shape_912.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_912.setTransform(384.4,26.7,2,2);

        this.shape_913 = new cjs.Shape();
        this.shape_913.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_913.setTransform(379.2,26.7,2,2);

        this.shape_914 = new cjs.Shape();
        this.shape_914.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
        this.shape_914.setTransform(373.9,26.7,2,2);

        this.shape_915 = new cjs.Shape();
        this.shape_915.graphics.f("#4D9BB7").s().p("AhIE9IAAlHIANAAIAAitIANAAIAAiFIBdAAIAACFIANAAIAACtIAMAAIAAFHg");
        this.shape_915.setTransform(379.1,84.6,2,2);

        this.shape_916 = new cjs.Shape();
        this.shape_916.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_916.setTransform(-323.8,127.7,2,2);

        this.shape_917 = new cjs.Shape();
        this.shape_917.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_917.setTransform(-334.6,127.7,2,2);

        this.shape_918 = new cjs.Shape();
        this.shape_918.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_918.setTransform(-345.5,127.7,2,2);

        this.shape_919 = new cjs.Shape();
        this.shape_919.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_919.setTransform(-356.3,127.7,2,2);

        this.shape_920 = new cjs.Shape();
        this.shape_920.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_920.setTransform(-367.2,127.7,2,2);

        this.shape_921 = new cjs.Shape();
        this.shape_921.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_921.setTransform(-323.8,122,2,2);

        this.shape_922 = new cjs.Shape();
        this.shape_922.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_922.setTransform(-334.6,122,2,2);

        this.shape_923 = new cjs.Shape();
        this.shape_923.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_923.setTransform(-345.5,122,2,2);

        this.shape_924 = new cjs.Shape();
        this.shape_924.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_924.setTransform(-356.3,122,2,2);

        this.shape_925 = new cjs.Shape();
        this.shape_925.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_925.setTransform(-367.2,122,2,2);

        this.shape_926 = new cjs.Shape();
        this.shape_926.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_926.setTransform(-323.8,116.4,2,2);

        this.shape_927 = new cjs.Shape();
        this.shape_927.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_927.setTransform(-334.6,116.4,2,2);

        this.shape_928 = new cjs.Shape();
        this.shape_928.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_928.setTransform(-345.5,116.4,2,2);

        this.shape_929 = new cjs.Shape();
        this.shape_929.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_929.setTransform(-356.3,116.4,2,2);

        this.shape_930 = new cjs.Shape();
        this.shape_930.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_930.setTransform(-367.2,116.4,2,2);

        this.shape_931 = new cjs.Shape();
        this.shape_931.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_931.setTransform(-323.8,110.7,2,2);

        this.shape_932 = new cjs.Shape();
        this.shape_932.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_932.setTransform(-334.6,110.7,2,2);

        this.shape_933 = new cjs.Shape();
        this.shape_933.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_933.setTransform(-345.5,110.7,2,2);

        this.shape_934 = new cjs.Shape();
        this.shape_934.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_934.setTransform(-356.3,110.7,2,2);

        this.shape_935 = new cjs.Shape();
        this.shape_935.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_935.setTransform(-367.2,110.7,2,2);

        this.shape_936 = new cjs.Shape();
        this.shape_936.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_936.setTransform(-323.8,105,2,2);

        this.shape_937 = new cjs.Shape();
        this.shape_937.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_937.setTransform(-334.6,105,2,2);

        this.shape_938 = new cjs.Shape();
        this.shape_938.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_938.setTransform(-345.5,105,2,2);

        this.shape_939 = new cjs.Shape();
        this.shape_939.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_939.setTransform(-356.3,105,2,2);

        this.shape_940 = new cjs.Shape();
        this.shape_940.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_940.setTransform(-367.2,105,2,2);

        this.shape_941 = new cjs.Shape();
        this.shape_941.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_941.setTransform(-323.8,99.3,2,2);

        this.shape_942 = new cjs.Shape();
        this.shape_942.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_942.setTransform(-334.6,99.3,2,2);

        this.shape_943 = new cjs.Shape();
        this.shape_943.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_943.setTransform(-345.5,99.3,2,2);

        this.shape_944 = new cjs.Shape();
        this.shape_944.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_944.setTransform(-356.3,99.3,2,2);

        this.shape_945 = new cjs.Shape();
        this.shape_945.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_945.setTransform(-367.2,99.3,2,2);

        this.shape_946 = new cjs.Shape();
        this.shape_946.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_946.setTransform(-323.8,93.6,2,2);

        this.shape_947 = new cjs.Shape();
        this.shape_947.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_947.setTransform(-334.6,93.6,2,2);

        this.shape_948 = new cjs.Shape();
        this.shape_948.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_948.setTransform(-345.5,93.6,2,2);

        this.shape_949 = new cjs.Shape();
        this.shape_949.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_949.setTransform(-356.3,93.6,2,2);

        this.shape_950 = new cjs.Shape();
        this.shape_950.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_950.setTransform(-367.2,93.6,2,2);

        this.shape_951 = new cjs.Shape();
        this.shape_951.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_951.setTransform(-323.8,88,2,2);

        this.shape_952 = new cjs.Shape();
        this.shape_952.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_952.setTransform(-334.6,88,2,2);

        this.shape_953 = new cjs.Shape();
        this.shape_953.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_953.setTransform(-345.5,88,2,2);

        this.shape_954 = new cjs.Shape();
        this.shape_954.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_954.setTransform(-356.3,88,2,2);

        this.shape_955 = new cjs.Shape();
        this.shape_955.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_955.setTransform(-367.2,88,2,2);

        this.shape_956 = new cjs.Shape();
        this.shape_956.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_956.setTransform(-323.8,82.3,2,2);

        this.shape_957 = new cjs.Shape();
        this.shape_957.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_957.setTransform(-334.6,82.3,2,2);

        this.shape_958 = new cjs.Shape();
        this.shape_958.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_958.setTransform(-345.5,82.3,2,2);

        this.shape_959 = new cjs.Shape();
        this.shape_959.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_959.setTransform(-356.3,82.3,2,2);

        this.shape_960 = new cjs.Shape();
        this.shape_960.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_960.setTransform(-367.2,82.3,2,2);

        this.shape_961 = new cjs.Shape();
        this.shape_961.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_961.setTransform(-323.8,76.6,2,2);

        this.shape_962 = new cjs.Shape();
        this.shape_962.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_962.setTransform(-334.6,76.6,2,2);

        this.shape_963 = new cjs.Shape();
        this.shape_963.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_963.setTransform(-345.5,76.6,2,2);

        this.shape_964 = new cjs.Shape();
        this.shape_964.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_964.setTransform(-356.3,76.6,2,2);

        this.shape_965 = new cjs.Shape();
        this.shape_965.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_965.setTransform(-367.2,76.6,2,2);

        this.shape_966 = new cjs.Shape();
        this.shape_966.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_966.setTransform(-323.8,70.9,2,2);

        this.shape_967 = new cjs.Shape();
        this.shape_967.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_967.setTransform(-334.6,70.9,2,2);

        this.shape_968 = new cjs.Shape();
        this.shape_968.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_968.setTransform(-345.5,70.9,2,2);

        this.shape_969 = new cjs.Shape();
        this.shape_969.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_969.setTransform(-356.3,70.9,2,2);

        this.shape_970 = new cjs.Shape();
        this.shape_970.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_970.setTransform(-367.2,70.9,2,2);

        this.shape_971 = new cjs.Shape();
        this.shape_971.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_971.setTransform(-323.8,65.2,2,2);

        this.shape_972 = new cjs.Shape();
        this.shape_972.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_972.setTransform(-334.6,65.2,2,2);

        this.shape_973 = new cjs.Shape();
        this.shape_973.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_973.setTransform(-345.5,65.2,2,2);

        this.shape_974 = new cjs.Shape();
        this.shape_974.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_974.setTransform(-356.3,65.2,2,2);

        this.shape_975 = new cjs.Shape();
        this.shape_975.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_975.setTransform(-367.2,65.2,2,2);

        this.shape_976 = new cjs.Shape();
        this.shape_976.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_976.setTransform(-329.2,56.7,2,2);

        this.shape_977 = new cjs.Shape();
        this.shape_977.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_977.setTransform(-340.1,56.7,2,2);

        this.shape_978 = new cjs.Shape();
        this.shape_978.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_978.setTransform(-350.9,56.7,2,2);

        this.shape_979 = new cjs.Shape();
        this.shape_979.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_979.setTransform(-361.8,56.7,2,2);

        this.shape_980 = new cjs.Shape();
        this.shape_980.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_980.setTransform(-329.2,50.9,2,2);

        this.shape_981 = new cjs.Shape();
        this.shape_981.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_981.setTransform(-340.1,50.9,2,2);

        this.shape_982 = new cjs.Shape();
        this.shape_982.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_982.setTransform(-350.9,50.9,2,2);

        this.shape_983 = new cjs.Shape();
        this.shape_983.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_983.setTransform(-361.8,50.9,2,2);

        this.shape_984 = new cjs.Shape();
        this.shape_984.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_984.setTransform(-329.2,45.1,2,2);

        this.shape_985 = new cjs.Shape();
        this.shape_985.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_985.setTransform(-340.1,45.1,2,2);

        this.shape_986 = new cjs.Shape();
        this.shape_986.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_986.setTransform(-350.9,45.1,2,2);

        this.shape_987 = new cjs.Shape();
        this.shape_987.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_987.setTransform(-361.8,45.1,2,2);

        this.shape_988 = new cjs.Shape();
        this.shape_988.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_988.setTransform(-329.2,39.3,2,2);

        this.shape_989 = new cjs.Shape();
        this.shape_989.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_989.setTransform(-340.1,39.3,2,2);

        this.shape_990 = new cjs.Shape();
        this.shape_990.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_990.setTransform(-350.9,39.3,2,2);

        this.shape_991 = new cjs.Shape();
        this.shape_991.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_991.setTransform(-361.8,39.3,2,2);

        this.shape_992 = new cjs.Shape();
        this.shape_992.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_992.setTransform(-329.2,33.5,2,2);

        this.shape_993 = new cjs.Shape();
        this.shape_993.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_993.setTransform(-340.1,33.5,2,2);

        this.shape_994 = new cjs.Shape();
        this.shape_994.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_994.setTransform(-350.9,33.5,2,2);

        this.shape_995 = new cjs.Shape();
        this.shape_995.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_995.setTransform(-361.8,33.5,2,2);

        this.shape_996 = new cjs.Shape();
        this.shape_996.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_996.setTransform(-329.2,27.7,2,2);

        this.shape_997 = new cjs.Shape();
        this.shape_997.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_997.setTransform(-340.1,27.7,2,2);

        this.shape_998 = new cjs.Shape();
        this.shape_998.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_998.setTransform(-350.9,27.7,2,2);

        this.shape_999 = new cjs.Shape();
        this.shape_999.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_999.setTransform(-361.8,27.7,2,2);

        this.shape_1000 = new cjs.Shape();
        this.shape_1000.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1000.setTransform(-329.2,21.9,2,2);

        this.shape_1001 = new cjs.Shape();
        this.shape_1001.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1001.setTransform(-340.1,21.9,2,2);

        this.shape_1002 = new cjs.Shape();
        this.shape_1002.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1002.setTransform(-350.9,21.9,2,2);

        this.shape_1003 = new cjs.Shape();
        this.shape_1003.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1003.setTransform(-361.8,21.9,2,2);

        this.shape_1004 = new cjs.Shape();
        this.shape_1004.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1004.setTransform(-329.2,16.1,2,2);

        this.shape_1005 = new cjs.Shape();
        this.shape_1005.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1005.setTransform(-340.1,16.1,2,2);

        this.shape_1006 = new cjs.Shape();
        this.shape_1006.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1006.setTransform(-350.9,16.1,2,2);

        this.shape_1007 = new cjs.Shape();
        this.shape_1007.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1007.setTransform(-361.8,16.1,2,2);

        this.shape_1008 = new cjs.Shape();
        this.shape_1008.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1008.setTransform(-334.6,7.8,2,2);

        this.shape_1009 = new cjs.Shape();
        this.shape_1009.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1009.setTransform(-345.4,7.8,2,2);

        this.shape_1010 = new cjs.Shape();
        this.shape_1010.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1010.setTransform(-356.3,7.8,2,2);

        this.shape_1011 = new cjs.Shape();
        this.shape_1011.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1011.setTransform(-334.6,2.1,2,2);

        this.shape_1012 = new cjs.Shape();
        this.shape_1012.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1012.setTransform(-345.4,2.1,2,2);

        this.shape_1013 = new cjs.Shape();
        this.shape_1013.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1013.setTransform(-356.3,2.1,2,2);

        this.shape_1014 = new cjs.Shape();
        this.shape_1014.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1014.setTransform(-334.6,-3.5,2,2);

        this.shape_1015 = new cjs.Shape();
        this.shape_1015.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1015.setTransform(-345.4,-3.5,2,2);

        this.shape_1016 = new cjs.Shape();
        this.shape_1016.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1016.setTransform(-356.3,-3.5,2,2);

        this.shape_1017 = new cjs.Shape();
        this.shape_1017.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1017.setTransform(-334.6,-9.1,2,2);

        this.shape_1018 = new cjs.Shape();
        this.shape_1018.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1018.setTransform(-345.4,-9.1,2,2);

        this.shape_1019 = new cjs.Shape();
        this.shape_1019.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1019.setTransform(-356.3,-9.1,2,2);

        this.shape_1020 = new cjs.Shape();
        this.shape_1020.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1020.setTransform(-334.6,-14.8,2,2);

        this.shape_1021 = new cjs.Shape();
        this.shape_1021.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1021.setTransform(-345.4,-14.8,2,2);

        this.shape_1022 = new cjs.Shape();
        this.shape_1022.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1022.setTransform(-356.3,-14.8,2,2);

        this.shape_1023 = new cjs.Shape();
        this.shape_1023.graphics.f("#4D9BB7").s().p("AgPAgIAAg/IAfAAIAAA/g");
        this.shape_1023.setTransform(-334.6,143,2,2);

        this.shape_1024 = new cjs.Shape();
        this.shape_1024.graphics.f("#4D9BB7").s().p("AgPAgIAAg/IAfAAIAAA/g");
        this.shape_1024.setTransform(-345.4,143,2,2);

        this.shape_1025 = new cjs.Shape();
        this.shape_1025.graphics.f("#4D9BB7").s().p("AgPAgIAAg/IAfAAIAAA/g");
        this.shape_1025.setTransform(-356.3,143,2,2);

        this.shape_1026 = new cjs.Shape();
        this.shape_1026.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1026.setTransform(-334.6,-20.4,2,2);

        this.shape_1027 = new cjs.Shape();
        this.shape_1027.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1027.setTransform(-345.4,-20.4,2,2);

        this.shape_1028 = new cjs.Shape();
        this.shape_1028.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
        this.shape_1028.setTransform(-356.3,-20.4,2,2);

        this.shape_1029 = new cjs.Shape();
        this.shape_1029.graphics.f("#4D9BB7").s().p("AiVG+IAAnMIAaAAIAAj1IAcAAIAAi6IC/AAIAAC6IAcAAIAAD1IAaAAIAAHMg");
        this.shape_1029.setTransform(-345.4,61.2,2,2);

        this.shape_1030 = new cjs.Shape();
        this.shape_1030.graphics.f("#FFFFFF").s().p("AgFCHIAAkNIALAAIAAENg");
        this.shape_1030.setTransform(-74.8,102.1,2,2);

        this.shape_1031 = new cjs.Shape();
        this.shape_1031.graphics.f("#FFFFFF").s().p("AgJARIAAghIAUAAIAAAhg");
        this.shape_1031.setTransform(-79.3,135.7,2,2);

        this.shape_1032 = new cjs.Shape();
        this.shape_1032.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_1032.setTransform(-85.3,135.7,2,2);

        this.shape_1033 = new cjs.Shape();
        this.shape_1033.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAhg");
        this.shape_1033.setTransform(-91.3,135.7,2,2);

        this.shape_1034 = new cjs.Shape();
        this.shape_1034.graphics.f("#FFFFFF").s().p("AgFElIAApJIALAAIAAJJg");
        this.shape_1034.setTransform(-80.2,70.6,2,2);

        this.shape_1035 = new cjs.Shape();
        this.shape_1035.graphics.f("#FFFFFF").s().p("AgFElIAApJIALAAIAAJJg");
        this.shape_1035.setTransform(-85.7,70.6,2,2);

        this.shape_1036 = new cjs.Shape();
        this.shape_1036.graphics.f("#FFFFFF").s().p("AgFElIAApJIALAAIAAJJg");
        this.shape_1036.setTransform(-91.1,70.6,2,2);

        this.shape_1037 = new cjs.Shape();
        this.shape_1037.graphics.f("#FFFFFF").s().p("AgFCHIAAkNIALAAIAAENg");
        this.shape_1037.setTransform(-96.6,102.1,2,2);

        this.shape_1038 = new cjs.Shape();
        this.shape_1038.graphics.f("#4D9BB7").s().p("AhPGDIAAlaIASgTIAAhiIAQgPIAAi3IArgxIAAg+IAFAAIAAA+IAqAxIAAC3IARAPIAABiIASATIAAFag");
        this.shape_1038.setTransform(-85.1,63,2,2);

        this.shape_1039 = new cjs.Shape();
        this.shape_1039.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1039.setTransform(414.6,59.2,2,2);

        this.shape_1040 = new cjs.Shape();
        this.shape_1040.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1040.setTransform(409.2,59.2,2,2);

        this.shape_1041 = new cjs.Shape();
        this.shape_1041.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1041.setTransform(403.9,59.2,2,2);

        this.shape_1042 = new cjs.Shape();
        this.shape_1042.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1042.setTransform(414.6,64.9,2,2);

        this.shape_1043 = new cjs.Shape();
        this.shape_1043.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1043.setTransform(409.2,64.9,2,2);

        this.shape_1044 = new cjs.Shape();
        this.shape_1044.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1044.setTransform(403.9,64.9,2,2);

        this.shape_1045 = new cjs.Shape();
        this.shape_1045.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1045.setTransform(414.6,70.7,2,2);

        this.shape_1046 = new cjs.Shape();
        this.shape_1046.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1046.setTransform(409.2,70.7,2,2);

        this.shape_1047 = new cjs.Shape();
        this.shape_1047.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1047.setTransform(403.9,70.7,2,2);

        this.shape_1048 = new cjs.Shape();
        this.shape_1048.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1048.setTransform(414.6,76.4,2,2);

        this.shape_1049 = new cjs.Shape();
        this.shape_1049.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1049.setTransform(409.2,76.4,2,2);

        this.shape_1050 = new cjs.Shape();
        this.shape_1050.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1050.setTransform(403.9,76.4,2,2);

        this.shape_1051 = new cjs.Shape();
        this.shape_1051.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1051.setTransform(414.6,82.1,2,2);

        this.shape_1052 = new cjs.Shape();
        this.shape_1052.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1052.setTransform(409.2,82.1,2,2);

        this.shape_1053 = new cjs.Shape();
        this.shape_1053.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1053.setTransform(403.9,82.1,2,2);

        this.shape_1054 = new cjs.Shape();
        this.shape_1054.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1054.setTransform(419.9,87.9,2,2);

        this.shape_1055 = new cjs.Shape();
        this.shape_1055.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1055.setTransform(414.6,87.9,2,2);

        this.shape_1056 = new cjs.Shape();
        this.shape_1056.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1056.setTransform(409.2,87.9,2,2);

        this.shape_1057 = new cjs.Shape();
        this.shape_1057.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1057.setTransform(403.9,87.9,2,2);

        this.shape_1058 = new cjs.Shape();
        this.shape_1058.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1058.setTransform(419.9,93.6,2,2);

        this.shape_1059 = new cjs.Shape();
        this.shape_1059.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1059.setTransform(414.6,93.6,2,2);

        this.shape_1060 = new cjs.Shape();
        this.shape_1060.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1060.setTransform(409.2,93.6,2,2);

        this.shape_1061 = new cjs.Shape();
        this.shape_1061.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1061.setTransform(403.9,93.6,2,2);

        this.shape_1062 = new cjs.Shape();
        this.shape_1062.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1062.setTransform(419.9,99.3,2,2);

        this.shape_1063 = new cjs.Shape();
        this.shape_1063.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1063.setTransform(414.6,99.3,2,2);

        this.shape_1064 = new cjs.Shape();
        this.shape_1064.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1064.setTransform(409.2,99.3,2,2);

        this.shape_1065 = new cjs.Shape();
        this.shape_1065.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1065.setTransform(403.9,99.3,2,2);

        this.shape_1066 = new cjs.Shape();
        this.shape_1066.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1066.setTransform(419.9,105,2,2);

        this.shape_1067 = new cjs.Shape();
        this.shape_1067.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1067.setTransform(414.6,105,2,2);

        this.shape_1068 = new cjs.Shape();
        this.shape_1068.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1068.setTransform(409.2,105,2,2);

        this.shape_1069 = new cjs.Shape();
        this.shape_1069.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1069.setTransform(403.9,105,2,2);

        this.shape_1070 = new cjs.Shape();
        this.shape_1070.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1070.setTransform(425.2,110.8,2,2);

        this.shape_1071 = new cjs.Shape();
        this.shape_1071.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1071.setTransform(419.9,110.8,2,2);

        this.shape_1072 = new cjs.Shape();
        this.shape_1072.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1072.setTransform(414.6,110.8,2,2);

        this.shape_1073 = new cjs.Shape();
        this.shape_1073.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1073.setTransform(409.2,110.8,2,2);

        this.shape_1074 = new cjs.Shape();
        this.shape_1074.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1074.setTransform(403.9,110.8,2,2);

        this.shape_1075 = new cjs.Shape();
        this.shape_1075.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1075.setTransform(425.2,116.5,2,2);

        this.shape_1076 = new cjs.Shape();
        this.shape_1076.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1076.setTransform(419.9,116.5,2,2);

        this.shape_1077 = new cjs.Shape();
        this.shape_1077.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1077.setTransform(414.6,116.5,2,2);

        this.shape_1078 = new cjs.Shape();
        this.shape_1078.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1078.setTransform(409.2,116.5,2,2);

        this.shape_1079 = new cjs.Shape();
        this.shape_1079.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1079.setTransform(403.9,116.5,2,2);

        this.shape_1080 = new cjs.Shape();
        this.shape_1080.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1080.setTransform(425.2,122.2,2,2);

        this.shape_1081 = new cjs.Shape();
        this.shape_1081.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1081.setTransform(419.9,122.2,2,2);

        this.shape_1082 = new cjs.Shape();
        this.shape_1082.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1082.setTransform(414.6,122.2,2,2);

        this.shape_1083 = new cjs.Shape();
        this.shape_1083.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1083.setTransform(409.2,122.2,2,2);

        this.shape_1084 = new cjs.Shape();
        this.shape_1084.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1084.setTransform(403.9,122.2,2,2);

        this.shape_1085 = new cjs.Shape();
        this.shape_1085.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1085.setTransform(425.2,128,2,2);

        this.shape_1086 = new cjs.Shape();
        this.shape_1086.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1086.setTransform(419.9,128,2,2);

        this.shape_1087 = new cjs.Shape();
        this.shape_1087.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1087.setTransform(414.6,128,2,2);

        this.shape_1088 = new cjs.Shape();
        this.shape_1088.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1088.setTransform(409.2,128,2,2);

        this.shape_1089 = new cjs.Shape();
        this.shape_1089.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1089.setTransform(403.9,128,2,2);

        this.shape_1090 = new cjs.Shape();
        this.shape_1090.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1090.setTransform(425.2,133.7,2,2);

        this.shape_1091 = new cjs.Shape();
        this.shape_1091.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1091.setTransform(419.9,133.7,2,2);

        this.shape_1092 = new cjs.Shape();
        this.shape_1092.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1092.setTransform(414.6,133.7,2,2);

        this.shape_1093 = new cjs.Shape();
        this.shape_1093.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1093.setTransform(409.2,133.7,2,2);

        this.shape_1094 = new cjs.Shape();
        this.shape_1094.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
        this.shape_1094.setTransform(403.9,133.7,2,2);

        this.shape_1095 = new cjs.Shape();
        this.shape_1095.graphics.f("#FFFFFF").s().p("AgHAOIAAgbIAPAAIAAAbg");
        this.shape_1095.setTransform(425.2,145.7,2,2);

        this.shape_1096 = new cjs.Shape();
        this.shape_1096.graphics.f("#FFFFFF").s().p("AgHAOIAAgbIAPAAIAAAbg");
        this.shape_1096.setTransform(419.9,145.7,2,2);

        this.shape_1097 = new cjs.Shape();
        this.shape_1097.graphics.f("#FFFFFF").s().p("AgHAOIAAgbIAPAAIAAAbg");
        this.shape_1097.setTransform(414.6,145.7,2,2);

        this.shape_1098 = new cjs.Shape();
        this.shape_1098.graphics.f("#FFFFFF").s().p("AgHAOIAAgbIAPAAIAAAbg");
        this.shape_1098.setTransform(409.2,145.7,2,2);

        this.shape_1099 = new cjs.Shape();
        this.shape_1099.graphics.f("#FFFFFF").s().p("AgHAOIAAgbIAPAAIAAAbg");
        this.shape_1099.setTransform(403.9,145.7,2,2);

        this.shape_1100 = new cjs.Shape();
        this.shape_1100.graphics.f("#FFFFFF").s().p("AgHAGIAAgLIAPAAIAAALg");
        this.shape_1100.setTransform(425.2,138.5,2,2);

        this.shape_1101 = new cjs.Shape();
        this.shape_1101.graphics.f("#FFFFFF").s().p("AgHAGIAAgLIAPAAIAAALg");
        this.shape_1101.setTransform(419.9,138.5,2,2);

        this.shape_1102 = new cjs.Shape();
        this.shape_1102.graphics.f("#FFFFFF").s().p("AgHAGIAAgLIAPAAIAAALg");
        this.shape_1102.setTransform(414.6,138.5,2,2);

        this.shape_1103 = new cjs.Shape();
        this.shape_1103.graphics.f("#FFFFFF").s().p("AgHAGIAAgLIAPAAIAAALg");
        this.shape_1103.setTransform(409.2,138.5,2,2);

        this.shape_1104 = new cjs.Shape();
        this.shape_1104.graphics.f("#FFFFFF").s().p("AgHAGIAAgLIAPAAIAAALg");
        this.shape_1104.setTransform(403.9,138.5,2,2);

        this.shape_1105 = new cjs.Shape();
        this.shape_1105.graphics.f("#4D9BB7").s().p("AhMDyIAAnjIBnAAIAACfIAbAAIAAB2IAXAAIAADOg");
        this.shape_1105.setTransform(414.4,100.4,2,2);

        this.shape_1106 = new cjs.Shape();
        this.shape_1106.graphics.f("#FFFFFF").s().p("AgGAOIAAgaIANAAIAAAag");
        this.shape_1106.setTransform(-413.6,18.8,2,2);

        this.shape_1107 = new cjs.Shape();
        this.shape_1107.graphics.f("#FFFFFF").s().p("AgHAOIAAgaIAOAAIAAAag");
        this.shape_1107.setTransform(-418.5,18.8,2,2);

        this.shape_1108 = new cjs.Shape();
        this.shape_1108.graphics.f("#FFFFFF").s().p("AgGAOIAAgaIANAAIAAAag");
        this.shape_1108.setTransform(-423.3,18.8,2,2);

        this.shape_1109 = new cjs.Shape();
        this.shape_1109.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_1109.setTransform(-413.6,26.4,2,2);

        this.shape_1110 = new cjs.Shape();
        this.shape_1110.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAOAAIAAAZg");
        this.shape_1110.setTransform(-418.5,26.4,2,2);

        this.shape_1111 = new cjs.Shape();
        this.shape_1111.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_1111.setTransform(-423.3,26.4,2,2);

        this.shape_1112 = new cjs.Shape();
        this.shape_1112.graphics.f("#FFFFFF").s().p("AgGANIAAgaIANAAIAAAag");
        this.shape_1112.setTransform(-413.6,33.9,2,2);

        this.shape_1113 = new cjs.Shape();
        this.shape_1113.graphics.f("#FFFFFF").s().p("AgHANIAAgaIAOAAIAAAag");
        this.shape_1113.setTransform(-418.5,33.9,2,2);

        this.shape_1114 = new cjs.Shape();
        this.shape_1114.graphics.f("#FFFFFF").s().p("AgGANIAAgaIANAAIAAAag");
        this.shape_1114.setTransform(-423.3,33.9,2,2);

        this.shape_1115 = new cjs.Shape();
        this.shape_1115.graphics.f("#FFFFFF").s().p("AgGAOIAAgaIANAAIAAAag");
        this.shape_1115.setTransform(-413.6,41.5,2,2);

        this.shape_1116 = new cjs.Shape();
        this.shape_1116.graphics.f("#FFFFFF").s().p("AgHAOIAAgaIAOAAIAAAag");
        this.shape_1116.setTransform(-418.5,41.5,2,2);

        this.shape_1117 = new cjs.Shape();
        this.shape_1117.graphics.f("#FFFFFF").s().p("AgGAOIAAgaIANAAIAAAag");
        this.shape_1117.setTransform(-423.3,41.5,2,2);

        this.shape_1118 = new cjs.Shape();
        this.shape_1118.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_1118.setTransform(-413.6,49.1,2,2);

        this.shape_1119 = new cjs.Shape();
        this.shape_1119.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAOAAIAAAZg");
        this.shape_1119.setTransform(-418.5,49.1,2,2);

        this.shape_1120 = new cjs.Shape();
        this.shape_1120.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_1120.setTransform(-423.3,49.1,2,2);

        this.shape_1121 = new cjs.Shape();
        this.shape_1121.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAPAAIAAAZg");
        this.shape_1121.setTransform(-408.8,56.7,2,2);

        this.shape_1122 = new cjs.Shape();
        this.shape_1122.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_1122.setTransform(-413.6,56.7,2,2);

        this.shape_1123 = new cjs.Shape();
        this.shape_1123.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAOAAIAAAZg");
        this.shape_1123.setTransform(-418.5,56.7,2,2);

        this.shape_1124 = new cjs.Shape();
        this.shape_1124.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_1124.setTransform(-423.3,56.7,2,2);

        this.shape_1125 = new cjs.Shape();
        this.shape_1125.graphics.f("#FFFFFF").s().p("AgHAOIAAgaIAPAAIAAAag");
        this.shape_1125.setTransform(-408.8,64.2,2,2);

        this.shape_1126 = new cjs.Shape();
        this.shape_1126.graphics.f("#FFFFFF").s().p("AgGAOIAAgaIANAAIAAAag");
        this.shape_1126.setTransform(-413.6,64.2,2,2);

        this.shape_1127 = new cjs.Shape();
        this.shape_1127.graphics.f("#FFFFFF").s().p("AgHAOIAAgaIAOAAIAAAag");
        this.shape_1127.setTransform(-418.5,64.2,2,2);

        this.shape_1128 = new cjs.Shape();
        this.shape_1128.graphics.f("#FFFFFF").s().p("AgGAOIAAgaIANAAIAAAag");
        this.shape_1128.setTransform(-423.3,64.2,2,2);

        this.shape_1129 = new cjs.Shape();
        this.shape_1129.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAPAAIAAAZg");
        this.shape_1129.setTransform(-408.8,71.8,2,2);

        this.shape_1130 = new cjs.Shape();
        this.shape_1130.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_1130.setTransform(-413.6,71.8,2,2);

        this.shape_1131 = new cjs.Shape();
        this.shape_1131.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAOAAIAAAZg");
        this.shape_1131.setTransform(-418.5,71.8,2,2);

        this.shape_1132 = new cjs.Shape();
        this.shape_1132.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_1132.setTransform(-423.3,71.8,2,2);

        this.shape_1133 = new cjs.Shape();
        this.shape_1133.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAPAAIAAAZg");
        this.shape_1133.setTransform(-408.8,79.4,2,2);

        this.shape_1134 = new cjs.Shape();
        this.shape_1134.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_1134.setTransform(-413.6,79.4,2,2);

        this.shape_1135 = new cjs.Shape();
        this.shape_1135.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAOAAIAAAZg");
        this.shape_1135.setTransform(-418.5,79.4,2,2);

        this.shape_1136 = new cjs.Shape();
        this.shape_1136.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_1136.setTransform(-423.3,79.4,2,2);

        this.shape_1137 = new cjs.Shape();
        this.shape_1137.graphics.f("#FFFFFF").s().p("AgHAOIAAgaIAPAAIAAAag");
        this.shape_1137.setTransform(-404,86.9,2,2);

        this.shape_1138 = new cjs.Shape();
        this.shape_1138.graphics.f("#FFFFFF").s().p("AgHAOIAAgaIAPAAIAAAag");
        this.shape_1138.setTransform(-408.8,86.9,2,2);

        this.shape_1139 = new cjs.Shape();
        this.shape_1139.graphics.f("#FFFFFF").s().p("AgGAOIAAgaIANAAIAAAag");
        this.shape_1139.setTransform(-413.6,86.9,2,2);

        this.shape_1140 = new cjs.Shape();
        this.shape_1140.graphics.f("#FFFFFF").s().p("AgHAOIAAgaIAOAAIAAAag");
        this.shape_1140.setTransform(-418.5,86.9,2,2);

        this.shape_1141 = new cjs.Shape();
        this.shape_1141.graphics.f("#FFFFFF").s().p("AgGAOIAAgaIANAAIAAAag");
        this.shape_1141.setTransform(-423.3,86.9,2,2);

        this.shape_1142 = new cjs.Shape();
        this.shape_1142.graphics.f("#FFFFFF").s().p("AgHANIAAgaIAPAAIAAAag");
        this.shape_1142.setTransform(-404,94.5,2,2);

        this.shape_1143 = new cjs.Shape();
        this.shape_1143.graphics.f("#FFFFFF").s().p("AgHANIAAgaIAPAAIAAAag");
        this.shape_1143.setTransform(-408.8,94.5,2,2);

        this.shape_1144 = new cjs.Shape();
        this.shape_1144.graphics.f("#FFFFFF").s().p("AgGANIAAgaIANAAIAAAag");
        this.shape_1144.setTransform(-413.6,94.5,2,2);

        this.shape_1145 = new cjs.Shape();
        this.shape_1145.graphics.f("#FFFFFF").s().p("AgHANIAAgaIAOAAIAAAag");
        this.shape_1145.setTransform(-418.5,94.5,2,2);

        this.shape_1146 = new cjs.Shape();
        this.shape_1146.graphics.f("#FFFFFF").s().p("AgGANIAAgaIANAAIAAAag");
        this.shape_1146.setTransform(-423.3,94.5,2,2);

        this.shape_1147 = new cjs.Shape();
        this.shape_1147.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAPAAIAAAZg");
        this.shape_1147.setTransform(-404,102.1,2,2);

        this.shape_1148 = new cjs.Shape();
        this.shape_1148.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAPAAIAAAZg");
        this.shape_1148.setTransform(-408.8,102.1,2,2);

        this.shape_1149 = new cjs.Shape();
        this.shape_1149.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_1149.setTransform(-413.6,102.1,2,2);

        this.shape_1150 = new cjs.Shape();
        this.shape_1150.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAOAAIAAAZg");
        this.shape_1150.setTransform(-418.5,102.1,2,2);

        this.shape_1151 = new cjs.Shape();
        this.shape_1151.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_1151.setTransform(-423.3,102.1,2,2);

        this.shape_1152 = new cjs.Shape();
        this.shape_1152.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAPAAIAAAZg");
        this.shape_1152.setTransform(-404,109.7,2,2);

        this.shape_1153 = new cjs.Shape();
        this.shape_1153.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAPAAIAAAZg");
        this.shape_1153.setTransform(-408.8,109.7,2,2);

        this.shape_1154 = new cjs.Shape();
        this.shape_1154.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_1154.setTransform(-413.6,109.7,2,2);

        this.shape_1155 = new cjs.Shape();
        this.shape_1155.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAOAAIAAAZg");
        this.shape_1155.setTransform(-418.5,109.7,2,2);

        this.shape_1156 = new cjs.Shape();
        this.shape_1156.graphics.f("#FFFFFF").s().p("AgGANIAAgZIANAAIAAAZg");
        this.shape_1156.setTransform(-423.3,109.7,2,2);

        this.shape_1157 = new cjs.Shape();
        this.shape_1157.graphics.f("#FFFFFF").s().p("AgHANIAAgaIAPAAIAAAag");
        this.shape_1157.setTransform(-404,117.2,2,2);

        this.shape_1158 = new cjs.Shape();
        this.shape_1158.graphics.f("#FFFFFF").s().p("AgHANIAAgaIAPAAIAAAag");
        this.shape_1158.setTransform(-408.8,117.2,2,2);

        this.shape_1159 = new cjs.Shape();
        this.shape_1159.graphics.f("#FFFFFF").s().p("AgGANIAAgaIANAAIAAAag");
        this.shape_1159.setTransform(-413.6,117.2,2,2);

        this.shape_1160 = new cjs.Shape();
        this.shape_1160.graphics.f("#FFFFFF").s().p("AgHANIAAgaIAOAAIAAAag");
        this.shape_1160.setTransform(-418.5,117.2,2,2);

        this.shape_1161 = new cjs.Shape();
        this.shape_1161.graphics.f("#FFFFFF").s().p("AgGANIAAgaIANAAIAAAag");
        this.shape_1161.setTransform(-423.3,117.2,2,2);

        this.shape_1162 = new cjs.Shape();
        this.shape_1162.graphics.f("#FFFFFF").s().p("AgHASIAAgjIAPAAIAAAjg");
        this.shape_1162.setTransform(-404,133.1,2,2);

        this.shape_1163 = new cjs.Shape();
        this.shape_1163.graphics.f("#FFFFFF").s().p("AgHASIAAgjIAPAAIAAAjg");
        this.shape_1163.setTransform(-408.8,133.1,2,2);

        this.shape_1164 = new cjs.Shape();
        this.shape_1164.graphics.f("#FFFFFF").s().p("AgGASIAAgjIANAAIAAAjg");
        this.shape_1164.setTransform(-413.6,133.1,2,2);

        this.shape_1165 = new cjs.Shape();
        this.shape_1165.graphics.f("#FFFFFF").s().p("AgHASIAAgjIAOAAIAAAjg");
        this.shape_1165.setTransform(-418.5,133.1,2,2);

        this.shape_1166 = new cjs.Shape();
        this.shape_1166.graphics.f("#FFFFFF").s().p("AgGASIAAgjIANAAIAAAjg");
        this.shape_1166.setTransform(-423.3,133.1,2,2);

        this.shape_1167 = new cjs.Shape();
        this.shape_1167.graphics.f("#FFFFFF").s().p("AgHAHIAAgNIAPAAIAAANg");
        this.shape_1167.setTransform(-404,123.6,2,2);

        this.shape_1168 = new cjs.Shape();
        this.shape_1168.graphics.f("#FFFFFF").s().p("AgHAHIAAgNIAPAAIAAANg");
        this.shape_1168.setTransform(-408.8,123.6,2,2);

        this.shape_1169 = new cjs.Shape();
        this.shape_1169.graphics.f("#FFFFFF").s().p("AgGAHIAAgNIANAAIAAANg");
        this.shape_1169.setTransform(-413.6,123.6,2,2);

        this.shape_1170 = new cjs.Shape();
        this.shape_1170.graphics.f("#FFFFFF").s().p("AgHAHIAAgNIAOAAIAAANg");
        this.shape_1170.setTransform(-418.5,123.6,2,2);

        this.shape_1171 = new cjs.Shape();
        this.shape_1171.graphics.f("#FFFFFF").s().p("AgGAHIAAgNIANAAIAAANg");
        this.shape_1171.setTransform(-423.3,123.6,2,2);

        this.shape_1172 = new cjs.Shape();
        this.shape_1172.graphics.f("#4D9BB7").s().p("AhFFAIAAp+IBeAAIAADRIAYAAIAACdIAVAAIAAEQg");
        this.shape_1172.setTransform(-413.7,73.2,2,2);

        this.shape_1173 = new cjs.Shape();
        this.shape_1173.graphics.f("#4D9BB7").s().p("AgEAVIAAgpIAJAAIAAApg");
        this.shape_1173.setTransform(356.1,128.6,2,2);

        this.shape_1174 = new cjs.Shape();
        this.shape_1174.graphics.f("#4D9BB7").s().p("AgEAVIAAgpIAJAAIAAApg");
        this.shape_1174.setTransform(352.2,128.6,2,2);

        this.shape_1175 = new cjs.Shape();
        this.shape_1175.graphics.f("#4D9BB7").s().p("AgEAVIAAgpIAKAAIAAApg");
        this.shape_1175.setTransform(348.3,128.6,2,2);

        this.shape_1176 = new cjs.Shape();
        this.shape_1176.graphics.f("#4D9BB7").s().p("AgFAVIAAgpIAKAAIAAApg");
        this.shape_1176.setTransform(344.4,128.6,2,2);

        this.shape_1177 = new cjs.Shape();
        this.shape_1177.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAJAAIAAAXg");
        this.shape_1177.setTransform(356.1,117.8,2,2);

        this.shape_1178 = new cjs.Shape();
        this.shape_1178.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAJAAIAAAXg");
        this.shape_1178.setTransform(352.2,117.8,2,2);

        this.shape_1179 = new cjs.Shape();
        this.shape_1179.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAKAAIAAAXg");
        this.shape_1179.setTransform(348.3,117.8,2,2);

        this.shape_1180 = new cjs.Shape();
        this.shape_1180.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIAKAAIAAAXg");
        this.shape_1180.setTransform(344.4,117.8,2,2);

        this.shape_1181 = new cjs.Shape();
        this.shape_1181.graphics.f("#FFFFFF").s().p("AgEALIAAgVIAJAAIAAAVg");
        this.shape_1181.setTransform(356.1,110.2,2,2);

        this.shape_1182 = new cjs.Shape();
        this.shape_1182.graphics.f("#FFFFFF").s().p("AgEALIAAgVIAJAAIAAAVg");
        this.shape_1182.setTransform(352.2,110.2,2,2);

        this.shape_1183 = new cjs.Shape();
        this.shape_1183.graphics.f("#FFFFFF").s().p("AgEALIAAgVIAKAAIAAAVg");
        this.shape_1183.setTransform(348.3,110.2,2,2);

        this.shape_1184 = new cjs.Shape();
        this.shape_1184.graphics.f("#FFFFFF").s().p("AgFALIAAgVIAKAAIAAAVg");
        this.shape_1184.setTransform(344.4,110.2,2,2);

        this.shape_1185 = new cjs.Shape();
        this.shape_1185.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAJAAIAAAXg");
        this.shape_1185.setTransform(356.1,102.7,2,2);

        this.shape_1186 = new cjs.Shape();
        this.shape_1186.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAJAAIAAAXg");
        this.shape_1186.setTransform(352.2,102.7,2,2);

        this.shape_1187 = new cjs.Shape();
        this.shape_1187.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAKAAIAAAXg");
        this.shape_1187.setTransform(348.3,102.7,2,2);

        this.shape_1188 = new cjs.Shape();
        this.shape_1188.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIAKAAIAAAXg");
        this.shape_1188.setTransform(344.4,102.7,2,2);

        this.shape_1189 = new cjs.Shape();
        this.shape_1189.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAJAAIAAAXg");
        this.shape_1189.setTransform(356.1,95.2,2,2);

        this.shape_1190 = new cjs.Shape();
        this.shape_1190.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAJAAIAAAXg");
        this.shape_1190.setTransform(352.2,95.2,2,2);

        this.shape_1191 = new cjs.Shape();
        this.shape_1191.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAKAAIAAAXg");
        this.shape_1191.setTransform(348.3,95.2,2,2);

        this.shape_1192 = new cjs.Shape();
        this.shape_1192.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIAKAAIAAAXg");
        this.shape_1192.setTransform(344.4,95.2,2,2);

        this.shape_1193 = new cjs.Shape();
        this.shape_1193.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAJAAIAAAXg");
        this.shape_1193.setTransform(356.1,87.7,2,2);

        this.shape_1194 = new cjs.Shape();
        this.shape_1194.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAJAAIAAAXg");
        this.shape_1194.setTransform(352.2,87.7,2,2);

        this.shape_1195 = new cjs.Shape();
        this.shape_1195.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAKAAIAAAXg");
        this.shape_1195.setTransform(348.3,87.7,2,2);

        this.shape_1196 = new cjs.Shape();
        this.shape_1196.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIAKAAIAAAXg");
        this.shape_1196.setTransform(344.4,87.7,2,2);

        this.shape_1197 = new cjs.Shape();
        this.shape_1197.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAJAAIAAAXg");
        this.shape_1197.setTransform(356.1,80.1,2,2);

        this.shape_1198 = new cjs.Shape();
        this.shape_1198.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAJAAIAAAXg");
        this.shape_1198.setTransform(352.2,80.1,2,2);

        this.shape_1199 = new cjs.Shape();
        this.shape_1199.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAKAAIAAAXg");
        this.shape_1199.setTransform(348.3,80.1,2,2);

        this.shape_1200 = new cjs.Shape();
        this.shape_1200.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIAKAAIAAAXg");
        this.shape_1200.setTransform(344.4,80.1,2,2);

        this.shape_1201 = new cjs.Shape();
        this.shape_1201.graphics.f("#FFFFFF").s().p("AgEALIAAgVIAJAAIAAAVg");
        this.shape_1201.setTransform(356.1,72.6,2,2);

        this.shape_1202 = new cjs.Shape();
        this.shape_1202.graphics.f("#FFFFFF").s().p("AgEALIAAgVIAJAAIAAAVg");
        this.shape_1202.setTransform(352.2,72.6,2,2);

        this.shape_1203 = new cjs.Shape();
        this.shape_1203.graphics.f("#FFFFFF").s().p("AgEALIAAgVIAKAAIAAAVg");
        this.shape_1203.setTransform(348.3,72.6,2,2);

        this.shape_1204 = new cjs.Shape();
        this.shape_1204.graphics.f("#FFFFFF").s().p("AgFALIAAgVIAKAAIAAAVg");
        this.shape_1204.setTransform(344.4,72.6,2,2);

        this.shape_1205 = new cjs.Shape();
        this.shape_1205.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAJAAIAAAXg");
        this.shape_1205.setTransform(356.1,65.1,2,2);

        this.shape_1206 = new cjs.Shape();
        this.shape_1206.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAJAAIAAAXg");
        this.shape_1206.setTransform(352.2,65.1,2,2);

        this.shape_1207 = new cjs.Shape();
        this.shape_1207.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAKAAIAAAXg");
        this.shape_1207.setTransform(348.3,65.1,2,2);

        this.shape_1208 = new cjs.Shape();
        this.shape_1208.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIAKAAIAAAXg");
        this.shape_1208.setTransform(344.4,65.1,2,2);

        this.shape_1209 = new cjs.Shape();
        this.shape_1209.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAJAAIAAAXg");
        this.shape_1209.setTransform(356.1,57.6,2,2);

        this.shape_1210 = new cjs.Shape();
        this.shape_1210.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAJAAIAAAXg");
        this.shape_1210.setTransform(352.2,57.6,2,2);

        this.shape_1211 = new cjs.Shape();
        this.shape_1211.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAKAAIAAAXg");
        this.shape_1211.setTransform(348.3,57.6,2,2);

        this.shape_1212 = new cjs.Shape();
        this.shape_1212.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIAKAAIAAAXg");
        this.shape_1212.setTransform(344.4,57.6,2,2);

        this.shape_1213 = new cjs.Shape();
        this.shape_1213.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAJAAIAAAXg");
        this.shape_1213.setTransform(356.1,50.1,2,2);

        this.shape_1214 = new cjs.Shape();
        this.shape_1214.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAJAAIAAAXg");
        this.shape_1214.setTransform(352.2,50.1,2,2);

        this.shape_1215 = new cjs.Shape();
        this.shape_1215.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAKAAIAAAXg");
        this.shape_1215.setTransform(348.3,50.1,2,2);

        this.shape_1216 = new cjs.Shape();
        this.shape_1216.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIAKAAIAAAXg");
        this.shape_1216.setTransform(344.4,50.1,2,2);

        this.shape_1217 = new cjs.Shape();
        this.shape_1217.graphics.f("#FFFFFF").s().p("AgEALIAAgWIAJAAIAAAWg");
        this.shape_1217.setTransform(356.1,42.5,2,2);

        this.shape_1218 = new cjs.Shape();
        this.shape_1218.graphics.f("#FFFFFF").s().p("AgEALIAAgWIAJAAIAAAWg");
        this.shape_1218.setTransform(352.2,42.5,2,2);

        this.shape_1219 = new cjs.Shape();
        this.shape_1219.graphics.f("#FFFFFF").s().p("AgEALIAAgWIAKAAIAAAWg");
        this.shape_1219.setTransform(348.3,42.5,2,2);

        this.shape_1220 = new cjs.Shape();
        this.shape_1220.graphics.f("#FFFFFF").s().p("AgFALIAAgWIAKAAIAAAWg");
        this.shape_1220.setTransform(344.4,42.5,2,2);

        this.shape_1221 = new cjs.Shape();
        this.shape_1221.graphics.f("#4D9BB7").s().p("AgwD1IAAnpIBhAAIAAHpg");
        this.shape_1221.setTransform(349.9,85.6,2,2);

        this.shape_1222 = new cjs.Shape();
        this.shape_1222.graphics.f("#4D9BB7").s().p("AgJAWIAAgrIASAAIAAArg");
        this.shape_1222.setTransform(-119.2,154.5,2,2);

        this.shape_1223 = new cjs.Shape();
        this.shape_1223.graphics.f("#4D9BB7").s().p("AgIAWIAAgrIASAAIAAArg");
        this.shape_1223.setTransform(-126.1,154.5,2,2);

        this.shape_1224 = new cjs.Shape();
        this.shape_1224.graphics.f("#4D9BB7").s().p("AgJAWIAAgrIASAAIAAArg");
        this.shape_1224.setTransform(-133,154.5,2,2);

        this.shape_1225 = new cjs.Shape();
        this.shape_1225.graphics.f("#4D9BB7").s().p("AgIAWIAAgrIARAAIAAArg");
        this.shape_1225.setTransform(-139.9,154.5,2,2);

        this.shape_1226 = new cjs.Shape();
        this.shape_1226.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1226.setTransform(-119.2,143.1,2,2);

        this.shape_1227 = new cjs.Shape();
        this.shape_1227.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIASAAIAAAXg");
        this.shape_1227.setTransform(-126.1,143.1,2,2);

        this.shape_1228 = new cjs.Shape();
        this.shape_1228.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1228.setTransform(-133,143.1,2,2);

        this.shape_1229 = new cjs.Shape();
        this.shape_1229.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIARAAIAAAXg");
        this.shape_1229.setTransform(-139.9,143.1,2,2);

        this.shape_1230 = new cjs.Shape();
        this.shape_1230.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1230.setTransform(-119.2,135.2,2,2);

        this.shape_1231 = new cjs.Shape();
        this.shape_1231.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIASAAIAAAXg");
        this.shape_1231.setTransform(-126.1,135.2,2,2);

        this.shape_1232 = new cjs.Shape();
        this.shape_1232.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1232.setTransform(-133,135.2,2,2);

        this.shape_1233 = new cjs.Shape();
        this.shape_1233.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIARAAIAAAXg");
        this.shape_1233.setTransform(-139.9,135.2,2,2);

        this.shape_1234 = new cjs.Shape();
        this.shape_1234.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1234.setTransform(-119.2,127.3,2,2);

        this.shape_1235 = new cjs.Shape();
        this.shape_1235.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIASAAIAAAXg");
        this.shape_1235.setTransform(-126.1,127.3,2,2);

        this.shape_1236 = new cjs.Shape();
        this.shape_1236.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1236.setTransform(-133,127.3,2,2);

        this.shape_1237 = new cjs.Shape();
        this.shape_1237.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIARAAIAAAXg");
        this.shape_1237.setTransform(-139.9,127.3,2,2);

        this.shape_1238 = new cjs.Shape();
        this.shape_1238.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1238.setTransform(-119.2,119.4,2,2);

        this.shape_1239 = new cjs.Shape();
        this.shape_1239.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIASAAIAAAXg");
        this.shape_1239.setTransform(-126.1,119.4,2,2);

        this.shape_1240 = new cjs.Shape();
        this.shape_1240.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1240.setTransform(-133,119.4,2,2);

        this.shape_1241 = new cjs.Shape();
        this.shape_1241.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIARAAIAAAXg");
        this.shape_1241.setTransform(-139.9,119.4,2,2);

        this.shape_1242 = new cjs.Shape();
        this.shape_1242.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1242.setTransform(-119.2,111.5,2,2);

        this.shape_1243 = new cjs.Shape();
        this.shape_1243.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIASAAIAAAXg");
        this.shape_1243.setTransform(-126.1,111.5,2,2);

        this.shape_1244 = new cjs.Shape();
        this.shape_1244.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1244.setTransform(-133,111.5,2,2);

        this.shape_1245 = new cjs.Shape();
        this.shape_1245.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIARAAIAAAXg");
        this.shape_1245.setTransform(-139.9,111.5,2,2);

        this.shape_1246 = new cjs.Shape();
        this.shape_1246.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1246.setTransform(-119.2,103.6,2,2);

        this.shape_1247 = new cjs.Shape();
        this.shape_1247.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIASAAIAAAXg");
        this.shape_1247.setTransform(-126.1,103.6,2,2);

        this.shape_1248 = new cjs.Shape();
        this.shape_1248.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1248.setTransform(-133,103.6,2,2);

        this.shape_1249 = new cjs.Shape();
        this.shape_1249.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIARAAIAAAXg");
        this.shape_1249.setTransform(-139.9,103.6,2,2);

        this.shape_1250 = new cjs.Shape();
        this.shape_1250.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1250.setTransform(-119.2,95.7,2,2);

        this.shape_1251 = new cjs.Shape();
        this.shape_1251.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIASAAIAAAXg");
        this.shape_1251.setTransform(-126.1,95.7,2,2);

        this.shape_1252 = new cjs.Shape();
        this.shape_1252.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1252.setTransform(-133,95.7,2,2);

        this.shape_1253 = new cjs.Shape();
        this.shape_1253.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIARAAIAAAXg");
        this.shape_1253.setTransform(-139.9,95.7,2,2);

        this.shape_1254 = new cjs.Shape();
        this.shape_1254.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1254.setTransform(-119.2,87.7,2,2);

        this.shape_1255 = new cjs.Shape();
        this.shape_1255.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIASAAIAAAXg");
        this.shape_1255.setTransform(-126.1,87.7,2,2);

        this.shape_1256 = new cjs.Shape();
        this.shape_1256.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1256.setTransform(-133,87.7,2,2);

        this.shape_1257 = new cjs.Shape();
        this.shape_1257.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIARAAIAAAXg");
        this.shape_1257.setTransform(-139.9,87.7,2,2);

        this.shape_1258 = new cjs.Shape();
        this.shape_1258.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1258.setTransform(-119.2,79.8,2,2);

        this.shape_1259 = new cjs.Shape();
        this.shape_1259.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIASAAIAAAXg");
        this.shape_1259.setTransform(-126.1,79.8,2,2);

        this.shape_1260 = new cjs.Shape();
        this.shape_1260.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1260.setTransform(-133,79.8,2,2);

        this.shape_1261 = new cjs.Shape();
        this.shape_1261.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIARAAIAAAXg");
        this.shape_1261.setTransform(-139.9,79.8,2,2);

        this.shape_1262 = new cjs.Shape();
        this.shape_1262.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1262.setTransform(-119.2,71.9,2,2);

        this.shape_1263 = new cjs.Shape();
        this.shape_1263.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIASAAIAAAXg");
        this.shape_1263.setTransform(-126.1,71.9,2,2);

        this.shape_1264 = new cjs.Shape();
        this.shape_1264.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1264.setTransform(-133,71.9,2,2);

        this.shape_1265 = new cjs.Shape();
        this.shape_1265.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIARAAIAAAXg");
        this.shape_1265.setTransform(-139.9,71.9,2,2);

        this.shape_1266 = new cjs.Shape();
        this.shape_1266.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1266.setTransform(-119.2,64,2,2);

        this.shape_1267 = new cjs.Shape();
        this.shape_1267.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIASAAIAAAXg");
        this.shape_1267.setTransform(-126.1,64,2,2);

        this.shape_1268 = new cjs.Shape();
        this.shape_1268.graphics.f("#FFFFFF").s().p("AgJAMIAAgXIASAAIAAAXg");
        this.shape_1268.setTransform(-133,64,2,2);

        this.shape_1269 = new cjs.Shape();
        this.shape_1269.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIARAAIAAAXg");
        this.shape_1269.setTransform(-139.9,64,2,2);

        this.shape_1270 = new cjs.Shape();
        this.shape_1270.graphics.f("#4D9BB7").s().p("AhWECIAAoDICtAAIAAIDg");
        this.shape_1270.setTransform(-130.1,109.3,2,2);

        this.shape_1271 = new cjs.Shape();
        this.shape_1271.graphics.f("#FFFFFF").s().p("AgGAZIAAgxIANAAIAAAxg");
        this.shape_1271.setTransform(-290.4,122,2,2);

        this.shape_1272 = new cjs.Shape();
        this.shape_1272.graphics.f("#FFFFFF").s().p("AgGAZIAAgxIANAAIAAAxg");
        this.shape_1272.setTransform(-295.4,122,2,2);

        this.shape_1273 = new cjs.Shape();
        this.shape_1273.graphics.f("#FFFFFF").s().p("AgGAZIAAgxIANAAIAAAxg");
        this.shape_1273.setTransform(-300.4,122,2,2);

        this.shape_1274 = new cjs.Shape();
        this.shape_1274.graphics.f("#FFFFFF").s().p("AgGAZIAAgxIANAAIAAAxg");
        this.shape_1274.setTransform(-305.4,122,2,2);

        this.shape_1275 = new cjs.Shape();
        this.shape_1275.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1275.setTransform(-290.4,109,2,2);

        this.shape_1276 = new cjs.Shape();
        this.shape_1276.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1276.setTransform(-295.4,109,2,2);

        this.shape_1277 = new cjs.Shape();
        this.shape_1277.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1277.setTransform(-300.4,109,2,2);

        this.shape_1278 = new cjs.Shape();
        this.shape_1278.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1278.setTransform(-305.4,109,2,2);

        this.shape_1279 = new cjs.Shape();
        this.shape_1279.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1279.setTransform(-290.4,99.9,2,2);

        this.shape_1280 = new cjs.Shape();
        this.shape_1280.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1280.setTransform(-295.4,99.9,2,2);

        this.shape_1281 = new cjs.Shape();
        this.shape_1281.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1281.setTransform(-300.4,99.9,2,2);

        this.shape_1282 = new cjs.Shape();
        this.shape_1282.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1282.setTransform(-305.4,99.9,2,2);

        this.shape_1283 = new cjs.Shape();
        this.shape_1283.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1283.setTransform(-290.4,90.9,2,2);

        this.shape_1284 = new cjs.Shape();
        this.shape_1284.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1284.setTransform(-295.4,90.9,2,2);

        this.shape_1285 = new cjs.Shape();
        this.shape_1285.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1285.setTransform(-300.4,90.9,2,2);

        this.shape_1286 = new cjs.Shape();
        this.shape_1286.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1286.setTransform(-305.4,90.9,2,2);

        this.shape_1287 = new cjs.Shape();
        this.shape_1287.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1287.setTransform(-290.4,81.9,2,2);

        this.shape_1288 = new cjs.Shape();
        this.shape_1288.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1288.setTransform(-295.4,81.9,2,2);

        this.shape_1289 = new cjs.Shape();
        this.shape_1289.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1289.setTransform(-300.4,81.9,2,2);

        this.shape_1290 = new cjs.Shape();
        this.shape_1290.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1290.setTransform(-305.4,81.9,2,2);

        this.shape_1291 = new cjs.Shape();
        this.shape_1291.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1291.setTransform(-290.4,72.9,2,2);

        this.shape_1292 = new cjs.Shape();
        this.shape_1292.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1292.setTransform(-295.4,72.9,2,2);

        this.shape_1293 = new cjs.Shape();
        this.shape_1293.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1293.setTransform(-300.4,72.9,2,2);

        this.shape_1294 = new cjs.Shape();
        this.shape_1294.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1294.setTransform(-305.4,72.9,2,2);

        this.shape_1295 = new cjs.Shape();
        this.shape_1295.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1295.setTransform(-290.4,63.8,2,2);

        this.shape_1296 = new cjs.Shape();
        this.shape_1296.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1296.setTransform(-295.4,63.8,2,2);

        this.shape_1297 = new cjs.Shape();
        this.shape_1297.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1297.setTransform(-300.4,63.8,2,2);

        this.shape_1298 = new cjs.Shape();
        this.shape_1298.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1298.setTransform(-305.4,63.8,2,2);

        this.shape_1299 = new cjs.Shape();
        this.shape_1299.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1299.setTransform(-290.4,54.8,2,2);

        this.shape_1300 = new cjs.Shape();
        this.shape_1300.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1300.setTransform(-295.4,54.8,2,2);

        this.shape_1301 = new cjs.Shape();
        this.shape_1301.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1301.setTransform(-300.4,54.8,2,2);

        this.shape_1302 = new cjs.Shape();
        this.shape_1302.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1302.setTransform(-305.4,54.8,2,2);

        this.shape_1303 = new cjs.Shape();
        this.shape_1303.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1303.setTransform(-290.4,45.8,2,2);

        this.shape_1304 = new cjs.Shape();
        this.shape_1304.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1304.setTransform(-295.4,45.8,2,2);

        this.shape_1305 = new cjs.Shape();
        this.shape_1305.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1305.setTransform(-300.4,45.8,2,2);

        this.shape_1306 = new cjs.Shape();
        this.shape_1306.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1306.setTransform(-305.4,45.8,2,2);

        this.shape_1307 = new cjs.Shape();
        this.shape_1307.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1307.setTransform(-290.4,36.8,2,2);

        this.shape_1308 = new cjs.Shape();
        this.shape_1308.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1308.setTransform(-295.4,36.8,2,2);

        this.shape_1309 = new cjs.Shape();
        this.shape_1309.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1309.setTransform(-300.4,36.8,2,2);

        this.shape_1310 = new cjs.Shape();
        this.shape_1310.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1310.setTransform(-305.4,36.8,2,2);

        this.shape_1311 = new cjs.Shape();
        this.shape_1311.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1311.setTransform(-290.4,27.8,2,2);

        this.shape_1312 = new cjs.Shape();
        this.shape_1312.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1312.setTransform(-295.4,27.8,2,2);

        this.shape_1313 = new cjs.Shape();
        this.shape_1313.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1313.setTransform(-300.4,27.8,2,2);

        this.shape_1314 = new cjs.Shape();
        this.shape_1314.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1314.setTransform(-305.4,27.8,2,2);

        this.shape_1315 = new cjs.Shape();
        this.shape_1315.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1315.setTransform(-290.4,18.7,2,2);

        this.shape_1316 = new cjs.Shape();
        this.shape_1316.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1316.setTransform(-295.4,18.7,2,2);

        this.shape_1317 = new cjs.Shape();
        this.shape_1317.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1317.setTransform(-300.4,18.7,2,2);

        this.shape_1318 = new cjs.Shape();
        this.shape_1318.graphics.f("#FFFFFF").s().p("AgGAOIAAgbIANAAIAAAbg");
        this.shape_1318.setTransform(-305.4,18.7,2,2);

        this.shape_1319 = new cjs.Shape();
        this.shape_1319.graphics.f("#4D9BB7").s().p("Ag/EmIAApLIB/AAIAAJLg");
        this.shape_1319.setTransform(-298.4,70.4,2,2);

        this.shape_1320 = new cjs.Shape();
        this.shape_1320.graphics.f("#FFFFFF").s().p("AgIB+IAAj7IARAAIAAD7g");
        this.shape_1320.setTransform(-292.6,112.5,2,2);

        this.shape_1321 = new cjs.Shape();
        this.shape_1321.graphics.f("#FFFFFF").s().p("AgIB+IAAj7IARAAIAAD7g");
        this.shape_1321.setTransform(-299.6,112.5,2,2);

        this.shape_1322 = new cjs.Shape();
        this.shape_1322.graphics.f("#FFFFFF").s().p("AgIB+IAAj7IARAAIAAD7g");
        this.shape_1322.setTransform(-306.5,112.5,2,2);

        this.shape_1323 = new cjs.Shape();
        this.shape_1323.graphics.f("#FFFFFF").s().p("AgIB+IAAj7IARAAIAAD7g");
        this.shape_1323.setTransform(-313.4,112.5,2,2);

        this.shape_1324 = new cjs.Shape();
        this.shape_1324.graphics.f("#FFFFFF").s().p("AgIB+IAAj7IARAAIAAD7g");
        this.shape_1324.setTransform(-320.3,112.5,2,2);

        this.shape_1325 = new cjs.Shape();
        this.shape_1325.graphics.f("#FFFFFF").s().p("AgIB/IAAj9IARAAIAAD9g");
        this.shape_1325.setTransform(-292.6,56.5,2,2);

        this.shape_1326 = new cjs.Shape();
        this.shape_1326.graphics.f("#FFFFFF").s().p("AgIB/IAAj9IARAAIAAD9g");
        this.shape_1326.setTransform(-299.6,56.5,2,2);

        this.shape_1327 = new cjs.Shape();
        this.shape_1327.graphics.f("#FFFFFF").s().p("AgIB/IAAj9IARAAIAAD9g");
        this.shape_1327.setTransform(-306.5,56.5,2,2);

        this.shape_1328 = new cjs.Shape();
        this.shape_1328.graphics.f("#FFFFFF").s().p("AgIB/IAAj9IARAAIAAD9g");
        this.shape_1328.setTransform(-313.4,56.5,2,2);

        this.shape_1329 = new cjs.Shape();
        this.shape_1329.graphics.f("#FFFFFF").s().p("AgIB/IAAj9IARAAIAAD9g");
        this.shape_1329.setTransform(-320.3,56.5,2,2);

        this.shape_1330 = new cjs.Shape();
        this.shape_1330.graphics.f("#FFFFFF").s().p("AgIB+IAAj7IARAAIAAD7g");
        this.shape_1330.setTransform(-292.6,0.6,2,2);

        this.shape_1331 = new cjs.Shape();
        this.shape_1331.graphics.f("#FFFFFF").s().p("AgIB+IAAj7IARAAIAAD7g");
        this.shape_1331.setTransform(-299.6,0.6,2,2);

        this.shape_1332 = new cjs.Shape();
        this.shape_1332.graphics.f("#FFFFFF").s().p("AgIB+IAAj7IARAAIAAD7g");
        this.shape_1332.setTransform(-306.5,0.6,2,2);

        this.shape_1333 = new cjs.Shape();
        this.shape_1333.graphics.f("#FFFFFF").s().p("AgIB+IAAj7IARAAIAAD7g");
        this.shape_1333.setTransform(-313.4,0.6,2,2);

        this.shape_1334 = new cjs.Shape();
        this.shape_1334.graphics.f("#FFFFFF").s().p("AgIB+IAAj7IARAAIAAD7g");
        this.shape_1334.setTransform(-320.3,0.6,2,2);

        this.shape_1335 = new cjs.Shape();
        this.shape_1335.graphics.f("#FFFFFF").s().p("AgIB+IAAj7IARAAIAAD7g");
        this.shape_1335.setTransform(-292.6,-55.4,2,2);

        this.shape_1336 = new cjs.Shape();
        this.shape_1336.graphics.f("#FFFFFF").s().p("AgIB+IAAj7IARAAIAAD7g");
        this.shape_1336.setTransform(-299.6,-55.4,2,2);

        this.shape_1337 = new cjs.Shape();
        this.shape_1337.graphics.f("#FFFFFF").s().p("AgIB+IAAj7IARAAIAAD7g");
        this.shape_1337.setTransform(-306.5,-55.4,2,2);

        this.shape_1338 = new cjs.Shape();
        this.shape_1338.graphics.f("#FFFFFF").s().p("AgIB+IAAj7IARAAIAAD7g");
        this.shape_1338.setTransform(-313.4,-55.4,2,2);

        this.shape_1339 = new cjs.Shape();
        this.shape_1339.graphics.f("#FFFFFF").s().p("AgIB+IAAj7IARAAIAAD7g");
        this.shape_1339.setTransform(-320.3,-55.4,2,2);

        this.shape_1340 = new cjs.Shape();
        this.shape_1340.graphics.f("#4D9BB7").s().p("AhwJrIAAysIAUgqIC5AAIAUAqIAASsg");
        this.shape_1340.setTransform(-306.5,28.2,2,2);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.subBuildings, new cjs.Rectangle(-429.8,-169.4,859.6,338.9), null);


    (lib.shadow1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#948A6D").s().p("AsCAVQk/gJAAgMQAAgLE/gJQFAgJHCAAQHDAAFAAJQE/AJAAALQAAAMk/AJQlAAJnDAAQnCAAlAgJg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.shadow1, new cjs.Rectangle(-109,-3,218,6), null);


    (lib.head2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#204A62").s().p("AAQDaQgFghAEg7QAHhDABgiQAPABANgKQAMgJADgOQAEgSgJgOQgKgPgRgEQgHgCgHABQgIgjgQgUQg0AehTgaQhagbgIhGQAQAJASgKIAngfQBFg3BfgDQBsgCA/A2QA3AwAKBSQAJBMgfBMQggBOg7ArQhFAxARAtQANAlAtAHIgXACQhOAAgMhQg");
        this.shape.setTransform(2.2,0);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#EB6B7E").s().p("Ag8D1QAXgtAAgJQACgkgxgwQhJhHgOhCIgzgIQAXgHAPgaQAHgMAMgnQATg8A+gkQBKgrBkAXQAzAKAjAkQAiAhAJAtQAXBohmBGQgyAkgVAcQgfAqgFA/IABASg");
        this.shape_1.setTransform(-3.7,1.7);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.head2, new cjs.Rectangle(-26,-29.8,52.1,59.6), null);


    (lib.head1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#204A62").s().p("AB5BEQAKgLgCgOQgCgNgLgIQgLgJgNACIgGABIgog5IiLAdIhIhUIEOgkIA8EJg");
        this.shape.setTransform(-0.3,-11.1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#EB6B7E").s().p("Ah2gDIhmAMIB8iMIAIhQICygYICDHCIlUAVg");
        this.shape_1.setTransform(0,0.8);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.head1, new cjs.Rectangle(-22.1,-24.4,44.3,48.8), null);


    (lib.g_leg2b = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EB6B7E").s().p("AgDCyIgblKQAeg1AeA1IABFLg");
        this.shape.setTransform(1.3,-5.3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#37413B").s().p("AgqAmIAyhIIgBgGIABAAIAjACIAABOg");
        this.shape_1.setTransform(0,16.6);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.g_leg2b, new cjs.Rectangle(-4.3,-23.2,8.6,43.9), null);


    (lib.g_leg2a = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EB6B7E").s().p("AgMD/Igkm8IA3hXIAoBdIACG2QgRAWgPAAQgPAAgOgWg");
        this.shape.setTransform(0,1.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.g_leg2a, new cjs.Rectangle(-4.8,-26.6,9.7,55.4), null);


    (lib.g_leg1a = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#37413B").s().p("AgrAoIAwhJIgBgGIApAAIgDBPg");
        this.shape.setTransform(-0.3,16.3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#EB6B7E").s().p("AgOCxIgQlFQAjg3AbA3IgHFFg");
        this.shape_1.setTransform(1.6,-5.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.g_leg1a, new cjs.Rectangle(-4.8,-23,9.6,43.4), null);


    (lib.g_leg1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EB6B7E").s().p("AgXD+IgYnAIA0hYIArBcIgJG8QgPAdgQAAQgOAAgRgdg");
        this.shape.setTransform(0,1.4);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.g_leg1, new cjs.Rectangle(-4.7,-26.9,9.5,56.7), null);


    (lib.bot2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer_2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#205571").s().p("AgaEcQADjxAIjwIABgHQAAgKAZhGIAQA8IgeH9g");
        this.shape.setTransform(6.9,0);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // Layer_1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#204A62").s().p("AheEXIBehRIgVmmIBmg8IANAhIABAuQACBdgeGNg");
        this.shape_1.setTransform(-0.1,0.1);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = getMCSymbolPrototype(lib.bot2, new cjs.Rectangle(-9.6,-28.4,19.2,57.1), null);


    (lib.bot1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#204A62").s().p("AhXESIBbhTIgknRIB4AAIgPIkg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.bot1, new cjs.Rectangle(-8.8,-27.4,17.7,54.9), null);


    (lib.arm1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EB6B7E").s().p("AABAwQgVAAgBgWQAFgagBgLQgVALgHABQgJAEgGgKQgCgGASgPQAQgPANgGIAxAAQAUAUAFAgQAGAigSAJg");
        this.shape.setTransform(11,42.2);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#204A62").s().p("ABfF3QgBjCgliBQg6jJiVhHIA3iaQBvAkBKDTQBPDggXEWg");

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.arm1, new cjs.Rectangle(-15.1,-37.4,32.2,84.4), null);


    (lib.wheels = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer_3
        this.instance = new lib.turn1();
        this.instance.parent = this;
        this.instance.setTransform(-27.5,2.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-720},139).wait(1));

        // Layer_2
        this.instance_1 = new lib.turn2();
        this.instance_1.parent = this;
        this.instance_1.setTransform(27.3,2.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-720},139).wait(1));

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgJAmQgQgEgJgOQgIgOAEgPQAFgQAOgJQAOgIAPAEQAQAFAIAOQAJAOgFAPQgEAQgOAIQgJAGgKAAQgFAAgFgCg");
        this.shape.setTransform(-27.4,2.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#D9E2E8").s().p("AgMAwQgUgEgLgTQgKgSAFgTQAGgUASgLQASgKATAGQAUAEALATQAKASgFATQgGAVgSAKQgMAGgMAAQgGAAgHgCg");
        this.shape_1.setTransform(-27.5,2.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#D9E2E8").s().p("AgrCmQhFgTgjg9Qgkg+AShDQAThFA9gkQA+gjBDASQBFATAkA9QAjA+gSBDQgTBFg9AkQgpAXgrAAQgWAAgXgGgAhNiHQg4AhgRA+QgRA+AhA4QAgA4A/ARQA+ARA4ghQA4ggARg/QAQg+ggg4Qghg4g+gQQgWgGgUAAQgnAAglAVg");
        this.shape_2.setTransform(-27.4,2.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AgyC+QhOgVgphHQgphGAVhOQAVhPBHgoQBGgpBOAVQBOAVApBHQApBGgVBOQgVBOhHApQguAbgyAAQgZAAgbgHgAhNiHQg4AhgRA+QgRA+AhA4QAgA4A/ARQA+ARA4ghQA4ggARg/QAQg+ggg4Qghg4g+gQQgWgGgUAAQgnAAglAVg");
        this.shape_3.setTransform(-27.4,2.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AjZByIGpj0IAKAQImpD1g");
        this.shape_4.setTransform(-6.1,-9.4);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AgTAiQgOgIgFgQQgEgPAIgOQAJgOAQgFQAPgEAOAIQAOAJAEAQQAFAPgJAOQgIAOgQAEQgFACgFAAQgKAAgJgGg");
        this.shape_5.setTransform(27.4,2.9);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#D9E2E8").s().p("AgYAsQgSgKgGgVQgFgTAKgSQALgTAUgEQATgGASAKQATALAFAUQAFATgKASQgLATgUAEQgHACgGAAQgMAAgMgGg");
        this.shape_6.setTransform(27.4,2.9);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#D9E2E8").s().p("AhVCVQg9gkgThFQgShDAkg+QAjg9BFgTQBDgSA+AjQA9AkATBFQASBDgjA+QgkA9hFATQgXAGgWAAQgrAAgpgXgAgoiWQg+AQghA4QggA5ARA9QARA/A4AgQA4AhA+gRQA+gRAhg4QAgg4gRg+QgRg/g4ggQglgVgnAAQgUAAgWAGg");
        this.shape_7.setTransform(27.3,2.9);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("AhhCqQhHgpgVhOQgVhOAphGQAphHBOgVQBOgVBGApQBHAoAVBPQAVBOgpBGQgoBHhPAVQgbAHgZAAQgyAAgugbgAgoiWQg+AQghA4QggA5ARA9QARA/A4AgQA4AhA+gRQA+gRAhg4QAgg4gRg+QgRg/g4ggQglgVgnAAQgUAAgWAGg");
        this.shape_8.setTransform(27.3,2.9);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AjZhyIAKgQIGpD0IgJARg");
        this.shape_9.setTransform(6.1,-9.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(140));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-47.1,-22.5,94.2,45.1);


    (lib.legstest = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer_3
        this.instance = new lib.bot2();
        this.instance.parent = this;
        this.instance.setTransform(18.4,-4.2,1,1,-20.7,0,0,1.6,-28.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-28.2,x:12.4,y:-2.3},3).to({regX:1.5,regY:-28.4,rotation:-42.9,x:5.4,y:-2.2},3).to({rotation:-28.9,x:-37.2,y:-15.7},7).to({regX:1.6,regY:-28.5,rotation:8,x:-34.6,y:-1.2},7).to({x:-30.1,y:-0.2},4).to({regX:1.7,regY:-28.4,rotation:-4.5,x:0,y:1.3},4).to({regX:1.6,regY:-28.5,rotation:-20.7,x:18.4,y:-4.2},5).wait(7));

        // Layer_1
        this.instance_1 = new lib.top2();
        this.instance_1.parent = this;
        this.instance_1.setTransform(0.2,-46,1,1,-20.7,0,0,-4.5,-19.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-14.3},3).to({rotation:-8.5,y:-46.1},3).to({regX:-4.7,rotation:37.7,x:-2.8,y:-52.3},7).to({regX:-4.5,rotation:28.9,x:-12.2,y:-40.1},7).to({rotation:24.2},4).to({regX:-4.4,rotation:2.9,x:0.3,y:-46.1},4).to({regX:-4.5,rotation:-20.7,x:0.2,y:-46},5).wait(7));

        // top1
        this.instance_2 = new lib.top1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-1.7,-54.1,1,1,15.7,0,0,1.4,-29.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:18.7,x:-1,y:-52.1},3).to({rotation:1.3,x:-5.7,y:-56.7},3).to({regX:1.5,rotation:-22,x:2.4,y:-54.1},7).to({regX:1.6,rotation:-27.5,y:-54.2},7).to({regX:1.5,rotation:-22,x:2.9,y:-49.1},4).to({regX:1.4,rotation:-5,x:-5.7,y:-56.7},4).to({rotation:28.2,x:-1.6,y:-54.1},5).to({rotation:15.7,x:-1.7},6).wait(1));

        // bot1
        this.instance_3 = new lib.bot1();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-17.5,4.5,1,1,15.7,0,0,3.5,-26.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:3.4,rotation:-3.7,x:-19.6,y:3},3).to({rotation:-6.7,x:-6.5,y:2},3).to({regX:3.5,rotation:-24.7,x:23.5,y:-2},7).to({regY:-26.3,rotation:-25.7,x:29,y:-3.9},7).to({regX:3.4,regY:-26.4,rotation:-37.2,x:23.9,y:3},4).to({regX:3.5,regY:-26.3,rotation:-42.1,x:-1.6,y:-0.7},4).to({regY:-26.4,rotation:-18.7,x:-28.1,y:-5.5},5).to({rotation:15.7,x:-17.5,y:4.5},6).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-74.7,-74.6,168.5,149.5);


    (lib.legs2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // g_leg2b
        this.instance = new lib.g_leg2b();
        this.instance.parent = this;
        this.instance.setTransform(23.4,4.7,1,1,-17.2,0,0,1.5,-20.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-31.2,x:16.6,y:6.1},4).to({regX:1.4,rotation:-41.6,x:2.5,y:-4.3},4).to({regX:1.5,rotation:-8.4,x:-25.8,y:-1.9},6).to({rotation:12.3,x:-29.1,y:-0.5},4).to({regY:-20.8,rotation:11.1,x:-14.8,y:1.9},5).to({regX:1.4,rotation:-5.9,x:10.4,y:1},5).to({regX:1.5,regY:-20.9,rotation:-31.2,x:16.6,y:6.1},5).to({rotation:-17.2,x:23.4,y:4.7},6).wait(1));

        // g_leg1a
        this.instance_1 = new lib.g_leg1a();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-19.2,5.6,1,1,19.5,0,0,2,-20.2);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-20.1,rotation:-6,x:-15.3,y:3.2},4).to({regX:2.1,rotation:-11.5,x:4.3,y:2},4).to({regY:-20,rotation:-26.9,x:20.8,y:3},6).to({x:26.8,y:1.5},4).to({rotation:-33.9,x:18.3,y:6.2},5).to({x:-12.9,y:-4.5},5).to({regX:2,regY:-20.1,rotation:-6,x:-15.3,y:6.2},5).to({regY:-20.2,rotation:19.5,x:-19.2,y:5.6},6).wait(1));

        // g_leg2a
        this.instance_2 = new lib.g_leg2a();
        this.instance_2.parent = this;
        this.instance_2.setTransform(6.6,-40.4,1,1,-18,0,0,-0.1,-21.8);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0,rotation:-9.7,x:6.7},4).to({rotation:7.2,x:8,y:-50.9},4).to({rotation:35.2,x:1,y:-43.9},6).to({x:-2.5,y:-41.7},4).to({regX:-0.1,regY:-21.9,rotation:21.7,x:1,y:-43.3},5).to({rotation:-3,x:5.4,y:-47.8},5).to({regX:0,regY:-21.8,rotation:-9.7,x:6.7,y:-40.4},5).to({regX:-0.1,rotation:-18,x:6.6},6).wait(1));

        // g_leg1
        this.instance_3 = new lib.g_leg1();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-4.1,-40.8,1,1,19.9,0,0,-0.4,-21.9);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-0.5,regY:-22,rotation:14.9,x:-4.2,y:-43.9},4).to({regY:-21.9,rotation:-7.8,x:-4.1,y:-45.8},4).to({rotation:-17.3,x:4.5,y:-42.3},6).to({regX:-0.4,regY:-22,rotation:-23,x:4.6,y:-44.2},4).to({regY:-21.9,rotation:-13,y:-41.6},5).to({regY:-22,rotation:10.7,x:-5.4,y:-54.2},5).to({regX:-0.5,rotation:14.9,x:-4.2,y:-40.9},5).to({regX:-0.4,regY:-21.9,rotation:19.9,x:-4.1,y:-40.8},6).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-39.2,-46.9,77.6,93);


    (lib.city = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer_1
        this.instance = new lib.subBuildings();
        this.instance.parent = this;
        this.instance.setTransform(-642.9,0,0.5,0.5,0,0,180);
        this.instance.cache(-432,-171,864,343);

        this.instance_1 = new lib.subBuildings();
        this.instance_1.parent = this;
        this.instance_1.setTransform(214,0,0.5,0.5,0,0,180);
        this.instance_1.cache(-432,-171,864,343);

        this.instance_2 = new lib.subBuildings();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-215,0,0.5,0.5);
        this.instance_2.cache(-432,-171,864,343);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.city, new cjs.Rectangle(-857.8,-84.7,1286.8,169.5), null);


    (lib.Group_2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer_1
        this.instance = new lib.city();
        this.instance.parent = this;
        this.instance.setTransform(1,84.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({x:858},279).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-856.9,0,1286.8,169.5);


    (lib.main = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{restart:1});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_280 = function() {
            this.gotoAndPlay("restart");
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(280).call(this.frame_280).wait(1));

        // Layer_9
        this.instance = new lib.wheels("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(-54.7,88.1);

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#C5D5DE").s().p("AiaAIIAAgPIE1AAIAAAPg");
        this.shape.setTransform(-55.1,68.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B2C8D4").s().p("AiaAdIAAg5IE1AAIAAA5g");
        this.shape_1.setTransform(-55.1,69.1);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AknFtQgHAAgFgFQgGgFAAgIQAAgHAGgFQAFgGAHAAIA5AAQAUAAAVgJQAkgRAVgpIEBoWQAZg2AogXQAagPAbAAIA9AAQAHAAAGAFQAFAGAAAHQAAAIgFAFQgGAFgHAAIg9AAQgTAAgTAMQgdASgTAqIkBIWQgXAtgnAXQggATgkAAg");
        this.shape_2.setTransform(-12.6,34.4);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#FFFFFF","#D9E2E8"],[0,1],0,12.6,0,-12.6).s().p("AhKAnQhRhMAAhYICRAAQAABJAyBOQA0BQBAAUQiLAAhbhXg");
        this.shape_3.setTransform(-85.5,51.8);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AGvANQgOgKgBgOQAAAOgOAKQgNAKgTAAQgSAAgOgKQgNgKgBgOQgBAOgNAKQgOAKgSAAQgTAAgOgKQgNgKgBgOQAAAOgOAKQgNAKgTAAQgTAAgNgKQgOgKAAgOQgBAOgNAKQgOAKgTAAQgSAAgOgKQgNgKgBgOQAAAOgOAKQgNAKgTAAQgSAAgNgKQgOgKAAgOQgBAOgNAKQgOAKgTAAQgSAAgOgKQgNgKgBgOQAAAOgOAKQgOAKgSAAQgTAAgNgKQgOgKAAgOQgBAOgNAKQgOAKgTAAQgSAAgOgKQgNgKgBgOQgBAOgNAKQgOAKgSAAQgTAAgOgKQgNgKgBgOQAAAOgOAKQgNAKgTAAQgTAAgNgKQgOgLAAgNIAAgLIP5AAIAAALQAAANgNAKQgOALgTAAQgTAAgNgKgAHJAFQAAAGAFAAQAGAAAAgGQAAgFgGAAQgFAAAAAFgAFtAFQAAAGAFAAQAFAAAAgGQAAgFgFAAQgFAAAAAFgAEQAFQAAAGAFAAQAGAAAAgGQAAgFgGAAQgFAAAAAFgACzAFQAAAGAGAAQAFAAAAgGQAAgFgFAAQgGAAAAAFgABXAFQAAAGAFAAQAGAAAAgGQAAgFgGAAQgFAAAAAFgAgFAFQAAAGAFAAQAFAAAAgGQAAgFgFAAQgFAAAAAFgAhhAFQAAAGAFAAQAFAAAAgGQAAgFgFAAQgFAAAAAFgAi+AFQAAAGAGAAQAFAAAAgGQAAgFgFAAQgGAAAAAFgAkaAFQAAAGAFAAQAFAAAAgGQAAgFgFAAQgFAAAAAFgAl3AFQAAAGAFAAQAGAAAAgGQAAgFgGAAQgFAAAAAFgAnUAFQAAAGAGAAQAFAAAAgGQAAgFgFAAQgGAAAAAFgAHgAAQAAAEAGAAQAFAAAAgEQAAgGgFAAQgGAAAAAGgAGyAAQAAAEAFAAQAGAAAAgEQAAgGgGAAQgFAAAAAGgAGEAAQAAAEAFAAQAGAAAAgEQAAgGgGAAQgFAAAAAGgAFVAAQAAAEAGAAQAFAAAAgEQAAgGgFAAQgGAAAAAGgAEnAAQAAAEAGAAQAFAAAAgEQAAgGgFAAQgGAAAAAGgAD5AAQAAAEAFAAQAFAAAAgEQAAgGgFAAQgFAAAAAGgADLAAQAAAEAFAAQAGAAAAgEQAAgGgGAAQgFAAAAAGgACcAAQAAAEAFAAQAGAAAAgEQAAgGgGAAQgFAAAAAGgABuAAQAAAEAGAAQAFAAAAgEQAAgGgFAAQgGAAAAAGgAA/AAQAAAEAGAAQAFAAAAgEQAAgGgFAAQgGAAAAAGgAASAAQAAAEAFAAQAFAAAAgEQAAgGgFAAQgFAAAAAGgAgcAAQAAAEAFAAQAGAAAAgEQAAgGgGAAQgFAAAAAGgAhKAAQAAAEAFAAQAGAAAAgEQAAgGgGAAQgFAAAAAGgAh5AAQAAAEAGAAQAFAAAAgEQAAgGgFAAQgGAAAAAGgAinAAQAAAEAGAAQAFAAAAgEQAAgGgFAAQgGAAAAAGgAjVAAQAAAEAFAAQAGAAAAgEQAAgGgGAAQgFAAAAAGgAkDAAQAAAEAFAAQAGAAAAgEQAAgGgGAAQgFAAAAAGgAkyAAQAAAEAGAAQAFAAAAgEQAAgGgFAAQgGAAAAAGgAlgAAQAAAEAGAAQAFAAAAgEQAAgGgFAAQgGAAAAAGgAmOAAQAAAEAFAAQAFAAAAgEQAAgGgFAAQgFAAAAAGgAm8AAQAAAEAFAAQAGAAAAgEQAAgGgGAAQgFAAAAAGgAnrAAQAAAEAFAAQAGAAAAgEQAAgGgGAAQgFAAAAAGg");
        this.shape_4.setTransform(-54.7,29);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#D9E2E8").s().p("AihDOQiKAAhrhcQhmhYAAhqIAAh9IP5AAIAAB9QAABqhmBYQhrBciKAAg");
        this.shape_5.setTransform(-54.7,47.3);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#D9E2E8").s().p("ADvCNInfkVQgBAAAAAAQAAAAAAgBQgBAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIHfEVQABAAAAAAQAAABAAAAQABAAAAABQgBAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAg");
        this.shape_6.setTransform(-77.7,16.9);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#D9E2E8").s().p("ABdEFIi9oIQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABABIC8IIQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABIgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
        this.shape_7.setTransform(-66.9,7.7);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#D9E2E8").s().p("AhfEHQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAIC8oIQABgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIi9IIQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
        this.shape_8.setTransform(-52.6,7.7);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#B2C8D4").s().p("ADrCUIngkUQgEgDgBgEQgBgEACgEQACgEAFgBQAEgBAEACIHfEUQAEACABAFQACAEgDAEQgDAFgGAAg");
        this.shape_9.setTransform(-77.7,16.9);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#B2C8D4").s().p("ABVEIIi9oIQgCgEACgEQACgEAEgCQAEgBAFACQAEACABAEIC9IIQABAEgBAEQgCAEgFACIgDAAQgIAAgCgHg");
        this.shape_10.setTransform(-66.8,7.7);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#B2C8D4").s().p("AhhEPQgFgCgCgEQgBgEABgEIC8oIQACgEAEgCQAEgCAFABQADACACAEQADAEgCAEIi9IIQgDAHgHAAg");
        this.shape_11.setTransform(-52.6,7.7);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#B2C8D4").s().p("AjkBOIAPhHQARhdAEhIIGlDyImlBLg");
        this.shape_12.setTransform(-82.7,18.9);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#C5D5DE").s().p("AjSgNQA3gkBNhAQBLg/Avg0ICoHJg");
        this.shape_13.setTransform(-80.9,4.4);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#D9E2E8").s().p("AimjkQBEAIBiAAQBeAABJgIIinHJg");
        this.shape_14.setTransform(-59.8,4.5);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#37413B").s().p("AgNANQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAABABAAQAGAEAFgCQAFgBADgEQAHgLgMgIQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAIAFABAIQABAGgEAGQgEAGgHACIgDAAQgGAAgFgEg");
        this.shape_15.setTransform(-47.1,10.2);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#37413B").s().p("AgNANQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABABAAAAQAGAEAFgCQAFgBADgFQAEgFgBgDQgCgHgGgDQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAHAFACAIQABAGgEAGQgFAGgGACIgCAAQgGAAgGgEg");
        this.shape_16.setTransform(-54.1,20.8);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#D9E2E8").s().p("AikB6IgSgMQA5ARBWgVQAZgVAOgjQAPgjAAgnQACg4gbgtIAOAKQAVAqgCAyQAAA6geAvQgIAMgIAIQBvgfBahGIAFAGQhQA+hjAhQhGAYg6AAQgVAAgTgEg");
        this.shape_17.setTransform(-31.9,22.4);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#37413B").s().p("AgBATQgNgBgGgLQgGgLAJgNQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAQAAABAAAAQgHAMAFAIQAFAJAKABQAKABAIgMQAFgGgDgGQgCgEgEAAQgGAAgFAIQgBAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAFgKAJAAQAGABADAFQABAFAAAEQgBAEgDADQgIANgMAAIgBAAg");
        this.shape_18.setTransform(-55,13.5);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#FFFFFF").s().p("AgCAKQgDgBAAgDIgDgEIABAAQgGgEADgFQAEgFAGADQAAAAAAABQABAAAAAAQABAAABAAQAAAAABAAQADgBACACQAFACgDADIgIAMQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgCgBg");
        this.shape_19.setTransform(-42.5,21);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#FFFFFF").s().p("AgJASQgGgEgCgHQgBgGACgDIAIgMQACgEAGgBQAHgBAGAEQAGAEgBAFQAAAFgHAJQgHAKgEACIgDABQgCAAgEgCgAAAgPQgDAAgCADIgIAMQgCACACAEQABAFAFAEQACABADgCIAIgLIAGgLQABgDgCgCQgEgCgFAAIgCAAg");
        this.shape_20.setTransform(-41.1,21.9);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#FFFFFF").s().p("AgFAIQgDgCgBgEQgBgDACgEQADgDAEgBQADgBADADQAJAFgGAIQgCADgEABIgCAAQgCAAgDgCg");
        this.shape_21.setTransform(-43.1,20.6);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#D9E2E8").s().p("AgMAUQgIgGgCgKQgCgIAFgIQAFgIAKgCQAIgCAJAFQAIAGACAJQACAIgGAIQgFAIgJADIgFABQgGAAgGgEg");
        this.shape_22.setTransform(-43.4,20.4);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#FFFFFF").s().p("AgNAWQgJgGgCgLQgDgJAGgJQAGgJALgCQAJgCAJAGQAJAFACALQACAJgGAJQgFAJgLACIgFABQgHAAgGgEg");
        this.shape_23.setTransform(-43.5,20.3);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#EB6B7E").s().p("AhABiQgpgagKgwQgKgvAbgpQAbgpAwgJQAvgKApAbQApAbAKAwQAKAugbApQgbApgwAKQgNACgLAAQgiAAgegUg");
        this.shape_24.setTransform(-48.5,17);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#F3753B").s().p("AgIAOQgGgEgBgHQgCgFAEgGQAEgGAHgBQAGgBAFADQAGAEABAHQACAFgEAGQgDAGgHABIgEABQgEAAgEgDg");
        this.shape_25.setTransform(-42.8,6.8);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#F3753B").s().p("AgIAOQgGgEgBgHQgCgFAEgGQAEgGAHgBQAGgCAFAEQAGAEABAHQACAGgEAFQgEAGgHABIgDABQgEAAgEgDg");
        this.shape_26.setTransform(-55.6,26.2);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#FFFFFF").s().p("AApDJIjzigQgyghgMg6QgNg7AigyQAhgzA7gMQA8gMAyAhIDzCgQAzAiAMA6QAMA7ghAzQgiAyg7AMQgPADgPAAQgqAAgmgZg");
        this.shape_27.setTransform(-36.5,25);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(281));

        // Layer_10
        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#205571").s().p("AgPEYQgJgvgFjZQABjPgCgaQgEgvAPgpQASgwAdAXQgLCqgCB9QgCCcATDMQgdAIgJAFIgJg6g");
        this.shape_28.setTransform(12.8,-17.2);

        this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(281));

        // smile1
        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#38403B").s().p("Ag2AjQAfgFAcgUQAfgVALgfIAIADQgLAhgiAXQgdAVgiAFg");
        this.shape_29.setTransform(-6.3,-77.6);

        this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(281));

        // eye1
        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#38403B").s().p("AAAAXQgPgBgLgMQgMgMAAgTIAIAAQABAQAJAJQAJAKALAAQALABAIgIQAKgJACgUIAIABQgCAVgLALQgIAKgNACg");
        this.shape_30.setTransform(-8.5,-95.6);

        this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(281));

        // womanArm
        this.instance_1 = new lib.womanArm();
        this.instance_1.parent = this;
        this.instance_1.setTransform(51.4,-56.2,1,1,0,0,0,-1,-1.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:14,x:51.5},0).to({rotation:0,x:51.4},14).to({rotation:9.5},10).to({rotation:0},11).wait(1).to({rotation:9.5},10).to({rotation:10.5},11).to({rotation:0},14).to({rotation:16.2},13,cjs.Ease.quadInOut).to({regY:-1.2,rotation:13,y:-56.1},12).to({regY:-1.3,rotation:18.4,y:-56.2},15).wait(31).to({rotation:0},24,cjs.Ease.get(1)).to({rotation:9.5},10).to({rotation:0},11).wait(1).to({rotation:9.5},10).to({rotation:0},11).wait(8).to({rotation:9.5},10).to({rotation:0},11).wait(20).to({rotation:6.9},10).to({rotation:14,x:51.5},11).wait(1));

        // Layer_8
        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#FFFFFF").s().p("AgziUIgIgYIAIgWIAVAUIBKgjIAQAhIg8AdIgyFlg");
        this.shape_31.setTransform(50.5,-36.8);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#204A62").s().p("AifDQQBWgfArgeQAtgfAWgrQAUgnALhGQAFgfAPiJQACgvAiACQAhACADAsQgGDthbBmQglAqg6AcQgiARhPAbg");
        this.shape_32.setTransform(35.3,-27.9);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#EB6B7E").s().p("AgVAvQgNgGgGgPQgFgLgBgHQAAgGAEgJQAHgUARgGIAXgJIAbgGQAIgCAHAnQgTAEgJAHIgLAHQgDABgDgCIgEgDIgLABQgEACgEAFQgEADAKANQALAOgCAFQgBADgFAAQgDAAgGgCg");
        this.shape_33.setTransform(17.1,-2.3);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]}).wait(281));

        // Layer_11
        this.instance_2 = new lib.tie();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-14.1,-64.5,1,1,0,0,0,3,-31);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({rotation:-4.5},8).to({rotation:0},12).wait(1).to({rotation:-4.5},8).to({rotation:0},12).wait(10).to({rotation:-4.5},8).to({rotation:0},12).wait(81).to({rotation:-4.5},8).to({rotation:0},12).wait(1).to({rotation:-4.5},8).to({rotation:0},12).wait(10).to({rotation:-4.5},8).to({rotation:0},12).wait(17).to({regY:-31.1,rotation:4.5},10).to({regY:-31,rotation:0},13).wait(11));

        // Layer_4
        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#204A62").s().p("AiDGgQg0kDgJitQgNj2A9iiIFTALQgVEkgEBkQgGDCAPD7g");
        this.shape_34.setTransform(-2.6,-26.7);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#204A62").s().p("AisE7QA/hOAZhWQAOgxAKhjQAKheARg1QAbhUBChNQABgeASgSQARgRAWAAQAXgBAPAPQARASAAAeQg/BigrBuQgTAygpB/QgeBlgcA2QgoBPg/A8g");
        this.shape_35.setTransform(-23.2,-32.7);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#EB6B7E").s().p("AgzAzQgPgEgKgQQgJgNAcgVQAVgSAVgIQAlgPAegHQALgDARAhQgUATgVAYQgOASgHACQgEABgDgKQgEgLgCAAQgKAAgLAFQgMAGgDAKQgEAJgJAAIgHgBg");
        this.shape_36.setTransform(-43.7,3.6);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]}).wait(281));

        // eye2
        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#38403B").s().p("AgNAYQgHgEgHgGQgRgQAGgYIAIACQgFAUAOANQAOAOAPgFQASgFAHgZIAHACQgIAdgWAGIgJACQgGAAgIgDg");
        this.shape_37.setTransform(46.3,-84.7);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#38403B").s().p("AgEAVQgGABgEgFQgMgLACgaIAFAAQgCAWAKAJQAJAJAJgJQAKgJADgWIAFAAQgEAagNALQgFAEgGAAIgBAAg");
        this.shape_38.setTransform(46.3,-84.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37}]}).to({state:[{t:this.shape_37}]},27).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},43).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},5).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},85).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).wait(30));
        this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(28).to({x:45.9,y:-84.6},0).wait(1).to({x:45.5,y:-84.5},0).wait(1).to({x:45.1,y:-84.4},0).wait(1).to({x:44.7,y:-84.3},0).wait(1).to({x:44.2},0).wait(1).to({x:43.8,y:-84.2},0).wait(1).to({x:43.4,y:-84.1},0).wait(1).to({x:43,y:-84},0).wait(1).to({x:42.6,y:-83.9},0).wait(1).to({x:42.2,y:-83.8},0).wait(1).to({x:41.7},0).wait(1).to({x:41.3,y:-83.7},0).wait(1).to({x:41.7},0).wait(1).to({x:42,y:-83.8},0).wait(1).to({x:42.3,y:-83.9},0).wait(1).to({x:42.7},0).wait(1).to({x:43,y:-84},0).wait(1).to({x:43.3,y:-84.1},0).wait(1).to({x:43.7},0).wait(1).to({x:44,y:-84.2},0).wait(1).to({x:44.3,y:-84.3},0).wait(1).to({x:44.7},0).wait(1).to({x:45,y:-84.4},0).wait(1).to({x:45.3,y:-84.5},0).wait(1).to({x:45.7},0).wait(1).to({x:46,y:-84.6},0).wait(1).to({x:46.3,y:-84.7},0).wait(2).to({x:45.9,y:-84.6},0).wait(1).to({x:45.6,y:-84.5},0).wait(1).to({x:45.2,y:-84.4},0).wait(1).to({x:44.8},0).wait(1).to({x:44.4,y:-84.3},0).wait(1).to({x:44,y:-84.2},0).wait(1).to({x:43.6,y:-84.1},0).wait(1).to({x:43.2},0).wait(1).to({x:42.9,y:-84},0).wait(1).to({x:42.5,y:-83.9},0).wait(1).to({x:42.1,y:-83.8},0).wait(1).to({x:41.7},0).wait(1).to({x:41.3,y:-83.7},0).wait(1).to({x:41.7},0).wait(1).to({x:42,y:-83.8},0).wait(1).to({x:42.4,y:-83.9},0).wait(1).to({x:42.8,y:-84},0).wait(1).to({x:43.1},0).wait(1).to({x:43.5,y:-84.1},0).wait(1).to({x:43.8,y:-84.2},0).wait(1).to({x:44.2},0).wait(1).to({x:44.5,y:-84.3},0).wait(1).to({x:44.9,y:-84.4},0).wait(1).to({x:45.3,y:-84.5},0).wait(1).to({x:45.6},0).wait(1).to({x:46,y:-84.6},0).wait(1).to({x:46.3,y:-84.7},0).wait(43).to({_off:true},1).wait(1).to({_off:false,scaleX:0.25,skewY:180},0).to({_off:true},1).wait(1).to({_off:false,scaleX:1,skewY:0},0).wait(5).to({_off:true},1).wait(1).to({_off:false,scaleX:0.25,skewY:180},0).to({_off:true},1).wait(1).to({_off:false,scaleX:1,skewY:0},0).wait(86).to({x:45.9,y:-84.6},0).wait(1).to({x:45.6,y:-84.5},0).wait(1).to({x:45.2,y:-84.4},0).wait(1).to({x:44.8},0).wait(1).to({x:44.4,y:-84.3},0).wait(1).to({x:44,y:-84.2},0).wait(1).to({x:43.6,y:-84.1},0).wait(1).to({x:43.2},0).wait(1).to({x:42.9,y:-84},0).wait(1).to({x:42.5,y:-83.9},0).wait(1).to({x:42.1,y:-83.8},0).wait(1).to({x:41.7},0).wait(1).to({x:41.3,y:-83.7},0).wait(1).to({x:41.7},0).wait(1).to({x:42,y:-83.8},0).wait(1).to({x:42.4,y:-83.9},0).wait(1).to({x:42.8,y:-84},0).wait(1).to({x:43.1},0).wait(1).to({x:43.5,y:-84.1},0).wait(1).to({x:43.8,y:-84.2},0).wait(1).to({x:44.2},0).wait(1).to({x:44.5,y:-84.3},0).wait(1).to({x:44.9,y:-84.4},0).wait(1).to({x:45.3,y:-84.5},0).wait(1).to({x:45.6},0).wait(1).to({x:46,y:-84.6},0).wait(1).to({x:46.3,y:-84.7},0).wait(31));

        // dress
        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#204A62").s().p("AjGH4IBFpQQAbjkApi6IBngNQAUFPAjDQQAUB3BSFxg");
        this.shape_39.setTransform(51.1,-3.3);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#204A62").s().p("AjMH6QA6nCARiQQAbjkApi6IBngNQAUFPAjDQQATB3BZFxg");
        this.shape_40.setTransform(51.1,-3.3);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#204A62").s().p("AjSH9QBAnFARiQQAbjkApi6IBngNQAUFPAjDQQAUB3BfFxg");
        this.shape_41.setTransform(51.1,-3.3);
        this.shape_41._off = true;

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#204A62").s().p("AjZH/QBHnHARiQQAbjkApi6IBngNQAUFPAjDQQATB3BmFxg");
        this.shape_42.setTransform(51.1,-3.3);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#204A62").s().p("AjfICQBNnKARiQQAbjkApi6IBngNQAUFPAjDQQAUB3BrFxg");
        this.shape_43.setTransform(51.1,-3.3);
        this.shape_43._off = true;

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#204A62").s().p("AjlIEQBTnMARiQQAbjkApi6IBngNQAUFPAjDQQATB3ByFxg");
        this.shape_44.setTransform(51.1,-3.3);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#204A62").s().p("AiBhZQAbjkApi6IBngOQAUFQAjDQQAUB2B4FyInZACQBanOARiQg");
        this.shape_45.setTransform(51.1,-3.2);
        this.shape_45._off = true;

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#204A62").s().p("AiBhaQAbjlApi5IBngOQAUFQAjDQQATB2B/FyInlAFQBgnRARiQg");
        this.shape_46.setTransform(51.1,-3.1);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#204A62").s().p("AiBhcQAbjkApi6IBngNQAUFQAjDPQAUB3CEFyInxAHQBmnUARiQg");
        this.shape_47.setTransform(51.1,-2.9);
        this.shape_47._off = true;

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#204A62").s().p("AiBhbQAbjkApi6IBngNQAUFPAjDQQATB3CBFxInpAGQBinSARiQg");
        this.shape_48.setTransform(51.1,-3);
        this.shape_48._off = true;

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#204A62").s().p("AiBhaQAbjkApi6IBngNQAUFPAjDQQAUB3B8FxIngAEQBdnQARiQg");
        this.shape_49.setTransform(51.1,-3.1);
        this.shape_49._off = true;

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#204A62").s().p("AiBhYQAbjlApi5IBngOQAUFQAjDQQAUB2BzFyInQABQBWnNARiQg");
        this.shape_50.setTransform(51.1,-3.3);
        this.shape_50._off = true;

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#204A62").s().p("AjjIDQBRnLARiQQAbjkApi6IBngNQAUFPAjDQQAUB3BvFxg");
        this.shape_51.setTransform(51.1,-3.3);
        this.shape_51._off = true;

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#204A62").s().p("AjbIAQBJnIARiQQAbjkApi6IBngNQAUFPAjDQQAUB3BnFxg");
        this.shape_52.setTransform(51.1,-3.3);
        this.shape_52._off = true;

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#204A62").s().p("AjXH+QBFnGARiQQAbjkApi6IBngNQAUFPAjDQQAUB3BiFxg");
        this.shape_53.setTransform(51.1,-3.3);
        this.shape_53._off = true;

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#204A62").s().p("AjPH7QA9nDARiQQAbjkApi6IBngNQAUFPAjDQQAUB3BaFxg");
        this.shape_54.setTransform(51.1,-3.3);
        this.shape_54._off = true;

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#204A62").s().p("AjKH5QA4nBARiQQAbjkApi6IBngNQAUFPAjDQQAUB3BWFxg");
        this.shape_55.setTransform(51.1,-3.3);
        this.shape_55._off = true;

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#204A62").s().p("AjLH6QA5nCARiQQAbjkApi6IBngNQAUFPAjDQQATB3BYFxg");
        this.shape_56.setTransform(51.1,-3.3);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#204A62").s().p("AjRH8QA/nEARiQQAbjkApi6IBngNQAUFPAjDQQATB3BeFxg");
        this.shape_57.setTransform(51.1,-3.3);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#204A62").s().p("AjcIBQBKnJARiQQAbjkApi6IBngNQAUFPAjDQQAUB3BoFxg");
        this.shape_58.setTransform(51.1,-3.3);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#204A62").s().p("AjiIDQBQnLARiQQAbjkApi6IBngNQAUFPAjDQQAUB3BuFxg");
        this.shape_59.setTransform(51.1,-3.3);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#204A62").s().p("AiBhZQAbjlApi5IBngOQAUFQAjDQQATB2B6FyInbADQBbnPARiQg");
        this.shape_60.setTransform(51.1,-3.2);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#204A62").s().p("AiBhbQAbjkApi6IBngNQAUFQAjDPQAUB3B+FyInmAFQBhnSARiQg");
        this.shape_61.setTransform(51.1,-3);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39}]}).to({state:[{t:this.shape_39}]},7).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},24).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},61).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},58).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_39}]},1).wait(28));
        this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(7).to({_off:true},1).wait(19).to({_off:false},0).wait(1).to({_off:true},1).wait(19).to({_off:false},0).wait(24).to({_off:true},1).wait(20).to({_off:false},0).wait(62).to({_off:true},1).wait(19).to({_off:false},0).wait(58).to({_off:true},1).wait(19).to({_off:false},0).wait(28));
        this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(9).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(44).to({_off:false},0).to({_off:true},1).wait(66).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(62).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(30));
        this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(11).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(44).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(33));
        this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(13).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(44).to({_off:false},0).to({_off:true},1).wait(76).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(72).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(36));
        this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(15).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(44).to({_off:false},0).to({_off:true},1).wait(81).to({_off:false},0).to({_off:true},1).wait(77).to({_off:false},0).to({_off:true},1).wait(39));
        this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(16).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(44).to({_off:false},0).to({_off:true},1).wait(81).to({_off:false},0).to({_off:true},1).wait(77).to({_off:false},0).to({_off:true},1).wait(38));
        this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(17).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(44).to({_off:false},0).to({_off:true},1).wait(81).to({_off:false},0).to({_off:true},1).wait(77).to({_off:false},0).to({_off:true},1).wait(37));
        this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(19).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(81).to({_off:false},0).to({_off:true},1).wait(77).to({_off:false},0).to({_off:true},1).wait(35));
        this.timeline.addTween(cjs.Tween.get(this.shape_51).wait(20).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(44).to({_off:false},0).to({_off:true},1).wait(81).to({_off:false},0).to({_off:true},1).wait(77).to({_off:false},0).to({_off:true},1).wait(34));
        this.timeline.addTween(cjs.Tween.get(this.shape_52).wait(22).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(44).to({_off:false},0).to({_off:true},1).wait(81).to({_off:false},0).to({_off:true},1).wait(77).to({_off:false},0).to({_off:true},1).wait(32));
        this.timeline.addTween(cjs.Tween.get(this.shape_53).wait(23).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(30).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(81).to({_off:false},0).to({_off:true},1).wait(77).to({_off:false},0).to({_off:true},1).wait(31));
        this.timeline.addTween(cjs.Tween.get(this.shape_54).wait(25).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(44).to({_off:false},0).to({_off:true},1).wait(81).to({_off:false},0).to({_off:true},1).wait(77).to({_off:false},0).to({_off:true},1).wait(29));
        this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(26).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(44).to({_off:false},0).to({_off:true},1).wait(81).to({_off:false},0).to({_off:true},1).wait(77).to({_off:false},0).to({_off:true},1).wait(28));

        // smile2
        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#38403B").s().p("AgNAJQgKgFgGgGIAGgFQANAOAQgEQANgDADgLIAIACQgDAQgSAEIgIABQgGAAgIgDg");
        this.shape_62.setTransform(46.2,-70.6);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#38403B").s().p("AgMAJQgKgFgHgGIAHgFQAMAOAQgEQANgDADgLIAIACQgEAQgSAEIgHABQgGAAgHgDg");
        this.shape_63.setTransform(45.8,-70.5);
        this.shape_63._off = true;

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#38403B").s().p("AgNAJQgJgFgGgGIAFgFQANAOARgEQANgDACgLIAHACQgDAQgRAEIgIABQgGAAgIgDg");
        this.shape_64.setTransform(45,-70.3);
        this.shape_64._off = true;

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#38403B").s().p("AgMAJQgKgFgHgGIAHgFQAMAOAQgEQANgDADgLIAIACQgDAQgTAEIgHABQgGAAgHgDg");
        this.shape_65.setTransform(44.6,-70.2);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#38403B").s().p("AgMAJQgLgFgFgGIAFgFQANAOARgEQANgDACgLIAHACQgDAQgSAEIgHABQgGAAgHgDg");
        this.shape_66.setTransform(43.7,-70.1);
        this.shape_66._off = true;

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#38403B").s().p("AgNAJQgKgFgGgGIAHgFQAMAOAQgEQANgDADgLIAIACQgDAQgSAEIgIABQgGAAgIgDg");
        this.shape_67.setTransform(43.3,-70);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#38403B").s().p("AgMAJQgLgFgFgGIAGgFQAMAOARgEQANgDACgLIAHACQgDAQgSAEIgHABQgGAAgHgDg");
        this.shape_68.setTransform(42.5,-69.8);
        this.shape_68._off = true;

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#38403B").s().p("AgNAJQgKgFgGgGIAGgFQANAOAQgEQANgDADgLIAHACQgCAQgSAEIgIABQgGAAgIgDg");
        this.shape_69.setTransform(41.6,-69.7);
        this.shape_69._off = true;

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f("#38403B").s().p("AgMAJQgLgFgGgGIAHgFQAMAOARgEQANgDACgLIAIACQgDAQgTAEIgHABQgGAAgHgDg");
        this.shape_70.setTransform(42.6,-69.8);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#38403B").s().p("AgNAJQgJgFgHgGIAHgFQAMAOAQgEQANgDADgLIAIACQgDAQgTAEIgHABQgGAAgIgDg");
        this.shape_71.setTransform(43.2,-70);
        this.shape_71._off = true;

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f("#38403B").s().p("AgNAJQgJgFgHgGIAGgFQANAOAQgEQANgDADgLIAIACQgDAQgSAEIgIABQgGAAgIgDg");
        this.shape_72.setTransform(44.7,-70.3);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#38403B").s().p("AgMAJQgLgFgFgGIAGgFQAMAOAQgEQAOgDACgLIAIACQgDAQgTAEIgHABQgGAAgHgDg");
        this.shape_73.setTransform(43.9,-70.1);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f("#38403B").s().p("AgMAJQgLgFgFgGIAFgFQANAOARgEQANgDACgLIAHACQgDAQgRAEIgIABQgGAAgHgDg");
        this.shape_74.setTransform(42.4,-69.8);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#38403B").s().p("AgMAJQgLgFgFgGIAFgFQANAOARgEQANgDACgLIAHACQgDAQgSAEIgIABQgFAAgHgDg");
        this.shape_75.setTransform(41.9,-69.7);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f("#38403B").s().p("AgMAJQgLgFgGgGIAHgFQAMAOAQgEQAOgDACgLIAIACQgDAQgTAEIgHABQgGAAgHgDg");
        this.shape_76.setTransform(43,-69.9);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#38403B").s().p("AgPAMQgNgEgIgIIAIgFQAQAPAUgGQAQgEADgNIAKABQgEASgWAGQgGACgGAAQgHAAgHgCg");
        this.shape_77.setTransform(46.9,-70.9);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f("#38403B").s().p("AgRAOQgPgEgJgHIAIgGQATAPAYgIQASgFADgOIALABQgDATgaAIQgIADgJAAIgNgCg");
        this.shape_78.setTransform(47.5,-71.1);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#38403B").s().p("AgTAQQgRgEgKgHIAJgHQAWAPAagIQAUgHAEgOIAMAAQgDAUgdAKQgLADgMAAIgLgBg");
        this.shape_79.setTransform(47.9,-71.3);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f("#38403B").s().p("AgVARQgSgDgLgHIAKgIQAYAQAcgKQAWgHAEgPIANAAQgDAVgfAKQgMAEgOAAIgMgBg");
        this.shape_80.setTransform(48.3,-71.5);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f("#38403B").s().p("AgWASQgTgCgMgIIAKgIQAZAQAegLQAYgIADgPIAPAAQgDAWghALQgNAEgQAAIgLgBg");
        this.shape_81.setTransform(48.6,-71.6);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f("#38403B").s().p("AgXATQgTgDgNgHIALgJQAaAQAfgLQAXgIAEgPIAQAAQgEAWghALQgPAEgRAAIgKAAg");
        this.shape_82.setTransform(48.7,-71.7);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f("#38403B").s().p("AgWATQgVgDgMgHIAKgJQAbAQAfgLQAYgIAEgQIAPAAQgDAWgiAMQgPAFgRAAIgJgBg");
        this.shape_83.setTransform(48.8,-71.7);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f("#38403B").s().p("AgXATQgTgDgNgHIALgJQAaAQAfgLQAYgIADgPIAQAAQgEAVghAMQgPAEgRAAIgKAAg");
        this.shape_84.setTransform(48.7,-71.7);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f("#38403B").s().p("AgWATQgTgDgNgHIAKgJQAbAQAegKQAXgJAFgPIAOAAQgDAWghALQgPAEgRAAIgJAAg");
        this.shape_85.setTransform(48.7,-71.7);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f("#38403B").s().p("AgWATQgUgDgMgIIALgIQAZAQAfgLQAXgIAEgPIAPAAQgEAVghAMQgOAEgRAAIgJAAg");
        this.shape_86.setTransform(48.6,-71.6);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f("#38403B").s().p("AgWATQgTgDgMgIIAKgIQAaAQAegLQAXgIAEgPIAOAAQgDAWghALQgOAEgQAAIgKAAg");
        this.shape_87.setTransform(48.6,-71.6);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f("#38403B").s().p("AgWASQgTgCgMgIIAKgIQAaAPAegJQAXgJADgPIAPAAQgEAWggALQgOAEgPAAIgLgBg");
        this.shape_88.setTransform(48.5,-71.6);

        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f("#38403B").s().p("AgVASQgTgDgMgHIAKgIQAZAPAdgKQAXgIAEgPIAOAAQgDAWggAKQgNAFgPAAIgLgBg");
        this.shape_89.setTransform(48.5,-71.6);

        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f("#38403B").s().p("AgWASQgSgDgMgIIAKgHQAZAPAdgKQAXgIADgPIAPAAQgEAVgfALQgNAFgPAAIgMgBg");
        this.shape_90.setTransform(48.5,-71.5);

        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f("#38403B").s().p("AgVASQgTgDgMgIIALgHQAYAPAdgKQAWgIAFgPIANABQgDAVggAKQgMAFgPAAIgLgBg");
        this.shape_91.setTransform(48.4,-71.5);

        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f("#38403B").s().p("AgVASQgTgDgLgIIAKgHQAYAPAdgKQAWgHAEgPIAOAAQgDAVgfAKQgNAEgPAAIgLAAg");
        this.shape_92.setTransform(48.4,-71.5);

        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f("#38403B").s().p("AgUASQgTgDgMgIIALgHQAXAPAdgKQAWgHAEgPIAOAAQgEAVgfAKQgMAEgOAAIgLAAg");
        this.shape_93.setTransform(48.3,-71.5);

        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f("#38403B").s().p("AgVARQgSgDgLgHIAKgIQAXAQAdgKQAWgHADgPIAOAAQgDAVgfAKQgMAEgOAAIgMgBg");
        this.shape_94.setTransform(48.3,-71.5);

        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f("#38403B").s().p("AgUARQgSgDgMgHIAKgIQAYAQAcgKQAWgHADgPIAOAAQgEAVgeAKQgMAEgOAAIgLgBg");
        this.shape_95.setTransform(48.2,-71.5);

        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f("#38403B").s().p("AgUARQgSgDgLgHIAJgIQAYAQAcgKQAVgHAEgPIANABQgDAUgeAKQgMAEgNAAIgMgBg");
        this.shape_96.setTransform(48.2,-71.5);

        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f("#38403B").s().p("AgUARQgSgDgLgIIAKgHQAXAPAcgJQAVgHAEgPIANABQgDAUgeAKQgMAEgMAAIgNgBg");
        this.shape_97.setTransform(48.1,-71.4);

        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f("#38403B").s().p("AgUARQgSgEgKgIIAJgGQAXAPAbgJQAVgHAEgPIANAAQgDAVgeAKQgMAEgNAAIgLgBg");
        this.shape_98.setTransform(48.1,-71.4);

        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f("#38403B").s().p("AgUARQgRgEgLgIIAJgGQAXAPAbgJQAVgHAEgPIANABQgEAUgdAKQgMAEgNAAIgLgBg");
        this.shape_99.setTransform(48.1,-71.4);

        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f("#38403B").s().p("AgUARQgRgEgKgIIAJgGQAWAPAbgJQAVgHADgOIANAAQgDAUgdAKQgMADgNAAIgLAAg");
        this.shape_100.setTransform(48,-71.4);

        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f("#38403B").s().p("AgTAQQgRgEgLgHIAJgHQAWAPAbgJQAVgGADgOIANAAQgDAUgdAJQgMAEgMAAIgLgBg");
        this.shape_101.setTransform(48,-71.3);

        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f("#38403B").s().p("AgUAQQgQgEgKgHIAIgHQAXAPAZgIQAVgHADgOIAOAAQgEAUgdAKQgLADgMAAIgMgBg");
        this.shape_102.setTransform(48,-71.3);

        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f("#38403B").s().p("AgUAQQgQgEgKgHIAJgHQAWAPAagIQAUgHAEgOIAMABQgDAUgdAJQgLADgMAAIgMgBg");
        this.shape_103.setTransform(47.9,-71.3);

        this.shape_104 = new cjs.Shape();
        this.shape_104.graphics.f("#38403B").s().p("AgTAQQgQgEgKgIIAIgGQAWAPAZgJQAVgGADgOIAMABQgDATgcAJQgLAEgLAAIgMgBg");
        this.shape_104.setTransform(47.9,-71.3);

        this.shape_105 = new cjs.Shape();
        this.shape_105.graphics.f("#38403B").s().p("AgTAQQgQgEgKgIIAIgGQAWAPAagIQATgHAEgOIAMABQgDAUgcAIQgKAEgLAAIgNgBg");
        this.shape_105.setTransform(47.8,-71.3);

        this.shape_106 = new cjs.Shape();
        this.shape_106.graphics.f("#38403B").s().p("AgSAQQgQgEgKgIIAIgGQAVAPAZgIQAUgGAEgOIALAAQgDAUgbAIQgKADgLAAIgMAAg");
        this.shape_106.setTransform(47.8,-71.3);

        this.shape_107 = new cjs.Shape();
        this.shape_107.graphics.f("#38403B").s().p("AgTAQQgPgEgKgIIAIgGQAVAPAZgIQAUgGADgOIAMABQgDATgbAJQgKACgLAAIgNAAg");
        this.shape_107.setTransform(47.7,-71.3);

        this.shape_108 = new cjs.Shape();
        this.shape_108.graphics.f("#38403B").s().p("AgSAPQgQgEgKgHIAJgGQAUAPAZgIQAUgGADgOIAMAAQgEAUgbAIQgJADgKAAIgNgBg");
        this.shape_108.setTransform(47.7,-71.2);

        this.shape_109 = new cjs.Shape();
        this.shape_109.graphics.f("#38403B").s().p("AgSAPQgQgEgJgHIAIgGQAVAPAYgIQATgGAEgOIALABQgDATgbAIQgJADgKAAIgNgBg");
        this.shape_109.setTransform(47.6,-71.2);

        this.shape_110 = new cjs.Shape();
        this.shape_110.graphics.f("#38403B").s().p("AgSAPQgPgEgKgHIAJgGQAUAPAYgIQATgGADgOIAMABQgDATgbAIQgJADgKAAIgNgBg");
        this.shape_110.setTransform(47.6,-71.2);

        this.shape_111 = new cjs.Shape();
        this.shape_111.graphics.f("#38403B").s().p("AgSAPQgPgEgJgIIAIgGQAUAPAYgHQATgGADgOIAMABQgEATgaAIQgJADgKAAIgNgBg");
        this.shape_111.setTransform(47.6,-71.2);

        this.shape_112 = new cjs.Shape();
        this.shape_112.graphics.f("#38403B").s().p("AgSAPQgOgEgKgIIAIgGQAUAPAYgHQATgGADgNIALAAQgEATgZAIQgJACgJAAIgOAAg");
        this.shape_112.setTransform(47.5,-71.2);

        this.shape_113 = new cjs.Shape();
        this.shape_113.graphics.f("#38403B").s().p("AgRAOQgPgEgJgHIAIgGQATAPAXgIQATgFADgNIALABQgDASgZAIQgJACgJAAIgNgBg");
        this.shape_113.setTransform(47.4,-71.1);

        this.shape_114 = new cjs.Shape();
        this.shape_114.graphics.f("#38403B").s().p("AgRAOQgPgEgJgIIAIgGQATAPAXgHQASgFAEgNIALAAQgEATgZAIQgIACgIAAIgOgBg");
        this.shape_114.setTransform(47.4,-71.1);

        this.shape_115 = new cjs.Shape();
        this.shape_115.graphics.f("#38403B").s().p("AgRAOQgOgEgJgIIAIgGQASAPAXgHQASgFADgNIALABQgDASgZAIQgIACgIAAIgOgBg");
        this.shape_115.setTransform(47.3,-71.1);

        this.shape_116 = new cjs.Shape();
        this.shape_116.graphics.f("#38403B").s().p("AgRAOQgOgEgJgIIAIgGQATAPAWgHQASgFADgNIALABQgDATgZAHQgIACgIAAIgOgBg");
        this.shape_116.setTransform(47.3,-71.1);

        this.shape_117 = new cjs.Shape();
        this.shape_117.graphics.f("#38403B").s().p("AgQANQgPgEgIgHIAIgGQASAPAWgHQASgFADgNIAKABQgDASgYAHQgIADgIAAIgNgCg");
        this.shape_117.setTransform(47.2,-71);

        this.shape_118 = new cjs.Shape();
        this.shape_118.graphics.f("#38403B").s().p("AgQANQgOgEgJgHIAIgGQASAPAWgHQASgFACgNIALABQgDATgZAHQgHACgHAAIgOgCg");
        this.shape_118.setTransform(47.2,-71);

        this.shape_119 = new cjs.Shape();
        this.shape_119.graphics.f("#38403B").s().p("AgQANQgOgEgIgHIAIgGQARAPAWgHQARgEADgNIALABQgEASgXAHQgIABgHAAIgOgBg");
        this.shape_119.setTransform(47.2,-71);

        this.shape_120 = new cjs.Shape();
        this.shape_120.graphics.f("#38403B").s().p("AgQANQgNgEgJgIIAHgFQASAPAWgHQARgFADgNIAKABQgDATgYAGQgHADgHAAQgHAAgHgCg");
        this.shape_120.setTransform(47.1,-71);

        this.shape_121 = new cjs.Shape();
        this.shape_121.graphics.f("#38403B").s().p("AgQANQgNgEgIgIIAHgFQASAPAVgHQAQgEADgNIALABQgEASgXAGQgHACgHAAQgGAAgIgBg");
        this.shape_121.setTransform(47.1,-71);

        this.shape_122 = new cjs.Shape();
        this.shape_122.graphics.f("#38403B").s().p("AgPAMQgNgEgJgHIAHgGQASAPAVgGQAQgFAEgMIAJABQgDASgXAGQgHACgHAAQgGAAgHgCg");
        this.shape_122.setTransform(47,-70.9);

        this.shape_123 = new cjs.Shape();
        this.shape_123.graphics.f("#38403B").s().p("AgQAMQgNgEgIgHIAIgGQARAPAVgGQAQgEADgNIAKABQgEASgWAGQgHACgGAAQgHAAgIgCg");
        this.shape_123.setTransform(47,-70.9);

        this.shape_124 = new cjs.Shape();
        this.shape_124.graphics.f("#38403B").s().p("AgPAMQgNgEgIgHIAHgGQARAPAUgGQARgEADgNIAJABQgDASgWAGQgGACgHAAQgHAAgHgCg");
        this.shape_124.setTransform(46.9,-70.9);

        this.shape_125 = new cjs.Shape();
        this.shape_125.graphics.f("#38403B").s().p("AgPAMQgNgEgIgIIAIgFQAQAPAUgGQAQgEADgNIAKABQgDASgWAGQgGACgGAAQgHAAgIgCg");
        this.shape_125.setTransform(46.9,-70.9);

        this.shape_126 = new cjs.Shape();
        this.shape_126.graphics.f("#38403B").s().p("AgPAMQgMgEgIgIIAHgFQAQAPAUgGQAQgEADgNIAJACQgDARgWAGQgGACgFAAQgHAAgIgCg");
        this.shape_126.setTransform(46.8,-70.9);

        this.shape_127 = new cjs.Shape();
        this.shape_127.graphics.f("#38403B").s().p("AgPAMQgMgFgIgHIAHgFQAQAPAUgGQAPgEADgMIAKABQgEARgVAGQgGABgGAAIgOgBg");
        this.shape_127.setTransform(46.8,-70.8);

        this.shape_128 = new cjs.Shape();
        this.shape_128.graphics.f("#38403B").s().p("AgPAMQgMgFgHgHIAHgFQAPAOAUgFQAPgEADgMIAJABQgDARgVAGQgGABgGAAIgOgBg");
        this.shape_128.setTransform(46.8,-70.8);

        this.shape_129 = new cjs.Shape();
        this.shape_129.graphics.f("#38403B").s().p("AgPAMQgMgFgHgHIAHgFQAPAOAUgFQAPgEADgMIAJABQgDARgVAGQgGABgGAAQgGAAgIgBg");
        this.shape_129.setTransform(46.7,-70.8);

        this.shape_130 = new cjs.Shape();
        this.shape_130.graphics.f("#38403B").s().p("AgOALQgMgFgHgGIAGgGQAQAPATgFQAPgEADgMIAIABQgDARgVAFQgGACgFAAQgGAAgHgCg");
        this.shape_130.setTransform(46.7,-70.8);

        this.shape_131 = new cjs.Shape();
        this.shape_131.graphics.f("#38403B").s().p("AgPALQgLgFgHgGIAHgGQAOAPAUgFQAPgEACgMIAJABQgDARgVAGIgKABQgHAAgIgCg");
        this.shape_131.setTransform(46.7,-70.8);

        this.shape_132 = new cjs.Shape();
        this.shape_132.graphics.f("#38403B").s().p("AgOALQgMgFgGgGIAGgGQAPAPASgFQAPgEADgMIAJACQgEARgUAFIgKABQgHAAgHgCg");
        this.shape_132.setTransform(46.6,-70.8);

        this.shape_133 = new cjs.Shape();
        this.shape_133.graphics.f("#38403B").s().p("AgOALQgMgFgGgHIAHgFQAOAOATgEQAOgEACgMIAJABQgDARgUAFIgKACQgHAAgHgCg");
        this.shape_133.setTransform(46.6,-70.7);

        this.shape_134 = new cjs.Shape();
        this.shape_134.graphics.f("#38403B").s().p("AgNALQgMgFgGgHIAGgFQAOAPATgFQAOgEADgMIAIACQgDARgUAEIgKACQgGAAgHgCg");
        this.shape_134.setTransform(46.5,-70.7);

        this.shape_135 = new cjs.Shape();
        this.shape_135.graphics.f("#38403B").s().p("AgOAKQgLgFgGgGIAGgGQAOAPASgFQAOgDADgMIAIACQgDAQgUAFIgJACQgGAAgIgDg");
        this.shape_135.setTransform(46.5,-70.7);

        this.shape_136 = new cjs.Shape();
        this.shape_136.graphics.f("#38403B").s().p("AgNAKQgLgFgHgGIAHgGQANAPASgFQAOgDADgLIAIABQgDARgUAEIgJABQgGAAgHgCg");
        this.shape_136.setTransform(46.4,-70.7);

        this.shape_137 = new cjs.Shape();
        this.shape_137.graphics.f("#38403B").s().p("AgNAKQgLgFgGgGIAGgFQANAOASgEQAOgEACgLIAIABQgDARgTAEIgJABQgGAAgHgCg");
        this.shape_137.setTransform(46.4,-70.7);

        this.shape_138 = new cjs.Shape();
        this.shape_138.graphics.f("#38403B").s().p("AgNAKQgKgFgHgHIAGgFQAOAPARgFQANgDADgLIAIABQgDARgTAEIgJABQgGAAgHgCg");
        this.shape_138.setTransform(46.3,-70.6);

        this.shape_139 = new cjs.Shape();
        this.shape_139.graphics.f("#38403B").s().p("AgNAKQgLgFgFgHIAFgFQANAPASgFQANgDACgLIAIACQgDAQgSAEIgJABQgFAAgIgCg");
        this.shape_139.setTransform(46.3,-70.6);

        this.shape_140 = new cjs.Shape();
        this.shape_140.graphics.f("#38403B").s().p("AgMAKQgLgFgGgHIAGgFQANAPAQgEQAOgEADgLIAHACQgDAQgTAEIgHABQgGAAgHgCg");
        this.shape_140.setTransform(46.3,-70.6);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62}]}).to({state:[{t:this.shape_62}]},27).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65,p:{x:44.6,y:-70.2}}]},1).to({state:[{t:this.shape_65,p:{x:44.1,y:-70.2}}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67,p:{x:43.3,y:-70}}]},1).to({state:[{t:this.shape_67,p:{x:42.9,y:-69.9}}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_65,p:{x:41.9,y:-69.7}}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_67,p:{x:42.9,y:-69.9}}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_65,p:{x:44.6,y:-70.2}}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_67,p:{x:45.6,y:-70.4}}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_62}]},31).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_83}]},27).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_62}]},17).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_62}]},1).wait(30));
        this.timeline.addTween(cjs.Tween.get(this.shape_62).wait(27).to({_off:true},1).wait(9).to({_off:false,x:42.1,y:-69.7},0).to({_off:true},1).wait(1).to({_off:false,x:41.2,y:-69.6},0).to({_off:true},1).wait(8).to({_off:false,x:44.2,y:-70.2},0).to({_off:true},1).wait(5).to({_off:false,x:46.2,y:-70.6},0).wait(1).to({_off:true},1).wait(4).to({_off:false,x:44.3,y:-70.2},0).to({_off:true},1).wait(5).to({_off:false,x:42,y:-69.7},0).to({_off:true},1).wait(1).to({_off:false,x:41.2,y:-69.6},0).to({_off:true},1).wait(9).to({_off:false,x:44.8,y:-70.3},0).to({_off:true},1).wait(3).to({_off:false,x:46.2,y:-70.6},0).wait(31).to({_off:true},1).wait(92).to({_off:false},0).wait(17).to({_off:true},1).wait(4).to({_off:false,x:44.3,y:-70.2},0).to({_off:true},1).wait(5).to({_off:false,x:42,y:-69.7},0).to({_off:true},1).wait(1).to({_off:false,x:41.2,y:-69.6},0).to({_off:true},1).wait(9).to({_off:false,x:44.8,y:-70.3},0).to({_off:true},1).wait(3).to({_off:false,x:46.2,y:-70.6},0).wait(31));
        this.timeline.addTween(cjs.Tween.get(this.shape_63).wait(28).to({_off:false},0).wait(1).to({x:45.4,y:-70.4},0).to({_off:true},1).wait(12).to({_off:false,x:42.2,y:-69.8},0).to({_off:true},1).wait(3).to({_off:false,x:43.6,y:-70},0).to({_off:true},1).wait(9).to({_off:false,x:45.8,y:-70.5},0).to({_off:true},1).wait(6).to({_off:false,x:43.1,y:-70},0).to({_off:true},1).wait(8).to({_off:false,x:42.7,y:-69.9},0).to({_off:true},1).wait(151).to({_off:false,x:45.8,y:-70.5},0).to({_off:true},1).wait(6).to({_off:false,x:43.1,y:-70},0).to({_off:true},1).wait(8).to({_off:false,x:42.7,y:-69.9},0).to({_off:true},1).wait(40));
        this.timeline.addTween(cjs.Tween.get(this.shape_64).wait(30).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false,x:44.9},0).to({_off:true},1).wait(2).to({_off:false,x:45.9,y:-70.5},0).to({_off:true},1).wait(8).to({_off:false,x:43.5,y:-70},0).to({_off:true},1).wait(8).to({_off:false,x:42.3,y:-69.8},0).to({_off:true},1).wait(4).to({_off:false,x:44.1,y:-70.1},0).wait(1).to({x:44.4,y:-70.2},0).to({_off:true},1).wait(3).to({_off:false,x:45.9,y:-70.5},0).to({_off:true},1).wait(148).to({_off:false,x:43.5,y:-70},0).to({_off:true},1).wait(8).to({_off:false,x:42.3,y:-69.8},0).to({_off:true},1).wait(4).to({_off:false,x:44.1,y:-70.1},0).wait(1).to({x:44.4,y:-70.2},0).to({_off:true},1).wait(3).to({_off:false,x:45.9,y:-70.5},0).to({_off:true},1).wait(31));
        this.timeline.addTween(cjs.Tween.get(this.shape_66).wait(33).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false,x:45.1,y:-70.3},0).to({_off:true},1).wait(16).to({_off:false,x:43.7,y:-70.1},0).to({_off:true},1).wait(4).to({_off:false,x:45.5,y:-70.4},0).to({_off:true},1).wait(145).to({_off:false,x:45.1,y:-70.3},0).to({_off:true},1).wait(16).to({_off:false,x:43.7,y:-70.1},0).to({_off:true},1).wait(4).to({_off:false,x:45.5,y:-70.4},0).to({_off:true},1).wait(32));
        this.timeline.addTween(cjs.Tween.get(this.shape_68).wait(36).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:41.6,y:-69.6},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,x:43.4,y:-70},0).to({_off:true},1).wait(4).to({_off:false,x:45.2,y:-70.4},0).to({_off:true},1).wait(157).to({_off:false,x:41.6,y:-69.6},0).to({_off:true},1).wait(4).to({_off:false,x:43.4,y:-70},0).to({_off:true},1).wait(4).to({_off:false,x:45.2,y:-70.4},0).to({_off:true},1).wait(33));
        this.timeline.addTween(cjs.Tween.get(this.shape_69).wait(38).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false,x:43.9,y:-70.1},0).to({_off:true},1).wait(3).to({_off:false,x:45.2,y:-70.4},0).to({_off:true},1).wait(15).to({_off:false,x:41.6,y:-69.7},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(45));
        this.timeline.addTween(cjs.Tween.get(this.shape_71).wait(45).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false,x:45.5,y:-70.4},0).to({_off:true},1).wait(6).to({_off:false,x:42.8,y:-69.9},0).to({_off:true},1).wait(160).to({_off:false,x:45.5,y:-70.4},0).to({_off:true},1).wait(6).to({_off:false,x:42.8,y:-69.9},0).to({_off:true},1).wait(48));

        // head2
        this.instance_3 = new lib.head2();
        this.instance_3.parent = this;
        this.instance_3.setTransform(54.9,-80.2);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({regX:0.1,regY:-0.1,rotation:-9.5,x:50,y:-80.3},12).to({regX:0,regY:0,rotation:0,x:54.9,y:-80.2},15).wait(1).to({regX:0.1,regY:-0.1,rotation:-9.5,x:51,y:-80.3},13).to({regX:0,regY:0,rotation:0,x:54.9,y:-80.2},14).wait(141).to({regX:0.1,regY:-0.1,rotation:-9.5,x:51,y:-80.3},13).to({regX:0,regY:0,rotation:0,x:54.9,y:-80.2},14).wait(31));

        // head1
        this.instance_4 = new lib.head1();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-5.1,-90.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(94).to({regX:-0.2,regY:-0.1,scaleX:0.91,rotation:-3.2,x:-5.3,y:-89.2},9).wait(10).to({regX:0,regY:0,scaleX:1,rotation:0,x:-5.1,y:-90.4},9,cjs.Ease.quadInOut).wait(159));

        // Layer_6
        this.instance_5 = new lib.arm1();
        this.instance_5.parent = this;
        this.instance_5.setTransform(14.5,-58.6,1,1,0,0,0,-12,-28);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({rotation:8.5,x:11.6,y:-58.7},9).to({rotation:0,x:14.5,y:-58.6},10).wait(1).to({regY:-27.9,rotation:14.7,x:11.5},9).to({regY:-28,rotation:0,x:14.5},10).wait(4).to({regY:-27.9,rotation:14.7,x:11.5},11).to({regY:-28,rotation:0,x:14.5},15).wait(83).to({rotation:8.5,x:11.6,y:-58.7},9).to({rotation:0,x:14.5,y:-58.6},10).wait(1).to({regY:-27.9,rotation:14.7,x:11.5},9).to({regY:-28,rotation:0,x:14.5},10).wait(4).to({regY:-27.9,rotation:14.7,x:11.5},11).to({regY:-28,rotation:0,x:14.5},15).wait(20).to({rotation:7.7},14).to({rotation:0},13).wait(7));

        // legsWoman
        this.instance_6 = new lib.legs2("single",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(48.6,65.9);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({mode:"synched"},0).wait(280));

        // legsGUY
        this.instance_7 = new lib.legstest("single",0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(0,54.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({mode:"synched"},0).wait(280));

        // buildings
        this.instance_8 = new lib.Group_2("synched",0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(0,26.7,1,1,0,0,0,214.9,84.7);
        this.instance_8.alpha = 0.672;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({startPosition:1},0).wait(280));

        // Layer_5
        this.shadow = new lib.shadow1();
        this.shadow.name = "shadow";
        this.shadow.parent = this;
        this.shadow.setTransform(-5.9,111.8);

        this.timeline.addTween(cjs.Tween.get(this.shadow).wait(281));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1071.8,-114.8,1286.8,229.6);


    (lib.container = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{idle:1,on:7});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_1 = function() {
            this.main.stop();
        }
        this.frame_7 = function() {
            this.main.play();
        }
        this.frame_12 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(5).call(this.frame_12).wait(1));

        // Layer_2
        this.main = new lib.main();
        this.main.name = "main";
        this.main.parent = this;
        this.main.setTransform(0,-151);

        this.timeline.addTween(cjs.Tween.get(this.main).wait(13));

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#B6A984").s().p("EghlAc0MAAAg5nMBDLAAAMAAAA5ng");
        this.shape.setTransform(-0.1,142.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#43C1C4").s().p("EghlAzGMAAAhmLMBDLAAAMAAABmLg");
        this.shape_1.setTransform(0.1,-0.3);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(13));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1071.8,-327.3,1286.9,654.6);


// stage content:
    (lib.inf_g6 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.container = new lib.container();
        this.container.name = "container";
        this.container.parent = this;
        this.container.setTransform(215.1,327.4);

        this.timeline.addTween(cjs.Tween.get(this.container).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-641.7,327.6,1286.9,654.6);
// library properties:
    lib.properties = {
        id: 'BD747A241F0FAE46BF522F9A2F44EB2C',
        width: 430,
        height: 655,
        fps: 21,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [],
        preloads: []
    };



// bootstrap callback support:

    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
    p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
    p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
    p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

    p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if(!an.bootstrapListeners) {
        an.bootstrapListeners=[];
    }

    an.bootstrapCallback=function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if(an.bootcompsLoaded.length > 0) {
            for(var i=0; i<an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['BD747A241F0FAE46BF522F9A2F44EB2C'] = {
        getStage: function() { return exportRoot.getStage(); },
        getLibrary: function() { return lib; },
        getSpriteSheet: function() { return ss; },
        getImages: function() { return img; }
    };

    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for(var j=0; j<an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function(id) {
        return an.compositions[id];
    }



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
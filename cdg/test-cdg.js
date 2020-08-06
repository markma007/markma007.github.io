(function(){

  var cdg = new Cdg({canvasId: 'game-layer'});
  var stage = cdg.stage;

  // let code = `
  
  var T1 = Cdg.Utils.createClass(Cdg.Thing, {
    construct: function () {
      var self = this;
      var el = new fabric.Circle({left:50,top:50,radius:20,fill:'red'});
      this.addWithUpdate(el);
      this.on('mouseover',function(){
        el.on('mousedown',this.onElMouseDown);
      })
      this.on('mouseout',function(){
        el.off('mousedown',this.onElMouseDown);
      })
    },
    onElMouseDown: function () {
      console.log('down')
    }
  })

  var t1 = new T1(); stage.add(t1);
  // var t2 = new Cdg.UI.Icon({}); stage.add(t2);
  var t3 = new Cdg.UI.StaticText({text:'来吧',cx:100,cy:300,fontSize:16});
  stage.add(t3)

  var s = new Cdg.UI.Switch({cx:250,cy:50,size:'small'})
  stage.add(s)

  var s = new Cdg.UI.Button({labelTxt:'Test',cx:250,cy:300,size:'large'})
  stage.add(s)

  const plainItems = ['Apple', 'Pear', 'Orange'];
  const items = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];
  var rg = new Cdg.UI.Radio.Group({cx:220,cy:200,items})
  stage.add(rg)
  var cbg = new Cdg.UI.Checkbox.Group({cx:220,cy:100,items})
  stage.add(cbg)

  stage.update();

  // stage.start()
  // setTimeout(() => {
  //   stage.stop()
  // }, 3000);
  
  document.addEventListener('keyup', (event) => {
    const keyName = event.key;
    // console.log(keyName);
    if (keyName === ' ') {
      t1.animate({'left':100+t1.left, angle:90+t1.angle},{
        duration: 100,
        onChange: stage.render.bind(stage)
      });
    } else if (keyName === 'h') {
      t1.hide()
    } else if (keyName === 's') {
      t1.show()
    }
  });


  ////////////////////////////////////////////////////////////////////
  //
  let code = ``;
  cdg.execute(code);

})();


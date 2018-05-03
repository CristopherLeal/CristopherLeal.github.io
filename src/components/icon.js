export default (editor, config = {}) => {

  const domc = editor.DomComponents;

  const defaultType  = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView  = defaultType.view;

  domc.addType('icon', {

    model: defaultModel.extend({
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          tagName: 'i',
          draggable: true,
          droppable: false,
          editable:true,

        /*  traits:[{type:'content'}],*/

          traits: [{
              type:'select',
              label: 'Icon',
              name:'content',
              default:'home',
              changeProp:1,
              options: [
                {value:'home', name:'home'},
                {value:'search', name:'search'},
                {value:'android',name:'android'},
              ]
          }]
        }),
      },
      {
      isComponent: function(el) {
        if(el.tagName == 'I'){
          return {type: 'icon'};
        }
      },
    }),
    view: defaultView.extend({
      initialize(o){
        defaultView.prototype.initialize.apply(this,arguments);
        const model = this.model;
        this.listenTo(model,'change:content',this.updateContent);
      }
    })
  });
}

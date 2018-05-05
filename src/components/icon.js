import icons from '../traits/icons-array';

export default (editor, config = {}) => {

  const domc = editor.DomComponents;

  const defaultType  = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView  = defaultType.view;
  var iconlist = icons();

  domc.addType('icon', {

    model: defaultModel.extend({
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          tagName: 'i',
          draggable: true,
          droppable: false,
          editable:true,

          traits: [{
              type:'select',
              label: 'Icon',
              name:'content',
              default:'home',
              changeProp:1,
              options: iconlist,
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

    //Change defaultView to listen change:content events
    view: defaultView.extend({
      initialize(o){
        defaultView.prototype.initialize.apply(this,arguments);
        const model = this.model;
        this.listenTo(model,'change:content',this.updateContent);
      }
    })
  });
}

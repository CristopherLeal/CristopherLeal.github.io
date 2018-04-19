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
          traits: [{
              type:'select',
              label: 'fa icon',
              name:'class',
              options: [
                {value:'fa fa-home', name:'home'},
                {value:'fa fa-search', name:'search'}
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
    view: defaultView
  });
}

export default (editor, config = {}) => {

  const domc = editor.DomComponents;

  const defaultType  = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView  = defaultType.view;

  domc.addType('list',{
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        tagName: 'ul',
        draggable: true,
        droppable: true,
      }),
    },
    {
      isComponent: function(el) {
        if(  el.tagName == 'UL')
        {
          return {type: 'list'};
        }
      },
    }),
    view: defaultView
  });


  const textType  = domc.getType('text');
  const textModel = textType.model;
  const textView  = textType.view;


  domc.addType('list-item',{
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        tagName: 'li',
        draggable: true,
        droppable: true,
        editable:true,
      }),
    },
    {
      isComponent: function(el) {
        if(  el.tagName == 'LI')
        {
          return {type: 'list-item'};
        }
      },
    }),
    view: textView
  });

}

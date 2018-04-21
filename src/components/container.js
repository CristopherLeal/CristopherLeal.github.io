export default (editor, config = {}) => {

  const domc = editor.DomComponents;

  const defaultType  = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView  = defaultType.view;

  domc.addType('container', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        tagName: 'div',
        draggable: true,
        droppable: true,
      }),
    },
   {
      isComponent: function(el) {
        if( el.classList !== undefined &&
            (
              el.classList.contains('w3-container')    ||
              el.classList.contains('w3-card')   ||
              el.classList.contains('w3-card-2') ||
              el.classList.contains('w3-card-4')    ||
              el.classList.contains('w3-hover-shadow')   ||
              el.classList.contains('w3-display-container')
            )
        )
        {
          return {type: 'container'};
        }
      },
    }),
    // Define the View
    view: defaultView
  });
}

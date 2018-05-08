import loadText from './components/text';
import loadGrid from './components/grid';
import loadIcon from './components/icon';
import loadList from './components/list';
import loadContainer from './components/container';
import loadAccordion from './components/accordion';

export default (editor, config = {}) => {

  loadText(editor, config);
  loadGrid(editor, config);
  loadIcon(editor, config);
  loadList(editor, config);
  loadContainer(editor, config);
  loadAccordion(editor, config);

  const domc = editor.DomComponents;

  const defaultType  = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView  = defaultType.view;



  domc.addType('button', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        tagName: 'button',
        draggable: true,
        droppable: true,
        editable:true,
         traits: [{
             type:'text',
             label: 'link',
             name: 'src'
         }]
      }),
    },
   {
      isComponent: function(el) {
        if(el.tagName == 'BUTTON'){
          return {type: 'w3-button'};
        }
      },
    }),
    // Define the View
    view: defaultView
  });

  domc.addType('fullscreen-image', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        tagName: 'div',
        draggable: true,
        droppable: true,
        editable:true,
         traits: [{
             type:'text',
             label: 'link',
             name: 'background'
         }]
      }),
    },
   {
      isComponent: function(el) {
        if(el.tagName == 'BUTTON'){
          return {type: 'w3-button'};
        }
      },
    }),
    // Define the View
    view: defaultView
  });
}

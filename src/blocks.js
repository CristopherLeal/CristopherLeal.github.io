import loadGrid from './blocks/grid';
import loadText from './blocks/text';
import loadContainer from './blocks/container';
import loadDisplay from './blocks/display';
import loadList from './blocks/list';
import loadFix from './blocks/fix';
import loadImage from './blocks/image';
import loadLayout from './blocks/layout';
import loadVideo from './blocks/video';
import loadBar from './blocks/bar';

export default (editor, config = {}) => {

  loadGrid(editor,config);
  loadText(editor,config);
  loadList(editor,config);
  loadContainer(editor,config);
  loadDisplay(editor,config);
  loadFix(editor,config);
  loadImage(editor,config);
  loadLayout(editor,config);
  loadVideo(editor,config);
  loadBar(editor,config);

  const bm = editor.BlockManager;



  bm.add('button',{
    label: 'Button',
    category: 'Custom',
    attributes: {class:'fa fa-image'},
    content:{
      type: 'button',
      classes: ['w3-button'],
      content: 'Botao',
      activeOnRender: 1
    }
  });




  bm.add('accordion',{
    label: 'Accordion',
    category: 'Accordion',
    attributes: {class:'fa fa-align-justify'},
    content:{
      type: 'accordion',
      activeOnRender: 1
    }
  });


}

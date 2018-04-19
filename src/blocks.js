import loadGrid from './blocks/grid';
import loadText from './blocks/text';

export default (editor, config = {}) => {

  loadGrid(editor,config);
  loadText(editor,config);

  const bm = editor.BlockManager;



  bm.add('card',{
    label: 'Card',
    category: 'Custom',
    attributes: {class:'gjs-fonts gjs-f-text'},
    content:{
      type: 'default',
      classes:['w3-card'],
      content:'',
      style: {padding: '20px' },
      activeOnRender: 1
    }
  });


  bm.add('container',{
    label: 'Container',
    category: 'Custom',
    attributes: {class:'gjs-fonts gjs-f-text'},
    content:{
      type: 'default',
      classes:['w3-container'],
      content:'',
      style: {padding: '20px' },
      activeOnRender: 1
    }
  });

  bm.add('image',{
    label: 'Image',
    category: 'Custom',
    attributes: {class:'fa fa-image'},
    content:{
      type: 'image',
      style: {width: '100%'},
      activeOnRender: 1
    }
  });

  bm.add('button',{
    label: 'Button',
    category: 'Custom',
    attributes: {class:'fa fa-image'},
    content:{
      type: 'button',
      content: 'Botao',
      activeOnRender: 1
    }
  });

  bm.add('icon',{
    label: 'Icon',
    category: 'Custom',
    attributes: {class:'fa fa-image'},
    content:{
      type: 'icon',
      classes:['fa', 'fa-home'],
        style: {padding: '20px' },
      activeOnRender: 1
    }
  });



}

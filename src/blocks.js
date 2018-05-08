import loadGrid from './blocks/grid';
import loadText from './blocks/text';
import loadContainer from './blocks/container';
import loadDisplay from './blocks/display';
import loadList from './blocks/list';
import loadFix from './blocks/fix';

export default (editor, config = {}) => {

  loadGrid(editor,config);
  loadText(editor,config);
  loadList(editor,config);
  loadContainer(editor,config);
  loadDisplay(editor,config);
  loadFix(editor,config);

  const bm = editor.BlockManager;

  bm.add('button-link',{
    label: 'Button Link',
    category: 'Custom',
    attributes: {class:'fa fa-link'},
    content:{
      type: 'link',
      classes:['w3-button'],
      content:'Button',
      activeOnRender: 1
    }
  });

  bm.add('img-link',{
    label: 'Image Link',
    category: 'Custom',
    attributes: {class:'fa fa-link'},
    content:{
      type: 'link',
      droppable: true,
      activeOnRender: 1
    }
  });

  bm.add('bar-link',{
    label: 'Bar Link',
    category: 'Custom',
    attributes: {class:'fa fa-link'},
    content:{
      type: 'link',
      classes:['w3-button','w3-bar-item'],
      content:'Button',
      activeOnRender: 1
    }
  });

  bm.add('bar-link-right',{
    label: 'Bar Link Right',
    category: 'Custom',
    attributes: {class:'fa fa-link'},
    content:{
      type: 'link',
      classes:['w3-button','w3-bar-item','w3-right'],
      content:'Button',
      activeOnRender: 1
    }
  });

  bm.add('bar',{
    label: 'Bar',
    category: 'Custom',
    attributes: {class:'fa fa-link'},
    content:{
      type: 'container',
      classes:['w3-bar','w3-black'],
      activeOnRender: 1
    }
  });






  bm.add('layout-row-cell',{
    label: 'Row',
    category: 'Layout cell',
    attributes: {class:'fa fa-th-large'},
    content:{
      type: 'container',
      classes:['w3-cell-row'],
      content:'',
      style: {padding:'20px'},
      activeOnRender: 1
    }
  });

  bm.add('layout-cell',{
    label: 'Cell',
    category: 'Layout cell',
    attributes: {class:'fa fa-th-large'},
    content:{
      type: 'container',
      content:'',
      classes:['w3-cell'],
      style: {padding:'20px'},
      activeOnRender: 1
    }
  });
  bm.add('layout-middle-cell',{
    label: 'Middle Cell',
    category: 'Layout cell',
    attributes: {class:'fa fa-th-large'},
    content:{
      type: 'container',
      content:'',
      classes:['w3-cell','w3-cell-middle'],
      style: {padding:'20px'},
      activeOnRender: 1
    }
  });

  bm.add('layout-bottom-cell',{
    label: 'Bottom Cell',
    category: 'Layout cell',
    attributes: {class:'fa fa-th-large'},
    content:{
      type: 'container',
      content:'',
      classes:['w3-cell','w3-cell-bottom'],
      style: {padding:'20px'},
      activeOnRender: 1
    }
  });

  bm.add('layout-top-cell',{
    label: 'Top Cell',
    category: 'Layout cell',
    attributes: {class:'fa fa-th-large'},
    content:{
      type: 'container',
      content:'',
      classes:['w3-cell','w3-cell-top'],
      style: {padding:'20px'},
      activeOnRender: 1
    }
  });



  bm.add('image',{
    label: 'Image',
    category: 'Image',
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
      classes: ['w3-button'],
      content: 'Botao',
      activeOnRender: 1
    }
  });

  bm.add('icon',{
    label: 'Icon',
    category: 'Image',
    attributes: {class:'fa fa-image'},
    content:{
      type: 'icon',
      classes:['material-icons'],
      content:'home',
      style:{padding:'0px'},
      activeOnRender: 1
    }
  });




  bm.add('video',{
    label: 'Video',
    category: 'Video',
    attributes: {class:'fa fa-home'},
    content:{
      type: 'video',
      activeOnRender: 1
    }
  });

  bm.add('video-container',{
    label: 'Video Container',
    category: 'Video',
    attributes: {class:'fa fa-home'},
    content:{
      type: 'default',
      classes:['video-container'],
      activeOnRender: 1
    }
  });

  bm.add('fullscreen-image',{
    label: 'Full screem image',
    category: 'Image',
    attributes: {class:'fa fa-image'},
    content:{
      type: 'default',
      classes:['fullscreen-image'],
      activeOnRender: 1
    }
  });

  bm.add('parallax-image',{
    label: 'Parallax image',
    category: 'Image',
    attributes: {class:'fa fa-image'},
    content:{
      type: 'default',
      classes:['parallax'],
      activeOnRender: 1
    }
  });

  bm.add('accordion',{
    label: 'Accordion',
    category: 'Accordion',
    attributes: {class:'fa fa-home'},
    content:{
      type: 'accordion',
      activeOnRender: 1
    }
  });









}

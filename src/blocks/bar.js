export default (editor, config = {}) => {

  const bm = editor.BlockManager;

  bm.add('button-link',{
    label: 'Button Link',
    category: 'Bar',
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
    category: 'Bar',
    attributes: {class:'fa fa-link'},
    content:{
      type: 'link',
      droppable: true,
      activeOnRender: 1
    }
  });

  bm.add('bar-link',{
    label: 'Bar Link',
    category: 'Bar',
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
    category: 'Bar',
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
    category: 'Bar',
    attributes: {class:'fa fa-link'},
    content:{
      type: 'container',
      classes:['w3-bar'],
      activeOnRender: 1
    }
  });



}

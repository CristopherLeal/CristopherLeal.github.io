export default (editor, config = {}) => {

  const bm = editor.BlockManager;

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


}

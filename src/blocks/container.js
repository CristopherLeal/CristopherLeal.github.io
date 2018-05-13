export default (editor, config = {}) => {

  const bm = editor.BlockManager;
  const default_padding = '3px';

  bm.add('container',{
    label: 'Container',
    category: 'Container',
    attributes: {class:'fa fa-plus-square-o'},
    content:{
      type: 'container',
      classes:['w3-container'],
      content:'',
      style: {padding: default_padding },
      activeOnRender: 1
    }
  });

  bm.add('card',{
    label: 'Card',
    category: 'Container',
    attributes: {class:'fa fa-plus-square-o'},
    content:{
      type: 'container',
      classes:['w3-card'],
      style: {padding: default_padding },
      content:'',
      activeOnRender: 1
    }
  });

  bm.add('hover-shadow',{
    label: 'Hover shadow box',
    category: 'Container',
    attributes: {class:'fa fa-plus-square-o'},
    content:{
      type: 'container',
      classes:['w3-hover-shadow'],
      style: {padding: default_padding },
      activeOnRender: 1
    }
  });


}

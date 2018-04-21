export default (editor, config = {}) => {

  const bm = editor.BlockManager;

  bm.add('container',{
    label: 'Container',
    category: 'Container',
    attributes: {class:'fa fa-plus-square-o'},
    content:{
      type: 'container',
      classes:['w3-container'],
      content:'',
      style: {padding: '20px' },
      activeOnRender: 1
    }
  });

  bm.add('card',{
    label: 'Card',
    category: 'Container',
    attributes: {class:'fa fa-plus-square-o'},
    content:{
      type: 'container',
      classes:['w3-card','w3-padding-16'],
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
      classes:['w3-hover-shadow','w3-padding-16'],
      activeOnRender: 1
    }
  });


}

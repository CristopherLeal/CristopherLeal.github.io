export default (editor, config = {}) => {

  const bm = editor.BlockManager;
/*
  bm.add('img-link',{
    label: 'Image Link',
    category: 'Bar',
    attributes: {class:'fa fa-link'},
    content:{
      type: 'link',
      content:'<img src="https://www.lonnie.com.br/wp-content/uploads/2017/11/lonnie_nome_peq_azul.png"></img>',
      droppable: true,
      activeOnRender: 1
    }
  });
*/

bm.add('bar-h',{
  label: 'Horizontal Bar',
  category: 'Bar',
  attributes: {class:'fa fa-ellipsis-h'},
  content:{
    type: 'container',
    classes:['w3-bar'],
    activeOnRender: 1
  }
});

bm.add('bar-v',{
  label: 'Vertical Bar',
  category: 'Bar',
  attributes: {class:'fa fa-ellipsis-v'},
  content:{
    type: 'container',
    classes:['w3-bar-block'],
    activeOnRender: 1
  }
});

  bm.add('bar-link',{
    label: 'Bar Link',
    category: 'Bar',
    attributes: {class:'fa fa-link'},
    content:{
      type: 'link',
      editable:true,
      layerable:true,
      draggable:true,
      droppable:true,
      //propagate:['editable','layerable'],
      classes:['w3-button','w3-bar-item'],
      content:'<spam>home</spam>',
      activeOnRender: 1
    }
  });

  bm.add('bar-link-right',{
    label: 'Bar Link Right',
    category: 'Bar',
    attributes: {class:'fa fa-link'},
    content:{
      type: 'link',
      editable:true,
      layerable:true,
      draggable:true,
      droppable:true,
      //propagate:['editable','layerable'],
      classes:['w3-button','w3-bar-item','w3-right'],
      content:'<spam>home</spam>',
      activeOnRender: 1
    }
  });






}

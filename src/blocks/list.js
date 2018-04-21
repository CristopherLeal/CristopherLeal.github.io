export default (editor, config = {}) => {

  const bm = editor.BlockManager;

  bm.add('list',{
    label: 'List',
    category: 'List',
    attributes: {class:'fa fa-list'}, 
    content:{
      type: 'list',
      classes:['w3-ul','w3-border','w3-padding-16'],
      content:'',
      activeOnRender: 1
    }
  });

  bm.add('list-item',{
    label: 'List item',
    category: 'List',
    attributes: {class:'fa fa-list'},
    content:{
      type: 'list-item',
      classes:['w3-padding-16','w3-center'],
      content: 'edite item',
      activeOnRender: 1
    }
  });

}

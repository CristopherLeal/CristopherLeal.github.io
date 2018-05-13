export default (editor, config = {}) => {

  const bm = editor.BlockManager;
  const default_padding = '20px';

  bm.add('layout-row-cell',{
    label: 'Row',
    category: 'Layout cell',
    attributes: {class:'fa fa-th-large'},
    content:{
      type: 'container',
      classes:['w3-cell-row'],
      content:'',
      style: {padding:default_padding},
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
      style: {padding:default_padding},
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
      style: {padding:default_padding},
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
      style: {padding:default_padding},
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
      style: {padding:default_padding},
      activeOnRender: 1
    }
  });


}

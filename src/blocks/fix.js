export default (editor, config = {}) => {

  const bm = editor.BlockManager;
  const default_padding = '0px';

  bm.add('fix-top',{
    label: 'fix top',
    category: 'Fix direction',
    attributes: {class:'fa fa-arrow-up'},
    content:{
      type: 'default',
      classes:['w3-top'],
      content:'',
      style: {padding: default_padding },
      activeOnRender: 1
    }
  });
  bm.add('fix-right',{
    label: 'fix right',
    category: 'Fix direction',
    attributes: {class:'fa fa-arrow-right'},
    content:{
      type: 'default',
      classes:['w3-right'],
      content:'',
      style: {padding: default_padding },
      activeOnRender: 1
    }
  });

  bm.add('fix-left',{
    label: 'fix left',
    category: 'Fix direction',
    attributes: {class:'fa fa-arrow-left'},
    content:{
      type: 'default',
      classes:['w3-left'],
      content:'',
      style: {padding: default_padding },
      activeOnRender: 1
    }
  });

  bm.add('fix-bottom',{
    label: 'fix bottom',
    category: 'Fix direction',
    attributes: {class:'fa fa-arrow-down'},
    content:{
      type: 'default',
      classes:['w3-bottom'],
      content:'',
      style: {padding: default_padding },
      activeOnRender: 1
    }
  });

}

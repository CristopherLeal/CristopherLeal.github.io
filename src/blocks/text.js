export default (editor, config = {}) => {

  const bm = editor.BlockManager;

  bm.add('h1',{
    label: 'Header 1',
    category: 'Text',
    attributes: {class:'gjs-fonts gjs-f-text'},
    content:{
      type: 'text',
      tagName: 'H1',
      content:'Header h1',
      activeOnRender: 1
    }
  });
  bm.add('h2',{
    label: 'Header 2',
    category: 'Text',
    attributes: {class:'gjs-fonts gjs-f-text'},
    content:{
      type: 'text',
      tagName: 'H2',
      content:'Header h2',
      activeOnRender: 1
    }
  });

  bm.add('h3',{
    label: 'Header 3',
    category: 'Text',
    attributes: {class:'gjs-fonts gjs-f-text'},
    content:{
      type: 'text',
      tagName: 'H3',
      content:'Header h3',
      activeOnRender: 1
    }
  });

  bm.add('h4',{
    label: 'Header 4',
    category: 'Text',
    attributes: {class:'gjs-fonts gjs-f-text'},
    content:{
      type: 'text',
      tagName: 'H4',
      content:'Header h4',
      activeOnRender: 1
    }
  });

  bm.add('h5',{
    label: 'Header 5',
    category: 'Text',
    attributes: {class:'gjs-fonts gjs-f-text'},
    content:{
      type: 'text',
      tagName: 'H5',
      content:'Header h5',
      activeOnRender: 1
    }
  });

  bm.add('h6',{
    label: 'Header 6',
    category: 'Text',
    attributes: {class:'gjs-fonts gjs-f-text'},
    content:{
      type: 'text',
      tagName: 'H6',
      content:'Header h6',
      activeOnRender: 1
    }
  });

  bm.add('p',{
    label: 'Paragraph',
    category: 'Text',
    attributes: {class:'gjs-fonts gjs-f-text'},
    content:{
      type: 'text',
      tagName: 'p',
      content:'Paragraph',
      activeOnRender: 1
    }
  });

}

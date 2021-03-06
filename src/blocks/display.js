export default (editor, config = {}) => {

  const bm = editor.BlockManager;
  const default_padding = '3px';


  bm.add('container-display',{
    label: 'Container display',
    category: 'Container Display',
    attributes: {class:'fa fa-plus-square-o'},
    content:{
      type: 'container',
      classes:['w3-display-container'],
      style:{padding:default_padding},
      activeOnRender: 1
    }
  });

  bm.add('middle-display',{
    label: 'Middle',
    category: 'Container Display',
    attributes: {class:'fa fa-crosshairs'},
    content:{
      type: 'container',
      classes:['w3-display-middle'],
      style:{padding:default_padding},
      activeOnRender: 1
    }
  });

  bm.add('top-right-display',{
    label: 'Top-Right',
    category: 'Container Display',
    attributes: {class:'fa fa-arrows-alt'},
    content:{
      type: 'container',
      classes:['w3-display-topright'],
      style:{padding:default_padding},
      activeOnRender: 1
    }
  });

  bm.add('top-left-display',{
    label: 'Top-Left',
    category: 'Container Display',
    attributes: {class:'fa fa-arrows-alt'},
    content:{
      type: 'container',
      classes:['w3-display-topleft'],
      style:{padding:default_padding},
      activeOnRender: 1
    }
  });

  bm.add('bottom-right-display',{
    label: 'Bottom-Right',
    category: 'Container Display',
    attributes: {class:'fa fa-arrows-alt'},
    content:{
      type: 'container',
      classes:['w3-display-bottomright'],
      style:{padding:default_padding},
      activeOnRender: 1
    }
  });

  bm.add('bottom-left-display',{
    label: 'Bottom-Left',
    category: 'Container Display',
    attributes: {class:'fa fa-arrows-alt'},
    content:{
      type: 'container',
      classes:['w3-display-bottomleft'],
      style:{padding:default_padding},
      activeOnRender: 1
    }
  });

  bm.add('right-display',{
    label: 'Right',
    category: 'Container Display',
    attributes: {class:'fa fa-arrows'},
    content:{
      type: 'container',
      classes:['w3-display-right'],
      style:{padding:default_padding},
      activeOnRender: 1
    }
  });

  bm.add('left-display',{
    label: 'Left',
    category: 'Container Display',
    attributes: {class:'fa fa-arrows'},
    content:{
      type: 'container',
      classes:['w3-display-left'],
      style:{padding:default_padding},
      activeOnRender: 1
    }
  });

  bm.add('top-middle-display',{
    label: 'Top-Middle',
    category: 'Container Display',
    attributes: {class:'fa fa-arrows'},
    content:{
      type: 'container',
      classes:['w3-display-topmiddle'],
      style:{padding:default_padding},
      activeOnRender: 1
    }
  });

  bm.add('bottom-middle-display',{
    label: 'Bottom-Middle ',
    category: 'Container Display',
    attributes: {class:'fa fa-arrows'},
    content:{
      type: 'container',
      classes:['w3-display-bottommiddle'],
      style:{padding:default_padding},
      activeOnRender: 1
    }
  });



}

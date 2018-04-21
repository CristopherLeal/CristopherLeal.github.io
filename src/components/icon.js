export default (editor, config = {}) => {

  const domc = editor.DomComponents;

  const defaultType  = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView  = defaultType.view;

  domc.addType('icon', {

    model: defaultModel.extend({
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          tagName: 'i',
          draggable: true,
          droppable: false,
          editable:true,
          traits: [{
              type:'select',
              label: 'fa icon',
              name:'class',
              options: [
                {value:'fa fa-home', name:'home'},
                {value:'fa fa-search', name:'search'},
                {value:'fa fa-android',name:''},
                {value:'fa fa-apple',name:''},
                {value:'fa fa-bitcoin',name:''},
                {value:'fa fa-bluetooth',name:''},
                {value:'fa fa-cc-visa',name:''},
                {value:'fa fa-cc-paypal',name:''},
                {value:'fa fa-chrome',name:''},
                {value:'fa fa-dropbox',name:''},
                {value:'fa fa-edge',name:''},
                {value:'fa fa-facebook'},
                {value:'fa fa-facebook-official'},
                {value:'fa fa-facebook-square'},

              ]
          }]
        }),
      },
      {
      isComponent: function(el) {
        if(el.tagName == 'I'){
          return {type: 'icon'};
        }
      },
    }),
    view: defaultView
  });
}

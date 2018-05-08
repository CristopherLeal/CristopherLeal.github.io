export default (editor, config = {}) => {

  const domc = editor.DomComponents;

  const defaultType  = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView  = defaultType.view;

  domc.addType('accordion', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        tagName: 'div',
        draggable: true,
        droppable: true,
        editable:true,

        script:function(){
          var buttonEl = this.querySelector('[data-js=accordion-button]');
          var contentEl = this.querySelector('[data-js=accordion-content]');


          var show = function(e) {
              var x = e.target.parentElement.querySelector('[data-js=accordion-content]');
              //alert(e.target.parentElement.querySelector('[data-js=accordion-content]'));
              if (x.className.indexOf("w3-show") == -1) {
                  x.className += " w3-show";
              } else {
                x.className = x.className.replace(" w3-show", "");
              }
          }



          buttonEl.addEventListener("click", show);

        }

      }),
    },
   {
      isComponent: function(el) {
        if(el.classList !== undefined && el.classList.contains('w3-accordion')){
          return {type: 'accordion'};
        }
      },
    }),
    // Define the View
    view: defaultView.extend({

      init(){

      const comps = this.model.get('components');
        // Add a basic countdown template if it's not yet initialized
        if (!comps.length) {
          comps.reset();
          comps.add(`
            <style>
              .accordion-button{
                padding:10px;
                margin:0px;
                background-color:#000000;
                color:#ffffff;
              }
              .accordion-button:hover{
                background-color:#888888;
              }
            </style>
            <div data-js="accordion-button" class="accordion-button w3-panel w3-block w3-left-align">
                Open Section 1
            </div>
            <div data-js="accordion-content" class="w3-container w3-hide">
                <p>Some text..</p
            </div>
            `);
        }
      }
    }),
  });



}

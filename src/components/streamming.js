export default (editor, config = {}) => {

  const domc = editor.DomComponents;

  const videoType  = domc.getType('video');
  const videoModel = videoType.model;
  const videoView  = videoType.view;

  domc.addType('streamming', {
    model: videoModel.extend({
      defaults: Object.assign({}, videoModel.prototype.defaults, {
        tagName:'iframe',
        provider:'yt',
      }),
    },
    {}

   ),
    // Define the View
    view: videoView
  });
}

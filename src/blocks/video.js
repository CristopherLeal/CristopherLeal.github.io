export default (editor, config = {}) => {

  const bm = editor.BlockManager;

  bm.add('streamming',{
    label: 'Streamming',
    category: 'Video',
    attributes: {class:'fa fa-youtube-play'},
    content:{
      type: 'streamming',
      classes:['video-container'],
      activeOnRender: 1
    }
  });

  bm.add('video',{
    label: 'Video',
    category: 'Video',
    attributes: {class:'fa fa-file-movie-o'},
    content:{
      type: 'video',
      attributes:{src:'https://www.w3schools.com/howto/rain.mp4'},
      activeOnRender: 1
    }
  });


}

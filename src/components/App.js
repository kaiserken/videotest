import VideoPlayer from './VideoPlayer';


export default class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        videos: [
          'http://playertest.longtailvideo.com/adaptive/oceans_aes/oceans_aes.m3u8',
          'http://playertest.longtailvideo.com/adaptive/captions/playlist.m3u8',
          'http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8',
          'http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8',
          'http://cdn-fms.rbs.com.br/hls-vod/sample1_1500kbps.f4v.m3u8',
          'http://cdn-fms.rbs.com.br/vod/hls_sample1_manifest.m3u8',
          'http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8',
          'http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8',
          'http://184.72.239.149/vod/smil:BigBuckBunny.smil/playlist.m3u8',
          'http://playertest.longtailvideo.com/adaptive/bipbop/bipbop.m3u8',
        ],
        selectedVideo: ''

      };
  }

  onVideoClick(video) {
    this.setState({selectedVideo: video});
  }

  renderVideoList(){
    let videoArray = this.state.videos.map((video, index) => {
      return (
        <div
          className="ps-video-list"
          key={index}
          onClick = {this.onVideoClick.bind(this, video)}
        >
        {video}
        </div>
      );
    });
    return videoArray;
  }

  renderVideoPlayer(){
    if (this.state.selectedVideo){
      return  (
        <div className="ps-video-container">
          <VideoPlayer video = {this.state.selectedVideo}></VideoPlayer>
        </div>
      );
    }
  }
  render() {
    console.log(this.state.selectedVideo);
    return (
      <div className='ps-app-container'>
          <div className="ps-logo-container">
            <img className="ps-logo"/>
          </div>
        <div className="ps-subscribe-container">
          <div className= "ps-subscribe-main-container" >
            {this.renderVideoPlayer()}
            {this.renderVideoList()}
          </div>
        </div>
      </div>
    );
  }
}

export default class VideoPlayer extends React.Component {


  componentWillReceiveProps(nextProps) {
    if (this.props.video !== nextProps.video){
      this.playVideo(nextProps.video);
    }
  }
  componentDidMount(){
    this.playVideo(this.props.video);
  }

  playVideo(video){
    videojs.Flash.formats = {
      'video/flv': 'FLV',
      'video/x-flv': 'FLV',
      'video/mp4': 'MP4',
      'video/m4v': 'MP4',
      'application/x-mpegurl': 'MP4',
      'vnd.apple.mpegURL': 'MP4'
    };
    const src  = video;
    videojs.options.techOrder = ["html5", "flash"];

    // See https://github.com/mangui/flashls
    videojs.options.flash = {
      swf: "./videoplayer/video-js.swf",
      flashVars: {
        hls_startfromlevel:             0,
        hls_seekfromlevel:              0,
        hls_capleveltostage:            false,
        hls_debug:                      true,
        hls_debug2:                     true,
        hls_usehardwarevideodecoder:    true,
        hls_minbufferlength:            10,
        hls_lowbufferlength:            3,
        hls_maxbufferlength:            60,
        hls_seekmode:                   'KEYFRAME',
        hls_caplevelonfpsdrop:          false,
        hls_smoothautoswitchonfpsdrop:  false
      },
      params: {
        allowfullscreen: "true",
        wmode: "direct",
        allowscriptaccess: "always",
      },
    };

    var options = {
      plugins: {
        levels: {},

        chromecast: {
            appId: '9FA6AF11',
            metadata: {
                title: 'Channel',
            }
        }
      }
    };
    videojs("video", options, function () {
      this.src({ type: "application/x-mpegURL", src: video });
    });
  }

  render() {
    return (
      <video
        id="video"
        className="video-js vjs-default-skin"
        controls width="100%" height="100%">
      </video>
    );
  }
  }

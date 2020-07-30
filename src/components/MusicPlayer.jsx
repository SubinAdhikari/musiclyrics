import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';

const MusicPlayer = (props) =>{
    const muiTheme = createMuiTheme({});
    return(
        <div>
<ThemeProvider theme={muiTheme}>
  {/* <AudioPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
  require(`./${props.img}`)
  */}

  {/* <AudioPlayer src={loveYouself} /> */}

  <AudioPlayer src={`${process.env.PUBLIC_URL}/${props.title}`} type="mp3" />
</ThemeProvider>
        </div>
    )
}
export default MusicPlayer;


import React,{useState,useEffect} from 'react';
import './style/SearchForm.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import MusicPlayer from './MusicPlayer';

const SearchForm = () =>{
    const [input,setInput]=useState({
        artistname:'',
        musicTitle:''
    });
    const [lyrics,setLyrics]=useState('');
    const [albumInfo,setAlbumInfo]=useState('');
    const [loading,setLoading]=useState(false);

const inputValueChange = (event) =>{
    const {name,value}=event.target;
    setInput((prevValue)=>{
        return{
            ...prevValue,
            [name]:value
        }
    })
}


// API CALL HERE
    async function getData(){
        const res = await axios.get(`https://api.lyrics.ovh/v1/${input['artistname']}/${input['musicTitle']}`)
        .then( res =>{
            console.log(res);
            setLyrics(res.data.lyrics);
            setLoading(true);
        } )
        .catch( err =>{
            console.log(err);
            setLoading(true);
       })
  
    }
  
    async function getAlbumInfo(){
        const res1 = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=c3a01ce6fbd4b8aa86a5686356fe86ec&artist=${input['artistname']}&album=${input['musicTitle']}&format=json`)

        .then( res1 =>{
                     console.log(res1);
                     setAlbumInfo(res1.data.album.image[3]);
                     setLoading(true);                    
                 } )
                 .catch( err =>{
                     console.log(err);
                     setLoading(true);
                })
  
    }
    
 // API CALL END

const submitHandler = (event) =>{
    document.getElementById('searchFormMainDiv').style.display='none';
    document.getElementById('displayLyricsMain').style.display='block';

event.preventDefault();
getData();
getAlbumInfo();
// alert(`Artist Name: ${input['artistname']} and your music is: ${input['musicTitle']}`);
}
    return(
<div className="parentDiv">
        <div className="searchFormMainDiv" id="searchFormMainDiv">
            <div className="formTitle">Search the lyrics of you'r favourite music</div>
            <div className="inputField">
            <TextField
                    name="artistname"
                    value={input['artistname']}
                    id="standard-password-input"
                    onChange={inputValueChange}
                    label="Artist Name"
                    type="text"
                    autoComplete="current-artistname"
                    style={{width:'90%',margin:'10px'}}
                />
                 <TextField
                    name="musicTitle"
                    value={input['musicTitle']}
                    id="standard-password-input"
                    onChange={inputValueChange}
                    label="Music Title"
                    type="text"
                    autoComplete="current-title"
                    style={{width:'90%',margin:'10px'}}
                />
            </div>
            <div className="submitBtn">
                <Button variant="contained" style={{width:'100%'}} onClick={submitHandler}>Search Lyrics</Button>
            </div>

        </div>
                <div className="displayLyricsMain" id="displayLyricsMain">
                    <div className="lyricsMain">
                    <div class="cardImg">
                            <div className="ImageOfMusic">
                                {loading ?        
                                albumInfo['#text'] ? <img src={albumInfo['#text']} style={{width:'80%',height:'70%'}}/> : <h1>Can't find the song art</h1>
                                : <CircularProgress disableShrink/>}
                            {/* {albumInfo['#text'] ? <img src={albumInfo['#text']} style={{width:'80%',height:'80%'}}/> : <h1>Can't find the song art</h1>} */}
                        {/* <img src={albumInfo['#text']} style={{width:'80%',height:'80%'}}/> */}
                        <a href="" style={{textDecoration:'none'}}><Button id="searchAnotherLyrics" variant="contained" style={{margin:'20px'}}>Search Another Lyrics</Button></a>

                            </div>
                        <div className="musicInfo">
                            <div className="info">
                            {`Artist Name :- ${input['artistname']}`}<br/>
                            {`Music Title :- ${input['musicTitle']}`}<br/>
                            </div>
                            <div className="musicPlayer">
                            <MusicPlayer title={`${input['musicTitle']}.mp3`}/>
                            </div>
                        </div>
                    </div>
                    <div className="musicLyrics">
                        {loading ? 
                        lyrics ? lyrics : <h1>Can't find the lyrics of the song <br/><a href="">Back To Home Page</a></h1>
                         : <CircularProgress disableShrink/> }
                    {/* {lyrics ? lyrics : <h1>Can't find the lyrics of the song <br/><a href="/">Back To Home Page</a></h1>} */}
                    </div>
                    </div>
                </div>
</div>
    )
}
export default SearchForm;
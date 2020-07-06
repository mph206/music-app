import React, { Component } from 'react';
import styles from './SearchResult.module.scss';
import Albums from './Albums';
import Artists from './Artists';
import Songs from './Songs';
import Lyrics from './Lyrics';


class SearchResult extends Component {
   
    state = {
        lyrics: '',
    }

    // https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search
    // get the artist from when the song (or album) was clicked
    fetchLyrics = (event) =>{
        let songName = event.target.getAttribute('value').split(' ').join('+');
        let artist = this.props.artist;
        // artist= this.props.albumData
        fetch(`https://api.lyrics.ovh/v1/${artist}/${songName}`)
            .then(response => response.json())    
            .then(data => this.setState({
                lyrics: data.lyrics,
            }))
            .catch(error => console.log(error))
    }

    render() { 
        return (
            <section className={styles.results}>
                {this.props.dataObject}
                <Artists artistData={this.props.artistData} fetchAlbumData={this.props.fetchAlbumData}/>
                <Albums fetchSongData={this.props.fetchSongData} albumData={this.props.albumData} />
                <Songs songData={this.props.songData} fetchLyrics={this.fetchLyrics}/>
                <Lyrics fetchLyrics={this.fetchLyrics} lyrics={this.state.lyrics}/>
            </section>
          );
    }
}

 
export default SearchResult;
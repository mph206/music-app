import React, { Component } from 'react';
import './App.module.scss';
import Nav from './components/Nav';
import SearchResult from './components/SearchResult';


class App extends Component {
    state = {
        token: '',
        artistData: [],
        albumData: [],
        songData: [],
        selectedArtist: ''
    }

    componentDidMount() {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic YzIxOWE5Y2EwYTQ1NDY0YjllY2Q2NGI5YTBjZjMwY2M6NGZkNmJlMjYxNWVkNGZlNThlNTA4ZTg3NGI3MGI4ZGY=");
            
        const urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "client_credentials");
        
        const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        };
        
        fetch("https://accounts.spotify.com/api/token", requestOptions)
        .then(response => response.json())
        .then(result => this.setState({
            token: result.access_token,
        }))
        .catch(error => console.log('error', error));
    }

    fetchArtistData = (event) => {
        const searchTerm = event.target.value.split(' ').join('+');
        fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=artist&limit=10`, {
            headers: {
                'Authorization': `Bearer ${this.state.token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            })
            .then(response => response.json())
            .then(result => this.setState({
                artistData: result.artists.items
            }))
            .catch((err) => console.log('error', err))
    }

    fetchAlbumData = (event) => {
        const artistIndex = event.target.getAttribute('artist-index');
        fetch(`https://api.spotify.com/v1/artists/${event.target.getAttribute('value')}/albums`, {
            headers: {
                'Authorization': `Bearer ${this.state.token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            })
            .then(response => response.json())
            .then(result => this.setState({
                albumData: result.items,
                selectedArtist: this.state.artistData[artistIndex].name
            }))
            .catch((err) => console.log('error', err))
    }

    fetchSongData = (event) => {
        fetch(`https://api.spotify.com/v1/albums/${event.target.getAttribute('value')}/tracks`, {
            headers: {
                'Authorization': `Bearer ${this.state.token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            })
            .then(response => response.json())
            .then(result => this.setState({songData: result.items}))
            .catch((err) => console.log('error', err))
    }

    render() { 
        return (
            <>
                <Nav fetchArtistData={this.fetchArtistData}/>
                <SearchResult artistData={this.state.artistData} albumData={this.state.albumData} fetchAlbumData={this.fetchAlbumData} fetchSongData={this.fetchSongData} songData={this.state.songData} selectedArtist={this.state.selectedArtist}/>
            </>
          );
    }
}
 
export default App;
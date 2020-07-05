import React, { Component } from 'react';
import './App.module.scss';
import Nav from './components/Nav';
import Body from './components/Body';


class App extends Component {
    state = {
        searchTerm: '',
        token: '',
        object: '',
        lyrics: ''
    }

    handleSearch = (event) => {
        this.setState({
            searchTerm: event.target.value,
        })
        // this.requestData(this.state.searchTerm)
    }

    fetchLyrics = () =>{
        fetch('https://api.lyrics.ovh/v1/Queen/Bohemian+Rhapsody')
            // .then(response => {
            //     console.log(response.json())
            //     return response.json();
            // })
            .then(responseJSON => {
                console.log(responseJSON);
                // this.setLyrics(responseJSON.lyrics);
            })
    }

    setLyrics = (newLyrics) =>{
        this.setState({
            lyrics: newLyrics,
        })
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
        .then(result => this.state.token = result.access_token)
        .catch(error => console.log('error', error));
    }

    requestData = (searchTerm) => {
        return fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=artist&limit=5`, {
            headers: {
                'Authorization': `Bearer ${this.state.token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            })
            .then(response => response.json())
            .then(result => this.extractObject(result.artists.items))
            .catch((err) => console.log('error', err))
    }

    extractObject = (object) => {
        return object.map(item => item.name)
        // for (let i = 0; i < object.length; i++) {
        //     // console.log(object[i].name);
        //     return (
        //         object[i].name
        //         // <div>
        //         //     <h2>{object[i].name}</h2>
        //             /* <img src={object[i].images[0].url} alt="artist-image" />
        //         <p>{object[i].genres.join(', ')}</p> */
        //         // </div>
        //     )}
    }

    render() { 
        let output = this.requestData(this.state.searchTerm).then(response => response);
        console.log(output)
        this.fetchLyrics()
        return (
            <>
                <Nav handleSearch={this.handleSearch}/>
                <Body object={this.state.object} lyrics={this.state.lyrics}/>
                {/* {output} */}
            </>
          );
    }
}
 
export default App;
import React, { Component } from 'react';
import styles from './Artists.module.scss';

class Artists extends Component {
    state = {  }

    buildArtistData = () => {
        return this.props.artistData.map(artist => {
            return (
                <div key={artist.id} value={artist.id} onClick={this.props.fetchAlbumData}>
                    <h2 value={artist.id}>{artist.name}</h2>
                </div>
            )
        })
    }

    // extractObject = (object) => {
    //     return object.map(item => item.name)
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
    // }

    render() { 
        return (
            <section className={styles.artists}>
                <p>{this.buildArtistData()}</p>
            </section>
          );
    }
}
 
export default Artists;
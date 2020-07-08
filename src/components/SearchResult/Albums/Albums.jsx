import React, { Component } from 'react';
import styles from './Albums.module.scss';

class Albums extends Component {

    // find a way for to only need to set value on div
    buildAlbumData = () => {
        return this.props.albumData.map(album => {
            return (
                <div key={album.id} value={album.id} onClick={this.props.fetchSongData}>
                    <h2 value={album.id}>{album.name}</h2>
                </div>
            )
        })
    }

    render() { 
        return (
            <section className={styles.albums}>
                {this.buildAlbumData()}
            </section>
          );
    }
}
 
export default Albums;
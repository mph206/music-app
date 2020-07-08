import React, { Component } from 'react';
import styles from './Songs.module.scss';

class Songs extends Component {

    buildSongData = () => {
        return this.props.songData.map((song) => {
            return (
                <div key={song.id} track-number={song.track_number} value={song.name} onClick={this.props.fetchLyrics}>
                    <h2 track-number={song.track_number} value={song.name}>{song.name}</h2>
                </div>
            )
        })
    }

    render() { 
        return (
            <section className={styles.songs}>
                {this.buildSongData()}
            </section>
          );
    }
}
 
export default Songs;
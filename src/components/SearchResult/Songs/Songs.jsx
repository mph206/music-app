import React, { Component } from 'react';
import styles from './Songs.module.scss';

class Songs extends Component {

    buildsongData = () => {
        return this.props.songData.map(song => {
            return (
                <div key={song.id} value={song.name} onClick={this.props.fetchLyrics}>
                    <h2 value={song.name}>{song.name}</h2>
                </div>
            )
        })
    }

    render() { 
        return (
            <section className={styles.songs}>
                {this.buildsongData()}
            </section>
          );
    }
}
 
export default Songs;
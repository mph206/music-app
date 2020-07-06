import React, { Component } from 'react';
import styles from './Lyrics.module.scss';

class Lyrics extends Component {
    state = {  }
    render() { 
        return (
            <section className={styles.lyrics}>
                <p>Lyrics</p>
                {/* <input type="text" onChange={this.props.fetchLyrics} /> */}
                {this.props.lyrics}
            </section>
          );
    }
}
 
export default Lyrics;
import React, { Component } from 'react';
import styles from './Lyrics.module.scss';

class Lyrics extends Component {
    state = {  }
    render() { 
        return (
            <section className={styles.lyrics}>
                <p>Lyrics</p>
                {(this.props.lyrics) ? this.props.lyrics : 'Lyrics not found'}
            </section>
          );
    }
}
 
export default Lyrics;
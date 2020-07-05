import React, { Component } from 'react';
import styles from './SearchResultSongs.module.scss';

class SearchResultSongs extends Component {
    state = {  }
    render() { 
        return (
            <section className={styles.songs}>
                <p>Hello songs</p>
            </section>
          );
    }
}
 
export default SearchResultSongs;
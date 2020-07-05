import React, { Component } from 'react';
import styles from './SearchResultArtists.module.scss';

class SearchResultArtists extends Component {
    state = {  }

    render() { 
        return (
            <section className={styles.artists}>
                <p>Hello artists</p>
            </section>
          );
    }
}
 
export default SearchResultArtists;
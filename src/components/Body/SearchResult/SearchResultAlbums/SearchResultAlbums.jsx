import React, { Component } from 'react';
import styles from './SearchResultAlbums.module.scss';

class SearchResultAlbums extends Component {
    state = {  }
    render() { 
        return (
            <section className={styles.albums}>
                <p>Hello Albums</p>
            </section>
          );
    }
}
 
export default SearchResultAlbums;
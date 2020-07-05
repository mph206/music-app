import React, { Component } from 'react';
import styles from './SearchResult.module.scss';
import SearchResultAlbums from './SearchResultAlbums';
import SearchResultArtists from './SearchResultArtists';
import SearchResultSongs from './SearchResultSongs';
import Lyrics from './Lyrics';


class SearchResult extends Component {
    
    
    render() { 
        return (
            <section className={styles.results}>
                {this.props.dataObject}
                <SearchResultArtists />
                <SearchResultAlbums />
                <SearchResultSongs />
                <Lyrics lyrics={this.props.lyrics}/>
            </section>
          );
    }
}
 
export default SearchResult;
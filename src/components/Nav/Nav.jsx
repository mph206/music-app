import React, { Component } from 'react';
import styles from './Nav.module.scss';
import SearchBar from './SearchBar'

class Nav extends Component {
    state = {  }
    render() { 
        return (
            <header className={styles.nav}>
                <h1>Spotify Song Search</h1>
                <SearchBar fetchArtistData={this.props.fetchArtistData}/>
            </header>
          );
    }
}
 
export default Nav;
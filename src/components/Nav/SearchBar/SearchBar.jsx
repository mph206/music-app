import React, { Component } from 'react';
import styles from './SearchBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


class SearchBar extends Component {
    state = {  }
    render() { 
        return (
            <div className={styles.searchbar}>
                <input type='text' onChange={this.props.fetchArtistData} placeholder="Search Artist"/>
                <FontAwesomeIcon icon={faSearch} />
            </div>
          );
    }
}
 
export default SearchBar;
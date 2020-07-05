import React, { Component } from 'react';
import styles from './Body.module.scss';
import SearchResult from './SearchResult'

class Body extends Component {
    state = {  }
    render() { 
        return (
            <>
                <SearchResult object={this.props.object} lyrics={this.props.lyrics}/>
            </>
          );
    }
}
 
export default Body;
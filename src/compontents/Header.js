import React, { Component } from 'react'

class Header extends Component {
    
    render() {
        return (
            <h1 style={styles}> CV React App </h1>
        )
    }
    
}
const styles = {
    color: '#fff',
    background: '#4a4a4a',
    textAlign: 'center',
    lineHeight:' 60px',
    width:'100%'
}
export default Header

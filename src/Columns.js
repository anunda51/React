import React, { Component } from 'react';

class Columns extends Component{
    render(){
        return(
            <div className={this.props.class}>
                {this.props.children}
            </div>
        );
    }
};

export default Columns;
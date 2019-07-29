import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import fetchData from '../actions/fetch_data';

class Container extends Component {

    componentDidMount() {

        this.props.fetchData();

    }
    render () {
        return (
            <Card data={Card} />
        )
    }
}
    function mapStateToProps(state) {
        return { astronomy: state.astronomy };
    
}

export default connect(mapStateToProps, { fetchData })(Container);
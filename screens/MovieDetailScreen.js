import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Constants from 'expo'

import DetailCard from '../components/DetailCard'

export default class MovieDetailScreen extends Component {
    render() {
        return (
            <DetailCard movieData={this.props.navigation.getParam('movieData')} />
        )
    }
}
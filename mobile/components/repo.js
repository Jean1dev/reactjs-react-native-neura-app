import React, { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

export default class Repo extends Component {
    render() {
        return (
            <View style={styles.repo} >
                <Image
                    style={styles.repoImage}
                    source={{ uri: this.props.data.thumbnail }}
                />

                <View style={styles.repoInfo}>
                    <Text style={styles.repoTitle}>{this.props.data.title}</Text>
                    <Text style={styles.repoAuthor}>{this.props.data.author}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    repoImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    repo: {
        backgroundColor: '#FFF',
        padding: 20,
        marginBottom: 20,
        borderRadius: 5,
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
    },

    repoInfo: {
        marginLeft: 10,
    },

    repoTitle: {
        fontWeight: 'bold',
        color: '#333'
    },

    repoAuthor: {
        fontSize: 12,
        color: '#999'
    }
})
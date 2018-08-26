import React, { Component } from 'react'
import {
    View,
    Text,
    Modal,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default class newRepoModal extends Component {

    state = {
        newRepoText: ''
    }

    render() {
        return (
            <Modal animationType="fade"  transparent={true} visible={this.props.visible} >
                <View style={styles.modalContainer}>
                    <View style={styles.boxContainer}>
                        <Text style={styles.boxTitle}>Add repo</Text>
                        <TextInput
                        autoFocus
                        autoCapitalize='none'
                        style={styles.boxInput}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="organizacao/repositorio"
                        value={ this.state.newRepoText }
                        onChangeText={ newRepoText => this.setState({ newRepoText })}
                        ></TextInput>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity 
                            style={[styles.button, styles.cancelButton]}
                            onPress={ this.props.onCancel }
                            >
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                            style={[styles.button, styles.addButton]}
                            onPress={() => this.props.onAdd(this.state.newRepoText) }
                            >
                                <Text style={styles.buttonText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    boxContainer: {
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: 'center',
        width: 280
    },

    boxTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },

    boxInput: {
        alignSelf: 'stretch',
        marginTop: 10,
        paddingVertical: 0,
        paddingHorizontal: 20,
        borderRadius: 3,
        borderColor: '#DDD',
        height: 40
    },

    buttonContainer: {
        marginTop: 10,
        height: 40,
        flexDirection: 'row'
    },

    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },

    addButton: {
        backgroundColor: '#70BD85',
        marginLeft: 5
    },

    cancelButton: {
        backgroundColor: '#E25F5F',
        marginRight: 5
    },

    buttonText: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 12
    }

})
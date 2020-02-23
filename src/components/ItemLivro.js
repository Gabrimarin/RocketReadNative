import React, { Component } from 'react'
import { View, Text, Image, ProgressBarAndroid, TouchableOpacity, StyleSheet } from 'react-native'
import { Style } from '../Style'

export default class ItemLivro extends Component {
    
    render() {
        return (
            
            <View style={styles.container}>
                <Image source={this.props.capa} style={styles.capa}>
                </Image>
                <View style={styles.info}>
                <Text style={styles.titulo}>{this.props.titulo}</Text>
                <Text style={styles.autor}>{this.props.autor}</Text>
                <View style={styles.progressContainer}> 
                    <ProgressBarAndroid
                    progress={this.props.pagAtual/this.props.nPags || 1}
                    styleAttr="Horizontal"
                    indeterminate={false} style={styles.progressBar}
                    color={Style.colors.firstColor}/>
                    <Text style={styles.progressText}>{this.props.pagAtual} / {this.props.nPags}</Text>
                </View>
                <TouchableOpacity onPress={this.props.showLer} style={styles.button}>
                    <Text style={styles.textButton}>Ler</Text>
                </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        display: "flex",
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 20,
        marginTop: 20
    },
    info: {
        marginLeft: 5,
        justifyContent: "space-between"
    },
    capa: {
        height: 200,
        width: 150,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    autor: {
        fontSize: 15
    },
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    progressBar: {
        width: 150
    },
    progressText: {
        fontSize: 10,
        marginLeft: 10
    },
    button: {
        marginLeft: 67,
    },
    textButton: {
        color: Style.colors.firstColor
        
    }
})
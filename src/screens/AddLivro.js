import React, { Component } from 'react'
import {
    TextInput,
    Text,
    View,
    Modal,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Platform
} from 'react-native'
import { connect } from 'react-redux'
import { addLivro } from '../store/actions/addLivro'
import { Style } from '../Style'
import DateTimePicker from '@react-native-community/datetimepicker'

const initialState = {
    titulo: '',
        autor: '',
        nPags: 1,
        pagAtual: 1,
        previsao: new Date(),
        showDatePicker: false,
        paginasPorDia: 0
}

class AddLivro extends Component {
    state = {
        ...initialState

    }

    paginasPorDia = () => {
        let dif =  Math.floor(( this.state.previsao - new Date()) / 86400000) + 2;
        this.setState({paginasPorDia: Math.floor(this.state.nPags / dif)} )
    }

    save = () => {
        this.props.onAddLivro({
            ...this.state
        })
        this.props.navigation.navigate('ListaLivros')
    }

    getDatePicker = () => {
        let datePicker = <DateTimePicker value={this.state.previsao}
        onChange={(_, previsao) => {
            this.setState( { previsao, showDatePicker: false } )
            this.paginasPorDia() }}
        mode='date'/>

        const dateString = this.state.previsao.toLocaleDateString("pt-BR")

        if(Platform.OS === 'android') {
            datePicker = (
                <View>
                    <TouchableOpacity onPress={() => this.setState({ showDatePicker: true })}>
                        <Text style={styles.date}>
                            {dateString}
                        </Text>
                    </TouchableOpacity>
                    {this.state.showDatePicker && datePicker}
                </View>
            )
        }
        return datePicker
    }

    render() {
        return (
            <>
            <View style={styles.header}>
                <TouchableOpacity onPress={this.save}>
                    <Text style={styles.doneText}>Done</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <Text style={styles.text}>Título:</Text>
                    <TextInput style={styles.input}
                            value={this.state.titulo}
                            onChangeText={titulo => this.setState({ titulo })}></TextInput>
                </View>
                <View style={styles.subcontainer}>
                    <Text style={styles.text}>Autor:</Text>
                    <TextInput style={styles.input}
                            value={this.state.autor}
                            onChangeText={autor => this.setState({ autor })}></TextInput>
                </View>
                <View style={styles.subcontainer}>
                    <Text style={styles.text}>Páginas:</Text>
                    <TextInput style={[{...styles.input}, {width: '20%'}]}
                            value={this.state.nPags}
                            onChangeText={nPags => {
                                    this.setState({ nPags })
                                    this.paginasPorDia() }}
                            keyboardType="numeric"></TextInput>
                </View>
                <Text style={styles.text}>Previsão de Término:</Text>
                {this.getDatePicker()}
                <Text style={styles.text}>Páginas por dia: </Text>
                <Text style={styles.ppd}>{this.state.paginasPorDia}</Text>
            </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Style.colors.firstColor,
        flex: 1,
        alignItems: 'flex-end',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
    },
    doneText: {
        marginRight: 20,
        marginTop: 50,
        color: 'white',
        fontWeight: 'bold'
    },
    container: {
        display: 'flex',
        flex: 8,
        marginTop: 40,
        marginLeft: 10,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    subcontainer: {
        justifyContent: 'space-between'
    },
    input: {
        borderWidth: 2,
        paddingLeft: 15,
        borderColor: '#eee',
        borderRadius: 10,
        width: '90%',
        fontSize: 22
    },
    text: {
        color: Style.colors.firstColor,
        fontSize: 18,
        marginBottom: 10
    },
    date: {
        fontSize: 30,
        textAlign: 'center'

    },
    ppd: {
        fontSize: 30,
        textAlign: 'center'
    }
})


const mapDispatchToProps = dispatch => {
    return {
        onAddLivro: payload => dispatch(addLivro(payload))
    }
}

export default connect(null, mapDispatchToProps)(AddLivro)

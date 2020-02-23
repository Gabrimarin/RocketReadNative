import React, { Component } from 'react'
import {
    TextInput,
    Text,
    View,
    Modal,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native'
import { connect } from 'react-redux'
import { addLeitura } from '../store/actions/addLeitura'
import { Style } from '../Style'
class AddLeitura extends Component {
    state = {
        pagAtual: 0
    }

    handleAddLeitura = () => {
        if(this.state.pagAtual > 0){
            this.props.onAddLeitura({
                livroId: this.props.livroAtual.id,
                pagAtual: this.state.pagAtual
            })
            this.setState({ pagAtual: 0 })
            this.props.onCancel()
        }
    }

    render(){
        return(
            <Modal transparent={true} visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                animationType='fade'>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}>

                    </View>
                </TouchableWithoutFeedback>

                <View style={styles.container}>
                    <Text style={styles.header}> Adicionar Leitura </Text>
                    <View style={styles.info}>
                        <Text style={{
                            fontSize: 20,
                            marginTop: 10,
                            color: Style.colors.firstColor }}>
                            {this.props.livroAtual.titulo}
                        </Text>
                        <Text style={{
                            fontSize: 10,
                            marginTop: 4,
                            }}>
                            {this.props.livroAtual.autor}
                        </Text>
                    </View>
                    <View style={styles.paginas}>
                        <TextInput keyboardType="numeric"
                                    placeholder={this.props.livroAtual.pagAtual.toString()}
                                    style={styles.input}
                                    value={this.state.pagAtual}
                                    onChangeText={pagAtual => this.setState({ pagAtual })}/>
                        <Text style={{ fontSize: 16 }}> de {this.props.livroAtual.nPags}</Text>
                    </View>
                        <View style={styles.buttons}>
                        <TouchableOpacity style={styles.button} onPress={this.props.onCancel}>
                            <Text style={{ color: Style.colors.firstColor }}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                                        onPress={
                                        this.handleAddLeitura}>
                            <Text style={{ color: Style.colors.firstColor }}>Ler</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}>

                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        backgroundColor: Style.colors.firstColor,
        padding: 15,
        color: 'white',
        fontSize: 16,
        width: '100%'
    },
    container: {
        display: 'flex',
        flex:  10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
    },
    background: {
        flex: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    info: {
        alignItems: 'center'
    },
    paginas:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    input: {
        borderWidth: 2,
        textAlign: 'center',
        borderColor: '#eee',
        borderRadius: 10,
        width: '20%'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        margin: 20,
        marginRight: 30,
        color: 'yellow'
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onAddLeitura: payload => dispatch(addLeitura(payload))
    }
}

export default connect(null, mapDispatchToProps)(AddLeitura)
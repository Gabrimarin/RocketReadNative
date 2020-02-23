import React, { Component } from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import ItemLivro from '../components/ItemLivro'
import AddLeitura from './AddLeitura'
import { connect } from 'react-redux'
import { Style } from '../Style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

class ListaLivros extends Component {
    state = {
        addIsVisible: false,
        livroAtual: {
            pagAtual: 0
        },
        livros: []
        
    }

    SeparatorView = () => {
        return (
          <View style={{
              height: 1, 
              width: "100%",
              backgroundColor: "#CEDCCE",
            }}
          />
        );
      };

    showLer = () => {
        this.setState({ addIsVisible: true })
    }

    render() {
        return(
            <>
            <View style={styles.header}>
                <TouchableOpacity style={styles.addButton}
                    onPress={() => this.props.navigation.navigate('AddLivro')}>
                    <Icon
                    raised name='plus'
                    color='white'
                    style={styles.iconButton}
                    size={20}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <AddLeitura
                isVisible={this.state.addIsVisible}
                onCancel={() => this.setState({ addIsVisible: false })}
                livroAtual={this.state.livroAtual}
                turnOffVisible={() => this.setState({ addIsVisible: false })}/>
                <FlatList 
                    data={this.props.livros}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => 
                        <ItemLivro key={item.id} {...item}
                        isVisible={this.state.addIsVisible}
                        showLer={() => this.setState({ addIsVisible: true, livroAtual: item })}
                        />
                        } 
                    ItemSeparatorComponent={this.SeparatorView}
                    />
            </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Style.colors.firstColor,
        flex: 1,
        alignItems: 'flex-end'
    },
    addButton: {
        marginRight: 20,
        marginTop: 50
    },
    iconAddButton: {
        width: 70
    },
    container: {
        flex: 9
    }
})

const mapStateToProps = ({ livros }) => {
    return {
        livros: livros.livros
    }
}

export default connect(mapStateToProps)(ListaLivros)
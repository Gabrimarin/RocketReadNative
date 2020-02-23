const initialState = {
    livros: [{
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        pagAtual: 190,
        nPags: 300,
        capa: require('../../../assets/imgs/today.jpg'),
        previsao: new Date(),
        pagsDia: 10,
        id: Math.random()
    }, {
        titulo: "Código da Vinci",
        autor: "Dan Brown",
        pagAtual: 20,
        nPags: 250,
        capa: require('../../../assets/imgs/month.jpg'),
        previsao: new Date(),
        pagsDia: 10,
        id: Math.random()
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LEITURA':
            return {
                ...state,
                livros: state.livros.map(livro => {
                    if (livro.id === action.payload.livroId) {
                        livro.pagAtual = action.payload.pagAtual
                    }
                    return livro
                })
            }
        case 'ADD_LIVRO':
            return {
                ...state,
                livros: state.livros.concat({
                    ...action.payload
                })
            }
        default:
            return state
    }
}

export default reducer
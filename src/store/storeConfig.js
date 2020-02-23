import {
    createStore,
    combineReducers,
} from 'redux'
import livroReducer from './reducer/livros'

const reducers = combineReducers({
    livros: livroReducer
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig
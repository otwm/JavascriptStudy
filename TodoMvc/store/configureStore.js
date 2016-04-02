import {createStore} from 'redux'
import rootReucer from '../reducers'

export default function configureStore(initialState) {
    const store = createStore(rootReucer, initialState)
    return store
}
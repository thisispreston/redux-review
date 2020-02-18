import { createStore } from 'redux'
import moviesReducer from './ducks/moviesReducer'

export default createStore(moviesReducer)
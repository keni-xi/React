import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhanders = 
    window._REDUX_DEVTENSION_COMPOSE_?
        window._REDUX_DEVTENSION_COMPOSE_({ }) : compose;

const enhancer = composeEnhanders(
    // applyMiddleware(thunk)
    applyMiddleware(sagaMiddleware)
)

const store = createStore(
    reducer,
    enhancer
    ) // store 已经能知道笔记本中记过两个笔记

sagaMiddleware.run(todoSagas)

export default store;
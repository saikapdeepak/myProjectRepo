import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './components/reducer';

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = process.env.NODE_ENV !== "production" ?
    createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(
                thunk
            )
        )
    )
    :
    createStore(
        rootReducer,
        initialState
    );

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./components/reducer", () => {
        const nextReducer = require("./components/reducer").default; // eslint-disable-line global-require
        store.replaceReducer(nextReducer);
    });
}

export default store;
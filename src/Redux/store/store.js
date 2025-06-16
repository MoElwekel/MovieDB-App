import {createStore,applyMiddleware} from 'redux';
import {movieReduser} from '../reducer/movieReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from 'redux-thunk'

//1-create store
export const store = createStore(movieReduser , applyMiddleware(thunk));




//2- Create a reducer to handle the actions in {movieReducer.js}
//3- warp the app with the provider in {index.js}
//4-access the data in the app using useSelector in {app.js}
//5-dispatch the action in the app using useDispatch in {app.js}

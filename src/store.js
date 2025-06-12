import { createStore } from 'redux';
import { reducer } from './reducer.jsx';

export const store = createStore(reducer);

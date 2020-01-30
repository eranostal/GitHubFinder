//Initial state, and actions. (instead of App.js)
import React, { useReducer } from 'react';
import history from './history';
import HistoryReducer from './historyReducer';
import { REFRESH_PAGE } from '../types';

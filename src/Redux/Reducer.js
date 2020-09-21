import { combineReducers } from 'redux';
import { SAVE_DATA, CHANGE_VIEW } from './Action'

const INITIAL_DATA = {
  imagesData: null, 
  loading: true,
}

const INITIAL_STATE = {
    gridView: false
};

function dataReducer (state=INITIAL_DATA, action){
  switch(action.type){
    case SAVE_DATA: 
      return Object.assign({}, state, {
        imagesData: action.data, 
        loading: false
      })
    default: 
        return state
  }
}

function imageReducer (state=INITIAL_STATE, action){
  switch(action.type){
    case CHANGE_VIEW:
        return Object.assign({}, state,{
          gridView: !Boolean(state.gridView)
        })
    default: 
        return state
  }
}


const rootReducer =  combineReducers({
    imageState: imageReducer,
    dataState: dataReducer
})

export default rootReducer
import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn538183865Reducer from '../features/SignIn538183865/redux/reducers'
import SignUp136183864Reducer from '../features/SignUp136183864/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn538183865: SignIn538183865Reducer,
SignUp136183864: SignUp136183864Reducer,

});
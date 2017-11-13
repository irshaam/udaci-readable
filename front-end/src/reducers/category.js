import { RECEIVE_CATEGORIES } from '../actions'

const initialState = {

}

export function category (state = initialState, action){
	switch(action.type){
		case RECEIVE_CATEGORIES:
			return {
				...state,
				...action.categories
			}
		default:
			return state
	}
} 

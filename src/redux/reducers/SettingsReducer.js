import { createSlice } from '@reduxjs/toolkit';
import image from '../../images/kity_space.gif'

const initialState = {
	backgroundImage: image
};

export const settingsReducer = createSlice({
	name: 'settingsController',
	initialState,
	reducers: {
		setTerminalBackgroundImage: (state, action) => {
			state.backgroundImage = action.payload;
		},
	}
});

export const { setTerminalBackgroundImage } = settingsReducer.actions;
export default settingsReducer.reducer;
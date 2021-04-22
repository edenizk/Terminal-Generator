import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	backgroundImage: '/static/media/kity_space.9c0b8aa9.gif'
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
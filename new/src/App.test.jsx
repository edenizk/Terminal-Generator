import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './redux/reducers';
import App from './App';

vi.mock('./api/GetGoogleFonts', () => ({
  GetGoogleFonts: () => () => {},
}));

const store = configureStore({ reducer: mainReducer });

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(document.getElementById('root') ?? document.body).toBeTruthy();
  });
});

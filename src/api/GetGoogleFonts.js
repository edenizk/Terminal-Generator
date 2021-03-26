import axios from 'axios';
import { setFontFaces } from '../redux/actions';

export const GetGoogleFonts = () => {
  const url = 
  `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

  return dispatch => {
    axios.get(url)
    .then(res => {
      dispatch(setFontFaces(
        res.data.items
      ));
    })

    return true;
  };
};

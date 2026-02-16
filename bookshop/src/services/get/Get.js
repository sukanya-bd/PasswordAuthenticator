import { API_CONST_URL } from '../../constants/apiConst';

export const getItems = () => {
  fetch(API_CONST_URL)
    .then(res => res.json())
    .then(data => console.log(data));
};

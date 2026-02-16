import { API_CONST_URL } from '../../constants/apiConst';

export const getAllItems = () => {
  fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(data => console.log(data));
};

export const addNewItem = () => {
  fetch(API_CONST_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'New Item' })
  })
    .then(res => res.json())
    .then(data => console.log(data));
};

export const updateItem = () => {
  fetch('https://api.example.com/items/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Updated Item' })
  })
    .then(res => res.json())
    .then(data => console.log(data));
};

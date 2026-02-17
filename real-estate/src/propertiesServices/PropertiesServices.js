const PROPERTIES_BASE_URL = 'http://localhost:5000/properties';

export const getProperties = async () => {
  const res = await fetch(PROPERTIES_BASE_URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
  return res.json();
};

export const addProperty = async property => {
  const res = await fetch(PROPERTIES_BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(property)
  });
  return res.json();
};

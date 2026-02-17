const PROPERTIES_BASE_URL = 'http://localhost:5000/properties';

export const getProperties = async () => {
  const res = await fetch(PROPERTIES_BASE_URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
  return res.json();
};

export const addProperties = async properlist => {
  const results = [];

  for (const property of properlist) {
    const res = await fetch(PROPERTIES_BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(property)
    });
    const data = await res.json();
    results.push(data);
  }

  return results;
};

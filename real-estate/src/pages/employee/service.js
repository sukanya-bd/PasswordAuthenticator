const BASE_URL = 'http://localhost:5000/employees';

export const getEmployees = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addEmployee = async employee => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(employee)
  });
  return res.json();
};

export const updateEmployee = async (id, updatedEmployee) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedEmployee)
  });
  return res.json();
};

export const deleteEmployee = async id => {
  await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
};

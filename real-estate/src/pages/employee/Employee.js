import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Box,
  IconButton
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from './service.js';

const EmployeePage = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [employee, setEmployee] = useState({
    employee_name: '',
    employee_salary: '',
    employee_age: ''
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const data = await getEmployees();
    setEmployeeList(data);
  };

  const handleChange = e => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (editingId) {
      const updatedEmp = await updateEmployee(editingId, employee);
      console.log(updatedEmp);
      //   setEmployeeList(employeeList.map(emp => (emp.id === editingId ? updatedEmp : emp)));
      fetchEmployees();
      setEditingId(null);
    } else {
      // Add new employee
      const newEmp = await addEmployee(employee);
      setEmployeeList([...employeeList, newEmp]);
    }

    setEmployee({ employee_name: '', employee_salary: '', employee_age: '' });
  };

  const handleEdit = emp => {
    setEmployee({
      employee_name: emp.employee_name,
      employee_salary: emp.employee_salary,
      employee_age: emp.employee_age
    });
    setEditingId(emp.id);
  };

  const handleDelete = async id => {
    await deleteEmployee(id);
    // setEmployeeList(employeeList.filter(emp => emp.id !== id));
    fetchEmployees();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 4,
        p: 2,
        flexWrap: 'wrap'
      }}
    >
      {/* Employee Table */}
      <TableContainer component={Paper} sx={{ flex: 2, minWidth: 500 }}>
        <Typography variant="h6" sx={{ p: 2 }}>
          Employee List
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeList?.map(emp => (
              <TableRow key={emp.id}>
                <TableCell>{emp.id}</TableCell>
                <TableCell>{emp.employee_name}</TableCell>
                <TableCell>{emp.employee_salary}</TableCell>
                <TableCell>{emp.employee_age}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEdit(emp)} size="small">
                    <Edit />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(emp.id)} size="small">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Employee Form */}
      <Paper sx={{ flex: 1, p: 3, minWidth: 300 }}>
        <Typography variant="h6" gutterBottom>
          {editingId ? 'Edit Employee' : 'Add New Employee'}
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Name"
              name="employee_name"
              value={employee.employee_name}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Salary"
              name="employee_salary"
              type="number"
              value={employee.employee_salary}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Age"
              name="employee_age"
              type="number"
              value={employee.employee_age}
              onChange={handleChange}
              fullWidth
              required
            />
            <Button variant="contained" color="primary" type="submit">
              {editingId ? 'Update Employee' : 'Add Employee'}
            </Button>
            {editingId && (
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
                  setEditingId(null);
                  setEmployee({
                    employee_name: '',
                    employee_salary: '',
                    employee_age: ''
                  });
                }}
              >
                Cancel
              </Button>
            )}
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default EmployeePage;

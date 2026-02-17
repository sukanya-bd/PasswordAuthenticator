import React, { useState, useEffect } from 'react';
import { Button, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { addProperties } from '../../propertiesServices/PropertiesServices';
import './properties.css';

const AddEditProperties = ({ propertiesList, setPropertiesList, fetchProperties }) => {
  const [addPropertyList, setAddPropertyList] = useState([
    {
      property_id: '',
      property_name: '',
      property_image: '',
      property_price: ''
    }
  ]);

  const addProperty = () => {
    setAddPropertyList([
      ...addPropertyList,
      {
        property_id: '',
        property_name: '',
        property_image: '',
        property_price: ''
      }
    ]);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...addPropertyList];
    list[index][name] = value;
    setAddPropertyList(list);
  };

  const handleSubmit = async () => {
    const res = await addProperties(addPropertyList);
    console.log(res);
    setPropertiesList([...propertiesList, ...res]);
  };

  return (
    <div className="add-edit-property-container">
      {addPropertyList?.map((property, index) => (
        <div key={index} className="add-property-row">
          <TextField
            name="property_id"
            value={property.property_id}
            onChange={e => handleChange(index, e)}
            placeholder="Property ID"
            required
          />
          <TextField
            name="property_name"
            value={property.property_name}
            onChange={e => handleChange(index, e)}
            placeholder="Property Name"
            required
          />
          <TextField
            name="property_image"
            value={property.property_image}
            onChange={e => handleChange(index, e)}
            placeholder="Property Image"
            required
          />
          <TextField
            name="property_price"
            value={property.property_price}
            onChange={e => handleChange(index, e)}
            placeholder="Property Price"
            required
          />
        </div>
      ))}

      <IconButton onClick={addProperty}>
        <AddIcon />
      </IconButton>

      <Button onClick={handleSubmit} variant="contained">
        Add Properties
      </Button>
    </div>
  );
};

export default AddEditProperties;

import React, { useState } from 'react';
import AddEditProperties from './AddEditProperties';
import ViewProperties from './ViewProperties';
import { Button, Typography } from '@mui/material';
import { getProperties } from '../../propertiesServices/PropertiesServices';

const PropertiesDashboard = () => {
  const [propertiesList, setPropertiesList] = useState([]);

  const fetchProperties = async () => {
    const data = await getProperties();
    setPropertiesList(data);
  };

  return (
    <>
      <Typography variant="h3" align="center" gutterBottom>
        Properties
      </Typography>
      <Button variant="contained">Sell Properties</Button>
      <AddEditProperties
        propertiesList={propertiesList}
        setPropertiesList={setPropertiesList}
        fetchProperties={fetchProperties}
      />
      <ViewProperties
        propertiesList={propertiesList}
        setPropertiesList={setPropertiesList}
        fetchProperties={fetchProperties}
      />
    </>
  );
};

export default PropertiesDashboard;

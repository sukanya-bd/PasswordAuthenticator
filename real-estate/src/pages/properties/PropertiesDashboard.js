import React, { useState } from 'react';
import ViewProperties from './ViewProperties';
import { Button, Card, CardActions, CardHeader, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { getProperties } from '../../propertiesServices/PropertiesServices';

const PropertiesDashboard = () => {
  const [propertiesList, setPropertiesList] = useState([]);
  const [addProperty, setAddProperty] = useState({
    property_id: '',
    property_name: '',
    property_image: '',
    property_price: ''
  });

  const fetchProperties = async () => {
    const data = await getProperties();
    setPropertiesList(data);
  };

  const handleAddProperty = () => {
    setPropertiesList([...propertiesList, addProperty]);
  };

  return (
    <>
      <Typography variant="h3" align="center" gutterBottom>
        Properties
      </Typography>

      <ViewProperties propertiesList={propertiesList} fetchProperties={fetchProperties} />

      <Button onClick={handleAddProperty} variant="contained">
        Add Property
      </Button>

      <Card sx={{ maxWidth: 345 }}>
        <CardContent></CardContent>
      </Card>
    </>
  );
};

export default PropertiesDashboard;

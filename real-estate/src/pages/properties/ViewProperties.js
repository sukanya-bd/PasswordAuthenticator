import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardHeader, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import './properties.css';

const ViewProperties = ({ propertiesList, setPropertiesList, fetchProperties }) => {
  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="properties-content">
      {propertiesList?.map(property => (
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader title={property?.property_name} />
          <CardMedia
            component="img"
            height="300"
            width="200"
            src={require(`../../assets/images/${property.property_image}.jpg`)}
            alt={property?.property_name}
          />
          <CardContent className="card-footer">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              ${property.property_price}
            </Typography>
            <div className="card-footer-icons">
              <IconButton aria-label="Delete" className="">
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="Edit" className="">
                <EditIcon />
              </IconButton>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ViewProperties;

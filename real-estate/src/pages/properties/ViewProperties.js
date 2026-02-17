import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardHeader, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import './properties.css';

const ViewProperties = ({ propertiesList, fetchProperties }) => {
  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="properties-content" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {propertiesList?.map(property => (
        <Card sx={{ maxWidth: 345 }} key={property.id}>
          <CardHeader title={property.property_name} />
          <CardMedia
            component="img"
            height="300"
            width="200"
            image={`/images/${property.property_image}.jpg`}
            alt={property.property_name}
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              ${property.property_price}
            </Typography>
            <div className="card-footer-icons">
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="Edit">
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

import React, { useState, useEffect } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { getAllItems, addNewItem } from '../../services/item/itemService.js';

const Crud = () => {
  const fetchItems = () => {
    getAllItems();
  };

  useEffect(() => {
    fetchItems().then(res => {
      console.log(res);
    });
  }, []);
  return <></>;
};

export default Crud;

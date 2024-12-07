import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ value, onChange }) => (
  <TextField
    label="Search Characters"
    variant="outlined"
    fullWidth
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{ marginBottom: '20px' }}
  />
);

export default SearchBar;

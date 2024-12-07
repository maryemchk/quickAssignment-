import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const CharacterCard = ({ character }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={character.image}
        alt={character.name}
      />
      <CardContent>
        <Typography variant="h6">{character.name}</Typography>
        <Typography>Status: {character.status}</Typography>
        <Typography>Location: {character.location.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;

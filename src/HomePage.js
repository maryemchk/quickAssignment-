import React, { useState, useEffect } from 'react';
import { TextField, Container, Grid, Card, CardContent, CardMedia, Typography, Box, CircularProgress, Button } from '@mui/material';

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null); // State to manage selected character

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      const response = await fetch(`https://rickandmortyapi.com/api/character?name=${searchQuery}`);
      const data = await response.json();
      setCharacters(data.results || []);
      setLoading(false);
    };
    getCharacters();
  }, [searchQuery]);

  const getStatusColor = (status) => {
    if (status === 'Alive') return 'green';
    if (status === 'Dead') return 'red';
    return 'grey';
  };

  // Toggle the visibility of the character details when the card is clicked
  const handleCardClick = (character) => {
    if (selectedCharacter && selectedCharacter.id === character.id) {
      setSelectedCharacter(null); // Deselect if the same character is clicked again
    } else {
      setSelectedCharacter(character); // Select the new character
    }
  };

  return (
    <Container
      maxWidth="lg"
      style={{
        marginTop: '25px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          color: 'rgb(0, 255, 255)',
          fontWeight: 'bold',
          textShadow: '0px 0px 10px rgba(0, 255, 255, 0.8), 0px 0px 20px rgba(0, 255, 255, 0.8)',
          fontFamily: '"Press Start 2P", cursive',
        }}
      >
        Rick and Morty Characters
      </Typography>

      <TextField
        label="Search Characters"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginTop: '40px', marginBottom: '40px', maxWidth: '900px' }}
      />
      
      {loading ? (
        <Box display="flex" justifyContent="center" style={{ marginTop: '25px' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {characters.length > 0 ? (
            characters.map((character) => (
              <Grid item xs={12} sm={6} md={4} key={character.id} container justifyContent="center">
                <Card
                  sx={{
                    boxShadow: 3,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: 6,
                    },
                  }}
                  onClick={() => handleCardClick(character)} // Toggle the card click event
                >
                  <CardContent style={{ position: 'relative', padding: '0px' }}>
                    <Button
                      variant="contained"
                      size="small"
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        backgroundColor: getStatusColor(character.status),
                        color: 'white',
                      }}
                    >
                      {character.status}
                    </Button>
                  </CardContent>
                  <CardMedia
                    component="img"
                    alt={character.name}
                    height="320"
                    image={character.image}
                  />
                  <CardContent>
                    <Typography variant="h6">{character.name}</Typography>
                    <Typography>Location: {character.location.name}</Typography>
                  </CardContent>

                  {/* Conditionally render additional character info if selected */}
                  {selectedCharacter && selectedCharacter.id === character.id && (
                    <Box sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: '#00CCDD',
                      color: 'white',
                      padding: '10px',
                    }}>
                      <Typography>Species: {character.species}</Typography>
                      <Typography>Gender: {character.gender}</Typography>
                      <Typography>Origin: {character.origin.name}</Typography>
                      <Typography>Location: {character.location.name}</Typography>
                    </Box>
                  )}
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography align="center">No characters found.</Typography>
            </Grid>
          )}
        </Grid>
      )}
    </Container>
  );
};

export default HomePage;

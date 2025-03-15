import React, { useState } from 'react';
import { Button, Alert, Container } from 'react-bootstrap';

function App() {
  const [message, setMessage] = useState('');

  const funnyMessages = [
    "1. You broke the internet! Just kidding... or am I? 🤯",
    "2. mError 404: Seriousness not found! 😂",
    "3. You clicked me? Now you owe me coffee! ☕",
    "4. Boom! That was a self-destruct button... Just kidding! 😆",
    "5. If buttons had feelings, I'd be blushing right now! 🥰",
    "6. You must be really bored clicking this! Get back to work! 😜",
    "7. I wish I got paid every time you clicked me...💰",
    "aaaaaaeeeeeyyyyyyyyyyyttttttt"
  ];

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * funnyMessages.length);
    setMessage(funnyMessages[randomIndex]);
  };

  return (
    <Container className="text-center mt-5">
      <h1>Welcome to React Bootstrap</h1>
      <p>Keep clicking till you see 8</p>
      <Button variant="warning" size="lg" onClick={handleClick}>
        Click Me for Fun! 🎉
      </Button>
      {message && <Alert variant="success" className="mt-3">{message}</Alert>}
    </Container>
  );
}

export default App;
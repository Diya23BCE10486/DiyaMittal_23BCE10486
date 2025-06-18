const express = require('express');
const app = express();
const port = 3001;

// Middleware to parse JSON
app.use(express.json());

// Define the register route
app.post('/api/auth/register', (req, res) => {
  const { username, password } = req.body;
  console.log('Registering user:', username);
  
  // Example response
  res.status(201).json({ message: 'User registered successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

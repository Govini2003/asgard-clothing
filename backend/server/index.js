const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 4000;
const JWT_SECRET = 'your_jwt_secret'; // In production, use env vars

const loginLog = [];
// In-memory user storage
const users = [
  {
    id: 1,
    email: 'user@example.com',
    passwordHash: bcrypt.hashSync('password123', 10),
  }
];

app.use(cors());
app.use(express.json());

app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }
  if (users.find(u => u.email === email)) {
    return res.status(409).json({ message: 'Email already registered' });
  }
  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = {
    id: users.length + 1,
    email,
    passwordHash,
  };
  users.push(newUser);
  res.status(201).json({ message: 'User registered successfully' });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }
  const foundUser = users.find(u => u.email === email);
  if (!foundUser) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const isMatch = await bcrypt.compare(password, foundUser.passwordHash);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  // Create JWT
  const token = jwt.sign({ id: foundUser.id, email: foundUser.email }, JWT_SECRET, { expiresIn: '1h' });
  loginLog.push({ email, time: new Date().toISOString() });
  res.json({ token });
});

app.get('/users', (req, res) => {
  // For development only: do not expose password hashes
  res.json(users.map(({ passwordHash, ...rest }) => rest));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 
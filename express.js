import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Fix __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static
app.use(express.static(path.join(__dirname, '../public')));

// Middleware
app.use(express.urlencoded({ extended: true }));

// Page Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/home.html'));
});

app.get('/student', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/student.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/admin.html'));
});

// API
app.get('/api/getStudent', (req, res) => {
  const { studentID, firstName, lastName, section } = req.query;
  res.json({ studentID, firstName, lastName, section });
});

app.get('/api/getAdmin', (req, res) => {
  const { adminID, firstName, lastName, department } = req.query;
  res.json({ adminID, firstName, lastName, department });
});

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

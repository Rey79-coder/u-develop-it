const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3009;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Add after Express middleware
app.use('/api', apiRoutes);

// // Get all candidates ENDPOINT #1
// app.get('/api/candidates', (req, res) => {


// });


// // Get a single candidate ENDPOINT #2
// app.get('/api/candidate/:id', (req, res) => {

  
// });

// // Create a candidate POST IT
// app.post('/api/candidate', ({ body }, res) => {
  
// });

// // Delete a candidate ENDPOINT #3
// app.delete('/api/candidate/:id', (req, res) => {
  
// });

// // Update a candidate's party
// app.put('/api/candidate/:id', (req, res) => {

  
// });

///////////////// PARTIES API ENDPOINT  ///////////////
// app.get('/api/parties', (req, res) => {
  
// });

// app.get('/api/party/:id', (req, res) => {
 
// });

// app.delete('/api/party/:id', (req, res) => {
  
// });



// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});


// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

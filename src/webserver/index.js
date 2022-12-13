const express = require('express')
const app = express()

// This endpoint returns the current day of the week
app.get('/dayofweek', (req, res) => {
  // Get the current date
  const date = new Date()

  // Get the day of the week as a string (e.g. "Monday", "Tuesday", etc.)
  const dayOfWeek = date.toLocaleString('default', { weekday: 'long' })

  // Send the day of the week as the response
  res.send(dayOfWeek)
})

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
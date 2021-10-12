const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.post('/events', async (req, res) => {
  const event = req.body;
  //post service
  try {
    await axios.post('http://localhost:4000/events', event);
    res.send({ status: 'ok' });
  } catch (err) {
    console.log(err.message);
  }
  //comment service
  try {
    await axios.post('http://localhost:4001/events', event);
    res.send({ status: 'ok' });
  } catch (err) {
    console.log(err.message);
  }
  //query service
  try {
    await axios.post('http://localhost:4002/events', event);
    res.send({ status: 'ok' });
  } catch (err) {
    console.log(err.message);
  }
  //moderation service
  try {
    await axios.post('http://localhost:4003/events', event);
    res.send({ status: 'ok' });
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});

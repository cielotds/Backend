import express from 'express';
const app = express();

app.use(express.json());

const PORT = 3000;

try {
    app.listen(PORT, () => {
      console.log(`Listening to Port 3000...`);
    });
}catch(e) {
  console.log(e);
}

app.get('/cielo', async (request, response) => {
  response.status(200).json({ message: 'Hello I am Cielo!' });
});

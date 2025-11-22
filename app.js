import express from 'express';
import 'dotenv/config.js';
import studentRoutes from './routers/StudentRoutes.js';
import bookRoutes from './routers/BookRoutes.js';
import cors from 'cors';
import userRoutes from './routers/UserRoutes.js';

const app = express();

let corsOptions = {
  origin: process.env.ORIGIN
}

app.use(express.json());
app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const port = 3000;

try {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Listening to Port ${process.env.PORT || 3000}...`);
    });
}catch(e) {
  console.log(e);
}

app.use('/students', studentRoutes);
app.use('/books', bookRoutes);
app.use('/users', userRoutes);

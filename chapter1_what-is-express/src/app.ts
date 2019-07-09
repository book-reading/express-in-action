import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Express app started on port 3000.');
});

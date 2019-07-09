import express, { Express, Request, Response, NextFunction } from 'express';
import logger from 'morgan';
import path from 'path';
import http from 'http';

const app: Express = express();

// app.use((req: Request, res: Response, next: NextFunction): void => {
//   console.log(`In comes a ${req.method} to: ${req.url}`);
//   next();
// });

app.use(logger('short'));

const publicPath: string = path.resolve(__dirname, '../');
app.use(express.static(publicPath));

// app.use((req: Request, res: Response, next: NextFunction): void => {
//   const minute: number = (new Date()).getMinutes();
//   if ((minute % 2) === 0) {
//     next();
//   } else {
//     res.statusCode = 403;
//     res.end('Not authorized.');
//   }
// });

// app.use((req: Request, res: Response): void => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Secret info: the password is "swordfish!"');
// });

// app.use((req: Request, res: Response): void => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello, world!');
// });

app.use((req: Request, res: Response): void => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Looks like you don\'t find a static file.');
});

http.createServer(app).listen(3000);

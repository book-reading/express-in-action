import express, { Express, Request, Response, NextFunction } from 'express';
import logger from 'morgan';
import path from 'path';
import http from 'http';

const app: Express = express();

// app.use((req: Request, res: Response, next: NextFunction): void => {
//   console.log(`In comes a ${req.method} to: ${req.url}`);
//   next();
// });

// app.use(logger('short'));

// const publicPath: string = path.resolve(__dirname, '../');
// app.use(express.static(publicPath));

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

// app.use((req: Request, res: Response): void => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Looks like you don\'t find a static file.');
// });

// --- 3.10
// const publicPath: string = path.resolve(__dirname, '../');
// app.use(express.static(publicPath));

// app.get('/', (req: Request, res: Response): void => {
//   res.end('Welcome to my homepage!');
// });

// app.get('/about', (req: Request, res: Response): void => {
//   res.end('Welcome to the about page!');
// });

// app.get('/weather', (req: Request, res: Response): void => {
//   res.end('The current weather is NICE.');
// });

// app.use((req: Request, res: Response): void => {
//   res.statusCode = 404;
//   res.end('404!');
// });

// --- 3.11
// app.get('/hello/:who', (req: Request, res: Response): void => {
//   res.end(`Hello, ${req.params.who}.`);
//   // 这存在点安全方面问题
// });

// --- 3.12
// app.get('/helloworld', (req: Request, res: Response): void => {
//   res.redirect('/hello/world');
// });

// app.get('/hello/:who', (req: Request, res: Response): void => {
//   res.end(`Hello, ${req.params.who}.`);
//   // 这存在点安全方面问题
// });

// --- 3.13
// app.get('/file', (req: Request, res: Response): void => {
//   res.sendFile(path.resolve(__dirname, '../package.json'));
// });

// --- 3.14
// const EVIL_IP: string = '::1';

// app.use((req: Request, res: Response, next: NextFunction): void => {
//   if (req.ip === EVIL_IP) {
//     res.status(401).send('Not allowed!');
//   } else {
//     next();
//   }
// });

// app.use((req: Request, res: Response): void => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello, world!');
// });

// --- 3.17
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response): void => {
  res.render('index', {
    message: 'Hey everyone! This is my webpage.'
  });
});

http.createServer(app).listen(3000);

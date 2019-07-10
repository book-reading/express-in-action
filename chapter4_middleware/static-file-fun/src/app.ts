import express, { Express, NextFunction, Request, Response } from 'express';
import http from 'http';
import path from 'path';
import fs from 'fs';

const app: Express = express();

// --- 4.3
// app.use((req: Request, res: Response, next: NextFunction): void => {
//   console.log(`Request IP: ${req.url}`);
//   console.log(`Request date: ${new Date()}`);
// });

// --- 4.4
app.use((req: Request, res: Response, next: NextFunction): void => {
  console.log(`Request IP: ${req.url}`);
  console.log(`Request date: ${new Date()}`);
  next();
});

// --- 4.5
app.use((req: Request, res: Response, next: NextFunction): void => {
  const filePath: string = path.join(__dirname, '../static', req.url);
  fs.stat(filePath, (err: NodeJS.ErrnoException, stats: fs.Stats): void => {
    // tslint:disable-next-line: strict-boolean-expressions
    if (err) {
      next();
      return;
    }

    if (stats.isFile()) {
      res.sendFile(filePath);
    } else {
      next();
    }
  });
});

// --- 4.6
app.use((req: Request, res: Response): void => {
  res.status(404);
  res.send('File not found!');
});

http
  .createServer(app)
  .listen(3000, () => {
    console.log('App started on port 3000');
  });

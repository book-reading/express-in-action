import http from 'http';
import path from 'path';
import express, { Express, Request, Response } from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

const app: Express = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

const entries: {
  title: string;
  content: string;
  published: Date
}[] = [];
app.locals.entries = entries;

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response): void => {
  res.render('index');
});

app.get('/new-entry', (req: Request, res: Response): void => {
  res.render('new-entry');
});

app.post('/new-entry', (req: Request, res: Response): void => {
  if (!req.body.title || !req.body.content) {
    res.status(400).send('Entries must have a title and a body.');
    return;
  }

  entries.push({
    title: req.body.title,
    content: req.body.content,
    published: new Date()
  });

  res.redirect('/');
});

app.use((req: Request, res: Response): void => {
  res.status(404).render('404');
});

http.createServer(app).listen(3000, () => {
  console.log('Guestbook app started on port 3000.');
});

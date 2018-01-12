/* tslint:disable no-console */
import * as compression from 'compression';
 const domino = require('domino');
const fs = require('fs');
const path = require('path');
const template = fs.readFileSync('./dist/index.html').toString();
// path.join(__dirname, '.', 'dist', 'index.html')
const win = domino.createWindow(template);
const files = fs.readdirSync(`${process.cwd()}/dist`);
const styleFiles = files.filter(file => file.startsWith('styles'));
const hashStyle = styleFiles[0].split('.')[1];
const style = fs.readFileSync(path
  .join('.', 'dist', `styles.css`)).toString();
global['window'] = win;
Object.defineProperty(win.document.body.style, 'transform', {
value: () => {
     return {
       enumerable: true,
       configurable: true
    };
   },
 });
global['document'] = win.document;
global['CSS'] = null;
// global['XMLHttpRequest'] = require('xmlhttprequest').XMLHttpRequest;
global['Prism'] = null;

import 'zone.js/dist/zone-node';
import './polyfills.server';
import './rxjs.imports';
import * as express from 'express';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { ServerAppModule } from './app/server.app.module';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { routes } from './server.routes';
import { App } from './mock-api/app';
import { enableProdMode } from '@angular/core';
import { UNIVERSAL_PORT } from '../constants';
enableProdMode();
const app = express();
const api = new App();
const baseUrl = `http://localhost:${UNIVERSAL_PORT}`;

app.engine('html', ngExpressEngine({
  bootstrap: ServerAppModule
}));

app.set('view engine', 'html');
app.set('views', 'src');

app.use(compression());
app.use('/', express.static('dist', { index: false }));
app.use('/assets', express.static(path.join(__dirname, 'assets'), { maxAge: 30 }));

routes.forEach(route => {
  app.get('/' + route, (req, res) => {
    console.time(`GET: ${req.originalUrl}`);
    res.render('../dist/index', {
      req: req,
      res: res
    });
    console.timeEnd(`GET: ${req.originalUrl}`);
  });
});

app.get('/data', (req, res) => {
  console.time(`GET: ${req.originalUrl}`);
  res.json(api.getData());
  console.timeEnd(`GET: ${req.originalUrl}`);
});

app.listen(UNIVERSAL_PORT, () => {
  console.log(`Listening at ${baseUrl}`);
});

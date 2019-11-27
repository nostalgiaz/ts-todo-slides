import * as express from 'express';
import { DataBase } from './database';

const db = new DataBase();

export default express.Router()
  .get('/', (req, res) => {
    res.status(200).send({ items: db.list() });
  })
  .post('/', (req, res) => {
    db.create(req.body.text);
    res.status(201).send()
  })
  .put('/', (req, res) => {
    db.update(req.body.old, req.body.new);
    res.status(200).send()
  });

#!/usr/bin/env node
import minimist from 'minimist';
import express, { Router, urlencoded } from "express";
import { roll } from './lib/roll.js';

const args = minimist(process.argv.slice(2));
const port = args.port? args.port:5000;

const app = express();
const router = Router();
app.use(urlencoded());

router.get('/', function (req, res) {
    res.send('200 OK');
  })

router.get('/roll', function (req, res) {
    res.send(JSON.stringify(roll(6,2,1)));
  })

router.post('/roll', function (req, res) {
    const sides = req.body.sides? req.body.sides:6;
    const dice = req.body.dice? req.body.dice:2;
    const rolls = req.body.rolls? req.body.rolls:1;
    res.send(JSON.stringify(roll(sides, dice, rolls)));
})
router.get('/roll/:sides', function (req, res) {
    const sides = req.params.sides;
    const dice = 2;
    const rolls = 1;
    res.send(JSON.stringify(roll(sides, dice, rolls)));
  })

router.get('/roll/:sides/:dice', function (req, res) {
    const sides = req.params.sides;
    const dice = req.params.dice;
    const rolls = 1;
    res.send(JSON.stringify(roll(sides, dice, rolls)));
  })

router.get('/roll/:sides/:dice/:rolls', function (req, res) {
    const sides = req.params.sides;
    const dice = req.params.dice;
    const rolls = req.params.rolls;
    res.send(JSON.stringify(roll(sides, dice, rolls)));
  })

app.use('/app', router);
app.use(function (req, res) {
    res.send('404 NOT FOUND');
})

app.listen(port)
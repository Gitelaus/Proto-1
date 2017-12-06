import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'

const app = Expres();
const port = 3000;

app.use('/static', Express.static('static'));

app.use(handleRender);

function handleRender(req, res){
	console.log(req);
}

console.log('started');
app.listen(port);


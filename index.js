import express from 'express'
// const express = require('require')  ---use es6 modules instead
const app = express()

app.listen(8800, () => {
  console.log("Connected to the backend!");
})
// router module

// 1. import express
const express = require('express')
// 2. create router object
const router = express.Router()
// 3. load routes
router.get('/user/list', (req, res) => {
  res.send('Get user list.')
})
router.post('/user/add', (req, res) => {
  res.send('Add new user.')
})

// 4. export router object
module.exports = router

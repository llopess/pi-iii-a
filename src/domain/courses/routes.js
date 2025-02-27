const router = require('express').Router()

router.get('/courses', (req, res) => res.json({ message: "GET COURSES"}))
router.post('/courses', (req, res) => res.json({ message: "POST COURSES"}))
router.put('/courses', (req, res) => res.json({ message: "PUT COURSES"}))
router.delete('/courses', (req, res) => res.json({ message: "DELETE COURSES"}))

module.exports = router
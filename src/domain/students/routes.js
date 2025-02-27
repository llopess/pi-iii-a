const router = require('express').Router()

router.get('/students', (req, res) => res.json({ message: "GET STUDENTS"}))
router.post('/students', (req, res) => res.json({ message: "POST STUDENTS"}))
router.put('/students', (req, res) => res.json({ message: "PUT STUDENTS"}))
router.delete('/students', (req, res) => res.json({ message: "DELETE STUDENTS"}))

module.exports = router
const router = require('express').Router()

router.get('/teams', (req, res) => res.json({ message: "GET TEAMS"}))
router.post('/teams', (req, res) => res.json({ message: "POST TEAMS"}))
router.put('/teams', (req, res) => res.json({ message: "PUT TEAMS"}))
router.delete('/teams', (req, res) => res.json({ message: "DELETE TEAMS"}))

module.exports = router
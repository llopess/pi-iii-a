const router = require('express').Router()

const coursesRoutes = require('../domain/courses/routes')
const studentsRoutes = require('../domain/students/routes')
const teamsRoutes = require('../domain/teams/routes')

router.use(coursesRoutes)
router.use(studentsRoutes)
router.use(teamsRoutes)

module.exports = router
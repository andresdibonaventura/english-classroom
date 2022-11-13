const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
require('../middleware/auth.middleware')(passport)
const { roleTeacherMiddleware } = require('../middleware/adminRole')

const taskServices = require('./task.http')
const userServices = require('../users/users.http')

router.route('/teacher')
.get(passport.authenticate('jwt', {session: false}), roleTeacherMiddleware, userServices.getStudents)
.post(passport.authenticate('jwt', {session: false}), roleTeacherMiddleware, taskServices.create)

router.route('/teacher/:id')
.put(passport.authenticate('jwt', {session: false}), roleTeacherMiddleware, taskServices.edit)

router.route('/me')
.get(passport.authenticate('jwt', {session: false}), taskServices.getMy)

router.route('/me/:id')
.put(passport.authenticate('jwt', {session: false}), taskServices.editByStudent)


exports.router = router
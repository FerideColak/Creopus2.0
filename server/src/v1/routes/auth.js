const router = require('express').Router()
const userController = require('../controllers/user')
const { body } = require('express-validator')
const validation = require('../handlers/validation')
const tokenHandler = require('../handlers/tokenHandler')
const User = require('../models/user')

router.post(
  '/register',
  body('email').isLength({ min: 8 }).withMessage('email must be valid'),
  body('password').isLength({ min: 8 }).withMessage('password must be at least 8 characters'),
  body('confirmPassword').isLength({ min: 8 }).withMessage('confirmPassword must be at least 8 characters'),
  body('email').custom(value => {
    return User.findOne({ email: value }).then(user => {
      if (user) {
        return Promise.reject('username already used')
      }
    })
  }),
  validation.validate,
  userController.register
)

router.post(
  '/login',
  body('email').isLength({ min: 8 }).withMessage('email must be valid'),
  body('password').isLength({ min: 8 }).withMessage('password must be at least 8 characters'),
  validation.validate,
  userController.login
)

router.post(
  '/verify-token',
  tokenHandler.verifyToken,
  (req, res) => {
    res.status(200).json({ user: req.user })
  }
)

module.exports = router
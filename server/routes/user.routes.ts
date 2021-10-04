import express from 'express'
import userCtrl from '../controllers/user.controller'
const router = express.Router()


router.route('/api/users')
.post(userCtrl.create)

router.route('/api/users/:userId')

export default router
import express from 'express'
const router = express.Router()


router.route('/api/users')

router.route('/api/users/:userId')

export default router
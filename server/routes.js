const express= require('express')
const router= express.Router()
const controllers= require('./controllers')



router.get('/',controllers.home)
router.get('/aboutus',controllers.aboutus)
router.post('/add',controllers.add)
router.get('/all',controllers.getall)
router.get('/:id',controllers.getone)
// router.put('/:id',controllers.update)



module.exports=router
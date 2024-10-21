import { Router } from 'express'
import { loginController, registerController } from '~/controller/users.controllers'
import { loginValidator, registerValidator } from '~/middlewares/users.middlewares'
import { validate } from '~/utils/validation'

const usersRouter = Router()

usersRouter.post('/login', loginValidator, loginController)
/**
 * Description: . Register a new user
 * Path : /register
 * Method : POST
 * Body : {name : string , email: string, password: string ,confirm_password : string, date_of_birth: ISO08601}
 */

usersRouter.post('/register', registerValidator, registerController)

export default usersRouter

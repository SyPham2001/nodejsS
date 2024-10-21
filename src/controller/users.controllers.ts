import { Request, Response } from 'express'
import User from '~/models/schemas/User.schemas'
import databaseService from '~/services/database.services'
import { ParamsDictionary } from 'express-serve-static-core'
import usersService from '~/services/users.services'
import { RegisterReqBody } from '~/models/requests/User.requests'
export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'phamsy113.spm@gmail.com' && password === 'phamvansy123') {
    return res.json({
      message: 'Login successful'
    })
  }
  return res.status(400).json({
    error: 'Login failed'
  })
}

export const registerController = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  try {
    const result = await usersService.register(req.body)
    return res.json({
      message: 'Register Success',
      result
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Register Failed'
    })
  }
}

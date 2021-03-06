import { NextFunction, Request, Response } from 'express';
import {
  get,
  controller,
  use,
  bodyValidator,
  post,
} from './decorators/';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request was made!!!');
  next();
}

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
              <form method="POST">
               <div>
                  <label>Email</label>
                  <input name="email" type="email"/>
               </div>
               <div>
                  <label>Password</label>
                  <input name="password" type="password"/>
               </div>
               <button>Submit</button>
              </form>
            `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: RequestWithBody, res: Response): void {
    const { email, password } = req.body;
    if (
      email &&
      password &&
      email === 'hi@hi.com' &&
      password === 'password'
    ) {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }
  @get('/logout')
  logout(req: Request, res: Response): void {
    req.session = undefined;
    res.redirect('/');
  }
}

import { Router, Request, Response, NextFunction } from 'express';

function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Not permitted');
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
        <div>
          <div>
            You are logged in
          </div>
          <a href="/logout">Logout</a>
        </div> 
      `);
  } else {
    res.send(`
        <div>
          <div>
            You are NOT logged in
          </div>
          <a href="/login">Login</a>
        </div> 
      `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get(
  '/protected',
  requireAuth,
  (req: Request, res: Response) => {
    res.send('Welcome to protected route, loggedn in user');
  }
);
export { router };

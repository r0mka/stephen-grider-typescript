import { Router, Request, Response } from 'express';

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
     <div>
        <label>Email</label>
        <input name="em"/>
     </div>
     <div>
        <label>Password</label>
        <input name="pa" type="password"/>
     </div>
     <button>Submit</button>
    </form>
  `);
});

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (email) {
    res.send(email.toUpperCase());
  } else {
    res.status(400).send('No email');
  }
});

export { router };

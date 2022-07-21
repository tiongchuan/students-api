import pkg from 'lodash';
import { login as _login, register as _register } from "../services/auth.services.js";

const { isEmpty } = pkg;

class AuthController {

  async login(req, res, next) {

    let email = req.body.email;
    let password = req.body.password;

    console.log(email, password);

    // Check params are not empty. 
    if (isEmpty(email) || isEmpty(password)) {
      //throw new Error("Email or password cannot be empty!");
      return res.status(500).json({message: "Email or password cannot be empty!"})
    }

    const result = await _login(email, password);
    return res.status(result.status).json(result);
  }

  async register(req, res, next) {

    let email = req.body.email;
    let password = req.body.password;
    let role = req.body.role;

    console.log(email, password);

    // Check params are not empty. 
    if (isEmpty(email) || isEmpty(password)) {
      //throw new Error("Email or password cannot be empty!");
      return res.status(500).json({message: "Email or password cannot be empty!"})
    }

    // Empty 'role' will default to 'USER".
    const result = await _register(email, password, role);
    return res.status(result.status).json(result);
  }
}

export default AuthController;
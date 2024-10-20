import userAuthServices from "../services/userAuthServices.js";
import customError from "../utils/customError.js";
import catched from "../utils/catched.js";
import httpResponse from "../utils/httpResponse.js";
import userDTO from "../DTO/userDTO.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const userAuthController = {
    
  async logInUser(req, res) {
    const data = req.body;
    console.log(data, "data from logInUser, controller");
    const emailInUse = await userAuthServices.getByEmail(data.email);
    if (!emailInUse)
      throw new customError(
        `Email or password is not correct, signinuser controller`,
        400
      );
    const validPassword = userAuthServices.checkPassword(
      data.password,
      emailInUse.password
    );
    if (!validPassword)
      throw new customError(`Email or Password is not correct`, 400);
    const token = jwt.sign(
      { email: emailInUse.email },
      process.env.SECRET_KEY,
      { expiresIn: "2h" }
    );
    const userResponse = userDTO(emailInUse, token);
    console.log(userResponse, "the response of user response signIn controler");
    httpResponse(res, 200, userResponse);
  },

  //para ingresar con token

  async logInWithToken(req, res) {
    const authHeader = req.headers["authorization"];
    if (!authHeader) throw new customError("Token no fue dado", 400);
    const token = authHeader.split(" ")[1];
    const userResponse = userDTO(req.user, token);
    console.log(req.user, "requerimiento usuario token");
    httpResponse(res, 200, userResponse, "user fue logeado con token");
  },

  //registro de usuario crea el token

  async registroUsuario(req, res) {
    const data = req.body;
    const emailInUse = await userAuthServices.getByEmail(data.email);
    if (emailInUse) throw new customError("Email ya existe", 400);
    const newUser = await userAuthServices.create(data);
    const token = jwt.sign({ email: newUser.email }, process.env.SECRET_KEY, {
      expiresIn: "2h",
    });
    const userResponse = userDTO(newUser, token);
    httpResponse(res, 200, userResponse, "Usuario fue creado");
  },

  //traer todos los usuario JSON

  async getAllUsers(req, res) {
    let allUsers = await userAuthServices.getAllUsers();
    httpResponse(res, 201, allUsers, "se trajo a todos los usuarios");
  },

  async getByUserEmail(req, res) {
    let userEmail = await userAuthServices.getByEmail(data.email);
    httpResponse(
      res,
      201,
      userEmail,
      "se trajo el usuario por email controller"
    );
  },

  async getOneUserById(req, res) {
    let userId = await userAuthServices.getUserById(req.params.id);
    httpResponse(res, 201, userId);
  },

  async updateUser(req, res) {
    let updatedUser = await userAuthServices.updateUser(
      { _id: req.params.id },
      req.body
    );
    if (!updatedUser)
      throw new customError(
        "el Id no corresponde con un usuario, update controller",
        400
      );
    console.log(updatedUser, "updated user de controller");
    const userResponse = userDTO(updatedUser);
    httpResponse(res, 200, userResponse, "user actualizado de forma exitosa");
  },

  async deleteUser(req, res) {
    let deletedUser = await userAuthServices.deleteUser(req.params.id);
    if (!deletedUser) throw new customError("no sepuede borrar usuario", 400);
    httpResponse(res, 201, deletedUser, "se borro usuario de forma exitosa");
  },
};

export default {
  logInUser: catched(userAuthController.logInUser),
  logInWithToken: catched(userAuthController.logInWithToken),
  registroUsuario: catched(userAuthController.registroUsuario),
  getAllUsers: catched(userAuthController.getAllUsers),
  getByUserEmail: catched(userAuthController.getByUserEmail),
  getOneUserById: catched(userAuthController.getOneUserById),
  updateUser: catched(userAuthController.updateUser),
  deleteUser: catched(userAuthController.deleteUser)
};

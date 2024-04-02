const { User } = require("../../sequelize/models/user.model");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Ruta para la solicitud de inicio de sesión
router.post("/login", async (req, res) => {
  // Obtener datos de la solicitud
  const username = req.body.username;
  const password = req.body.password;
  console.log("---------> username: ", username);
  try {
    // Buscar usuario en la bd por nombre de usuario
    console.log("---------_> User:", User);
    const user = await User.findOne({
      where: {
        username,
      },
    });

    if (user && user.password === password) {
      res.status(200).json({ message: "Inicio de sesión exitoso" });
    } else {
      res.status(401).json({ message: "Credenciales inválidas" });
    }
  } catch (error) {
    console.error("Error al iniciar sesión", error);
    res.status(500).json({ message: "Error interno" });
  }
});

module.exports = router;

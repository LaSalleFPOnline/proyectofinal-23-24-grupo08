const { models } = require("../../sequelize");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Ruta para la solicitud de inicio de sesión
router.post("/login", async (req, res) => {
  // Obtener datos de la solicitud
  const { username, password } = req.body;

  try {
    // Buscar usuario en la base de datos por nombre de usuario
    const user = await models.user.findOne({
      where: {
        username,
      },
    });

    if (user && password === user.password) {
      // Si el usuario y la contraseña son correctos, generar el token JWT
      jwt.sign({ user }, "secretKey", { expiresIn: "1h" }, (err, token) => {
        if (err) {
          res.status(500).json({ message: "Error al firmar el token" });
        } else {
          //res.json({ token }); comprobación de que funciona y tengo token.
          res.status(200).json({
            message: "Login correcto con token",
            token,
            status: "OK",
          });
        }
      });
    } else {
      res.status(401).json({
        message: "Credenciales inválidas",
        status: "Error",
      });
    }
  } catch (error) {
    // Manejar cualquier error interno
    console.error("Error al iniciar sesión", error);
    res.status(500).json({
      message: "Error interno",
      status: "Error",
    });
  }
});

module.exports = router;

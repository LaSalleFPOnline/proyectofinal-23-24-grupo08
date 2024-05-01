const { models } = require('../../sequelize');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Ruta para la solicitud de inicio de sesión
router.post('/login', async (req, res) => {
    // Obtener datos de la solicitud
    const { username, password } = req.body;

    try {
        // Buscar usuario en la base de datos por nombre de usuario
        const user = await models.user.findOne({
            where: {
                username
            }
        });

        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                res.status(500).json({ message: 'Error' });
            } else {
                bcrypt.compare(user.password, hash, (err, result) => {
                    if (err) {
                        res.status(500).json({ message: 'Error' });
                    } else {
                        jwt.sign({ user }, 'secretKey', { expiresIn: '1h' }, (err, token) => {
                            if (err) {
                                res.status(500).json({ message: 'Error al firmar el token' });
                            } else {
                                const role = 2;

                                if (role === 2) {
                                    // Buscar dades restaurant
                                }
                                res.status(200).json({
                                    message: 'Login correcto con token',
                                    token,
                                    data: {
                                        id: 4234,
                                        slug: 'can-balsells',
                                        role: role,
                                        isRestaurant: role === 2,
                                        isAdmin: role === 1
                                    },
                                    status: 'OK'
                                });
                                //Comprobación de que imprime el hash correctamente
                                //console.log("------>Hash: ", hash);
                            }
                        });
                    }
                });
            }
        });
    } catch (error) {
        // Manejar cualquier error interno
        console.error('Error al iniciar sesión', error);
        res.status(500).json({
            message: 'Error interno',
            status: 'Error'
        });
    }
});

module.exports = router;

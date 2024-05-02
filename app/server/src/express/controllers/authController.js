const sequelize = require('../../sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { getSlug } = require('../../helpers/stringHelpers');
const { user: User } = sequelize.models;
let controllers = null;

const authController = {
    setControllers: (ctrls) => {
        controllers = ctrls;
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        const { userController } = controllers;

        try {
            const user = await userController.getByEmail(email);
            console.log('USER BY EMAIL >> ', user);

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
    },
    register: async (req, res) => {
        const { nameRestaurant } = req.body;
        const { userController, restaurantController } = controllers;

        try {
            const newUser = await userController.create(req, res);

            if (!newUser) {
                res.status(500).json({
                    message: 'Error al crear usuario',
                    status: 'KO'
                });
            }

            const newRestaurant = await restaurantController.createFromRegister({
                userId: newUser.id,
                name: nameRestaurant,
                slug: getSlug(nameRestaurant)
            });

            if (!newRestaurant) {
                res.status(500).json({
                    message: 'Error al crear restaurante',
                    status: 'KO'
                });
            }

            authController.login(req, res);
        } catch (error) {
            console.error('Error al registre', error);
            res.status(500).json({
                message: 'Error interno',
                status: 'KO'
            });
        }
    },
    logout: async (req, res) => {
        const {} = req.body;

        try {
        } catch (error) {
            console.error('Error al iniciar sesión', error);
            res.status(500).json({
                message: 'Error interno',
                status: 'KO'
            });
        }
    }
};

module.exports = authController;

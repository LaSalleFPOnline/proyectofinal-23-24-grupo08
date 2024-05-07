const sequelize = require('../../sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { getSlug } = require('../../helpers/stringHelpers');

let controllers = null;

const authController = {
    setControllers: (ctrls) => {
        controllers = ctrls;
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        const { userController, restaurantController } = controllers;

        try {
            const user = await userController.getByEmail(email);
            if (!user) {
                res.status(200).json({
                    status: 'KO',
                    message: 'Email incorrecto'
                });
                return;
            }

            bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    res.status(500).json({ status: 'KO', message: 'Error' });
                    return;
                } else {
                    bcrypt.compare(user.password, hash, (err, result) => {
                        if (err) {
                            res.status(500).json({
                                status: 'KO',
                                error: err,
                                message: 'error password'
                            });
                            return;
                        } else {
                            if (!result) {
                                res.status(200).json({
                                    status: 'KO',
                                    message: 'password incorrecto'
                                });
                                return;
                            }

                            jwt.sign({ user }, 'secretKey', { expiresIn: '1h' }, async (err, token) => {
                                if (err) {
                                    res.status(500).json({ status: 'KO', message: 'Error al firmar el token' });
                                } else {
                                    if (user.rol === 2) {
                                        const restaurant = await restaurantController.getByUserId(user.id);

                                        res.status(200).json({
                                            status: 'OK',
                                            message: 'Login correcto con token',
                                            token,
                                            data: {
                                                userId: user.id,
                                                email: user.email,
                                                firstName: user.firstName,
                                                lastName: user.lasttName,
                                                restaurantName: restaurant.name,
                                                restaurantId: restaurant.id,
                                                slug: restaurant.slug,
                                                role: 2,
                                                validate: restaurant.validate,
                                                isRestaurant: true,
                                                isAdmin: false
                                            }
                                        });
                                    } else {
                                        res.status(200).json({
                                            status: 'OK',
                                            message: 'Login correcto con token',
                                            token,
                                            data: {
                                                userId: user.id,
                                                email: user.email,
                                                firstName: user.firstName,
                                                lastName: user.lasttName,
                                                role: 1,
                                                isRestaurant: false,
                                                isAdmin: true
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    });
                }
            });
        } catch (error) {
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

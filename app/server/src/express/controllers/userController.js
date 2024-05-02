const sequelize = require('../../sequelize');
const { user: User } = sequelize.models;
let controllers = null;

const userController = {
    setControllers: (ctrls) => {
        controllers = ctrls;
    },
    getByEmail: async (email) => {
        try {
            const user = await User.findOne({
                where: {
                    email
                }
            });
            if (!user) return false;
            return user;
        } catch (error) {
            return false;
        }
    },
    getByRol: async (rol) => {
        try {
            const users = await User.findAll({
                where: {
                    rol
                }
            });
            if (!users) return [];
            return users;
        } catch (error) {
            return [];
        }
    },
    getAdminUsers: async () => {
        try {
            await Promise.resolve();
            const users = await userController.getByRol(1);
            if (!users) return [];
            return users;
        } catch (error) {
            return [];
        }
    },
    getRestaurantUsers: async () => {
        try {
            const users = await userController.getByRol(2);
            if (!users) return [];
            return users;
        } catch (error) {
            return [];
        }
    },
    getAll: async (req, res) => {
        try {
            const users = await User.findAll();
            res.json({
                status: 'OK',
                data: users
            });
        } catch (error) {
            console.log('QUIN ERROR >> ', error);
            res.status(500).json({ status: 'KO', message: 'Error al obtener los users' });
        }
    },
    getById: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ status: 'KO', message: 'User no encontrado' });
            }
            res.json(user);
        } catch (error) {
            console.error('Error al obtener el user por ID:', error);
            res.status(500).json({ status: 'KO', message: 'Error al obtener el user por ID' });
        }
    },

    create: async (req, res) => {
        const { firstName, lastName, email, password } = req.body;
        console.log('CREATE USER >>> ', req.body);
        try {
            const newUser = await User.create({ firstName, lastName, email, password });
            return newUser;
        } catch (error) {
            console.log('ERROR USER >> ', error);
            return 'Error';
            // res.status(500).json({ status: 'KO', message: 'Error al crear un nuevo user', error });
        }
    },

    update: async (req, res) => {
        const { id } = req.params;
        const { firstName, lastName, email, password } = req.body;
        try {
            const [updated] = await User.update({ firstName, lastName, email, password }, { where: { id } });
            if (!updated) {
                return res.status(404).json({ status: 'KO', message: 'User no encontrado' });
            }
            res.json({ status: 'OK', message: 'User actualizado correctamente' });
        } catch (error) {
            res.status(500).json({ status: 'KO', message: 'Error al actualizar el USER' });
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const deleted = await User.destroy({ where: { id } });
            if (!deleted) {
                return res.status(404).json({ status: 'KO', message: 'User no encontrado' });
            }
            res.json({ status: 'OK', message: 'User eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ status: 'KO', message: 'Error al eliminar el user' });
        }
    }
};

module.exports = userController;

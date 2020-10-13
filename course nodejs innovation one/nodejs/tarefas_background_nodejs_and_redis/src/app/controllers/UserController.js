import passwordGenerator from 'password-generator';
import Queue from  '../lib/Queue';

export default {
    async store(req, res) {

        const user = {
            name: req.body.user.name,
            email: req.body.user.email,
            password : passwordGenerator(15, false)
        }

        await Queue.add('RegistrationMail', { user })
        return res.json(user);
    }
}
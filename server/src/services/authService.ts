import db from '../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


class AuthService {

    public register = ({email, password}: any) => new Promise<any>(async (resolve, reject) => {
        console.log('email2',email);
        try {
            const hashPassword = await bcrypt.hashSync(password, bcrypt.genSaltSync(3));
            const response = await db.User.findOrCreate({
                where: {email},
                defaults: {
                    email,
                    password: hashPassword,
                    name: 'Default Name',
                    avatar: 'link',
                    role_code: 'Default Role Code',
                }
            });
            const token = response[1] ? jwt.sign(
                {id: response[0].id, email: response[0].email, role_code: response[0].role_code}, process.env.JWT_SECRET!, {expiresIn: '555d'}
            ) : null;


            resolve({
                err: response[1] ? 0 : 1,
                mes: response[1] ? 'Resgister successfully' : 'Email is used',
                access_token: token ? `Bearer ${token}` : null
            });

        } catch (error) {
            reject(error);
            console.log('fail');
        }
    });
    public login = ({email, password}: any) => new Promise<any>(async (resolve, reject) => {
        console.log('12313123',password);
        try {
            const response = await db.User.findOne({
                where: {email},
                raw: true
            });

            const isChecked = response && bcrypt.compareSync(password, response.password);
            const token = isChecked ? jwt.sign({id: response.id, email: response.email, role_code: response.role_code}, process.env.JWT_SECRET!, {expiresIn: '555d'}) : null;

            resolve({
                err: token ? 0 : 1,
                mes: token ? 'Login successfully' : response ? 'wrong password' : 'Email is not registered',
                access_token: token ? `Bearer ${token}` : null
            });

        } catch (error) {
            reject(error);
        }
    });

}

export default new AuthService()


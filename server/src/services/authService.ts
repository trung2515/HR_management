import {User} from '../models/user';
import bcrypt from 'bcryptjs'

// interface RegistrationData {
//     email: string;
//     password: string;
// }

class AuthService {
    public hashPassword = async(password:string) => {
        bcrypt.hashSync(password, await bcrypt.genSalt(5))
    }
    
    public register = ({email, password}:any) => new Promise<any>(async(resolve, reject) => {
        console.log('service', User);
        console.log('serbodyvice', email,password);
        
        try {
            const response = await User.findOrCreate({
                where: {email},
                defaults:{
                    email,
                    password: password,
                    name: 'Default Name',  
                    avatar: 'Default Avatar',
                    role_code: 'Default Role Code',
                }
            })
            resolve({
                err: response[1] ? 0 : 1,
                mes: response[1]? 'Resgister successfully': 'Email is used'
            })
            
        } catch (error) {
            reject(error)
            console.log('fail');
            
        }
    })
}

export default new AuthService()


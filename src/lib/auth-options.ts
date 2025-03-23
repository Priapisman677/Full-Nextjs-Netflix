
import CredentialsProviders from 'next-auth/providers/credentials'

import { NextAuthOptions } from "next-auth";
import { LoginCredentialsSchema } from './zod-schemas';
import { User } from './user-model';
import bcryptjs from "bcryptjs";


export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/signin'
    },
    providers: [
        CredentialsProviders({
            id: 'poopCredentials',
            name: 'whatever',
            credentials: {email: {}, password: {}}, //$ Now check the type of the credentials below!
            async authorize(credentials){
                    //! Put this into its own separated function.

                //$ Credentials will arrive as:
                // email: 'adsf@dfggdsaa',
                // password: 'asdsad',
                // redirect: 'false',
                // csrfToken: '9604af3ab3d3b69c71425803129432b5dfbae1fbe8039bb914b4c7e30a356d27',
                //$ So just make sure not to make your schema strict.
                try{
                    const result = LoginCredentialsSchema.safeParse(credentials)

                    if(!result.success){
                        throw new Error(result.error.message)
                    }

                    const user = await User.findOne({email: result.data.email}) 

                    if(!user){
                        throw new Error('User not found')
                    }

                	const isPasswordValid = await bcryptjs.compare(result.data.password, user.password)

                    if(!isPasswordValid){	
                        throw new Error('Invalid password')	
                    }

                    return user

                }catch(e){
                    console.log(e);	
                    throw new Error('Something went wrong: ' + e)
                }
                
            }
        })
    ],
    callbacks: {
        jwt: ({token, user}) =>{
            if(user){ //* If it is the first time a person is logging in this is a token that wait will create:
                return { ...token, id: user?.id, custom: 'CUSTOM'}
            }

            //* If not we will just verify the token:
            return token
        },
        session:({session, token})=>{
            
            return {
                ...session,
                user: {
                  ...session.user,
                  id: token.id,
                  custom: token.custom

                }
              };
        }
    }
}


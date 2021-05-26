import client from "../client";
import bcrypt from "bcrypt";

export default {
    Mutation: {
        createAccount: async(_, 
        {username,email,name,password}
        ) => { 
            try{
            const existingUser = await client.user.findFirst({
                where: {
                    OR:[
                        {
                            username,
                        },
                        {
                            email
                        }
                    ]
                }
            });
            console.log(existingUser);
            if(existingUser){
                throw new Error("already exist")
            }
            const uglyPassword = await bcrypt.hash(password, 10);
            const newclient = await client.user.create({
            data: {
                username,
                email,
                name,
                password: uglyPassword,
            },
            });

            return newclient
        }catch(e){
            console.log(e)
            return e
        }
        }
    },
};
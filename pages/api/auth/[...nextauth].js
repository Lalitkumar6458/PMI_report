import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials';
// import axios from "axios";
import axios from "axios";
import { ApiEndPoint } from "@/public/ApiEndPoint";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
    
    }),
   
    CredentialsProvider({
      name : "Credentials",
      async authorize(credentials, req){
        console.log("credentials",credentials)
          var result ={
           id:1,
           name:credentials.name,
          email: credentials.email
          }
          return result
      }
  }),
    // ...add more providers here
  ],
  secret: "XH6bp/TkLvnUkQiPDEZNyHc0CV+VV5RL/n+HdVHoHN0=",
  session: {
    strategy: 'jwt',
},

callbacks: {
  async signIn(user, account, profile) {
    console.log("user:",user.user)
            const obj ={
            username:user.user.name,
            email:user.user.email,
            img:user.user.image
          }
          console.log("obj",obj)
          try{
            await axios.post(`${ApiEndPoint}google_register_login/`,obj).then((res)=>{
              console.log(res.status,res.data,"response")
                      }).catch((e)=>{
              console.log("error",e)
                      })
          }catch(error){
            console.log("error",error)

          }
          
    return true;
  },
},
}
export default NextAuth(authOptions)
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials';
// import axios from "axios";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
      name : "Credentials",
      async authorize(credentials, req){
          var result ={
           id:1,
           name:credentials.name,
          email: credentials.email
          }
          return result
      }
  })
    // ...add more providers here
  ],
  secret: "XH6bp/TkLvnUkQiPDEZNyHc0CV+VV5RL/n+HdVHoHN0=",
  session: {
    strategy: 'jwt',
}
}
export default NextAuth(authOptions)
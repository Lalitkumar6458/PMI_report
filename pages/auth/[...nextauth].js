import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials';
// import axios from "axios";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: '63234311325-7cgii5h8vuv0c7vdn1mmt34q0suffarj.apps.googleusercontent.com',
        clientSecret: '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'
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
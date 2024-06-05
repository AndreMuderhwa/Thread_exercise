import GithubProvider from 'next-auth/providers/github';
import { env } from './env';

export const authOptions ={
    providers:[
        GithubProvider({
            clientId: env.GITHUB_ID,
            clientSecret: env.GITHUB_SECRET,
        }),
    ],
};
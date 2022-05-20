import { OAuth2Client } from 'google-auth-library';

const { WEB_CLIENT_ID } = process.env;
if (!WEB_CLIENT_ID) {
    throw new Error('WEB_CLIENT_ID ENVIRONMENT VARIABLE IS NOT SET');
}

const client = new OAuth2Client(WEB_CLIENT_ID);

export async function verifyGoogleToken(token: string) {
    return await client.verifyIdToken({ idToken: token, audience: WEB_CLIENT_ID });
}

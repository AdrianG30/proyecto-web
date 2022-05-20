import { NextApiRequest, NextApiResponse } from 'next';
import getConnection from '../../../../../database/mongo';
import { verifyGoogleToken } from '../../../../../utils/TokenUtils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await getConnection();

    if (req.method === 'POST') {
        const ticket = await verifyGoogleToken(req.body.token);

        res.json({ data: 'ok' });
    } else res.status(405).end(`Method ${req.method} not allowed.`);
}

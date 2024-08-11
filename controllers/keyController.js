import crypto from 'crypto';


async function generateKeyPair(req, res, next) {
    try {
        const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem'
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem'
            }
        });

        res.json({
            publicKey,
            privateKey
        });
    } catch (error) {
        next(error);
    }
}

export default {
    generateKeyPair
}

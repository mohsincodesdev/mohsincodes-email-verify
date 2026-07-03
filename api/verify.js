// api/verify.js
const dns = require('dns').promises;

export default async function handler(req, res) {
    const { email } = req.body;
    const domain = email.split('@')[1];
    
    try {
        const mx = await dns.resolveMx(domain);
        res.status(200).json({ valid: mx && mx.length > 0 });
    } catch (e) {
        res.status(200).json({ valid: false });
    }
}

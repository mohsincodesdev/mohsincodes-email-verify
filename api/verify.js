// api/verify.js
export default async function handler(req, res) {
    // Vercel automatically JSON body ko parse kar deta hai
    const { email } = req.body;
    
    // Hardcoded key ki jagah environment variable use karein
    const apiKey = process.env.ABSTRACT_API_KEY; 

    // Agar key na mile to error handling
    if (!apiKey) {
        return res.status(500).json({ valid: false, message: "Server API Key configuration missing." });
    }

    try {
        const response = await fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`);
        const data = await response.json();

        // deliverability: 'DELIVERABLE' ka matlab hai email 100% sahi hai
        if (data.deliverability === 'DELIVERABLE') {
            res.status(200).json({ valid: true, message: "Email is valid and reachable." });
        } else {
            res.status(200).json({ valid: false, message: `Invalid: ${data.deliverability}` });
        }
    } catch (e) {
        res.status(500).json({ valid: false, message: "Verification service error." });
    }
}// api/verify.js
export default async function handler(req, res) {
    // Vercel automatically JSON body ko parse kar deta hai
    const { email } = req.body;
    
    // Hardcoded key ki jagah environment variable use karein
    const apiKey = process.env.ABSTRACT_API_KEY; 

    // Agar key na mile to error handling
    if (!apiKey) {
        return res.status(500).json({ valid: false, message: "Server API Key configuration missing." });
    }

    try {
        const response = await fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`);
        const data = await response.json();

        // deliverability: 'DELIVERABLE' ka matlab hai email 100% sahi hai
        if (data.deliverability === 'DELIVERABLE') {
            res.status(200).json({ valid: true, message: "Email is valid and reachable." });
        } else {
            res.status(200).json({ valid: false, message: `Invalid: ${data.deliverability}` });
        }
    } catch (e) {
        res.status(500).json({ valid: false, message: "Verification service error." });
    }
}// api/verify.js
export default async function handler(req, res) {
    // Vercel automatically JSON body ko parse kar deta hai
    const { email } = req.body;
    
    // Hardcoded key ki jagah environment variable use karein
    const apiKey = process.env.ABSTRACT_API_KEY; 

    // Agar key na mile to error handling
    if (!apiKey) {
        return res.status(500).json({ valid: false, message: "Server API Key configuration missing." });
    }

    try {
        const response = await fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`);
        const data = await response.json();

        // deliverability: 'DELIVERABLE' ka matlab hai email 100% sahi hai
        if (data.deliverability === 'DELIVERABLE') {
            res.status(200).json({ valid: true, message: "Email is valid and reachable." });
        } else {
            res.status(200).json({ valid: false, message: `Invalid: ${data.deliverability}` });
        }
    } catch (e) {
        res.status(500).json({ valid: false, message: "Verification service error." });
    }
}

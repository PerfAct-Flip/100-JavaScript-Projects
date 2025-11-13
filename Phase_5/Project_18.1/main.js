
const express = require('express');

const port = 3000;
const cors = require('cors');
const app = express();

const EXTERNAL_API_BASE = "https://v6.exchangerate-api.com/v6/";
const API_KEY = "de7d73d81cc335e4c626167b";

app.use(cors());

app.get('/api/convert', async (req, res) => {
    const { from, to, amount } = req.query;

    if (!from || !to || !amount) {
        return res.status(400).json({ error: "Missing required parameters (from, to, amount)" });
    }

    const externalUrl = `${EXTERNAL_API_BASE}${API_KEY}/pair/${from}/${to}/${amount}`;

    console.log(`[PROXY] Fetching: ${externalUrl}`);

    try {
        const apiResponse = await fetch(externalUrl);
        if (!apiResponse.ok) {
            const errorText = await apiResponse.text();
            console.error(`[API ERROR] Status: ${apiResponse.status}, Body: ${errorText.substring(0, 100)}...`);

            return res.status(apiResponse.status).json({
                result: 'error',
                'error-type': 'external_api_failure',
                message: errorText.substring(0, 50) + '...'
            });
        }
        const data = await apiResponse.json();
        res.json(data);

    } catch (error) {
        console.error("[PROXY FETCH ERROR]", error.message);
        res.status(500).json({
            result: 'error',
            'error-type': 'proxy_internal_failure',
            message: 'Internal server could not complete request.'
        });
    }
});

app.listen(port, () => {
    console.log(`CORS Proxy Server listening at http://localhost:${port}`);
});
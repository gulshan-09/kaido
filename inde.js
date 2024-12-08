const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const genre = require('./routes/genre.js'); // Use require for CommonJS modules
const info = require('./routes/info.js');
const app = require('./routes/app.js');
const search = require('./routes/search.js');
const random = require('./routes/random.js');
const mix = require('./routes/mix.js');
const episode = require('./routes/episode.js');
const shedule = require('./routes/shedule.js');
const server = require('./routes/server.js');
const src = require('./routes/src1.js');
const kaido = require('./routes/kaido.js');
require("dotenv").config();

const inde = express();
const router = express.Router();
const port = 3001;


try {
    router.use('/api', genre);
    router.use('/api', info);
    router.use('/api', app);
    router.use('/api', search);
    router.use('/api', random);
    router.use('/api', mix);
    router.use('/api', episode);
    router.use('/api', shedule);
    router.use('/api', server);
    router.use('/api', src);
    router.use('/api', kaido);

    inde.get('/', (req, res) => {
        res.send("Api Is ON SERVICE !");
    });

    inde.use("/", router);

} catch (error) {
    // res.send('Back To Home');
    console.log(error);
}

inde.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

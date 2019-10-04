const express = require('express');
const port = 3000;

const request = require('request');
const cheerio = require('cheerio');

const app = express();

app.use((req, res, next) => {
  res.header({
    'Access-Control-Allow-Origin': '*',
    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en,es-ES;q=0.9,es;q=0.8',
    'cache-control': 'max-age=0',
    cookie: '_ga=GA1.2.2074455161.1560790579; timezone=-5; _holberton_intranet_session=eDBxREY0Y1UzK1VIYno5c2hSVlpzQnc4TStoZXJNZTBUTE1STTFnS2FsRCtSK2xycDhSYmxiRlE1M1N3ZHJnSE9pV242azlBUklYcFdRS1YxM1Y1Q2lDMU1rK2xaakh5TXdwUGN3cURmeGNuZmxxTVJieUJvaVl4T01vWUxNQmtFTjZoQzlyby83eDkvaUpmMncvbzVwRDhYMFRLZXRnN09FNllSRlhlOW0wamdyam8vMXErQU5JNW9tNTZnZGhabFFWSzh6ZnVDZ0F2cmlpcGp1bEtiU1pqMXU2MGxORXVTamZjOVg0bXRjSFVROTNtRlhna1pLRnQxNFhhZzZZTC0tWjBEdW8zWG5iZnNXSWhQYkZvTjVDZz09--0f51f6072401f0ee0ef18d686b8cf7e16d537cdd',
    dnt: 1,
    'if-none-match': 'W/"c4934e1d50846b4bcea96658de28c896"',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'none',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': 1,
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36 OPR/63.0.3368.94})'
  });
  next();
});

app.get('/', (req, res) => res.send(
  request('https://intranet.hbtn.io/users/me.json?auth_token=b04e4bcb83572b5313886646e055da8d092b9a8af439b2ff6fbbb88acdc102d5', (error, res, html) => {
    if (!error && res.statusCode === 200) {
      console.log(html);
      console.log(res);
    }
  })
));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
;

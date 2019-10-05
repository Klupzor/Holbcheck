const express = require('express');
const port = 5500;

const { http, https } = require('follow-redirects')

const request = require('request');
const cheerio = require('cheerio');
const bodyParser = require('body-parser')

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const options = {
  headers: {
    'Host': 'intranet.hbtn.io',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:69.0) Gecko/20100101 Firefox/69.0',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    'Referer': 'https://intranet.hbtn.io/',
    'DNT': 1,
    'Connection': 'keep-alive',
    'Cookie':
      '_holberton_intranet_session=Wjd3MW5Jb1F4bEtWSFZuRWpDdWJTQVVoaWdUQklVc0dqZ0E5S2RQSXpLM2VIcDhrZGdjNGJjclZVcnhtK2Zqdkg5S2dkSW9JV3c1TzZ1cUlBMHJicmZlbTcrV0RRekY4eEdURVdBdnZDdk91bDluMnJWL2ZWUW84THd0dGdwdHBTNEV4STBFbVlwZ1lpK1UreVVkVWsrRnRKRUFqckV6QUNuSkJqRmVuQ0t1aEc0SnRxUnhJUVR3dnRRNDROYW9NZWZjbkZkdjVoa0FvSWJTaFpYWDdVZz09LS1pNzFhOGpvS0R0U0F4R1RXN3AvT0ZnPT0%3D--4acf6e8e72d47b6da9c97199c86464c58b09d6ef',
    'Upgrade-Insecure-Requests': 1
  }
}

app.get('/me', (req, res) => {

  let url = 'https://intranet.hbtn.io/users/me.json';
  options['url'] = url;

  const dicty = {};
  request(options, function (error, response, body) {
    dicty['name'] = JSON.parse(body).full_name
    dicty['git-hub'] = JSON.parse(body).github_username
    res.send(dicty)
  });
}
);

app.get('/project', (req, res) => {
  const dicty = {};
  let url = 'https://intranet.hbtn.io/projects/231.json';
  options['url'] = url;
  request(options, function (error, response, body) {
    dicty['name'] = JSON.parse(body).name
    dicty['tasks'] = JSON.parse(body).tasks
    res.send(dicty)
  });
}
);

app.get('/check', (req, res) => {
  const dicty = {};
  let url = 'https://intranet.hbtn.io/tasks/1007/start_correction.json?auth_token=b04e4bcb83572b5313886646e055da8d092b9a8af439b2ff6fbbb88acdc102d5';
  request({ url, method: 'POST' }, function (error, response, body) {
    res.send(JSON.parse(body))
  });
}
);

app.get('/result', (req, res) => {
  const dicty = {};
  let url = 'https://intranet.hbtn.io/correction_requests/1419754.json';
  options['url'] = url;
  request({ options }, function (error, response, body) {
    dicty['status'] = JSON.parse(body).status
    dicty['results'] = JSON.parse(body).result_display
    res.send(dicty)
  });
}
);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
  ;

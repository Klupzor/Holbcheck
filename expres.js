const express = require('express');
const port = 5500;

const { http, https } = require('follow-redirects')

const request = require('request');
const cheerio = require('cheerio');
const bodyParser = require('body-parser')

const app = express();


let jsondata = 'dgfjhfd';

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


app.post('/login', (req, res) => {

  const user_id = req.query.user
  const pass = req.query.pass
  let url = `http://localhost:3300/login/${user_id}/${pass}`;
  console.log(url)

  const dicty = {};
  request({ url, method: 'POST' }, function (error, response, body) {
    jsondata = body
  
  setTimeout(function() {
    res.send(
      {}
    )
  }, 3000)
  console.log(typeof body)
  jsondata = JSON.parse(body).cokies
  console.log(jsondata)
});
  
}
);

app.get('/me', (req, res) => {
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
        jsondata,
      'Upgrade-Insecure-Requests': 1
    }
  }

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
        jsondata,
      'Upgrade-Insecure-Requests': 1
    }
  }
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
        jsondata,
      'Upgrade-Insecure-Requests': 1
    }
  }
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

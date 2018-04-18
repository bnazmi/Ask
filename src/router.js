const fs = require('fs');
const path = require('path');
const getData = require('./queries/getData');
const router = (req, response) => {
  console.log(req.url);
  const endpoint = req.url;
  if (endpoint === "/") {
    fs.readFile(path.join(__dirname, '..', 'public', 'html', 'home_page.html'), (err, file) => {
      if (err) {
        throw new Error(err);
      } else {
        response.writeHead(200, {
          'Content-Type': 'text/html'
        });
        response.end(file);
      }
    });
  }
  // else if (endpoint === "/html/dom_user_page.html") {
  //   fs.readFile(path.join(__dirname, '..', 'public', 'html', 'user_page.html'), (err, file) => {
  //     if (err) {
  //       throw new Error(err);
  //     } else {
  //       response.writeHead(200, {
  //         'Content-Type': 'text/html'
  //       });
  //       response.end(file);
  //     }
  //   });
  // }
  else if (endpoint === "/css/style.css") {
    fs.readFile(path.join(__dirname, '..', 'public', 'css', 'style.css'), (err, file) => {
      if (err) {
        throw new Error(err);
      } else {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });
        response.end(file);
      }
    });

  } else if (endpoint === "/js/dom_home_page.js") {
    fs.readFile(path.join(__dirname, '..', 'public', 'js', 'dom_home_page.js'), (err, file) => {
      if (err) {
        throw new Error(err);
      } else {
        response.writeHead(200, {
          'Content-Type': 'text/javascript'
        });
        response.end(file);
      }
    });
  }
  // else if (endpoint === "/js/dom_user_page.js") {
  //   fs.readFile(path.join(__dirname, '..', 'public', 'js', 'dom_user_page.js'), (err, file) => {
  //     if (err) {
  //       throw new Error(err);
  //     } else {
  //       response.writeHead(200, {
  //         'Content-Type': 'text/javascript'
  //       });
  //       response.end(file);
  //     }
  //   });
  // }
   else if (endpoint === "/select") {
    getData((err, res) => {
      if (err) {
        response.writeHead(500, 'Content-Type:text/html');
        response.end('<h1>Sorry, there was a problem getting the users</h1>');
        console.log(error);
      } else {
        let output = JSON.stringify(res);
        response.writeHead(200, {
          'content-type': 'application/json'
        });
        response.end(output);
      }
    });

  }
}

module.exports = router;

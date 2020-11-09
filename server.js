const http = require("http");
const fs = require("fs");
const configs = require("./configs.json");

// Compile Drash files
require("./scripts/drash_compile_vue_routes.js");

// Compile Rhum files
require("./scripts/rhum_compile_vue_routes.js");

// Compile dmm files
require("./scripts/dmm_compile_vue_routes.js")

// Compile Sockets files
require("./scripts/sockets_compile_vue_routes.js")

// Create the server
http.createServer((request, response) => {
  request.on('error', (error) => handleRequestError(error, response) );
  response.on('error', (err) => handleResponseError(error, response) );
  handleRequest(request, response);
}).listen(8000);

console.log(`Server running at http://localhost:8000`);

// Get the content type of a file
function getContentTypeHeader(path) {
  if (path.includes(".css")) { return "text/css"; }
  if (path.includes(".jpeg")) { return "image/jpeg"; }
  if (path.includes(".jpg")) { return "image/jpeg"; }
  if (path.includes(".js")) { return "application/js"; }
  if (path.includes(".json")) { return "application/json"; }
  if (path.includes(".map")) { return "application/octet-stream"; }
  if (path.includes(".png")) { return "image/png"; }
  if (path.includes(".svg")) { return "image/svg+xml"; }
  if (path.includes(".woff")) { return "font/woff"; }
  if (path.includes(".woff2")) { return "font/woff2"; }
}

// Handle HTTP request errors
function handleRequestError(error, response) {
  console.error(error);
  response.statusCode = 400;
  response.end();
}

// Handle HTTP response errors
function handleResponseError(error, response) {
  console.error(error);
}

// Handle all requests. This just services the index.html file that holds the
// Vue application.
function handleRequest(request, response) {
  try {
    let url = request.url;
    url = url.split("?")[0];
    response.writeHeader(200, {"Content-Type": "text/html"});
    handler(url, response);
    response.end();
  } catch (error) {
    oops(response, error);
  }

}

// you don't want to end up here ;)
function oops(response, error) {
  response.writeHeader(200, {"Content-Type": "text/html"});
  let html = fs.readFileSync("./500.html", "utf8");
  html = html.replace("{{ error }}", error.message + error.stack);
  response.write(html);
  response.end();
}

// Is the URL in question targeting a static asset?
function requestUrlIsStaticAsset(url) {
  if (
    url != "/favicon.ico"
    && !url.includes("css")
    && !url.includes("jpeg")
    && !url.includes("jpg")
    && !url.includes("js")
    && !url.includes("json")
    && !url.includes("png")
    && !url.includes("svg")
    && !url.includes("woff")
    && !url.includes("woff2")
  ) {
    return true;
  }

  return false;
}

// Handle an HTTP request
function handler(url, response) {
  if (url == "/") {
    let html = fs.readFileSync("index.template.html", "utf-8");
    html = html.replace(/\{\{ base_url \}\}/g, configs.base_urls.development);
    response.write(html);
    return;
  }

  console.log(url);

  if (url.charAt(url.length - 1) == "/") {
    url = url.substring(-1, url.length -1);
  }
  try {
    let html = fs.readFileSync("." + url + "/index.html", "utf8");
    html = html.replace(/\{\{ environment \}\}/g, "development");
    html = html.replace(/\{\{ version \}\}/g, new Date().getTime());
    return response.write(html);
  } catch (error) {
  }

  try {
    const file = fs.readFileSync(`${configs.root_directory}${url}`);
    response.writeHead(200, {"Content-Type": getContentTypeHeader(url)});
    return response.write(file);
  } catch (error) {
  }

  response.writeHeader(404);
  response.write("Ugh... page not found.");
}

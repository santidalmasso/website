const fs = require("fs");
const configs = require("../configs.json");

class BaseHandler {
  next_handler = null;
  fs = fs;
  configs = configs;

  getRequestUri(request) {
    let url = request.url;
    url = url.split("?")[0];
    return url;
  }

  setNextHandler(handler) {
    this.next_handler = handler;
  }

  runNextHandler(request, response) {
    if (this.next_handler) {
      return this.next_handler.run(request, response);
    }

    response.writeHead(404);
    response.write("Ummm... page not found.");
  }

  response404(response, errorMessage) {
    response.writeHead(404);
    return response.write(
      fs.readFileSync("400.html", "utf8"),
    );
  }
}

module.exports = BaseHandler;

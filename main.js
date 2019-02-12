// Grabs required module
const http = require('http');

// Creates a server instance using https module
const server = http.createServer();

// Listens for requests (a readable stream) sent to server
server.on("request", (request, response) => {
	// Content of the message
	let body = [];

	// Portions of request message are called chunks
	// Listens for when chunks are received, then stores them in the body
	request.on("data", chunk => {
		body.push(chunk);
	});

	// Listens for the end of a request
	request.on("end", () => {
		body = body.concat.toString();
	});

	// The response parameter will get sent back to the client
	// We can mess with its https status code, its headers, content, etc

	/* Example for setting status to 200 and adding a couple headers
	response.writeHead(200, {
		"Content-Type": "application/json",
		"X-Powered-By": "Node"
	});*/

	// Writes the body of the response
	response.write("Hello World!");
	response.end();
});
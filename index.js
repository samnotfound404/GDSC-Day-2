const http = require('http');

// Define a simple middleware function
const logger = (req) => {
  console.log(`${req.method} request for '${req.url}' at ${new Date().toLocaleTimeString()}`);
  return;
};

// Create the server
const server = http.createServer((req, res) => {
  // Use middleware function
  logger(req);

  // Check if the request is a GET request to the root path
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, this is a simple GET request!');
  } else {
    // Handle other routes or methods
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

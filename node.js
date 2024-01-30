const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

// Create an HTTP server
const server = http.createServer((req, res) => {
    // On each request, use the proxy to forward the request to a specific URL
    proxy.web(req, res, { target: 'http://the-target-url.com' });
});

server.listen(3000, () => {
    console.log('Proxy server running on port 3000');
});

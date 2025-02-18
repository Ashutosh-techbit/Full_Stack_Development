# Middleware
In Express.js, middleware refers to functions that execute during the lifecycle of a request to the server. Middleware functions have access to the request (req), response (res), and the next middleware function in the request-response cycle (next). They are used to perform tasks like logging, authentication, parsing, and error handling.

Types of Middleware in Express:
### 1. Application-level middleware: 
These are bound to an instance of the Express application object using app.use() or app.METHOD() (where METHOD is an HTTP verb like get, post, etc.).


```javascript
const express = require('express');
const app = express();

// Application-level middleware example
app.use((req, res, next) => {
  console.log('Request Type:', req.method);
  next(); // Pass control to the next middleware function
});
```

### 2. Router-level middleware:
 Router-level middleware works similarly to application-level middleware, but it is bound to an instance of express.Router().

 ```javascript
 const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('Router Middleware for:', req.method, req.url);
  next();
});

router.get('/user', (req, res) => {
  res.send('User Route');
});

app.use('/api', router);
```

### 3.  Error-handling middleware: 
This is defined with four arguments: (err, req, res, next). It's used to catch and handle errors in the application.
```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
```

### 4.Built-in middleware:
Express provides built-in middleware functions like:

express.static() to serve static files.
express.json() to parse incoming JSON request bodies.
```javascript
app.use(express.json()); // Parse JSON bodies
app.use(express.static('public')); // Serve static files from "public" directory
```

### 5.Third-party middleware: 
These are middleware provided by third-party libraries such as morgan, body-parser, cors, etc.

```javascript
const morgan = require('morgan');
app.use(morgan('dev')); // Log requests using morgan
```


## How Middleware Works:

Middleware functions can:

1. Execute code.   
2. Modify the request (req) and response (res) objects.  
3. End the request-response cycle by sending a response.  
4. Call the next() function to pass control to the next middleware.  

```javascript
app.use((req, res, next) => {
  console.log('Middleware 1');
  next(); // Move to the next middleware
});

app.use((req, res, next) => {
  console.log('Middleware 2');
  next(); // Move to the next middleware or route handler
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

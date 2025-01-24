# Express.js Basics

A quick guide to getting started with Express.js, a lightweight and flexible Node.js framework for building web applications and APIs.

---

## Installation

1. Install **Node.js** from [nodejs.org](https://nodejs.org).
2. Initialize your project:    npm init -y
3. Install Express:
      npm install express

  

---

## Setting Up a Basic Server

Here’s an example of a basic Express server:


```javascript
const express = require('express'); // Import Express
const app = express();             // Initialize the app
const PORT = 3000;                 // Define the port
```
```javascript
// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
```

```javascript
// Start the server
app.listen(PORT, () => {
  console.log(\`Server is running on http://localhost:\${PORT}\`);
});
```

```javascript
Run the server with:
node app.js
```

---

## Features of Express.js

### 1. **Routing**
Define routes to handle specific URLs:

```javascript
app.get('/about', (req, res) => {
  res.send('This is the About page');
});
```

### 2. **Middleware**
Middleware functions process requests and responses:

```javascript
// Example: Built-in middleware for JSON parsing
app.use(express.json());

// Example: Custom middleware
app.use((req, res, next) => {
  console.log(\`\${req.method} request for \${req.url}\`);
  next(); // Pass control to the next middleware
});
```

### 3. **Serving Static Files**
Serve static files like CSS, images, or JavaScript:
```javascript
app.use(express.static('public'));
```

### 4. **Handling Different HTTP Methods**
Handle HTTP methods like GET, POST, PUT, DELETE, etc.:

```javascript
app.post('/submit', (req, res) => {
  res.send('Form submitted!');
});
```

---

## Dynamic Routing

### Route Parameters
Define dynamic routes with parameters:
```javascript
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(\`User ID is \${userId}\`);
});
```

### Query Parameters
Access query parameters using \`req.query\`:
```javascript
app.get('/search', (req, res) => {
  const term = req.query.term;
  res.send(\`Search term is \${term}\`);
});
```

---

## Error Handling

Express has a built-in mechanism for error handling:
```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
```

---

## Example Project Structure

A typical Express project might look like this:

```
project/
│
├── public/          # Static files (CSS, images, etc.)
├── routes/          # Route handlers
├── views/           # Templates (if using a template engine)
├── app.js           # Main application file
└── package.json     # Dependencies and scripts
```

---

## Run the Server

1. Save your code to a file, e.g., `app.js`.
2. Start the server:
   ```
   node app.js
   ```
3. Visit your application at: `http://localhost:3000`.

---


---

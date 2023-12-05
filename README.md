# LoginForm
Login Form uisng Node js as a backend practice

Textual Representation of the Flow
User accesses index.html |
Browser requests index.html |
Server serves index.html |
User interacts with HTML forms (login and submission) |
Forms have actions pointing to API routes in app_apilayer.js |
Browser makes POST requests to /apilayer/login and /apilayer/submit |
Server routes requests through middlewarelayer.js for authentication |
Middlewarelayer.js checks authentication |
If authenticated, control passes to app_apilayer.js |
app_apilayer.js routes requests to businesslogiclayer.js |
businesslogiclayer.js processes login and form submission |
businesslogiclayer.js interacts with externalServices.js for external operations |
businesslogiclayer.js interacts with dataStorageLayer.js for data storage |
Server sends response back to the browser |
Browser displays response to the user
##Detail of the flow of the Application

Let's walk through the flow of files in a Node.js/Express application. We'll assume that all files are organized within the layers folder.

Server Configuration (app.js): Location: layers/app.js
Responsibility:

Configures and sets up the Express application. Defines middleware. Configures routes. Key Components:

express: The Express.js framework. body-parser: Middleware for parsing incoming request bodies. apiRoutes: Imported API routes. Flow:

Sets up the Express app. Configures middleware (body-parser for parsing URL-encoded forms). Configures static file serving from the layers directory. Configures API routes. 2. API Layer (apilayer.js): Location: layers/apilayer.js

Responsibility:

Defines API routes for login and form submission. Key Components:

express.Router(): Creates an instance of an Express router. authenticate: Middleware for authentication. businessLogic: Module for handling business logic. Flow:

Defines a router using express.Router(). Configures routes for /login and /submit. Applies the authenticate middleware to both routes. Defines route handlers to process login and form submission using businessLogic. 3. Authentication Middleware (middlewarelayer.js): Location: layers/middlewarelayer.js

Responsibility:

Provides a middleware function for authentication. Flow:

Implements middleware logic to check for authentication. Calls next() to pass control to the next middleware or route handler. 4. Business Logic (businesslogiclayer.js): Location: layers/businesslogiclayer.js

Responsibility:

Implements business logic for processing login and form submission. Interacts with external services and data storage. Key Components:

externalServices: Module for external service operations. dataStorage: Module for data storage operations. Flow:

Implements functions for processing login and form submission. Calls functions from externalServices and dataStorage to interact with external services and storage. 5. HTML and CSS Files: Location: layers/index.html and layers/index.css

Responsibility:

Defines the structure and style of the HTML page. Flow:

HTML file contains two forms, one for login and another for form submission. Forms have action attributes pointing to the corresponding API routes (/apilayer/login and /apilayer/submit). CSS file provides styling for the HTML elements. 6. Flow Summary: When a user accesses the application, the server starts listening on the specified port (3000). Upon accessing the HTML page, the browser makes requests for the HTML and CSS files. The server serves these static files from the layers directory. When a user submits a form, the browser makes a POST request to the corresponding API route. The server processes the request through middleware and routes, eventually reaching the business logic for handling login or form submission. Business logic interacts with external services and data storage as needed. This flow illustrates the interactions between different components in Node.js/Express application.

###How to run this project:######
1-clone the project
2-run the command--> npm i
3-now run this command-->npx nodemon layers/app_apilayer.js

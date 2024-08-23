Interactive Mapping Application
=============================

Project Overview
---------------

This is an interactive mapping application that allows users to draw polygon boundaries and submit flight requests based on those boundaries. The application consists of a frontend client-side interface and a backend API server that processes flight requests and interacts with a database.

How to Run
-----------

### Prerequisites

* Node.js installed on your system
* SQLite database set up (a db.sqlite file is provided in the project root)

### Running the Application

1. Install dependencies: `npm install`
2. Start the server: `node app.js`
3. Open a web browser and navigate to `http://localhost:3000` to access the interactive mapping application

### Development

* Make changes to the code files as needed
* Restart the server by running `node app.js` again

Project Structure
----------------

* `app.js`: Main entry point for the application, sets up the Express server and defines routes
* `controllers/`: Folder containing controller files for API and map-related requests
* `models/`: Folder containing model files for flight requests and map data
* `public/`: Folder containing client-side code and static assets
* `routes/`: Folder containing API and map-related route definitions
* `services/`: Folder containing service files for processing flight requests and retrieving/updating map data
* `db.sqlite`: SQLite database file for storing map data and flight requests

Dependencies
------------

* Express.js for setting up the server and defining routes
* SQLite for storing and retrieving data
* Other dependencies listed in `package.json`
Bond Movies API
This project implements a simple REST API for managing Bond movies. It is built with Node.js and uses Express.js as the web server.

Installation
Install Node.js if you haven't already.
Run npm install to install the project dependencies.
Run npm run dev to start the server.
Endpoints
The API provides the following endpoints for managing Bond movies:

GET /movies
Description: Retrieve a list of all Bond movies.
Example: GET http://localhost:3009/movies
Response: An array of Bond movies in JSON format.

GET /movies/:id
Description: Retrieve a specific Bond movie based on its ID.
Example: GET http://localhost:3009/movies/1
Response: The Bond movie with the specified ID in JSON format.
POST /movies
Description: Add a new Bond movie.
Example:
Request:
bash
Copy code
POST http://localhost:3009/movies
Content-Type: application/json

{
        "Title": "The movies title",
        "Year": "2001",
        "Released": "2 may 2001",
        "Genre": "the genre"
}
Response: The newly created Bond movie in JSON format.

PUT /movies/:id
Description: Update an existing Bond movie based on its ID.
Example:
Request:
bash
Copy code
PUT http://localhost:3009/movies/1
Content-Type: application/json

Response: The updated Bond movie in JSON format.
DELETE /movies/:id
Description: Delete a Bond movie based on its ID.
Example: DELETE http://localhost:3009/movies/1
Response: A success message indicating that the Bond movie was deleted.
Testing with Postman
You can use Postman to test the API endpoints. Here's how you can send requests and expect responses:

Open Postman.
Set the request URL to the desired endpoint (e.g., http://localhost:3009/movies).
Choose the appropriate HTTP method (GET, POST, PUT, DELETE).
Add any required headers or parameters.
If necessary, provide a request body in JSON format.
Click the Send button to send the request.
Inspect the response received from the API.
Adding an API Key
To secure the API, an API key is required for authentication. Follow these steps to add an API key:

Include the apiKey parameter in your requests as a query parameter.
Example: GET http://localhost:3009/movies?apiKey=YOUR_API_KEY
Replace YOUR_API_KEY with the actual API key provided by the API provider.
Note: If an incorrect or missing API key is provided, the API will respond with appropriate error messages.

That's it! You can now use the Bond Movies API to manage Bond movies through the provided endpoints. Enjoy!

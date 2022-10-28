# Build a REST API with Node.js, Express & PostgreSQL

Your task is to build a REST API using Node.js, Express & PostgreSQL.

It will be a chance to embed everything we've learned and practice breaking problems into solvable chunks.

**Take time to plan before you start coding.** This is where all that work we've done on planning and breaking things down will help.

## Requirements

- Must use a database (hosted on ElephantSQL or Railway) for persistent storage
- Must use a REST API with routes to manage requests and serve responses
- Must use the models pattern to allow easy interaction with the database
- Must use environment variables to store database credentials - do not hardcode these credentials!
- Bonus: Once your API is up and running, you could build a front end which allows the user to Create, Read, Update and Delete a resource.

The REST is up to you!

The following packages have already been added to your package.json file as dependencies or dev dependencies:

- [express](https://expressjs.com/)
- [pg](https://node-postgres.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [morgan](https://www.npmjs.com/package/morgan)
- [nodemon](https://www.npmjs.com/package/nodemon)

## Helpful resources

- Remember that we build software iteratively - that means we get the software working first to MVP level (minimum viable product). Then you can iterate and add additional features each time rather than trying to build it all at once. You can see more context around the concept of MVP in software [here](https://www.interaction-design.org/literature/article/minimum-viable-product-mvp-and-design-balancing-risk-to-gain-reward).
- If you need a review on using fetch from your front end, check out this short [video here](https://drive.google.com/file/d/1HWDkpK11y9wgzPURBx5-QSkQHb4Y-XsO/view?usp=sharing).
- If you want to look more closely at using the second argument of fetch (where you specify the HTTP method, headers, body, etc.), watch this even shorter [video here](https://drive.google.com/file/d/1tdgoLo-7GxS9vJtPkYfDlShAuftzZctL/view?usp=sharing).
- When sending a request with a body, you'll need a `Content-Type` header to tell the Express server that you're sending JSON. This way, the `express.json()` middleware can work correctly. Read more about this header in this [article here](https://www.freecodecamp.org/news/what-is-the-correct-content-type-for-json-request-header-mime-type-explained/), including how to set the correct `Content-Type` header for sending JSON.

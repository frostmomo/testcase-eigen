const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Borrow Book API Documentation',
        version: '1.0.0',
        description: 'Test Case API documentation using Express.js',
      },
      components: {
        schemas: {
          Book: {
            type: 'object',
            properties: {
              code: { type: 'string' },
              title: { type: 'string' },
              author: { type: 'string' },
              stock: { type: 'integer' },
              borrowed: { type: 'boolean' },
              borrowedBy: { type: 'string' },
              borrowedAt: { type: 'string', format: 'date-time' },
            },
          },
          Member: {
            type: 'object',
            properties: {
              code: { type: 'string' },
              name: { type: 'string' },
              borrowedBooks: { type: 'integer' },
              penalty: { type: 'boolean' },
              penaltyEndDate: { type: 'string', format: 'date' },
            },
          },
        },
      },
    },
  apis: [
    './src/interface/http/routes/routes.js',
    './src/interface/http/routes/member-routes.js',
    './src/interface/http/routes/book-routes.js',
  ],
};

const specs = swaggerJsdoc(options);

module.exports = specs;

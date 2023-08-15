const express = require('express');
const routes = require('./interface/http/routes/routes');
const sequelize = require('./domain/models/index').sequelize;
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');

const app = express();

// Middleware, configurations, etc.
app.use(express.json());

// Swagger 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Use routes
app.use('/api', routes);

// Start the server
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Sequelize sync error:', error);
});
const Hapi = require('@hapi/hapi');
const connectDB = require('./config/db');
const textRoutes = require('./routes/textRoutes');
const dotenv = require('dotenv');
dotenv.config();

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: 'localhost',
  });

  await server.route(textRoutes);

  await connectDB();

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();

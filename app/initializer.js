import dotenv from 'dotenv';

function initializer() {
  dotenv.config();
  process.env.PORT = process.env.PORT || 8000;
}

export default initializer;

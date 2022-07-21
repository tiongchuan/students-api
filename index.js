import { sequelize, testConnection, School, Subject, Tutor, Student, Enrollment } from "./models/index.js";
import app from './routes/index.js';

// Test connection with PSQL
testConnection();


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
})


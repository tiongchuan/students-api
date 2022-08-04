// Import sequelize
import Sequelize from "sequelize";

// Import model(s)
import schoolModel from './school.model.js'
import subjectModel from './subject.model.js' 
import tutorModel from './tutor.model.js'
import studentModel from './student.model.js'
import enrollmentModel from './enrollment.model.js'
import userModel from "./user.model.js"
import viewEnrollmentModel from "./viewEnrollment.model.js"

// Heroku DB Connection Configuration
// for student-api (new)
const sequelize = new Sequelize("d7v5sh72llqr1", "slzxsdysufvkpi", "a0967c03c620f77782d10e36d825e746e7c4d91edc455eeab111d016e7176948", {
  host: "ec2-50-19-255-190.compute-1.amazonaws.com",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
});

// for student-database (old)
// const sequelize = new Sequelize("d3h7qubveh7v55", "oglzwpqmpzdpif", "b3653cf05bb38c386c12ebc0f6f5bb6f666ded86e691e21fd8f5085d28d1968d", {
//   host: "ec2-3-217-14-181.compute-1.amazonaws.com",
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       rejectUnauthorized: false
//     }
//   }
// });


// Test connection function
async function testConnection() {
    try {

      await sequelize.authenticate();
      console.log("Connection has been established successfully.");

      // // Synchronizing all models at once
      // await sequelize.sync();
      // console.log("All models were synchronized successfully.");

      // // Drop all tables
      // await sequelize.drop();
      // console.log("All tables dropped!");

      return true;

    } catch (error) {
      console.error("Unable to connect to the database:", error);
      return false;
    }
  }

const School = schoolModel(sequelize);
const Subject = subjectModel(sequelize);
const Tutor = tutorModel(sequelize);
const Student = studentModel(sequelize);
const Enrollment = enrollmentModel(sequelize);
const User = userModel(sequelize);
const viewEnrollment = viewEnrollmentModel(sequelize);


Student.belongsTo(School,{foreignKey: "schoolId"});
Enrollment.belongsTo(Student,{foreignKey: "studentId"});
Enrollment.belongsTo(Tutor,{foreignKey: "tutorId"});
Enrollment.belongsTo(Subject,{foreignKey: "subjectId"});
Student.hasMany(Enrollment, {foreignKey: "studentId"});
Subject.hasMany(Enrollment, {foreignKey: "subjectId"});


export {
  sequelize,
  testConnection,
  School,
  Subject,
  Tutor,
  Student,
  Enrollment,
  User,
  viewEnrollment
};


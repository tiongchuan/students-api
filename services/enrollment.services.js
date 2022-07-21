
import { Enrollment, Subject, Student, Tutor, sequelize, viewEnrollment } from "../models/index.js";
import viewEnrollmentModel from "../models/viewEnrollment.model.js";



async function addEnrollment(studentId, tutorId, subjectId, comments, latestScore, enrollmentDate) {
  let result = {
    message: null,
    status: null,
    data: null,
  };
  const enrollment = await Enrollment.create({ studentId, tutorId, subjectId, comments, latestScore, enrollmentDate });
  enrollment.studentId = studentId;
  enrollment.tutorId = tutorId;
  enrollment.subjectId = subjectId;
  enrollment.comments = comments;
  enrollment.latestScore = latestScore;


  await enrollment.save();
  result.data = enrollment;
  result.status = 200;
  result.message = "New user is registered sucessfully";
  return result;
}



async function getEnrollment(enrollmentId) {
  let result = {
    message: null,
    status: null,
    data: null,
  };
  const enrollment = await Enrollment.findByPk(enrollmentId);
  if (!enrollment) {
    result.message = `Enrollment ID ${enrollmentId} is not found.`;
    result.status = 404;
    return result;
  }
  result.data = enrollment;
  result.status = 200;
  result.message = "Retrieve successful";
  return result;
}

async function getEnrollments() {
  let result = {
    message: null,
    status: null,
    data: null,
  };
  const enrollments = await Enrollment.findAll();
  result.data = enrollments;
  result.status = 200;
  result.message = "Retrieve successful";
  return result;
}

async function updateEnrollment(enrollmentId,studentId, tutorId, subjectId, enrollmentDate, comments, latestScore ) {
  let result = {
    message: null,
    status: null,
    data: null,
  };
  const enrollment = await Enrollment.findByPk(enrollmentId);
  if (!enrollment) {
    result.message = `Enrollment ID ${enrollmentId} is not found.`;
    result.status = 404;
    return result;
  }
 
  enrollment.studentId = studentId;
  enrollment.tutorId = tutorId;
  enrollment.subjectId = subjectId;
  enrollment.comments = comments;
  enrollment.latestScore = latestScore;
  enrollment.enrollmentDate = enrollmentDate;
  await enrollment.save();
  result.data = enrollment;
  result.status = 200;
  result.message = "Update successful";
  return result;
}


async function deleteEnrollment(enrollmentId) {
  let result = {
    message: null,
    status: null,
    data: null,
  };
  const enrollment = await Enrollment.findByPk(enrollmentId);
  if (!enrollment) {
    result.message = `Enrollment ID ${enrollmentId} is not found.`;
    result.status = 404;
    return result;
  }
  await enrollment.destroy();
  result.data = enrollment;
  result.status = 200;
  result.message = "Delete successful";
  return result;
}



async function studentInSubject(name) {
  let result = {
    message: null,
    status: null,
    data: null,
  };

  const studentInClass = await viewEnrollment.findAll({where: {subject:name}});
  console.log(studentInClass);

  result.data = JSON.stringify(studentInClass)
  result.status = 200;
  result.message = `Students enrolled in ${name} class`;
  return result
}


async function studentToTutor(name) {
  let result = {
    message: null,
    status: null,
    data: null,
  };

  const studentInClass = await viewEnrollment.findAll({ where: {tutor:name}});
  console.log(studentInClass);

  result.data = JSON.stringify(studentInClass)
  result.status = 200;
  result.message = `Students taught by Tutor ${name} `;
  return result
}


async function getViewEnrollment() {
  let result = {
    message: null,
    status: null,
    data: null,
  };

  const test = await viewEnrollment.findAll();
  console.log(test);

  result.data = JSON.stringify(test)
  result.status = 200;
  result.message = `test1  `;
  return result
}



export {
  studentToTutor,
  studentInSubject,
  addEnrollment,
  getEnrollment,
  getEnrollments,
  updateEnrollment,
  deleteEnrollment,
  getViewEnrollment
}




import { Student } from "../models/index.js";

async function getStudent(studentId) {

    let result = {
        message: null,
        status: null,
        data: null,
    };

    const student = await Student.findByPk(studentId);

    if (!student) {
        result.message = `Student ID ${studentId} is not found.`;
        result.status = 404;
        return result;
    }


    result.data = student;
    result.status = 200;
    result.message = "Retrieve successful";

    return result;
}

async function getStudents() {

    let result = {
        message: null,
        status: null,
        data: null,
    };
    
    const students = await Student.findAll();

    result.data = students;
    result.status = 200;
    result.message = "Retrieve successful";

    return result;
}

async function updateStudent(studentId, name, schoolId, parent, testimony) {

    let result = {
        message: null,
        status: null,
        data: null,
    };
    
    const student = await Student.findByPk(studentId);

    if (!student) {
        result.message = `Student ID ${studentId} is not found.`;
        result.status = 404;
        return result;
    }

    student.name = name;
    student.schoolId = schoolId;
    student.parent = parent;
    student.testimony = testimony;

    await student.save();
    result.data = student;
    result.status = 200;
    result.message = "Update successful";

    return result;
}


async function deleteStudent(studentId) {

    let result = {
        message: null,
        status: null,
        data: null,
    };
    
    const student = await Student.findByPk(studentId);

    if (!student) {
        result.message = `Student ID ${studentId} is not found.`;
        result.status = 404;
        return result;
    }

    await student.destroy();
    result.data = student;
    result.status = 200;
    result.message = "Delete successful";

    return result;
}

async function addStudent(name, schoolId, parent, testimony) {

    let result = {
        message: null,
        status: null,
        data: null,
    };
    
    const student = await Student.create({name, schoolId, parent, testimony});

    await student.save();
    result.data = student;
    result.status = 200;
    result.message = "Add successful";

    return result;
}


export {
   getStudent,
   getStudents,
   updateStudent,
   deleteStudent,
   addStudent
};
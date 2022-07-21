import { Subject } from '../models/index.js'

async function getSubject(subjectId) {

    let result = {
        message: null,
        status: null,
        data: null,
    };

    const subject = await Subject.findByPk(subjectId);

    if (!subject) {
        result.message = `Subject ID ${subjectId} is not found.`;
        result.status = 404;
        return result;
    }


    result.data = subject;
    result.status = 200;
    result.message = "Retrieve successful";

    return result;
}

async function getSubjects() {

    let result = {
        message: null,
        status: null,
        data: null,
    };
    
    const subjects = await Subject.findAll();

    result.data = subjects;
    result.status = 200;
    result.message = "Retrieve successful";

    return result;
}

async function updateSubject(subjectId, name, description) {

    let result = {
        message: null,
        status: null,
        data: null,
    };
    
    const subject = await Subject.findByPk(subjectId);

    if (!subject) {
        result.message = `Subject ID ${subjectId} is not found.`;
        result.status = 404;
        return result;
    }

    subject.name = name;
    subject.description = description;
   
    await subject.save();
    result.data = subject;
    result.status = 200;
    result.message = "Update successful";

    return result;
}

async function addSubject (name, description) {
    let result = {
        message: null,
        status: null,
        data: null,
    };

    const newSubject = await Subject.create({name, description})

    newSubject.name = name;
    newSubject.description = description;

    await newSubject.save();
    result.data = newSubject;
    result.status = 200;
    result.message = "Create successful";

    return result;
}

async function deleteSubject(subjectId) {

    let result = {
        message: null,
        status: null,
        data: null,
    };
    
    const subject = await Subject.findByPk(subjectId);

    if (!subject) {
        result.message = `Subject ID ${subjectId} is not found.`;
        result.status = 404;
        return result;
    }

    await subject.destroy();
    result.data = subject;
    result.status = 200;
    result.message = "Delete successful";

    return result;
}

export {
    getSubject,
    getSubjects,
    updateSubject,
    deleteSubject,
    addSubject
 };
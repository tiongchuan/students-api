import { getStudent, getStudents, updateStudent, deleteStudent, addStudent } from "../services/student.services.js";

class StudentController {

    // GET /general/student
    async retrieveStudent(req, res, next) {

    const result = await getStudent(req.params.studentId);    
    res.status(result.status);

    return res.json({ data: result.data, message: result.message });
    } 
  
    // GET /general/students
    async retrieveStudents(req, res, next) {
  
      const result = await getStudents();    
      res.status(result.status);
  
      return res.json({ data: result.data, message: result.message });
    }  
    
    // POST /protected/student/update
    async update(req, res, next) {

      if (typeof req.body.studentId !== "number") 
      {
        res.status(400);
        return res.json({ message: "Incorrect request data" });
      }
  
      const result = await updateStudent(req.body.studentId, req.body.name, req.body.schoolId, req.body.parent, req.body.testimony);    
      res.status(result.status);
  
  
      return res.json({ data: result.data, message: result.message });
    }

     // DELETE /protected/student/delete/:studentId
     async delete(req, res, next) {
  
        const result = await deleteStudent(req.params.studentId);    
        res.status(result.status);
    
        return res.json({ data: result.data, message: result.message });
      }

    // PUT /protected/student/add
    async add(req, res, next) {
ß
    
        const result = await addStudent(req.body.name, req.body.schoolId, req.body.parent, req.body.testimony);    
        res.status(result.status);
    
        return res.json({ data: result.data, message: result.message }); 
      }

 
  }

export default StudentController;
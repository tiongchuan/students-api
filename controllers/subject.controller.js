import { getSubject, getSubjects, updateSubject, addSubject, deleteSubject } from "../services/subject.services.js";

class SubjectController {

    // GET /general/tutor
    async retrieveSubject(req, res, next) {

         const result = await getSubject(req.params.subjectId);    
        res.status(result.status);

        return res.json({ data: result.data, message: result.message });
    } 
  
    // GET /general/tutors
    async retrieveSubjects(req, res, next) {
  
        const result = await getSubjects();    
        res.status(result.status);
  
        return res.json({ data: result.data, message: result.message });
    }  
    
    // POST /protected/tutor/update
    async update(req, res, next) {

        if (typeof req.body.subjectId !== "number") {
        res.status(400);
        return res.json({ message: "Incorrect request data" });
      }
  
        const result = await updateSubject(req.body.subjectId, req.body.name, req.body.description);    
        res.status(result.status);
  
  
        return res.json({ data: result.data, message: result.message });
    }

     // DELETE /protected/tutor/delete/:tutorId
    async delete(req, res, next) {
  
        const result = await deleteSubject(req.params.subjectId)
        res.status(result.status)
    
        return res.json({ data: result.data, message: result.message })
    }
    
    async add (req, res, next) {
        const result = await addSubject(req.body.name, req.body.description)
        res.status(result.status)

        return res.json({ data: result.data, message: result.message })
    }
}

export default SubjectController;
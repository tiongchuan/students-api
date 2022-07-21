// import { Router } from 'express';
// import TutorController from "../controllers/tutor.controller.js";
// import SubjectController from '../controllers/subject.controller.js';
// import EnrollmentController from '../controllers/enrollment.controller.js';
// import StudentController from "../controllers/student.controller.js";

// const router = Router();

// router.get("/protected", (req, res) => {
//     return res.send("You have called a protected route");
// });

// // Instantiate the class
// const tutorController = new TutorController();
// const subjectController = new SubjectController();
// const enrollmentController = new EnrollmentController();
// const studentController = new StudentController();

// // Invoke update() in TutorController based on the route
// router.post("/protected/tutor/update", tutorController.update);
// router.post("/protected/subject/update", subjectController.update);
// router.post("/protected/enrollment/:enrollmentId", enrollmentController.updateEnrollment);
// router.post("/protected/student/update", studentController.update);

// // Invoke delete() in TutorController based on the route
// router.delete("/protected/tutor/delete/:tutorId", tutorController.delete);
// router.delete("/protected/subject/delete/:subjectId", subjectController.delete);
// router.delete("/protected/enrollment/:enrollmentId", enrollmentController.deleteEnrollment);
// router.delete("/protected/student/delete/:studentId", studentController.delete);

// // Invoke add() in TutorController based on the route
// router.put("/protected/tutor/add", tutorController.add);
// router.put('/protected/subject/add', subjectController.add);
// router.put("/protected/enrollment", enrollmentController.createEnrollment);
// router.put("/protected/student/add", studentController.add);


// export default router;


import { Router } from 'express';
import TutorController from "../controllers/tutor.controller.js";
import SubjectController from '../controllers/subject.controller.js';
import { isAuth } from '../services/isAuth.services.js'
import EnrollmentController from '../controllers/enrollment.controller.js';
import StudentController from "../controllers/student.controller.js";

const router = Router();

router.get("/protected", (req, res) => {
    return res.send("You have called a protected route");
});

// Instantiate the class
const tutorController = new TutorController();
const subjectController = new SubjectController();

// Invoke update() in TutorController based on the route
router.post("/protected/tutor/update", isAuth, tutorController.update);
router.post("/protected/subject/update", isAuth, subjectController.update);

// Invoke delete() in TutorController based on the route
router.delete("/protected/tutor/delete/:tutorId", isAuth, tutorController.delete);
router.delete("/protected/subject/delete/:subjectId", isAuth, subjectController.delete);

// // Invoke add() in TutorController based on the route
router.put("/protected/tutor/add", isAuth, tutorController.add);
router.put('/protected/subject/add', isAuth, subjectController.add)

const enrollmentController = new EnrollmentController();
const studentController = new StudentController();

// Invoke update() in TutorController based on the route
router.post("/protected/tutor/update", tutorController.update);
router.post("/protected/subject/update", subjectController.update);
router.post("/protected/enrollment/:enrollmentId",enrollmentController.updateEnrollment);
router.post("/protected/student/update", studentController.update);

// Invoke delete() in TutorController based on the route
router.delete("/protected/tutor/delete/:tutorId", tutorController.delete);
router.delete("/protected/subject/delete/:subjectId", subjectController.delete);
router.delete("/protected/enrollment/:enrollmentId",enrollmentController.deleteEnrollment);
router.delete("/protected/student/delete/:studentId", studentController.delete);

// Invoke add() in TutorController based on the route
router.put("/protected/tutor/add", tutorController.add);
router.put('/protected/subject/add', subjectController.add);
router.put("/protected/enrollment",enrollmentController.createEnrollment);
router.put("/protected/student/add", studentController.add);



export default router;
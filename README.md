# students-api

1. Endpoints for Users
- POST /register
- POST /login

2. Endpoints for Tutors
- GET /general/tutor/:tutorId
- GET /general/tutors
- POST /protected/tutor/update
- DELETE /protected/tutor/delete/:tutorId
- PUT /protected/tutor/add

3. Endpoints for Students
- GET /general/student
- GET /general/student/:studentId
- POST /protected/student/update
- DELETE /protected/student/delete/:studentId
- PUT /protected/student/add

4. Endpoints for Subjects
- GET /general/subject/:subjectId
- GET /general/subject
- POST /protected/subject/update
- DELETE /protected/tutor/delete/:subjectId
- PUT /protected/subject/add

5. Edpoints for Enrollments
- GET /general/enrollment/:enrollmentId
- GET /general/enrollments
- GET /general/class
- GET /general/tutor
- PUT /protectedl/enrollment
- POST /protected/enrollment/:enrollmentId
- DELETE /protected/enrollment/:enrollmentId

6. Adding constraints in table
- alter table "students" add constraint fk_school_id foreign key (school_id) references schools(id);
- alter table "enrollments" add constraint fk_student_id foreign key (student_id) references students(id);
- alter table "enrollments" add constraint fk_tutor_id foreign key (tutor_id) references tutors(id);
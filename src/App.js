import React, { useState } from 'react';
import StudentRegistrationForm from './components/StudentRegistrationForm';
import Notifications from './components/Notifications';
import GradingSystem from './components/GradingSystem';
import AttendanceLog from './components/AttendanceLog';

const App = () => {
  const [students, setStudents] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [grades, setGrades] = useState([]);
  const [attendance, setAttendance] = useState([]);

  const addStudent = (student) => setStudents([...students, student]);
  const addNotification = (notification) => setNotifications([...notifications, notification]);
  const addGrade = (grade) => setGrades([...grades, grade]);
  const updateAttendance = (studentId, date) =>
    setAttendance([...attendance, { studentId, date, status: 'Present' }]);

  return (
    <div>
      <h1>Classroom Management System</h1>
      <StudentRegistrationForm onRegister={addStudent} />
      <Notifications notifications={notifications} addNotification={addNotification} />
      <GradingSystem students={students} grades={grades} addGrade={addGrade} />
      <AttendanceLog students={students} attendance={attendance} updateAttendance={updateAttendance} />
    </div>
  );
};

export default App;

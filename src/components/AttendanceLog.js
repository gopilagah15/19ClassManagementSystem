import React from 'react';

const AttendanceLog = ({ students, attendance, updateAttendance }) => {
  const markAttendance = (studentId) => {
    const date = new Date().toLocaleDateString();
    updateAttendance(studentId, date);
  };

  return (
    <div>
      <h2>Attendance Log</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name}
            <button onClick={() => markAttendance(student.id)}>Mark Present</button>
          </li>
        ))}
      </ul>
      <h3>Attendance Records</h3>
      <ul>
        {attendance.map((record, index) => (
          <li key={index}>
            Student ID: {record.studentId} | Date: {record.date} | Status: {record.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttendanceLog;

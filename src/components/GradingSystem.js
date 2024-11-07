import React, { useState } from 'react';

const GradingSystem = ({ students, grades, addGrade }) => {
  const [studentId, setStudentId] = useState('');
  const [subject, setSubject] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addGrade({ studentId, subject, score });
    setStudentId('');
    setSubject('');
    setScore('');
  };

  return (
    <div>
      <h2>Grading System</h2>
      <form onSubmit={handleSubmit}>
        <select value={studentId} onChange={(e) => setStudentId(e.target.value)} required>
          <option value="">Select Student</option>
          {students.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          required
        />
        <input
          type="number"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          placeholder="Score"
          required
        />
        <button type="submit">Add Grade</button>
      </form>
      <h3>Report Cards</h3>
      <ul>
        {grades.map((grade, index) => (
          <li key={index}>
            Student ID: {grade.studentId} | Subject: {grade.subject} | Score: {grade.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GradingSystem;

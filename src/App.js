import React from "react";
import "./App.css";
import api from "./api.json";
import Marks from "./Marks";
function App() {
  const sortType = "asc";
  const sortedStudents = api.sort((a, b) => {
    const isReversed = sortType === "asc" ? 1 : -1;
    return isReversed * a.name.localeCompare(b.name);
  });

  return (
    <div className="container">
      <table border="1">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Roll Number</th>
            <th>Total Marks</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student, index) => (
            <tr key={index}>
              <td>
                {student.name.charAt(0).toUpperCase() + student.name.slice(1)}
              </td>
              <td>{student.rollNumber}</td>
              <td>
                <Marks marks={student.marks} />
              </td>
              <td>
                {parseInt(student.marks.Maths) < 20 ||
                parseInt(student.marks.English) < 20 ||
                parseInt(student.marks.Science) < 20
                  ? "Fail"
                  : "Pass"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

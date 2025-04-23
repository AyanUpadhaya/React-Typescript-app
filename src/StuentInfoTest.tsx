import { useState } from "react";
import "./App.css";

import { Student } from "./types";

const StuentInfoTest = () => {
  const [studentInfo] = useState<Student>({
    name: "Ayan",
    age: 30,
    roll: 10,
    subject: "Commerce",
  });

  return (
    <div>
      <p>
        {Object.keys(studentInfo).map((item, idx) => (
          <li key={idx + 1}>{studentInfo[item as keyof Student]}</li>
        ))}
      </p>
    </div>
  );
};

export default StuentInfoTest;

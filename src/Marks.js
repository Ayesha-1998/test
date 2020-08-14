import React from "react";

const Marks = ({ marks }) => {
  let Math = parseInt(marks.Maths);
  let English = parseInt(marks.English);
  let Science = parseInt(marks.Science);

  return <span>{Math + Science + English}</span>;
};

export default Marks;

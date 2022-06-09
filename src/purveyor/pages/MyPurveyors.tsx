import * as React from "react";
import { purveyorType } from "../slice/PurveyorSlice";

type purveyorProps = {
  purveyor: purveyorType;
};

const MyPurveyors: React.FC<purveyorProps> = ({ purveyor }) => {
  return (
    <div>
      <h3> {purveyor.purveyorName}</h3>
      <h3> {purveyor.purveyorIdentification}</h3>
      <h3> {purveyor.purveyorEmail}</h3>
    </div>
  );
};

export default MyPurveyors;

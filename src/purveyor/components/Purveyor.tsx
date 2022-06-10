import * as React from 'react';
import { purveyorType } from '../slice/purveyorSlice';

interface IPurveyorProps {
    purveyor: purveyorType
}

const Purveyor: React.FunctionComponent<IPurveyorProps> = ({purveyor}) => {
  return (
      <div>
          <h3>Name: {purveyor.purveyorName}  identification: {purveyor.purveyorIdentification} email: {purveyor.purveyorEmail}</h3>
      </div>
  )
};

export default Purveyor;

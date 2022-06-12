import * as React from 'react';
import { purveyorType } from '../slice/purveyorSlice';

interface IPurveyorProps {
    purveyor: purveyorType
}

const Purveyor: React.FunctionComponent<IPurveyorProps> = ({purveyor}) => {
  return (
      <div>
        <h5 className='h5'>----------------------------------------------------------------------------------------------------</h5>
        <h5 className='h5'>Id: {purveyor.purveyorId}</h5>
        <h5 className='h5'>Name: {purveyor.purveyorName} </h5>
        <h5 className='h5'>identification: {purveyor.purveyorIdentification}</h5>
        <h5>email: {purveyor.purveyorEmail}</h5>
      </div>
  )
};

export default Purveyor;

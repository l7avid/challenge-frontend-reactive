import * as React from 'react';
import { useSelector } from 'react-redux';
import { stateTypeRedux } from '../../store/store';
import Purveyor from './Purveyor';


const PurveyorList = () => {

    const purveyors = useSelector((state: stateTypeRedux) => state.purveyor.purveyors)
    

  return (
  <div>
    {purveyors.map((purveyor) => <Purveyor key={purveyor.purveyorId} purveyor={purveyor} />)}
  </div>
)};

export default PurveyorList;

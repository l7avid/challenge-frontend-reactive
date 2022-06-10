import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateTypeRedux } from "../../store/store";
import { getAllPurveyors } from "../actions/PurveyorActions";
import Purveyor from "../components/Purveyor";
import PurveyorList from "../components/PurveyorList";
import { getAllPurveyorsReducer, purveyorType } from "../slice/purveyorSlice";



const MyPurveyors = () => {

  const dispatch = useDispatch();
  

  useEffect(() => {
    getAllPurveyors().then(purveyors => {

      dispatch(getAllPurveyorsReducer(purveyors))
    })
  }, [])

  return (
    <PurveyorList/>
  );
};

export default MyPurveyors;

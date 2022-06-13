import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { stateTypeRedux } from "../../store/store";
import { getAllPurveyors } from "../actions/PurveyorActions";
import Purveyor from "../components/Purveyor";
import PurveyorList from "../components/PurveyorList";
import { getAllPurveyorsReducer, purveyorType } from "../slice/purveyorSlice";



const MyPurveyors = () => {

  const {user} = useSelector((state:stateTypeRedux) => state.logged)
  
  const navigate = useNavigate();

  const dispatch = useDispatch();
  

  useEffect(() => {
    getAllPurveyors().then(purveyors => {

      if(user=== null){
        navigate('/logInGoogle')
      }
      dispatch(getAllPurveyorsReducer(purveyors))
    })
  }, [])

  return (
    <PurveyorList/>
  );
};

export default MyPurveyors;

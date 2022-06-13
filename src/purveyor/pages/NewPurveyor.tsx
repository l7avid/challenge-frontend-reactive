import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { stateTypeRedux } from "../../store/store";
import { savePurveyor } from "../actions/PurveyorActions";
import { addPurveyorReducer } from "../slice/purveyorSlice";



const NewPurveyor = () => {

  const {user} = useSelector((state:stateTypeRedux) => state.logged)

  console.log(user);
  
  const navigate = useNavigate();

  React.useEffect(()=> {
    if(user=== null){
      navigate('/logIn')
    }
  }, [])


  const dispatch = useDispatch();

  const [purveyorName, setPurveyorName] = useState('');
  const [purveyorIdentification, setPurveyorIdentification] = useState('');
  const [purveyorEmail, setPurveyorEmail] = useState('');

  const addPurveyor = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (purveyorName && purveyorIdentification && purveyorEmail) {
      console.log("Enviando")
      const purveyorToAdd = {
        purveyorName,
        purveyorIdentification,
        purveyorEmail
      };

      const purveyor = await savePurveyor(purveyorToAdd);

      dispatch(addPurveyorReducer(purveyor));

      setPurveyorName('');
      setPurveyorIdentification('');
      setPurveyorEmail('');
    }
  };

  return (
    <div>
      <form>
        <input
          style={{marginTop: "1vh", marginRight: "1vh"}}
          type="text"
          placeholder="Name"
          onChange={(event) => setPurveyorName(event.target.value)}
          value={purveyorName}
        />
        <input
          style={{marginTop: "1vh", marginRight: "1vh"}}
          type="text"
          placeholder="Identification"
          onChange={(event) => setPurveyorIdentification(event.target.value)}
          value={purveyorIdentification}
        />
        <input
          style={{marginTop: "1vh", marginRight: "1vh"}}
          type="text"
          placeholder="Email"
          onChange={(event) => setPurveyorEmail(event.target.value)}
          value={purveyorEmail}
        />
      </form>
      <button style={{marginTop: "1vh", marginBottom: "1vh"}} onClick={(event) => addPurveyor(event)}>Add Purveyor</button>
    </div>
  );
};

export default NewPurveyor;

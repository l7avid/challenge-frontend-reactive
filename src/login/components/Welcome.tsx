import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { stateTypeRedux } from "../../store/store";


const Welcome: React.FunctionComponent = () => {
  
  const {user} = useSelector((state:stateTypeRedux) => state.logged)

  const navigate = useNavigate()

  console.log(user);

  useEffect(()=> {
    if(user=== null){
      navigate('/logInGoogle')
    }
  }, [])
  
  return (
    <h1>Welcome you have logged in succesfully</h1>
  );
};

export default Welcome;


import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut  } from 'firebase/auth'
import { logOutInReducer } from "../slice/loginSlice";

const LogOut: React.FunctionComponent = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutButton = () => {
      dispatch(logOutInReducer())
      navigate('/')
  }

  return (
    <div>
        <br />
        <button onClick={logOutButton}>Log Out</button>
        <br /><br />
    </div>
  );
};

export default LogOut;
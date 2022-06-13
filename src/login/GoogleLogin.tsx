import { signInWithPopup, GoogleAuthProvider, OAuthCredential } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";
import { logInInReducer } from "./slice/loginSlice";

const providerGoogleAuth = new GoogleAuthProvider();

const GoogleLogin: React.FunctionComponent = () => {


  const dispatch = useDispatch();

  const navigate = useNavigate();

  const signInWithGoogleButton = () => {

    signInWithPopup(auth, providerGoogleAuth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential:OAuthCredential | null = GoogleAuthProvider.credentialFromResult(result);

      const token = credential!.accessToken;

      // The signed-in user info.
      //If the logged in is succesfull you will acces this part of the code where you will 
      //get a lot of information about the user that have logged in
      const user = result.user;

      /*Whit the information of the user you can populate an state that is mainly focused on 
        holding the information of the user that is logged in*/

      dispatch(logInInReducer(user))
      
      navigate('/')

      // ...
    }).catch((error) => {

      //If the logged in is not succesfull yu will get to this part and with the message you can tell 
      //the user what went wrong


      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }


  return (
    <div>
      <button style={{marginBottom: "1vh", marginTop: "1vh"}} onClick={signInWithGoogleButton}>Log in with google</button>
    </div>
  );
};

export default GoogleLogin;
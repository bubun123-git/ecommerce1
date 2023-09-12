import AuthForm from "../../Pages/Login/AuthForm";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
    return (
      <section className={classes.profile}>
        <h1>Your User Profile</h1>
        <AuthForm />
      </section>
    );
  };
  
  export default UserProfile;
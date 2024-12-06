import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import classes from './auth.module.css';
import { auth } from '../../Utility/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { DataContext } from '../../components/DataProvider/DataProvider';
import { Type } from '../../Utility/ActionType';
import { ClipLoader } from 'react-spinners';

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false
  });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const NavigateData = useLocation();

  useEffect(() => {
    // If the user is already logged in, navigate to the desired page
    if (user) {
      navigate(NavigateData?.state?.redirect || "/");
    }
  }, [user, navigate, NavigateData?.state?.redirect]);

  const authconfig = async (e) => {
    e.preventDefault();
    console.log(e.target.name);

    if (e.target.name === "signin") {
      setLoading({ ...loading, signIn: true });

      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // Update user state in context
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user
          });
          // After successful login, navigate to the desired page
          navigate(NavigateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading({ ...loading, signIn: false });
        });

    } else {
      setLoading({ ...loading, signUp: true });

      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // Update user state in context
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user
          });
          // After successful signup, navigate to the desired page
          navigate(NavigateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <section className={classes.logo}>
      <Link to={"/"}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign in</h1>
        {NavigateData?.state?.msg && (
          <small style={{
            padding: "5px",
            textAlign: "center",
            color: "red",
            fontWeight: "bold",
            fontSize: "15px"
          }}>
            {NavigateData.state.msg}
          </small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" />
          </div>
          <button type="submit" onClick={authconfig} name="signin" className={classes.login_signin_btn}>
            {loading.signIn ? (
              <ClipLoader color="yellow" size={20} />
            ) : (
              " Sign In"
            )}
          </button>
        </form>
        <p>
          By signing-in you are agreeing to the AMAZON FAKE CLONE Condition of sale Please see our privacy notice, our cookies notice, and our interest-based ads notice.
        </p>
        <button type="submit" onClick={authconfig} name="signup" className={classes.rgt_btn}>
          {loading.signUp ? (
            <ClipLoader color="#35CAAD" size={20} />
          ) : (
            " Create Your Amazon Account"
          )}
        </button>

        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;

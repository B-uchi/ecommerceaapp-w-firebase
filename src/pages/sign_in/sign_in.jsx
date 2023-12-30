import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../../components/FormInput";
import CustomBtn from "../../components/CustomBtn";
import { auth, db, provider } from "../../firebase/firebaseUtil";
import {
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { toast, Toaster } from "sonner";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const Sign_in = ({ currentUser }) => {
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  
  const signInWithGoogle = () => {
    setLoading(true);
    if (currentUser) {
      setLoading(false);
      toast("Already signed in");
    } else {
      signInWithPopup(auth, provider)
        .then(async (result) => {
          if (getAdditionalUserInfo(result).isNewUser) {
            let display_name = prompt("Enter a display name", "John Doe");
            while (display_name === null) {
              display_name = prompt("Enter a display name", "John Doe");
            }
            try {
              const userDoc = await setDoc(doc(db, "users", result.user.uid), {
                id: result.user.uid,
                displayName: display_name,
                email: result.user.email,
              });
              toast.success("Signed in successfully");
              console.log("Added to db");
              setLoading(false);
              setTimeout(() => {
                navigate("/");
              }, 1000);
            } catch (error) {
              setLoading(false);
              toast.error(e);
            }
          } else {
            toast.success("Signed in successfully");
            setLoading(false);
            setTimeout(() => {
              navigate("/");
            }, 1000);
          }
        })
        .catch((e) => {
          setLoading(false);
          console.log(e);
        });
    }
  };
  const signIn = () => {
    setLoading(true);
    if (currentUser) {
      setLoading(false);
      toast("Already signed in");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setLoading(false);
          toast.success("Successfully logged in");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          setLoading(false);
          toast.error(errorMessage);
        });
    }
  };
  const register = () => {
    setLoading(true);
    if (currentUser) {
      setLoading(false);
      toast("Sign out to proceed");
    } else {
      if (password === confirmPassword) {
        if (displayName != null) {
          createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
              try {
                const user = userCredential.user;
                const userDoc = await setDoc(doc(db, "users", user.uid), {
                  id: user.uid,
                  displayName: displayName,
                  email: user.email,
                });
                setLoading(false);
                toast.success("Account created successfully");
              } catch (error) {
                setLoading(false);
                toast.error(e);
              }
              // ...
            })
            .catch((error) => {
              const errorMessage = error.message;
              setLoading(false);
              toast.error(errorMessage);
              console.log(errorMessage);
            });
        } else {
          setLoading(false);

          console.log("No display name provided");
          toast.error("Provide a display name");
        }
      } else {
        toast.error("Passwords do not match");
        setLoading(false);
      }
    }
  };
  return (
    <section className="w-[100%] h-[91.5vh] relative flex justify-center items-center">
      {loading ? (
        <div className="bg-[rgba(255,255,255,0.8)] flex justify-center items-center absolute w-full h-[90vh] z-10">
          <Toaster className="z-50" position="top-right" richColors />
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="">
          <Toaster className="z-50" position="top-right" richColors />
          {page === "login" ? (
            // Login card
            <div className="bg-white rounded-md p-3 w-full md:w-[500px]">
              <div className="card-container">
                <h1 className="font-bold text-center mb-3 text-3xl">Sign In</h1>
                <form>
                  <FormInput
                    placeholder={"Enter your email..."}
                    type={"email"}
                    required
                    value={email}
                    onChange={setEmail}
                  />
                  <FormInput
                    placeholder={"Enter your password..."}
                    type={"password"}
                    required
                    value={password}
                    onChange={setPassword}
                  />
                </form>
                <div className="flex gap-4 justify-center mt-5">
                  <CustomBtn
                    value={"Sign In"}
                    textColor={"white"}
                    bgColor={"black"}
                    onClick={() => signIn()}
                  />
                  <CustomBtn
                    value={"Sign in with Google"}
                    onClick={() => signInWithGoogle()}
                    textColor={"white"}
                    bgColor={"blue"}
                  />
                </div>
                <p
                  className="text-center text-sm mt-2 underline cursor-pointer"
                  onClick={() => setPage("register")}
                >
                  Don't have an account?
                </p>
              </div>
            </div>
          ) : (
            // Register card
            <div className="bg-white rounded-md p-3 w-full md:w-[500px]">
              <div className="card-container">
                <h1 className="font-bold text-center mb-3 text-3xl">
                  Register
                </h1>
                <form>
                  <FormInput
                    placeholder={"Display name..."}
                    type={"text"}
                    required
                    value={displayName}
                    onChange={setDisplayName}
                  />
                  <FormInput
                    placeholder={"Enter your email..."}
                    type={"email"}
                    required
                    value={email}
                    onChange={setEmail}
                  />
                  <FormInput
                    placeholder={"Enter a password..."}
                    type={"password"}
                    required
                    value={password}
                    onChange={setPassword}
                  />
                  <FormInput
                    placeholder={"Confirm password..."}
                    type={"password"}
                    required
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                  />
                </form>
                <div className="flex gap-4 justify-center mt-5">
                  <CustomBtn
                    value={"Sign Up"}
                    textColor={"white"}
                    bgColor={"black"}
                    onClick={register}
                  />
                </div>
                <p
                  className="text-center text-sm mt-2 underline cursor-pointer"
                  onClick={() => setPage("login")}
                >
                  Already have an account?
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Sign_in);

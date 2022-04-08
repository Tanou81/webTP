// import React from 'react'
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
export default function Connection () {

    const navigate = useNavigate();

    const [validation, setValidation] = useState("");
  
    const inputs = useRef([]);
    const addInputs = (el) => {
      if (el && !inputs.current.includes(el)) {
        inputs.current.push(el);
      }
    };
    const formRef = useRef();

    const handleForm = async (e) => {
        e.preventDefault();
        console.log(inputs);
        //on tentr de signIN si on y arrive on ferme la modal 
        try {
          // Not using cred, TODO: clean code
          // const cred = await signIn(
          //   inputs.current[0].value,
          //   inputs.current[1].value
          // );
        //   await signIn(
        //     inputs.current[0].value,
        //     inputs.current[1].value
        //   );
          console.log(inputs.current[0].value,
              inputs.current[1].value)
          setValidation("");
       
        //   toggleModals("close");
          navigate("/private/private-home");
          // si on y arrive pas on affiche un message à l'utilisateur qu'il a du se tromper 
        } catch {
          setValidation("Wopsy, email and/or password incorrect")
        }
      };
      //ferme la modal 
      const closeModal = () => {
        setValidation("");
        // toggleModals("close");
      };

    const MyForm = () => (
        <>
          {/* <div className="position-fixed top-0 vw-100 vh-100"> */}
          {/* <div
            //  onClick={closeModal}
            className="w-100 h-100 bg-dark bg-opacity-75"
          ></div> */}
          {/* <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          > */}
            <div className="modal-dialog">
              {/* <div className="modal-content"> */}
                <div className="modal-header">
                  <h5 className="modal-title">Sign In</h5>
                  {/* <button /*onClick={closeModal}  className="btn-close"></button> */}
                </div>
    
                <div className="modal-body">
                  <form
                     ref={formRef}
                     onSubmit={handleForm}
                    className="sign-up-form"
                  >
                    <div className="mb-3">
                      <label htmlFor="signInEmail" className="form-label">
                        Email adress
                      </label>
                      <input
                         ref={addInputs}
                        name="email"
                        required
                        type="email"
                        className="form-control"
                        id="signInEmail"
                      />
                    </div>
    
                    <div className="mb-3">
                      <label htmlFor="signInPwd" className="form-label">
                        Password
                      </label>
                      <input
                         ref={addInputs}
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="signInPwd"
                      />
                      <p className="text-danger mt-1">{validation}</p>
                    </div>
    
                    <button className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </>
      );

    return (<><h1>Connection </h1>
    <MyForm></MyForm>
    </>)
}
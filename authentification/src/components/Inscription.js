import { Form, Field } from "react-final-form";
import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import "./Inscription.css";
export default function Inscription() {
  const handleSubmit = () => {};
  // const onSubmit = () => {};
  const validate = () => {};
  const InterestPicker = () => {};
  const [connecter, setConnecter] = useState(false);
  const [validation, setValidation] = useState("");

  const createuser = async ({ email, name, password }) => {
    const res = await axios.put("http://localhost:3001/user", {
      email: email,
      name: name,
      password: password,
    });
    return res;
  };

  const onSubmit = (values) => {
    console.log("prout", values);
    let res;
    res = createuser(values);
    console.log(res, "res");
    if (res == 500) {
      setValidation("erreur");
    } else {
      setConnecter(true);
    }
  };

  function verif(values) {
    console.log("prout2", values);
    if (values.password != values.password2) {
      setValidation("mdp différent");
    } else {
      onSubmit(values);
    }
  }

  const MyForm = () => (
    <Form
      onSubmit={verif}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="email"
            render={({ input, meta }) => (
              <div>
                <label>email</label>
                <textarea {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          />

          {/* <h2>Render Function</h2> */}
          <Field
            name="name"
            render={({ input, meta }) => (
              <div>
                <label>name</label>
                <textarea {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          />

          {/* <h2>Render Function as Children</h2> */}
          <Field name="password">
            {({ input, meta }) => (
              <div>
                <label>password</label>
                <input type="password" {...input} placeholder="password" />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Field name="password2">
            {({ input, meta }) => (
              <div>
                <label>confirm password</label>
                <input type="password" {...input} placeholder="password2" />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div>
            <p className="inscription-validation">{validation}</p>
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    />
  );

  return (
    <>
      {connecter ? (
        <>
          <h1>Vous vous êtes inscrits</h1>
        </>
      ) : (
        <>
          <h1>Inscription </h1>
          <MyForm></MyForm>
        </>
      )}
    </>
  );
}

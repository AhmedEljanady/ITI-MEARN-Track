import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const Page1 = ({ setEmail, setPage }) => {
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:3333/customer/login",
        {
          email: values.email,
        }
      );
      console.log(response.data);
      if (response.data.isFound) {
        setEmail(values.email);
        setPage(2);
      } else {
        setEmail(values.email);
        setPage(3);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik initialValues={{ email: "" }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" placeholder="Enter your email" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

const Page2 = ({ email, setPage }) => {
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:3333/customer/signin",
        {
          email,
          password: values.password,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik initialValues={{ password: "" }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <p>{email}</p>
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <button type="button" onClick={() => setPage(1)}>
            Back
          </button>
        </Form>
      )}
    </Formik>
  );
};

const Page3 = ({ email, setPage }) => {
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:3333/customer/signup",
        {
          email,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
        }
      );
      console.log(response.data);
      setPage(2);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik initialValues={{ password: "", name: "" }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <p>{email}</p>
          <Field
            type="text"
            name="firstName"
            placeholder="Enter your firstName"
          />
          <Field
            type="text"
            name="lastName"
            placeholder="Enter your lastName"
          />
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <button type="button" onClick={() => setPage(1)}>
            Back
          </button>
        </Form>
      )}
    </Formik>
  );
};

const App = () => {
  const [email, setEmail] = useState("");
  const [page, setPage] = useState(1);

  return (
    <div>
      {page === 1 && <Page1 setEmail={setEmail} setPage={setPage} />}
      {page === 2 && <Page2 email={email} setPage={setPage} />}
      {page === 3 && <Page3 email={email} setPage={setPage} />}
    </div>
  );
};

export default App;

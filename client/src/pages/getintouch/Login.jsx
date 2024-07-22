import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./login.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { apiUrl } from '../../../Utils/Config';
import useStore from '../../store.js'; 

const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const setLoggedIn = useStore((state) => state.setLoggedIn);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch(`${apiUrl}/api/user/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.success === true) {
          setError(null);
          setLoggedIn(true); // Update Zustand store
          navigate('/service');
          alert("Logged in successfully");
        } else {
          setError(data.message);
        }
      } catch (error) {
        console.error("Error during login:", error);
        setError("An unexpected error occurred. Please try again.");
      }
    },
  });

  return (
    <div className="login-content">
      <div className="login-content1">
        <h2>Professional cleaning service,</h2>
        <h2>for your home as good as new</h2>
      </div>
      <div className="login-form">
        <form onSubmit={formik.handleSubmit}>
          <h2>Sign in to get in touch</h2>
          {error && <div className="error">{error}</div>}
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="error">{formik.errors.fullName}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit">Sign in</button>
          <p>Do not have an account? <a href="/">Sign up</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;

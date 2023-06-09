import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

export const LoginFormik = ({ onSubmit }) => {
    const initialCredentials = {
        email:'',
        password:''
    };

  return (

    <div>
        <h3>Login Formik</h3>
        <Formik
            // ** Initial values that the form will take **
            initialValues = { initialCredentials }
             // ** Yup validation schema **
            validationSchema={loginSchema}
            // ** onSubmit Event **
            onSubmit={(values, actions) => {
            setTimeout(() => {
            onSubmit(values);
            actions.resetForm({});
            actions.setSubmitting(false);
            }, 500);
        }}
        >
            {/* We obtain props from Formik */}
        {({ touched, errors, isSubmitting }) => (
            <Form>
            <label htmlFor="email">Email</label>
            <Field id="email" type="email" name="email" placeholder="example@email.com" />

            {/* Email Errors */}
            {errors.email && touched.email && <ErrorMessage name="email" component="div" />}
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" placeholder="password" type="password" />
            {/* Password Errors */}
            {errors.password && touched.password && <ErrorMessage name="password" component="div" />}
            <button type="submit">Login</button>
            {isSubmitting ? <p>Login your credentials...</p> : null}
            </Form>
      )}
        </Formik>
    </div>
  );
};

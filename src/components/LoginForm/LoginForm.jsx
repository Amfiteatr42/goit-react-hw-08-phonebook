import { ErrorMessage, Field, Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';

export function LoginForm() {
  return (
    <div>
      <h2>Sign In with your account</h2>
      <Formik
        initialValues={{ email: '', password: '', confirm: '' }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Please enter valid e-mail')
            .required('E-mail is required'),
          password: Yup.string().min(
            6,
            'Password must be at least 6 characters long'
          ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form>
            <label htmlFor="email" style={{ display: 'block' }}>
              Email
            </label>
            <Field type="email" name="email" id="email" value={values.email} />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="password" style={{ display: 'block' }}>
              Password
            </label>
            <Field type="password" name="password" id="password" />
            <ErrorMessage name="password" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Sign In
            </button>
          </Form>
        )}
      </Formik>

      <p>
        Don't have an account yet?{' '}
        <NavLink to={'/registry'}>Click here!</NavLink>
      </p>
    </div>
  );
}
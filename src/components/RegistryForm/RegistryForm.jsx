import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { registry } from 'redux/authorization/auth-operations';
import * as Yup from 'yup';

export function RegistryForm() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Registry Form</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '', confirm: '' }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Required'),
          email: Yup.string().email().required('Required'),
          password: Yup.string()
            .required('Required')
            .min(7, 'Password must be at least 7 characters long'),
          confirm: Yup.string()
            .required('Required')
            .oneOf(
              [Yup.ref('password'), null],
              'Your passwords are different, try harder!'
            ),
        })}
        onSubmit={({ name, email, password }, { resetForm }) => {
          dispatch(registry({ name, email, password }));
          resetForm();
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
          // <form onSubmit={handleSubmit}>
          //   <input
          //     type="email"
          //     name="email"
          //     onChange={handleChange}
          //     onBlur={handleBlur}
          //     value={values.email}
          //   />
          //   {errors.email && touched.email && errors.email}
          //   <input
          //     type="password"
          //     name="password"
          //     onChange={handleChange}
          //     onBlur={handleBlur}
          //     value={values.password}
          //   />
          //   <input
          //     type="password"
          //     name="confirm"
          //     onChange={handleChange}
          //     onBlur={handleBlur}
          //     value={values.confirm}
          //   />
          //   {errors.password && touched.password && errors.password}
          //   {errors.confirm && touched.confirm && errors.confirm}
          //   <button type="submit" disabled={isSubmitting}>
          //     Submit
          //   </button>
          // </form>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="name" style={{ display: 'block' }}>
              Name
            </label>
            <Field type="text" name="name" id="name" value={values.name} />
            <ErrorMessage name="name" component="div" />

            <label htmlFor="email" style={{ display: 'block' }}>
              Email
            </label>
            <Field type="email" name="email" id="email" value={values.email} />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="password" style={{ display: 'block' }}>
              Password
            </label>
            <Field
              type="password"
              name="password"
              id="password"
              value={values.password}
            />
            <ErrorMessage name="password" component="div" />

            <label htmlFor="confirm" style={{ display: 'block' }}>
              Password again
            </label>
            <Field
              type="password"
              name="confirm"
              id="confirm"
              value={values.confirm}
            />
            <ErrorMessage name="confirm" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Registry
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

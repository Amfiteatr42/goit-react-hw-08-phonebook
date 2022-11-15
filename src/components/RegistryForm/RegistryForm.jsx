import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export function RegistryForm() {
  return (
    <div>
      <h2>Registry Form</h2>
      <Formik
        initialValues={{ email: '', password: '', confirm: '' }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required('Required'),
          password: Yup.string().min(
            6,
            'Password must be at least 6 characters long'
          ),
          confirm: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'Your passwords are different, try harder!'
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
          <Form>
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
            <Field type="password" name="password" id="password" />
            <ErrorMessage name="password" component="div" />

            <label htmlFor="confirm" style={{ display: 'block' }}>
              Password again
            </label>
            <Field type="password" name="confirm" id="confirm" />
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

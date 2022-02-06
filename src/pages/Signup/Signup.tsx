import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import './Signup.scss';

const Signup = () => {
  const { t } = useTranslation();

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(25, 'Too Long!')
      .required('Required')
      .matches(/^(.*)?\S+(.*)?$/, 'Cannot be empty!'),
    email: Yup.string()
      .min(2, 'Too Short!')
      .max(25, 'Too Long!')
      .required('Required')
      .matches(/^(.*)?\S+(.*)?$/, 'Cannot be empty!'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(25, 'Too Long!')
      .required('Required')
      .matches(/^(.*)?\S+(.*)?$/, 'Cannot be empty!'),
    passwordConfirm: Yup.string()
      .min(2, 'Too Short!')
      .max(25, 'Too Long!')
      .required('Required')
      .matches(/^(.*)?\S+(.*)?$/, 'Cannot be empty!'),
  });

  return(
    <div className="signup__container">
      <Box className="signup__box">
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Signup
        </Typography>
        <Formik
          initialValues={{
            firstName: '',
            email: '',
            password: '',
            passwordConfirm: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className='input__container'>
                <label>{t('firstName')}</label>
                <Field name="firstName"/>
                {errors.firstName && touched.firstName ? (
                  <div className="login__error">{errors.firstName}</div>
                ) : null}
              </div>
              <div className='input__container'>
                <label>{t('email')}</label>
                <Field name="email"/>
                {errors.email && touched.email ? (
                  <div className="signup__error">{errors.email}</div>
                ) : null}
              </div>
              <div className='input__container'>
                <label>{t('password')}</label>
                <Field name="password"/>
                {errors.password && touched.password ? (
                  <div className="signup__error">{errors.password}</div>
                ) : null}
              </div>
              <div className='input__container'>
                <label>{t('confirmPassword')}</label>
                <Field name="passwordConfirm"/>
                {errors.passwordConfirm && touched.passwordConfirm ? (
                  <div className="signup__error">{errors.passwordConfirm}</div>
                ) : null}
              </div>
              <Button type="submit" variant="contained" size="large">{t('submit')}</Button>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default Signup;
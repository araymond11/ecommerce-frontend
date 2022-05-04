import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const { t } = useTranslation();
  const naviguate = useNavigate();
  
  const goToRegister = () => {
    naviguate('/signup');
  };

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
  });

  return(
    <div className='login__container'>
      <Box className="login__box">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {t('login')}
        </Typography>
        <Formik
          initialValues={{
            firstName: '',
            email: '',
            password: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
 
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className='input__container'>
                <label>{t('email')}</label>
                <Field name="email"/>
                {errors.email && touched.email ? (
                  <div className="login__error">{errors.email}</div>
                ) : null}
              </div>
              <div className='input__container'>
                <label>{t('password')}</label>
                <Field name="password"/>
                {errors.password && touched.password ? (
                  <div className="login__error">{errors.password}</div>
                ) : null}
              </div>
              <Button type="submit" variant="contained" size="large">{t('submit')}</Button>
            </Form>
          )}
        </Formik>
        <br/>
        <p className="bottom__text">
          {t('notAMember')}
          <span className='bottom__text--blue' onClick={goToRegister}> {t('registerNow')}</span>
        </p>
      </Box>
    </div>
  );
};

export default Login;
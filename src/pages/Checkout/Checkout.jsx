import React from 'react';
import { Formik, Form, Field } from 'formik';


export const Checkout = () => {
  return (
    <>
      <h2>Checkout</h2>
      <p>128.00$</p>

      <Formik initialValues={{firstname: '', lastname: ''}}>  
        <Form>
          <Field name='Firstname' placeholder ='First name'/>
          <Field name='Lastname' placeholder ='First name'/>
          <Field name='Address' placeholder ='First name'/>
          <Field name='City' placeholder ='First name'/>
          <Field name='Country' placeholder ='First name'/>
          <Field name='State' placeholder ='First name'/>
          <Field name='PostalCode' placeholder ='Postal code'/>
          <Field name='Phone' placeholder ='Phone'/>
        </Form>
      </Formik>
    </>
  );
};
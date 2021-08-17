import React from 'react';
import { Formik, Form, Field } from 'formik';
import './Checkout.scss';


export const Checkout = () => {
  return (
    <>
      <div className='topBlock'>
        <h2>Checkout</h2>
        <p>128.00$</p>
      </div>

      <Formik initialValues={{Firstname: '', Lastname: ''}} onSubmit={values => alert(JSON.stringify(values, null, 2))}>  
        <Form>
          <Field class='input__field' name='Firstname' placeholder ='First name'/>
          <Field class='input__field' name='Lastname' placeholder ='Last name'/>
          <Field class='input__field' name='Address' placeholder ='Address'/>
          <Field class='input__field' name='City' placeholder ='City'/>
          <Field class='input__field' name='Country' placeholder ='Country'/>
          <Field class='input__field' name='State' placeholder ='State'/>
          <Field class='input__field' name='Postalcode' placeholder ='Postal code'/>
          <Field class='input__field' name='Phone' placeholder ='Phone'/>
          <button type="submit" className='checkout__btn'>Submit</button>
        </Form>
      </Formik>
    </>
  );
};
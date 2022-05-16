import React from 'react';
import { useCartProvider } from '../../contexts/cart-context';
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { Product } from '../../types/interfaces';
import './Checkout.scss';
import '../../shared/utils.scss';


export const Checkout = () => {
  const { t } = useTranslation();
  const products = useCartProvider();

  let subTotal = 0;

  products.forEach( (product: Product) => {
    if(product && product.quantity){
      subTotal += (product.price * product.quantity);
    } 
  });

  return (
    <div style={{minHeight: '41rem'}}>
      <div className='shipping__container'>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            country: '',
            postalCode: '',
          }}
          onSubmit={values => {
          }}
        >
          {({ errors, touched }) => (
            <Form className='form__container'>
              <p style={{paddingLeft: '1rem', marginBottom: '1rem'}}>Shipping info</p>
              <div className='first_row'>
                <div className='input__container'>
                  <Field name="firstName" className="shipping__input" placeHolder={t('firstName')}/>
                  {errors.firstName && touched.firstName ? (
                    <div className="login__error">{errors.firstName}</div>
                  ) : null}
                </div>
                <div className='input__container'>
                  <Field name="lastName" className="shipping__input" placeHolder={t('lastName')}/>
                  {errors.lastName && touched.lastName ? (
                    <div className="login__error">{errors.lastName}</div>
                  ) : null}
                </div>
              </div>
              <div className='address__container'>
                <Field name="address" className="shipping__address" placeHolder={t('address')}/>
                {errors.address && touched.address ? (
                  <div className="login__error">{errors.address}</div>
                ) : null}
              </div>
              <div className='second_row'>
                <div className='input__container'>
                  <Field name="city" className="shipping__input" placeHolder={t('city')}/>
                  {errors.city && touched.city ? (
                    <div className="login__error">{errors.city}</div>
                  ) : null}
                </div>
                <div className='input__container'>
                  <Field name="state" className="shipping__input" placeHolder={t('state')}/>
                  {errors.state && touched.state ? (
                    <div className="login__error">{errors.state}</div>
                  ) : null}
                </div>
              </div>
              <div className='third_row'>
                <div className='input__container'>
                  <Field name="country" className="shipping__input " placeHolder={t('country')}/>
                  {errors.country && touched.country ? (
                    <div className="login__error">{errors.country}</div>
                  ) : null}
                </div>
                <div className='input__container'>
                  <Field name="postalCode" className="shipping__input" placeHolder={t('postalCode')}/>
                  {errors.postalCode && touched.postalCode ? (
                    <div className="login__error">{errors.postalCode}</div>
                  ) : null}
                </div>
              </div>
              <div className='payment__btn'>
                <Link to='/checkout'>
                  <Button primary={false} size={'medium'} label={'Continue to payment'}/>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
        <div className='checkout__recap'>
          { products.map( (product: Product) => {
            return(
              <div key={product.id}>
                <div className='checkout_product'>
                  <img className="checkout__img" src={product.image} alt="" />
                  <span style={{fontSize: '14px', marginRight: 'auto'}}>{product.name}</span>
                  <p style={{margin: '1rem'}}>{product.price.toLocaleString('en', {style: 'currency',currency: 'CAD'})}</p>
                </div>
              </div>
            );
          })
        
          }
          <span className='checkout__subtotal'>
            <p>Subtotal</p>
            <p>{subTotal.toLocaleString('en', {style: 'currency',currency: 'CAD'})}</p>
          </span>
        </div>
      </div>
    </div>
  );
};
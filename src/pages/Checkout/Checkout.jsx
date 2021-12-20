import React, { useState, useEffect } from 'react';
import { useCartProvider } from '../../contexts/cart-context';
import { Wizard, Steps, Step } from 'react-albus';
import processCheckoutPayment from '../../services/api';
import './Checkout.scss';
import '../../shared/utils.scss';


export const Checkout = () => {

  const products = useCartProvider();

  const [customerInfo, setCustomerInfo] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [postalcode, setPostalCode] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    let price = 0;
    products.forEach(x => {
      price += x.quantity * x.price;
    });
    setTotalPrice(price);
  }, [products]);

  const informationObjectCreator = () => {
    const data = {
      firstname: firstname,
      lastname: lastname,
      address: address,
      city: city,
      country: country,
      state: state,
      postalcode: postalcode,
      phone: phone
    };

    setCustomerInfo({data});
  };

  const payment = async (e) => {
    e.preventDefault();

    processCheckoutPayment(products);
  };

  return (
    <div className='shipping__container'>
      <Wizard>
        <Steps>
          <Step
            id="information"
            render={({next}) => (
              <div>
                <div className='topBlock'>
                  <h2>Checkout</h2>
                  <p>{totalPrice}$</p>
                </div>
                <form>
                  <input className='input__field' value={firstname} onChange={(e) => setFirstname(e.target.value)} name='Firstname' placeholder ='First name'/>
                  <input className='input__field' value={lastname} onChange={(e) => setLastname(e.target.value)} name='Lastname' placeholder ='Last name'/>
                  <input className='input__field' value={address} onChange={(e) => setAddress(e.target.value)} name='Address' placeholder ='Address'/>
                  <input className='input__field' value={city} onChange={(e) => setCity(e.target.value)} name='City' placeholder ='City'/>
                  <input className='input__field' value={country} onChange={(e) => setCountry(e.target.value)} name='Country' placeholder ='Country'/>
                  <input className='input__field' value={state} onChange={(e) => setState(e.target.value)} name='State' placeholder ='State'/>
                  <input className='input__field' value={postalcode} onChange={(e) => setPostalCode(e.target.value)} name='Postalcode' placeholder ='Postal code'/>
                  <input className='input__field' value={phone} onChange={(e) => setPhone(e.target.value)} name='Phone' placeholder ='Phone'/>
                  <button type='submit' className='checkout__btn' onClick={() => {informationObjectCreator(); next();}}>Continue to shipping</button>
                </form>
              </div>
            )}
          />
          <Step
            id="shipping"
            render={({ previous }) => (
              <div className='shipping'>
                <div className='topBlock'>
                  <h2>Checkout</h2>
                  <p>{totalPrice}$</p>
                </div>
                <h2>Ship to </h2>
                <div className='content'>
                  {customerInfo.data.firstname} {customerInfo.data.lastname}
                </div>
                <div className='content'>
                  {customerInfo.data.address}, {customerInfo.data.city}, {customerInfo.data.state}
                </div>
                <div className='shipping__method'>
                  <h2>Shipping method</h2>
                  <div className='content content__spacer'>
                    <input className='radioBtn__spacer--right' type="radio" name='shippingSelector'/>
                    <span className='margin__right--auto'>FedEx Ground Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className='content content__spacer'>
                    <input className='radioBtn__spacer--right' type="radio" name='shippingSelector'/>
                    <span className='margin__right--auto'>FedEx 2 Day</span>
                    <span>100.64$</span>
                  </div>
                  <div className='content content__spacer'>
                    <input className='radioBtn__spacer--right' type="radio" name='shippingSelector'/>
                    <span className='margin__right--auto'>FedEx Standard Overnight</span>
                    <span>124.16$</span>
                  </div>
                </div>
                <div className='display__center flexDirection__column'>
                  <button className='btn' onClick={payment}>Continue to payment</button>
                  <span className='display__center'>
                    <svg className='svg__dimension' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"viewBox="0 0 35.3 58.8" enableBackground="new 0 0 35.3 58.8" xmlSpace="preserve">
                      <path fillRule="evenodd" clipRule="evenodd" fill="#3E3E3E" d="M29.4,2.7L2.8,29.2c-0.2,0.3-0.2,0.8,0,1.1l26.6,26.5c0.2,0.3,0.7,0.3,1,0l3.5-3.4L10.8,30.3c-0.4-0.2-0.4-0.7,0-1.1L33.9,6.1l-3.5-3.5C30.2,2.2,29.7,2.2,29.4,2.7L29.4,2.7z"/>
                    </svg>
                    <button className='return' onClick={previous}>Return to information</button>
                  </span>
                </div>
              </div>
            )}
          />
        </Steps>
      </Wizard>
    </div>
  );
};
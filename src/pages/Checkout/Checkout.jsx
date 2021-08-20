import React, {useRef, useState} from 'react';
import { Wizard, Steps, Step } from 'react-albus';
import './Checkout.scss';
import '../../shared/utils.scss';


export const Checkout = () => {

  const [customerInfo, setCustomerInfo] = useState({});

  const firstname = useRef(null);
  const lastname = useRef(null);
  const address = useRef(null);
  const city = useRef(null);
  const country = useRef(null);
  const state = useRef(null);
  const postalcode = useRef(null);
  const phone = useRef(null);
  

  const informationObjectCreator = () => {
    const data = {
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      address: address.current.value,
      city: city.current.value,
      country: country.current.value,
      state: state.current.value,
      postalcode: postalcode.current.value,
      phone: phone.current.value
    };

    setCustomerInfo({data});
  };

  return (
    <div className='shipping__container'>
      <div className='topBlock'>
        <h2>Checkout</h2>
        <p>128.00$</p>
      </div>

      <Wizard>
        <Steps>
          <Step
            id="information"
            render={({next}) => (
              <div>
                <form>
                  <input className='input__field' ref={firstname} name='Firstname' placeholder ='First name'/>
                  <input className='input__field' ref={lastname} name='Lastname' placeholder ='Last name'/>
                  <input className='input__field' ref={address} name='Address' placeholder ='Address'/>
                  <input className='input__field' ref={city} name='City' placeholder ='City'/>
                  <input className='input__field' ref={country} name='Country' placeholder ='Country'/>
                  <input className='input__field' ref={state} name='State' placeholder ='State'/>
                  <input className='input__field' ref={postalcode} name='Postalcode' placeholder ='Postal code'/>
                  <input className='input__field' ref={phone} name='Phone' placeholder ='Phone'/>
                  <button type='submit' className='checkout__btn' onClick={() => {informationObjectCreator(); next();}}>Continue to shipping</button>
                </form>
              </div>
            )}
          />
          <Step
            id="shipping"
            render={({ next, previous }) => (
              <div className='shipping'>
                <h2>Ship to </h2>
                <div className='content'>
                  {customerInfo.data.firstname} {customerInfo.data.lastname}
                </div>
                <div className='content'>
                  {customerInfo.data.address}, {customerInfo.data.city}, {customerInfo.data.state}
                </div>
                <div className='shipping__method'>
                  <h2>Shipping method</h2>
                  <div className='content'>
                  Free FedEx Ground Shipping
                  </div>
                  <div className='content'>
                  FedEx 2 Day
                  </div>
                  <div className='content'>
                  FedEx Standard Overnight
                  </div>
                </div>
                <div className='display__center flexDirection__column'>
                  <button className='btn' onClick={next}>Continue to payment</button>
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
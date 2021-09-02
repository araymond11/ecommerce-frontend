require('dotenv').config();
const { REACT_APP_STRIPE_LAMBDA_API } = process.env;

const processCheckoutPayment = async(products) => {
  await fetch(REACT_APP_STRIPE_LAMBDA_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items: products
    }),
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return res.json().then(json => Promise.reject(json));
    })
    .then(res => {
      const url = res.url;
      window.location = url;
    })
    .catch(e => {
      console.error(e.error);
    });
};

export default processCheckoutPayment;
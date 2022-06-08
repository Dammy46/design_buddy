import React, { useState } from 'react'
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import './payment.css'
const Payment = () => {
   const {
      wrapperProps,
     getCardNumberProps,
     getExpiryDateProps,
     getCVCProps,
     getCardImageProps,
   } = usePaymentInputs();
   const [cardNumber, setCardNumber] = useState(Number)
   const [expiryDate, setExpiryDate] = useState(Number);
   const [cvc, setCvc] = useState(Number);
   
   const handleChangeCardNumber = (e) => {
      setCardNumber(e.target.value)
   }
      const handleChangeExpiryDate = (e) => {
        setExpiryDate(e.target.value);
   };
         const handleChangeCVC = (e) => {
           setCvc(e.target.value);
         };
  return (
    <div className="container mx-auto px-8 mt-16">
      <div className="grid grid-cols-2 gap-x-10">
        <div>
          <h4 className="h4 text-lg flex">Email</h4>
          <input
            type="email"
            className="border p-4 w-full my-3 rounded focus:outline-none"
            placeholder="Your-name@email.com"
          />
          <div className="border rounded">
            <PaymentInputsWrapper className="w-full" {...wrapperProps}>
              <svg {...getCardImageProps({ images })} />
              <input
                {...getCardNumberProps({ onChange: handleChangeCardNumber })}
                value={cardNumber}
                placeholder="4444 4444 4444 4444"
              />
            </PaymentInputsWrapper>
            <div className="flex">
              <input
                {...getExpiryDateProps({ onChange: handleChangeExpiryDate })}
                value={expiryDate}
              />
              <input
                {...getCVCProps({ onChange: handleChangeCVC })}
                value={cvc}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment
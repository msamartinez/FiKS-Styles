import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = 'pk_test_51N2EiLFrqTZ6LtI7ltdx9crTFUkF9mWuCVaUTHizQBhQCOM3qOSlUbJy6CdYWO4tjqoKvk9CfOAN5rbzQNyr4dZo00ZuzYAFfj'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}

export default StripeContainer;
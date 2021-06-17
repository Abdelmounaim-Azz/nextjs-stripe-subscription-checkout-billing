import { useState } from "react";
import axios from "axios";
import { Stripe, loadStripe } from "@stripe/stripe-js";

import { SVG1, SVG2, SVG3 } from "../svg/svg";
const ChoosePlan = () => {
  const handleBasicClick = async (e) => {
    try {
      const { data } = await axios.get("http://localhost:4242/config");
      const stripe = await loadStripe(data.publishableKey);
      const res = await axios.post(
        "http://localhost:4242/create-checkout-session",
        {
          priceId: data.basicPrice,
        }
      );
      stripe.redirectToCheckout({
        sessionId: res.data.sessionId,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handlePremiumClick = async (e) => {
    try {
      const { data } = await axios.get("http://localhost:4242/config");
      const stripe = await loadStripe(data.publishableKey);
      const res = await axios.post(
        "http://localhost:4242/create-checkout-session",
        {
          priceId: data.premiumPrice,
        }
      );
      stripe.redirectToCheckout({
        sessionId: res.data.sessionId,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleProClick = async (e) => {
    try {
      const { data } = await axios.get("http://localhost:4242/config");
      const stripe = await loadStripe(data.publishableKey);
      const res = await axios.post(
        "http://localhost:4242/create-checkout-session",
        {
          priceId: data.proPrice,
        }
      );
      stripe.redirectToCheckout({
        sessionId: res.data.sessionId,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className='mb-3'>
        <h1 className='text-center section-4-heading'>Subscribe to a plan</h1>
        <div className='main'>
          <table className='price-table'>
            <tbody>
              <tr className='price-table-head '>
                <td className='text-center'>
                  Basic
                  <br />
                  <small style={{ fontSize: 12 + "px", fontWeight: 400 }}>
                    fee for up to 1000 emails
                  </small>
                </td>
                <td>
                  Pro
                  <br />
                  <small style={{ fontSize: 12 + "px", fontWeight: 400 }}>
                    fee for up to 10000 emails
                  </small>
                </td>
                <td className='green-width'>
                  Pro
                  <br />
                  <small style={{ fontSize: 12 + "px", fontWeight: 400 }}>
                    Unlimited leads.
                  </small>
                </td>
              </tr>
              <tr>
                <td className='price text-center'>
                  <SVG1 />
                  <br />
                  &euro;9/mo
                  <br />
                  <button id='checkout' onClick={handleBasicClick}>
                    Choose Plan
                  </button>
                </td>
                <td className='price'>
                  <SVG2 />
                  <br />
                  &euro;45/mo
                  <br />
                  <button id='checkout' onClick={handleProClick}>
                    Choose Plan
                  </button>
                </td>
                <td className='price'>
                  <SVG3 />
                  <br />
                  &euro;99/mo
                  <br />
                  <button id='checkout' onClick={handlePremiumClick}>
                    Choose Plan
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default ChoosePlan;

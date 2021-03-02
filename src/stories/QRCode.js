import React, { useEffect, useState } from "react";
import qrCode from 'qrcode';

export function QRCode() {
  const [inputValue, setInputValue] = useState('');
  const [qrText, setQrText] = useState('');
  const [qrPng, setQrPng] = useState('');
  useEffect(() => {
    async function getQrPng(text) {
      try {
        console.log(`QR Text: ${text}`)
        const img = await qrCode.toDataURL(text);
        setQrPng(img);
      } catch(err) {
        console.log(err);
      }
    }
    getQrPng(qrText);
  }, [qrText]);

  const handleChange = e => {
    setInputValue(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    setQrText(inputValue);
  }

  return (
    <div>
      <h3>QR Encode a String</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <input type='text' placeholder='String to Encode' onChange={handleChange} />
        </p>
        <p>
          <button type='submit'>Submit</button>
        </p>
      </form>
      <img src={qrPng} alt='QR Code'/>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import {Html5QrcodeScanner} from "html5-qrcode"; // Use named import
import DrugDetails from './DrugDetails';

const Result = () => {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5, 
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }
  }, []);

  return (
      <>
      {scanResult ? <DrugDetails scanRes={scanResult} />: 
      <div id='reader' className='scanner mx-auto px-8 border rounded-lg text-black w-4/6 cursor-pointer'></div>}
      </>

  );
};

export default Result;

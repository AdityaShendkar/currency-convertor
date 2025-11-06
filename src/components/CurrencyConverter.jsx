import { useState, useEffect } from "react";
import CurrencyDropDown from "./CurrencyDropDown"

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  // AllCurrencies => https://api.frankfurter.dev/v1/currencies

  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.dev/v1/currencies");
      const data = await res.json();
      setCurrencies(Object.keys(data));
      // console.log(data)
    } catch (error) {
      console.error("Fetching error", error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);
  // console.log(currencies);

  //conversion logic
  const convertCurrency = () => {};

  const handleFavorite = () => {};

  // Conversion =>https://api.frankfurter.dev/v1/latest?base=usd&symbols=inr
  return (
    <div className=" max-w-2xl  mx-auto my-10 bg-white rounded-md px-4 py-4 shadow-md ">
      <h2 className=" mb-5 text-3xl font-medium text-gray-700 ">
        Currency Converter
      </h2>

      <div>
        
        <CurrencyDropDown
          currencies={currencies}
          title="From: "
          currency={fromCurrency}
          setCurrency={setFromCurrency}
          handleFavorite={handleFavorite}
        />
        {/* Button swap */}
        <CurrencyDropDown
          currencies={currencies}
          title="To: "
          currency={toCurrency}    
          setCurrency={setToCurrency}     
          handleFavorite={handleFavorite}
        />
      </div>

      <div>
        <label
          htmlFor="amount"
          className=" block text-sm font-medium text-gray-700 "
        >
          Amount:
        </label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          name=""
          id=""
          className=" w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1 "
        />
      </div>
      <div className="flex justify-end mt-6">
        <button
          onClick={convertCurrency}
          className={`px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        >
          Convert
        </button>
      </div>
      <div className=" mt-4 text-lg font-medium text-center text-green-600">
        Converted Amount: 1000USD
      </div>
    </div>
  );
};





export default CurrencyConverter;



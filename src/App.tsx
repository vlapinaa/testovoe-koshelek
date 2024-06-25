import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "store";
import { changeValue } from "./appSlice";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const usd = useSelector((state: RootState) => state.converting.usd);
  const eur = useSelector((state: RootState) => state.converting.eur);

  const handleChange = (name: string, value: string) => {
    if (/\d/.test(value) || value === "") {
      const payload = {
        name,
        value: value || 0,
      };

      dispatch(changeValue(payload));
    }
  };

  return (
    <div className="container">
      <h1 className="header">Currency Converter</h1>
      <div className="inputs-container">
        <div className="input-container">
          <label htmlFor="inputUsd" className="label">
            USD
          </label>
          <input
            type="text"
            id="inputUsd"
            className="input"
            placeholder="Введите число"
            value={usd}
            onChange={(e) => handleChange("usd", e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="inputEur" className="label">
            EUR
          </label>
          <input
            type="text"
            id="inputEur"
            className="input"
            placeholder="Введите число"
            value={eur}
            onChange={(e) => handleChange("eur", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

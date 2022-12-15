import React, { useState } from "react";

function Tasks(props) {
  const [inputName, setInputName] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [inputBank, setInputBank] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.floor(Math.random() * 10000)),
      nametext: inputName,
      numbertext: inputNumber,
      banktext: inputBank,
    });

    setInputName("");
    setInputNumber("");
    setInputBank("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-column">
      <input
        className="inputs"
        type="text"
        placeholder="Add Account Name"
        onChange={(e) => setInputName(e.target.value)}
        value={inputName}
        required
      ></input>
      <input
        className="inputs"
        type="text"
        placeholder="Add Account Number"
        onChange={(e) => setInputNumber(e.target.value)}
        value={inputNumber}
        required
      ></input>

      <select
        name="cars"
        id="cars"
        value={inputBank}
        onChange={(e) => setInputBank(e.target.value)}
        required
      >
        <option >Choose Bank</option>
        <option value="Habib Bank Ltd.">HBL</option>
        <option value="United Bank Ltd.">UBL</option>
        <option value="MCB">MCB</option>
        <option value="Meezan Bank">Meezan</option>
        <option value="Soneri Bank">Soneri</option>
        <option value="Easy Paisa">EasyPaisa</option>
        <option value="Jazz Cash">JazzCash</option>
      </select>
      <button className="submit-button">Add</button>
    </form>
  );
}

export default Tasks;

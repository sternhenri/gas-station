import React, { useState } from "react";

const TextInputForm: React.FC = () => {
  const [inputs, setInputs] = useState<string[]>([""]);

  const addInput = () => {
    setInputs([...inputs, ""]);
  };

  const removeInput = (index: number) => {
    const updatedInputs = [...inputs];
    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);
  };

  const handleInputChange = (index: number, value: string) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);
  };

  const handleSubmit = () => {
    // You can now use the 'inputs' array as the user inputs.
    console.log("User Inputs: ", inputs);

    
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <div key={index} style={{ display: "flex" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
          <button onClick={() => removeInput(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addInput}>Add Recipient</button>
      <div className="submit-button">
        <button onClick={handleSubmit}>Fill 'em up!</button>
      </div>
    </div>
  );
};

export default TextInputForm;

import { useState } from "react";

export default function SyncedInputs() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <Input text={text} onChange={handleChange} label="First input" />
      <Input text={text} onChange={handleChange} label="Second input" />
    </>
  );
}

function Input({ label, onChange, text }) {
  return (
    <label>
      {label} <input value={text} onChange={onChange} />
    </label>
  );
}

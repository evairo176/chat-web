import React from "react";

function ButtonSubmit({ type, isLoading, title }) {
  return (
    <button type={type} className="btn" disabled={isLoading}>
      {title}
    </button>
  );
}

export default ButtonSubmit;

import React, { useState } from "react";

const Footer = () => {
  const [inputValue, setInputValue] = useState("");

  function handleBlur() {
      
    if (!inputValue.includes("@")) {
      alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
    }
  }
  return (
    <footer className="footer">
      <div className="footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div>
        Laissez-nous votre mail :
        <input
          type="mail"
          value={inputValue}
          placeholder="Entrez votre email"
          onChange={(event) => setInputValue(event.target.value)}
          onBlur={handleBlur}
        ></input>
      </div>
    </footer>
  );
};

export default Footer;

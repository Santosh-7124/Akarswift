import React, { useEffect } from "react";

const Form = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src =
      "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.jotformEmbedHandler("iframe[id='JotFormIFrame-243300706257046']", "https://form.jotform.com/");
    `;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
      <iframe
        id="JotFormIFrame-243300706257046"
        title="Akarswift"
        onLoad={() => window.parent.scrollTo(0, 0)}
        allowtransparency="true"
        allow="geolocation; microphone; camera; fullscreen"
        src="https://form.jotform.com/243300706257046"
        frameBorder="0"
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          border: "none",
        }}
        scrolling="no"
      />
  );
};

export default Form;

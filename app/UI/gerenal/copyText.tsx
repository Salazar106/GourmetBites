'use client'

import { useState } from "react";

export const CopyText = ({text}) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
          .then(() => {
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 500); // Reset copied state after 1.5 seconds
          })
          .catch((err) => {
            console.error('Error al copiar el texto: ', err);
          });
      };
    


  return (
    <span
        className="font-bold text-wite"
        style={{ cursor: 'pointer', textDecoration: copied ? 'underline' : 'none' }}
        onClick={copyToClipboard}
    >
      {copied ? 'Copied!' : text}
    </span>
  );
};
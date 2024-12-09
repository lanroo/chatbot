import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/App.css";

const QRCode = () => {
  const [qrCode, setQrCode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const QR_URL = "http://localhost:3000/get-qr"; 

  const fetchQrCode = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(QR_URL);
      setQrCode(response.data.qrCode); // Salva o QR Code
    } catch (err) {
      setError("Erro ao carregar o QR Code."); // Mensagem de erro
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQrCode();
  }, []);

  return (
    <div className="qr-container">
      <h2>Conectar ao Chatbot</h2>
      <p>Escaneie o QR Code abaixo para conectar ao WhatsApp:</p>
      {loading && <p className="loading">Carregando QR Code...</p>}
      {error && <p className="error">{error}</p>}
      {qrCode && <img src={qrCode} alt="QR Code" className="qr-code" />}
      <button onClick={fetchQrCode} className="reload-button">
        Recarregar QR Code
      </button>
    </div>
  );
};

export default QRCode;

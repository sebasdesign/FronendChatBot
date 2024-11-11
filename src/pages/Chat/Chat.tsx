import { useState } from "react";

interface Message {
  from: "user" | "bot";
  text: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isFirstMessage, setIsFirstMessage] = useState(true);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const trimmedInput = input.trim().toLowerCase();

    // Verificar si es el primer mensaje y no es "hola"
    if (isFirstMessage && trimmedInput !== "hola") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { from: "user", text: input },
        {
          from: "bot",
          text: "Por favor, comienza la conversación saludando con 'hola'",
        },
      ]);
      setInput("");
      return;
    }

    fetch("http://localhost:5000/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mensaje: input }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { from: "user", text: input },
          { from: "bot", text: data.respuesta },
        ]);
        setInput("");
        if (isFirstMessage) {
          setIsFirstMessage(false);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-gray-100 p-4 rounded-lg mb-4 min-h-[400px] max-h-[600px] overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 ${
              msg.from === "bot"
                ? "bg-blue-100 p-3 rounded-lg"
                : "bg-green-100 p-3 rounded-lg ml-auto"
            }`}
            style={{ maxWidth: "80%" }}
          >
            <div className="font-bold mb-1">
              {msg.from === "bot" ? "Chatbot 🤖" : "Usuario 👤"}
            </div>
            <div>{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          className="flex-1 p-2 border rounded"
          placeholder={
            isFirstMessage
              ? "Comienza saludando con 'hola'"
              : "Escribe tu mensaje..."
          }
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;

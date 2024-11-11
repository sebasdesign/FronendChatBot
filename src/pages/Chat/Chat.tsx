import PopPup from "@/components/PopPup";
import { useState } from "react";
import { IoSendOutline } from "react-icons/io5";

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
    <div className="p-4 bg-black flex flex-col items-center justify-center h-screen">
      <div className="absolute right-6 top-6"><PopPup/></div>
      <div className="bg-black p-4 w-7/12 mb-4 h-5/6 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 ${
              msg.from === "bot"
                ? "bg-white p-3 rounded-lg"
                : "bg-red-800 p-3 rounded-lg ml-auto"
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
      <div className="flex gap-2 w-7/12 border rounded">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          className="flex-1 p-2 bg-transparent text-white"
          placeholder={
            isFirstMessage
              ? "Comienza saludando con 'hola'"
              : "Escribe tu mensaje..."
          }
          
        />
         <button
          onClick={handleSendMessage}
          className="text-white px-4 hover:scale-110"
        >
          <IoSendOutline className="size-5"/>
        </button>
       
      </div>
      
    </div>
  );
};

export default Chat;

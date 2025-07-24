import { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  MessageCircle,
  X,
  Send,
  ChevronDown,
  CheckCheck,
  ArrowUp,
} from "lucide-react";
import BotAvatar from "/images/ocid_logo.png";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [faqList, setFaqList] = useState([]);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! How can I help you today?",
      time: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    axios.get("/api/faqs").then((res) => setFaqList(res.data));
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatTime = (date) =>
    new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const send = async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      from: "user",
      text,
      time: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const { data } = await axios.post("/api/faqs/chat", { message: text });
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: data.answer,
          time: new Date(),
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Sorry, I couldn’t connect to the server.",
          time: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Chatbot Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className={`fixed z-50 right-6 transition-all duration-300 
            ${showBackToTop ? "bottom-24" : "bottom-6"} 
            bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl`}
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 max-w-[90vw] h-[70vh] bg-white shadow-2xl rounded-xl flex flex-col z-50 border text-sm">
          {/* Header */}
          <div className="flex items-center justify-between bg-green-600 text-white px-4 py-2 rounded-t-xl">
            <span className="font-semibold">OCID FAQ Assistant</span>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-2 ${
                  m.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {/* Bot Avatar */}
                {m.from === "bot" && (
                  <div className="flex flex-col items-center">
                    <img
                      src={BotAvatar}
                      alt="Bot"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-[10px] text-gray-400 mt-0.5">
                      OCID Bot
                    </span>
                  </div>
                )}

                {/* Message Bubble */}
                <div className="max-w-[75%]">
                  <div
                    className={`px-3 py-2 rounded-xl text-left ${
                      m.from === "user"
                        ? "bg-green-100 text-green-900 rounded-br-none"
                        : "bg-white text-gray-800 rounded-bl-none border"
                    }`}
                  >
                    {m.text}
                  </div>
                  <div className="text-[10px] mt-1 text-gray-500 flex items-center gap-1">
                    {formatTime(m.time)}
                    {m.from === "user" && (
                      <CheckCheck className="w-3 h-3 text-green-500" />
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2 items-center">
                <div className="w-6 h-6 rounded-full bg-gray-200" />
                <div className="flex items-center gap-1 px-3 py-2 bg-white rounded-xl border">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:.1s]" />
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:.2s]" />
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:.3s]" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* FAQ Suggestions */}
          {faqList.length > 0 && (
            <details className="px-4 py-2 border-t bg-white">
              <summary className="cursor-pointer flex items-center gap-1 text-gray-600 text-xs mb-1">
                Quick Questions <ChevronDown className="w-3 h-3" />
              </summary>
              <div className="flex flex-wrap gap-2 mt-2">
                {faqList.slice(0, 8).map((faq) => (
                  <button
                    key={faq.id}
                    onClick={() => send(faq.question)}
                    className="bg-green-50 hover:bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs"
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            </details>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="border-t px-3 py-2 flex items-center gap-2 bg-white"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 text-sm px-3 py-2 rounded-md border bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="text-green-600 hover:text-green-700"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;

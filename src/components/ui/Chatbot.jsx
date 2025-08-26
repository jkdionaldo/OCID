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
  const [faqError, setFaqError] = useState(null);
  const bottomRef = useRef(null);

  // Create a separate axios instance for chatbot to avoid auth interceptors
  const chatbotApi = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  useEffect(() => {
    // Handle FAQ loading with better error handling
    const loadFAQs = async () => {
      try {
        console.log(
          "Loading FAQs from:",
          `${chatbotApi.defaults.baseURL}/faqs`
        );
        const response = await chatbotApi.get("/faqs");
        console.log("FAQ Response:", response.data);

        // Handle different response structures
        const faqData = response.data?.data || response.data || [];
        setFaqList(Array.isArray(faqData) ? faqData : []);
        setFaqError(null);

        console.log("FAQs loaded successfully:", faqData);
      } catch (error) {
        console.error("Error loading FAQs:", error);
        setFaqError(error.message);
        setFaqList([]);

        // Add a system message about FAQ unavailability
        if (error.response?.status === 404) {
          console.log(
            "FAQ endpoint not found - continuing without suggestions"
          );
        } else {
          console.log(
            "FAQ service unavailable - continuing without suggestions"
          );
        }
      }
    };

    loadFAQs();
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
      console.log("Sending message to chat API:", text);
      const { data } = await chatbotApi.post("/faqs/chat", { message: text });
      console.log("Chat API response:", data);

      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text:
            data.answer ||
            "I'm sorry, I couldn't process your request right now.",
          time: new Date(),
        },
      ]);
    } catch (err) {
      console.error("Chat API error:", err);
      let errorMessage =
        "Sorry, I couldn't connect to the server. Please try again later.";

      if (err.response?.status === 404) {
        errorMessage =
          "I'm sorry, the chat service is not available right now.";
      } else if (err.code === "ECONNABORTED") {
        errorMessage = "The request timed out. Please try again.";
      }

      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: errorMessage,
          time: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Chatbot Floating Button - Adjusted for BackToTop coexistence */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className={`fixed z-50 right-6 transition-all duration-300 
            ${showBackToTop ? "bottom-20" : "bottom-6"} 
            bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl
            transform hover:scale-105 active:scale-95`}
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 max-w-[90vw] h-[70vh] bg-white shadow-2xl rounded-xl flex flex-col z-50 border text-sm">
          {/* Header */}
          <div className="flex items-center justify-between bg-green-600 text-white px-4 py-3 rounded-t-xl">
            <div className="flex items-center gap-2">
              <img
                src={BotAvatar}
                alt="OCID Bot"
                className="w-6 h-6 rounded-full"
              />
              <span className="font-semibold">OCID FAQ Assistant</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="hover:bg-green-700 p-1 rounded transition-colors"
              aria-label="Close chat"
            >
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
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                  <img
                    src={BotAvatar}
                    alt="Bot typing"
                    className="w-4 h-4 rounded-full object-cover"
                  />
                </div>
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
                    className="bg-green-50 hover:bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs transition-colors"
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            </details>
          )}

          {/* Show FAQ error or loading state */}
          {faqError && (
            <div className="px-4 py-2 border-t bg-white">
              <div className="text-xs text-gray-500">
                Quick questions unavailable
              </div>
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="border-t px-3 py-2 flex items-center gap-2 bg-white rounded-b-xl"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 text-sm px-3 py-2 rounded-md border bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            <button
              type="submit"
              className="text-green-600 hover:text-green-700 p-1 rounded transition-colors"
              disabled={!input.trim()}
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

// import { useState } from 'react';
// import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

// // Dummy data to simulate AI responses
// const aiResponses = [
//   {
//     id: 1,
//     message: "Hello! I'm your virtual AI assistant. My future purpose is to provide you with detailed insights on Real World Asset (RWA) tokenized real estate assets. Ask me anything about how RWA works!"
//   },
//   {
//     id: 2,
//     message: "RWA tokenization enables the digitization of physical assets, such as real estate, into tokenized forms that can be traded and owned fractionally on blockchain platforms."
//   },
//   {
//     id: 3,
//     message: "I can help you understand how tokenized assets improve liquidity, provide fractional ownership, and open up investment opportunities in traditionally illiquid assets like real estate."
//   },
//   {
//     id: 4,
//     message: "In the future, I will provide real-time data, trends, and performance analysis of tokenized real estate assets to help you make informed decisions."
//   },
//   {
//     id: 5,
//     message: "Tokenized real estate assets can be traded on secondary markets, providing investors with more flexibility and opportunities to diversify their portfolios."
//   },
//   {
//     id: 6,
//     message: "Blockchain technology ensures the security and transparency of transactions, reducing the risk of fraud and increasing trust among investors."
//   },
//   {
//     id: 7,
//     message: "Fractional ownership allows investors to own a portion of a high-value asset, making real estate investment more accessible to a broader audience."
//   },
//   {
//     id: 8,
//     message: "Smart contracts automate and streamline the process of buying, selling, and managing tokenized assets, reducing the need for intermediaries."
//   },
//   // Add more responses here for variety...
// ];

// const AccessAiPage = () => {
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       type: 'ai',
//       content: aiResponses[0].message,
//     }
//   ]);
//   const [userInput, setUserInput] = useState('');
//   const [aiResponseIndex, setAiResponseIndex] = useState(1);

//   // Handles sending the message
//   const handleSendMessage = () => {
//     if (userInput.trim()) {
//       // Add the user's message to the chat
//       setMessages([...messages, { id: messages.length + 1, type: 'user', content: userInput }]);

//       // Simulate AI response
//       setTimeout(() => {
//         const aiMessage = aiResponses[aiResponseIndex % aiResponses.length];
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { id: prevMessages.length + 1, type: 'ai', content: aiMessage.message }
//         ]);
//         setAiResponseIndex(aiResponseIndex + 1); // Cycle through responses
//       }, 1000);

//       setUserInput(''); // Clear input field
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100 p-4 md:p-10">
//       {/* Header */}
//       <div className="text-center mb-6">
//         <h1 className="text-4xl font-bold text-gray-800">Access AI</h1>
//         <p className="text-gray-600 mt-2">Ask anything about RWA Tokenized Real Estate Assets</p>
//       </div>

//       {/* Chat Area */}
//       <div className="flex flex-col justify-between bg-white shadow-lg rounded-lg max-w-4xl w-full mx-auto p-6 space-y-4 overflow-hidden">
//         <div className="overflow-y-auto h-96 space-y-3">
//           {messages.map((msg) => (
//             <div
//               key={msg.id}
//               className={`flex ${msg.type === 'ai' ? 'justify-start' : 'justify-end'}`}
//             >
//               <div
//                 className={`rounded-lg p-4 max-w-xs text-white ${msg.type === 'ai' ? 'bg-blue-500' : 'bg-green-500'} ${msg.type === 'ai' ? 'rounded-tl-none' : 'rounded-tr-none'} shadow-md`}
//               >
//                 {msg.content}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Input Field */}
//         <div className="flex items-center space-x-2">
//           <input
//             type="text"
//             className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Type your question..."
//             value={userInput}
//             onChange={(e) => setUserInput(e.target.value)}
//           />
//           <button
//             onClick={handleSendMessage}
//             className="bg-blue-500 text-white rounded-full p-3 hover:bg-blue-600 transition-all"
//           >
//             <PaperAirplaneIcon className="h-6 w-6" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccessAiPage;
import { useState, useRef, useEffect } from 'react';
import { PaperAirplaneIcon, UserCircleIcon } from '@heroicons/react/24/solid';

// Expanded dummy data to simulate AI responses
const aiResponses = [
  {
    id: 1,
    message: "Hello! I'm your virtual AI assistant. My purpose is to provide you with detailed insights on Real World Asset (RWA) tokenized real estate assets. How can I assist you today?"
  },
  {
    id: 2,
    message: "RWA tokenization enables the digitization of physical assets, such as real estate, into tokenized forms that can be traded and owned fractionally on blockchain platforms. This opens up new possibilities for investment and asset management."
  },
  {
    id: 3,
    message: "One of the key benefits of tokenized assets is improved liquidity. Traditional real estate investments can be illiquid, but tokenization allows for easier buying, selling, and trading of fractional ownership."
  },
  {
    id: 4,
    message: "Fractional ownership through tokenization democratizes access to real estate investments. It allows investors to diversify their portfolios with smaller amounts of capital, reducing barriers to entry."
  },
  {
    id: 5,
    message: "Tokenization can also increase transparency in real estate transactions. All ownership records and transactions are recorded on the blockchain, providing an immutable and easily auditable history."
  },
  {
    id: 6,
    message: "Smart contracts play a crucial role in RWA tokenization. They can automate many processes, such as dividend distribution, voting rights, and compliance checks, reducing administrative overhead."
  },
  {
    id: 7,
    message: "Tokenized real estate assets can potentially offer greater liquidity compared to traditional real estate investments, as they can be traded 24/7 on global digital asset exchanges."
  },
  {
    id: 8,
    message: "It's important to note that while tokenization offers many benefits, it also comes with its own set of challenges, such as regulatory compliance and the need for robust technological infrastructure."
  },
  {
    id: 9,
    message: "Do you have any specific questions about RWA tokenization or its impact on the real estate market? I'd be happy to dive deeper into any aspect you're particularly interested in."
  },
];

const AccessAiPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: aiResponses[0].message,
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [aiResponseIndex, setAiResponseIndex] = useState(1);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (userInput.trim()) {
      setMessages([...messages, { id: messages.length + 1, type: 'user', content: userInput }]);
      setUserInput('');
      setIsTyping(true);

      setTimeout(() => {
        const aiMessage = aiResponses[aiResponseIndex % aiResponses.length];
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: prevMessages.length + 1, type: 'ai', content: aiMessage.message }
        ]);
        setAiResponseIndex(aiResponseIndex + 1);
        setIsTyping(false);
      }, 1500 + Math.random() * 1000); // Random delay between 1.5 and 2.5 seconds
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-10">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-indigo-800">Access AI</h1>
        <p className="text-indigo-600 mt-2">Your RWA Tokenized Real Estate Assets Expert</p>
      </div>

      {/* Chat Area */}
      <div className="bg-white shadow-2xl rounded-2xl max-w-4xl w-full mx-auto mb-6">
        <div className="p-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.type === 'ai' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`flex items-end space-x-2 ${msg.type === 'ai' ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {msg.type === 'ai' ? (
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                    AI
                  </div>
                ) : (
                  <UserCircleIcon className="w-8 h-8 text-green-500" />
                )}
                <div
                  className={`rounded-2xl p-4 max-w-xs lg:max-w-md ${msg.type === 'ai'
                      ? 'bg-indigo-100 text-indigo-800'
                      : 'bg-green-100 text-green-800'
                    }`}
                >
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-200 rounded-full px-4 py-2">
                AI is typing...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Field */}
        <div className="flex items-center space-x-2 bg-gray-100 p-4 rounded-b-2xl">
          <input
            type="text"
            className="w-full bg-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Ask about RWA tokenization..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            className="bg-indigo-500 text-white rounded-full p-3 hover:bg-indigo-600 transition-all transform hover:scale-105"
          >
            <PaperAirplaneIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessAiPage;

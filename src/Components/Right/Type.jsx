import React, { useState } from 'react';
import { IoMdSend } from "react-icons/io";
import useSendMessage from "../../context Api/useSendMessage";

function Type() {
  const { loading, sendMessages } = useSendMessage();
  const [message, setMessage] = useState("");  // Corrected this line

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      await sendMessages(message);
      setMessage("");  // Clears the input field
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-1 h-[8vh] text-center bg-gray-800">
          <div className="w-[70%] mx-4">
            <input
              type="text"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);  // Updates the message state
              }}
              placeholder="Type here"
              className="border-gray-700 border-[1px] rounded-lg flex items-center py-3 px-3 w-full grow outline-none bg-slate-700"
            />
          </div>
          <button className="text-3xl" type="submit">
            <IoMdSend />
          </button>
        </div>
      </form>
    </>
  );
}

export default Type;
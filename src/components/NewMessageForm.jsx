import React from 'react';

const sciFiRecipients = [
  'Galactic Council',
  'Quantum AI',
  'Time Patrol',
  'Xenobiology Lab',
  'Starship Nexus',
  'Interstellar Trade Federation',
  'Psionic Research Institute',
  'Galactic Archives',
  'Cybernetic Enhancements Corp',
  'Planetary Defense Network',
];

const NewMessageForm = ({ setShowNewMessage }) => (
  <div className="absolute inset-0 bg-[#b73616]/90 flex items-center justify-center">
    <div className="bg-[#b73616] p-6 rounded-lg w-96">
      <h3 className="text-xl font-bold mb-4">New Transmission</h3>
      <select className="w-full bg-[#b73616] text-[#ffd0a8] border border-[#ffd0a8] rounded p-2 mb-4">
        {sciFiRecipients.map((recipient, index) => (
          <option key={index} value={recipient}>{recipient}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Subject"
        className="w-full bg-[#b73616] text-[#ffd0a8] border border-[#ffd0a8] rounded p-2 mb-4"
      />
      <textarea
        placeholder="Message content"
        className="w-full bg-[#b73616] text-[#ffd0a8] border border-[#ffd0a8] rounded p-2 mb-4"
        rows="5"
      ></textarea>
      <div className="flex justify-between">
        <button
          onClick={() => setShowNewMessage(false)}
          className="bg-[#ffd0a8] text-[#b73616] px-4 py-2 rounded"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            // Implement send functionality
            setShowNewMessage(false);
          }}
          className="bg-[#ffd0a8] text-[#b73616] px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  </div>
);

export default NewMessageForm;
'use client';
import { useState } from 'react';

export default function Home() {
  const [address, setAddress] = useState('');
  const [transactions, setTransactions] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Address: ', address)
    const response = await fetch(`/api/getTransactions?address=${address}`);
    console.log('Response: ', response)
    const data = await response.json();
    setTransactions(data.result);
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Ethereum Address"
          className="flex-grow p-2 border border-gray-300 rounded text-black focus:outline-pink-300"
          spellCheck="false"
        />
        <button type="submit" className="ml-2 p-2 bg-pink-300 text-white rounded">Submit</button>
      </form>
      {transactions && (
        <ul className="mt-4">
          {transactions.map((tx, index) => (
            <li key={index} className="p-2 border-b border-gray-300">{tx.hash}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

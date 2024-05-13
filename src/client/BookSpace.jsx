import React, { useState } from 'react';

const BookingForm = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [duration, setDuration] = useState('');
  const [amount, setAmount] = useState('');

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleCalculateAmount = () => {
    // Calculate duration
    const start = new Date(startTime);
    const end = new Date(endTime);
    const diff = Math.abs(end - start);
    const hours = Math.ceil(diff / (1000 * 60 * 60));

    setDuration(hours);

    // Calculate amount (assuming a simple hourly rate)
    const hourlyRate = 50; // Example hourly rate
    const bookingAmount = hours * hourlyRate;
    setAmount(bookingAmount);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-xl">
      <h2 className="text-xl font-semibold mb-4">Book Space</h2>
      <div className="mb-4">
        <label htmlFor="start-time" className="block text-gray-700 font-semibold mb-2">Start Time</label>
        <input type="datetime-local" id="start-time" value={startTime} onChange={handleStartTimeChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="end-time" className="block text-gray-700 font-semibold mb-2">End Time</label>
        <input type="datetime-local" id="end-time" value={endTime} onChange={handleEndTimeChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
      </div>
      <button onClick={handleCalculateAmount} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Calculate Amount</button>
      {duration && amount && (
        <div className="mt-4">
          <p><span className="font-semibold">Duration:</span> {duration} hours</p>
          <p><span className="font-semibold">Amount:</span> ${amount}</p>
        </div>
      )}
    </div>
  );
};

export default BookingForm;

import React, { useState, useEffect, useRef } from 'react';

const PriceCalculator = ({ carPrice = 999000 }) => {
  const emiCardRef = useRef(null);

  useEffect(() => {
    const card = emiCardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--glow-x', `${x}%`);
      card.style.setProperty('--glow-y', `${y}%`);
      card.style.setProperty('--glow-intensity', '1');
    };

    const handleMouseLeave = () => {
      card.style.setProperty('--glow-intensity', '0');
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  const [loanAmount, setLoanAmount] = useState(carPrice);
  const [downPayment, setDownPayment] = useState(200000);
  const [duration, setDuration] = useState(60);
  const [emi, setEmi] = useState(0);

  const minLoan = 100000;
  const maxLoan = Math.round(carPrice * 1.5);
  const minDown = 0;
  const maxDown = Math.round(carPrice * 0.9);
  const minDuration = 12;
  const maxDuration = 84;
  const interestRate = 9.5;

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, downPayment, duration]);

  const calculateEMI = () => {
    const principal = Math.max(0, carPrice - downPayment);
    const monthlyRate = interestRate / 12 / 100;
    const numberOfPayments = duration;

    if (principal > 0 && numberOfPayments > 0 && monthlyRate > 0) {
      const emiValue =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setEmi(Math.round(emiValue));
    } else {
      setEmi(0);
    }
  };

  const formatCurrency = (value) => {
    return `₹${(value / 1000).toFixed(0)}k`;
  };

  const formatFullCurrency = (value) => {
    return `₹${value.toLocaleString('en-IN')}`;
  };

  return (
    <div className="max-w-5xl mx-auto relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 shadow-2xl overflow-hidden glass-effect hover-lift">
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/40 via-gray-900/60 to-blue-900/40"></div>
      <div className="relative z-10">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">EMI Calculator</h2>
      
      <div className="space-y-8">
        {/* Loan Amount Slider */}
        <div className="space-y-3">
          <div className="flex justify-between items-center mb-2">
            <label className="text-gray-300 font-medium">Loan Amount</label>
            <input
              type="number"
              min={minLoan}
              max={maxLoan}
              value={loanAmount}
              onChange={(e) => {
                const value = Math.min(maxLoan, Math.max(minLoan, parseInt(e.target.value) || minLoan));
                setLoanAmount(value);
              }}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg w-32 text-right border border-gray-700 focus:border-purple-500 focus:outline-none"
            />
          </div>
          <input
            type="range"
            min={minLoan}
            max={maxLoan}
            step={10000}
            value={loanAmount}
            onChange={(e) => setLoanAmount(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
            style={{
              background: `linear-gradient(to right, #9333ea 0%, #9333ea ${((loanAmount - minLoan) / (maxLoan - minLoan)) * 100}%, #374151 ${((loanAmount - minLoan) / (maxLoan - minLoan)) * 100}%, #374151 100%)`
            }}
          />
          <div className="flex justify-between text-sm text-gray-400">
            <span>{formatCurrency(minLoan)}</span>
            <span>{formatCurrency(maxLoan)}</span>
          </div>
        </div>

        {/* Down Payment Slider */}
        <div className="space-y-3">
          <div className="flex justify-between items-center mb-2">
            <label className="text-gray-300 font-medium">Down Payment</label>
            <input
              type="number"
              min={minDown}
              max={maxDown}
              value={downPayment}
              onChange={(e) => {
                const value = Math.min(maxDown, Math.max(minDown, parseInt(e.target.value) || minDown));
                setDownPayment(value);
              }}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg w-32 text-right border border-gray-700 focus:border-green-500 focus:outline-none"
            />
          </div>
          <input
            type="range"
            min={minDown}
            max={maxDown}
            step={10000}
            value={downPayment}
            onChange={(e) => setDownPayment(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-600"
            style={{
              background: `linear-gradient(to right, #10b981 0%, #10b981 ${((downPayment - minDown) / (maxDown - minDown)) * 100}%, #374151 ${((downPayment - minDown) / (maxDown - minDown)) * 100}%, #374151 100%)`
            }}
          />
          <div className="flex justify-between text-sm text-gray-400">
            <span>{formatCurrency(minDown)}</span>
            <span>{formatCurrency(maxDown)}</span>
          </div>
        </div>

        {/* Duration Slider */}
        <div className="space-y-3">
          <div className="flex justify-between items-center mb-2">
            <label className="text-gray-300 font-medium">Loan Duration</label>
            <input
              type="number"
              min={minDuration}
              max={maxDuration}
              value={duration}
              onChange={(e) => {
                const value = Math.min(maxDuration, Math.max(minDuration, parseInt(e.target.value) || minDuration));
                setDuration(value);
              }}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg w-24 text-right border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <input
            type="range"
            min={minDuration}
            max={maxDuration}
            step={6}
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((duration - minDuration) / (maxDuration - minDuration)) * 100}%, #374151 ${((duration - minDuration) / (maxDuration - minDuration)) * 100}%, #374151 100%)`
            }}
          />
          <div className="flex justify-between text-sm text-gray-400">
            <span>{minDuration} months</span>
            <span>{maxDuration} months</span>
          </div>
        </div>

        {/* EMI Result */}
        <div ref={emiCardRef} className="bg-linear-to-br from-purple-600 to-purple-800 rounded-xl p-6 mt-8 hover-lift">
          <div className="text-center">
            <div className="text-purple-200 text-sm mb-2">Your Monthly EMI</div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-4">
              {formatFullCurrency(emi)}
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-purple-400/30">
              <div>
                <div className="text-purple-200 text-xs mb-1">Principal Amount</div>
                <div className="text-white font-semibold">{formatFullCurrency(carPrice - downPayment)}</div>
              </div>
              <div>
                <div className="text-purple-200 text-xs mb-1">Total Interest</div>
                <div className="text-white font-semibold">
                  {formatFullCurrency(Math.max(0, (emi * duration) - (carPrice - downPayment)))}
                </div>
              </div>
              <div className="col-span-2">
                <div className="text-purple-200 text-xs mb-1">Total Payment</div>
                <div className="text-white font-semibold text-xl">{formatFullCurrency(emi * duration)}</div>
              </div>
            </div>
            <div className="text-purple-200 text-xs mt-4">
              Interest Rate: {interestRate}% per annum
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PriceCalculator;

// app/password-generator/page.tsx

"use client";
import { useState, useCallback } from 'react';
import { ClipboardCopy, RefreshCw, ShieldCheck, ShieldAlert } from 'lucide-react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [options, setOptions] = useState({
    uppercase: true,
    numbers: true,
    symbols: true,
  });

  const generatePassword = useCallback(() => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = lowercase;
    if (options.uppercase) chars += uppercase;
    if (options.numbers) chars += numbers;
    if (options.symbols) chars += symbols;

    let generated = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generated += chars[randomIndex];
    }

    // Ensure at least one character from each selected set
    const allChars = [lowercase];
    if (options.uppercase) allChars.push(uppercase);
    if (options.numbers) allChars.push(numbers);
    if (options.symbols) allChars.push(symbols);

    allChars.forEach(set => {
      if (!generated.split('').some(c => set.includes(c))) {
        const randomIndex = Math.floor(Math.random() * set.length);
        const replaceIndex = Math.floor(Math.random() * generated.length);
        generated = generated.substring(0, replaceIndex) + set[randomIndex] + generated.substring(replaceIndex + 1);
      }
    });

    setPassword(generated);
  }, [length, options]);

  const calculateStrength = () => {
    if (length < 8) return { text: 'Very Weak', color: 'bg-red-500', width: 'w-1/5' };
    if (length < 12) return { text: 'Weak', color: 'bg-orange-500', width: 'w-2/5' };
    if (length < 16) return { text: 'Medium', color: 'bg-yellow-500', width: 'w-3/5' };
    return { text: 'Strong', color: 'bg-green-500', width: 'w-full' };
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <ShieldCheck className="text-blue-600" />
            Secure Password Generator
          </h1>

          {/* Password Display */}
          <div className="mb-6">
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-3">
              <input
                type="text"
                value={password}
                readOnly
                className="w-full bg-transparent outline-none font-mono text-gray-700"
              />
              <button
                onClick={copyToClipboard}
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <ClipboardCopy className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Length Slider */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password Length: {length}
            </label>
            <input
              type="range"
              min="4"
              max="32"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Options */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Options
            </label>
            <div className="space-y-2">
              {Object.entries(options).map(([key, value]) => (
                <label
                  key={key}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={() => setOptions(prev => ({ ...prev, [key]: !value }))}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <span className="text-gray-700 capitalize">
                    Include {key}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Strength Indicator */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Password Strength
              </span>
              <span className="text-sm font-medium text-gray-500">
                {calculateStrength().text}
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`${calculateStrength().color} ${calculateStrength().width} h-full transition-all duration-300`}
              />
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={generatePassword}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw className="h-5 w-5" />
            Generate Secure Password
          </button>

          {/* Security Note */}
          <div className="mt-6 text-sm text-gray-500 flex items-start gap-2">
            <ShieldAlert className="h-4 w-4 flex-shrink-0" />
            <p>
              Generated passwords are created locally in your browser and never
              transmitted over the network. Always use unique passwords for
              different services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
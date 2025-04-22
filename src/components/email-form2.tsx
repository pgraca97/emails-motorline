'use client';

import React, { useRef, useState } from 'react';
import { sendPassRecovEmail } from '@/app/_actions/emailActions2';
import crypto from 'crypto';

export function generateRandomToken(length = 32) {
  return crypto.randomBytes(length).toString('hex');
}

export const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [token, setToken] = useState('');
  const [tokenGenerated, setTokenGenerated] = useState(false);

  const tokenInputRef = useRef<HTMLInputElement>(null);

  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setFeedback(null);

    const formData = new FormData(event.currentTarget);
    const result = await sendPassRecovEmail(formData);
    setIsLoading(false);

    if (result.success) {
      setFeedback({ type: 'success', message: result.message });

      formRef.current?.reset();
      setToken('');
      setTokenGenerated(false);
    } else {
      const errorMessage = result.message || 'fodeu...';
      setFeedback({ type: 'error', message: errorMessage });
    }
  };

  const handleGenerateToken = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newToken = generateRandomToken();
    setToken(newToken);
    setTokenGenerated(true);

    if (tokenInputRef.current) tokenInputRef.current.value = newToken;
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleFormSubmit} className="space-y-4" ref={formRef}>

      <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="firstName"
            name="firstName"
            id="firstName"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-xs focus:outline-hidden focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="primeiro nome"
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-xs focus:outline-hidden focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="umemail@email.com"
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="token" className="block text-sm font-medium text-gray-700 mb-1">
            Token
          </label>
          <div className='flex items-center gap-2'>
            <input
              type="text"
              name="token"
              ref={tokenInputRef}
              id="token"
              required
              value={token}
              onChange={(e) => tokenGenerated ? e.preventDefault() : setToken(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-xs focus:outline-hidden focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="the token"
              disabled={isLoading || tokenGenerated}
              readOnly={tokenGenerated}
            />
            <button
              onClick={handleGenerateToken}
              type="button"
              className="py-2 px-4 border border-transparent rounded-md shadow-xs text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              disabled={isLoading}
            >
              Generate Token
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-xs text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
        >
          {isLoading ? 'A Enviar...' : 'Enviar Email'}
        </button>
      </form>

      {feedback && (
        <p className={`mt-4 text-center text-sm font-medium ${feedback.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
          {feedback.message}
        </p>
      )}
    </div>
  );
};
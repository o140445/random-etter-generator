'use client';

import { useState, useEffect } from 'react';
import { Language, defaultLanguage } from '../i18n/config';
import { t } from '../i18n/utils';

interface GeneratorOptions {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  excludeSimilar: boolean;
  excludeAmbiguous: boolean;
}

interface RandomLetterGeneratorProps {
  currentLanguage?: Language;
}

export default function RandomLetterGenerator({ currentLanguage: propLanguage }: RandomLetterGeneratorProps = {}) {
  const [result, setResult] = useState<string>('');
  const [options, setOptions] = useState<GeneratorOptions>({
    length: 1,
    includeUppercase: false,
    includeLowercase: true,
    includeNumbers: false,
    includeSymbols: false,
    excludeSimilar: false,
    excludeAmbiguous: false,
  });
  const [copied, setCopied] = useState(false);
  const currentLanguage = propLanguage || defaultLanguage;

  const generateRandomString = () => {
    let chars = '';
    
    if (options.includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (options.includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (options.includeNumbers) chars += '0123456789';
    if (options.includeSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    if (options.excludeSimilar) {
      chars = chars.replace(/[il1Lo0O]/g, '');
    }
    
    if (options.excludeAmbiguous) {
      chars = chars.replace(/[{}[\]()/\\'"`~,;:.<>]/g, '');
    }
    
    if (chars === '') {
      setResult('Please select at least one character type');
      return;
    }
    
    let result = '';
    for (let i = 0; i < options.length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    setResult(result);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    if (result && result !== 'Please select at least one character type') {
      try {
        await navigator.clipboard.writeText(result);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  };

  useEffect(() => {
    generateRandomString();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propLanguage]);

  return (
    <div className="max-w-4xl mx-auto md:p-6 p-2 space-y-8 md:space-y-2">
      
      {/* Result Display */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="items-center justify-between mb-4 md:flex hidden">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {t('generatedResult', currentLanguage)}
          </h2>
          <button
            onClick={generateRandomString}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('generateNew', currentLanguage)}
          </button>
        </div>
        
        <div className="relative">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border-2 border-gray-200 dark:border-gray-600">
            <p className="text-xl font-mono text-gray-900 dark:text-white break-all">
              {result || t('clickToGenerate', currentLanguage)}
            </p>
          </div>
          
          {result && result !== 'Please select at least one character type' && (
            <button
              onClick={copyToClipboard}
              className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-600 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
              title={t('copyToClipboard', currentLanguage)}
            >
              {copied ? (
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          )}
        </div>
        
        {copied && (
          <p className="text-green-600 text-sm mt-2">{t('copiedToClipboard', currentLanguage)}</p>
        )}

        {/* mobile */}
        <div className="md:hidden flex items-center justify-between mt-2 w-full">
          <button
            onClick={generateRandomString}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full"
          >
            {t('generateNew', currentLanguage)}
          </button>
          
        </div>
      </div>

      {/* Options */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          {t('customizeGenerator', currentLanguage)}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Length */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('length', currentLanguage)}: {options.length}
            </label>
            <input
              type="range"
              min="1"
              max="100"
              value={options.length}
              onChange={(e) => setOptions({...options, length: parseInt(e.target.value)})}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1</span>
              <span>100</span>
            </div>
          </div>

          {/* Character Types */}
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="uppercase"
                checked={options.includeUppercase}
                onChange={(e) => setOptions({...options, includeUppercase: e.target.checked})}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="uppercase" className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                {t('uppercaseLetters', currentLanguage)}
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="lowercase"
                checked={options.includeLowercase}
                onChange={(e) => setOptions({...options, includeLowercase: e.target.checked})}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="lowercase" className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                {t('lowercaseLetters', currentLanguage)}
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="numbers"
                checked={options.includeNumbers}
                onChange={(e) => setOptions({...options, includeNumbers: e.target.checked})}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="numbers" className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                {t('numbers', currentLanguage)}
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="symbols"
                checked={options.includeSymbols}
                onChange={(e) => setOptions({...options, includeSymbols: e.target.checked})}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="symbols" className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                {t('symbols', currentLanguage)}
              </label>
            </div>
          </div>
        </div>

        {/* Advanced Options */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            {t('advancedOptions', currentLanguage)}
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="excludeSimilar"
                checked={options.excludeSimilar}
                onChange={(e) => setOptions({...options, excludeSimilar: e.target.checked})}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="excludeSimilar" className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                {t('excludeSimilar', currentLanguage)}
              </label>
            </div>
            
            {/* <div className="flex items-center">
              <input
                type="checkbox"
                id="excludeAmbiguous"
                checked={options.excludeAmbiguous}
                onChange={(e) => setOptions({...options, excludeAmbiguous: e.target.checked})}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="excludeAmbiguous" className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Exclude ambiguous characters (&#123; &#125; [ ] ( ) / \ &apos; &quot; ` ~ , ; : . &lt; &gt;)
              </label>
            </div> */}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          {t('featuresUseCases', currentLanguage)}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('passwordGeneration', currentLanguage)}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{t('passwordDescription', currentLanguage)}</p>
          </div>
          
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('testData', currentLanguage)}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{t('testDataDescription', currentLanguage)}</p>
          </div>
          
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('gamesActivities', currentLanguage)}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{t('gamesDescription', currentLanguage)}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
export default function RepoInputForm ({ onSubmit, isLoading }) {
  const [url, setUrl] = useState('');

  const handleSubmit = () => {
    if (url.trim()) {
      onSubmit(url.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-12">
      <div className="mb-6">
        <label className="block text-white text-lg font-medium mb-4">
          GitHub Repository URL
        </label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="https://github.com/username/repository"
          className="w-full px-6 py-4 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-lg text-white placeholder-gray-400"
          disabled={isLoading}
        />
      </div>
      <div className="text-center">
        <button
          onClick={handleSubmit}
          disabled={isLoading || !url.trim()}
          className="px-8 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin inline mr-2" />
              Analyzing...
            </>
          ) : (
            'Summarize'
          )}
        </button>
      </div>
    </div>
  );
}
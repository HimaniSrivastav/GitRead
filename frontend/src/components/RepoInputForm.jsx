const RepoInputForm = ({ onSubmit, isLoading }) => {
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
    <div className="w-full max-w-lg mx-auto mb-12">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            GitHub Repository URL
          </label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="https://github.com/username/repository"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
            disabled={isLoading}
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={isLoading || !url.trim()}
          className="w-full px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Summarizing...
            </div>
          ) : (
            'Summarize'
          )}
        </button>
      </div>
    </div>
  );
};
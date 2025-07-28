const HowToUse = () => (
  <div className="w-full max-w-2xl mx-auto mb-16">
    <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
      <h3 className="text-lg font-semibold text-blue-900 mb-4">How to use GitRead</h3>
      <ol className="space-y-2 text-blue-800">
        <li className="flex gap-3">
          <span className="font-medium">1.</span>
          <span>Copy a GitHub repository URL</span>
        </li>
        <li className="flex gap-3">
          <span className="font-medium">2.</span>
          <span>Paste it in the input field above</span>
        </li>
        <li className="flex gap-3">
          <span className="font-medium">3.</span>
          <span>Click "Summarize" to get an AI-generated summary</span>
        </li>
        <li className="flex gap-3">
          <span className="font-medium">4.</span>
          <span>Read the plain text summary of the repository</span>
        </li>
      </ol>
    </div>
  </div>
);

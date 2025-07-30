import { Github } from 'lucide-react'

export default function SummaryResult({ summary, repoUrl }) {
  if (!summary) return null;

  const repoName = repoUrl.split('/').slice(-2).join('/');

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="bg-gray-800/50 border border-gray-700 rounded-lg backdrop-blur-sm">
        <div className="border-b border-gray-700 px-6 py-4">
          <div className="flex items-center gap-2 text-gray-300">
            <Github className="h-5 w-5" />
            <span className="font-medium">{repoName}</span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">AI Summary</h3>
          <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6 max-h-96 overflow-y-auto">
            <p className="text-gray-200 leading-relaxed whitespace-pre-wrap">{summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
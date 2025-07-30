import { Loader2 } from 'lucide-react';

export default function LoadingIndicator () {
  return( 
  <div className="w-full max-w-3xl mx-auto mb-8">
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-3 text-gray-300 mb-4">
        <Loader2 className="h-6 w-6 animate-spin" />
        <span className="text-lg">Reading repository and generating summary...</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
      </div>
    </div>
  </div>
);
}
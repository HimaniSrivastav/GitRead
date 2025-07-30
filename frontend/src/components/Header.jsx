import { BookOpen } from 'lucide-react'

export default function Header() {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-3 mb-6">
        <BookOpen className="h-12 w-12 text-blue-400" />
        <h1 className="text-5xl font-bold text-white">GitRead</h1>
      </div>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Get AI-powered summaries of GitHub repositories
      </p>
    </div>
  );
}
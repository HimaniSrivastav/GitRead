import { BookOpen } from 'lucide-react'

export default function Header () {
  <div className="text-center mb-16">
    <div className="flex items-center justify-center gap-3 mb-6">
      <BookOpen className="h-8 w-8 text-gray-700" />
      <h1 className="text-5xl font-bold text-gray-900">GitRead</h1>
    </div>
    <p className="text-lg text-gray-500 max-w-xl mx-auto">
      Get AI-powered summaries of GitHub repositories
    </p>
  </div>
};
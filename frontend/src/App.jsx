import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import HowToUse from './components/HowToUse';
import RepoInputForm from './components/RepoInputForm';
import LoadingIndicator from './components/LoadingIndicator';
import SummaryResult from './components/SummaryResult';

export default function App() {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentRepoUrl, setCurrentRepoUrl] = useState('');

  const handleSummarize = async (url) => {
    try {
      setIsLoading(true);
       console.log('Loading started');
      setCurrentRepoUrl(url);
      setSummary('');
      // Make actual API call to the backend
      const response = await fetch(`http://localhost:5000/api/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ repoUrl: url }),   
      })
      const data = await response.json();
      if(!data.success) {
        throw new Error(data.error || 'Failed to analyze repository');
      }
      setSummary(data.summary);
    }catch (error) {
      console.error('Error:', error);
      setSummary('Error: Unable to analyze the repository. Please check the URL and try again.');
    } finally {
      setIsLoading(false);  
      

//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 2000));
      
//       const mockSummary = `This repository appears to be a modern web application built with React and TypeScript. Here are the key highlights:

// **Purpose & Functionality:**
// The project is a full-stack application that provides user authentication, data visualization, and real-time updates. It includes both frontend and backend components with a clean, modern architecture.

// **Technology Stack:**
// - Frontend: React 18, TypeScript, Tailwind CSS
// - Backend: Node.js, Express, PostgreSQL
// - Testing: Jest, React Testing Library
// - Build Tools: Vite, ESLint, Prettier`;

//       setSummary(mockSummary);
//     } catch (error) {
//       console.error('Error:', error);
//       setSummary('Error: Unable to analyze the repository. Please check the URL and try again.');
//     } finally {
//       setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <Header />
        <RepoInputForm onSubmit={handleSummarize} isLoading={isLoading} />
        {!isLoading && !summary && <HowToUse />}
        {isLoading && <LoadingIndicator />}
        {summary && <SummaryResult summary={summary} repoUrl={currentRepoUrl} />}
        <Footer />
      </div>
    </div>
  );
}
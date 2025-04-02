import React from 'react';
import FlashcardList from './components/FlashcardList';

function App() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Anatomy Flashcards</h1>
      <FlashcardList />
    </div>
  );
}

export default App;

import React, {useEffect, useState} from 'react';

import axios from 'axios';

const FlashcardList = () => {
    const [flashcards, setFlashcards] = useState ([]);

    useEffect(() => {
        axios.get('http://localhost:5001/api/flashcards')
          .then(res => setFlashcards(res.data))
          .catch(err => console.error('Error fetching flashcards:', err));
      }, []);

      return (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Flashcards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {flashcards.map(card => (
              <div key={card._id} className="border p-4 rounded shadow">
                <h3 className="font-semibold text-lg">{card.term}</h3>
                <p className="text-sm text-gray-600">{card.definition}</p>
                <p className="text-xs mt-2 italic">Region: {card.region}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default FlashcardList;


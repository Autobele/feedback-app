import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

  const [feedback, setFeedback] = useState([
    {
      id: '1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sit!',
      rating: 7
    }
  ])

  return <FeedbackContext.Provider value={{
    feedback
  }}>
    {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
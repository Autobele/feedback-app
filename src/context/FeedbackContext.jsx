import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

  const [feedback, setFeedback] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {

    const response = await fetch(`http://localhost:5000/feedback?sort=id&order=desc`)
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([...feedback, newFeedback])
  }

  const updateFeedback = (id, updatedItem) => {
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...updatedItem} : item))
    setFeedbackEdit({ item: {}, edit: false })
  } 

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return <FeedbackContext.Provider value={{
    feedback,
    feedbackEdit,
    isLoading,
    addFeedback,
    deleteFeedback,
    editFeedback,
    updateFeedback
  }}>
    {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
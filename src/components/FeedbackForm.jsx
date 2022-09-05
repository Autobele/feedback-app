import { useContext, useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackForm({ handleAddFeedback }) {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  const { addFeedback } = useContext(FeedbackContext);

  const handleTextChange = (e) => {
    if(text === '') {
      setBtnDisabled(true)
    } else if(text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('Text must be a least 10 characteres.')
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(() => e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim()?.length >= 10) {
      const newFeedback = {
        text,
        rating
      }
      addFeedback(newFeedback)
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate ur service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className="input-group">
          <input onChange={handleTextChange} type="text" value={text}/>
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

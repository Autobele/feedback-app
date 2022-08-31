import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

export default function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

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
    console.log(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate ur service with us?</h2>
        <div className="input-group">
          <input onChange={handleTextChange} type="text" value={text}/>
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

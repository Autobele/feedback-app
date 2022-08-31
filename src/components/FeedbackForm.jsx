import { useState } from "react";
import Card from "./Card";

export default function FeedbackForm() {

  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value)
    console.log(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate ur service with us?</h2>
        <div className="input-group">
          <input onChange={handleTextChange} type="text" value={text}/>
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  )
}

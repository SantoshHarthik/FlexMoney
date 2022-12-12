import React,{useState} from 'react'
import '../Misc/Styles/Formstyle.css'

const ContactUs = () => {

  const [text, settext] = useState()
  const submitcomment = (e) => {
    window.alert('Submitted!!!')
    // console.log('clicked');
    e.preventDefault()
    settext('')
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <div id='contactid'>
      <div className="container">
        <h1>Contact Us</h1>
        <p>Have any questions or suggestions? Drop us a message</p>
        <form onSubmit={submitcomment}>
          <div className="row">
            <div className="column">

              <textarea id="issue" required placeholder="Describe here" rows="3" value={text}></textarea>
            </div>
          </div>
          <br />
          <button>
            Contact
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
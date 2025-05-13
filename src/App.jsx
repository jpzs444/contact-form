function App() {
  return(
    <div>
      <h1>Contact Us</h1>
      <form action="">
        {/* For name */}
        <div>
          <div>
            <label htmlFor="first_name">First Name <span>*</span></label>
            <input type="text" name="first_name" id="first_name" required/>
          </div>
          <div>
            <label htmlFor="last_name">Last Name <span>*</span></label>
            <input type="text" name="last_name" id="last_name" required/>
          </div>
        </div>
        <label htmlFor="email">Email Address <span>*</span></label>
        <input type="email" name="email" id="email" required/>
        <p>Query Type <span>*</span></p>
        {/* For radio buttons */}
        <div>
          <div>
            <input type="radio" name="query_type" id="general_enquiry" value="general_enquiry"/>
            <label htmlFor="general_enquiry">General Enquiry</label>
          </div>
          <div>
            <input type="radio" name="query_type" id="support_request" value="support_request"/>
            <label htmlFor="support_request">Support Request</label>
          </div>
        </div>
        <label htmlFor="message">Message <span>*</span></label>
        <textarea rows={5} name="message" id="message"></textarea>
        <input type="checkbox" name="contact_consent" id="contact_consent" value="with_consent"/>
        <label htmlFor="contact_consent">I consent to being contacted by the team <span>*</span></label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default App
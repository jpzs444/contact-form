function App() {
  return(
    <div>
      <h1>Contact Us</h1>
      <form action="">
        {/* For name */}
        <div>
          <div>
            <label htmlFor="first_name">First Name <span>*</span></label>
            <input type="text" name="first_name" id="first_name" autoComplete="given-name" aria-autocomplete="both" required aria-required="true" aria-describedby="first_name-error" aria-invalid="true"/>
            <p style={{ display: 'none' }} id="first_name-error" role="alert">This field is required</p>
          </div>
          <div>
            <label htmlFor="last_name">Last Name <span>*</span></label>
            <input type="text" name="last_name" id="last_name" autoComplete="family-name" aria-autocomplete="both" required aria-required="true" aria-describedby="last_name-error" aria-invalid="true"/>
            <p style={{ display: 'none' }} id="last_name-error" role="alert">This field is required</p>
          </div>
        </div>
        
        <label htmlFor="email">Email Address <span>*</span></label>
        <input type="email" name="email" id="email" autoComplete="email" required aria-required="true" aria-describedby="email-error" aria-invalid="true"/>
        <p style={{ display: 'none' }} id="email-error" role="alert">Please enter a valid email address</p>
        
        <p>Query Type <span>*</span></p>
        {/* For radio buttons */}
        <div>
          <div>
            <input type="radio" name="query_type" id="general_enquiry" value="general_enquiry" required aria-required="true" aria-describedby="query_type-error" aria-invalid="true"/>
            <label htmlFor="general_enquiry">General Enquiry</label>
          </div>
          <div>
            <input type="radio" name="query_type" id="support_request" value="support_request"/>
            <label htmlFor="support_request">Support Request</label>
          </div>
        </div>
        <p style={{ display: 'none'}} id="query_type-error" role="alert">Please select a query type</p>
        
        <label htmlFor="message">Message <span>*</span></label>
        <textarea rows={5} name="message" id="message" required aria-required="true" aria-describedby="message-error" aria-invalid="true"></textarea>
        <p style={{ display: 'none' }} id="message-error" role="alert">This field is required</p>
        
        <input type="checkbox" name="contact_consent" id="contact_consent" value="with_consent" required aria-required="true" aria-describedby="contact_consent-error" aria-invalid="true"/>
        <label htmlFor="contact_consent">I consent to being contacted by the team <span>*</span></label>
        <p style={{ display: 'none' }} id="contact_consent-error" role="alert">To submit this form, please consent to being contacted</p>
        
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default App
function App() {
  return(
    <div>
      <form className="form" action="">
        <h1 className="form__title">Contact Us</h1>
        {/* For name */}
        <div className="name-wrapper">
          <div className="field">
            <label htmlFor="first_name">First Name <span className="asterisk">*</span></label>
            <input type="text" className="field__string-input" name="first_name" id="first_name" autoComplete="given-name" aria-autocomplete="both" required aria-required="true" aria-describedby="first_name-error" aria-invalid="true"/>
            <p className="field__error" id="first_name-error" role="alert">This field is required</p>
          </div>
          <div className="field">
            <label htmlFor="last_name">Last Name <span className="asterisk">*</span></label>
            <input type="text" className="field__string-input" name="last_name" id="last_name" autoComplete="family-name" aria-autocomplete="both" required aria-required="true" aria-describedby="last_name-error" aria-invalid="true"/>
            <p className="field__error" id="last_name-error" role="alert">This field is required</p>
          </div>
        </div>
        
        {/* For email address */}
        <div className="field">
          <label htmlFor="email">Email Address <span className="asterisk">*</span></label>
          <input type="email" className="field__string-input" name="email" id="email" autoComplete="email" required aria-required="true" aria-describedby="email-error" aria-invalid="true"/>
          <p className="field__error" id="email-error" role="alert">Please enter a valid email address</p>
        </div>
        
        {/* For radio buttons */}
        <div className="field">
          <p className="query-field">Query Type <span className="asterisk">*</span></p>
          <div className="radio-group">
            <label htmlFor="general_enquiry" className="radio-option__label">
              <input type="radio" name="query_type" id="general_enquiry" value="general_enquiry" required aria-required="true" aria-describedby="query_type-error" aria-invalid="true"/>General Enquiry
            </label>
            <label htmlFor="support_request" className="radio-option__label">
              <input type="radio" name="query_type" id="support_request" value="support_request"/>Support Request
            </label>
          </div>
          <p className="field__error" id="query_type-error" role="alert">Please select a query type</p>
        </div>
        
        {/* For message */}
        <div className="field">
          <label htmlFor="message">Message <span className="asterisk">*</span></label>
          <textarea rows={10} className="field__string-input" name="message" id="message" required aria-required="true" aria-describedby="message-error" aria-invalid="true"></textarea>
          <p className="field__error" id="message-error" role="alert">This field is required</p>
        </div>
        
        {/* For checkbox */}
        <div className="field">
          <div className="consent-field">
            <input type="checkbox" name="contact_consent" id="contact_consent" value="with_consent" required aria-required="true" aria-describedby="contact_consent-error" aria-invalid="true"/>
            <label htmlFor="contact_consent">I consent to being contacted by the team <span className="asterisk">*</span></label>
          </div>
          <p className="field__error" id="contact_consent-error" role="alert">To submit this form, please consent to being contacted</p>
        </div>
        
        <input type="submit" className="form__submit" value="Submit" />
      </form>
    </div>
  )
}

export default App
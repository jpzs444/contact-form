// TODO: show error message on required fields [DONE]
// TODO: show error message for wrong email format [DONE]
// TODO: change focus color for text fields [DONE: focus-visible]
// TODO: change focus color for radio buttons and checkbox [DONE: focus: accent-color, focus-visible]
// TODO: check relevance of noValidate and required attributes [DONE: remove `required` when `noValidate` is present]
// TODO: implement success toast message for successful submission [DONE]

import { useState } from "react";
import Toast from "./components/Toast";

function App() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    query_type: "",
    message: "",
    contact_consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isToastOpen, setIsToastOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsToastOpen((prev) => !prev);
      setTimeout(() => {
        setIsToastOpen((prev) => !prev);
      }, 5000);
    }
  };

  const validateEmail = (email) => {
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.first_name) {
      errors.first_name = "This field is required";
    }

    if (!data.last_name) {
      errors.last_name = "This field is required";
    }

    if (!data.email) {
      errors.email = "This field is required";
    } else if (!validateEmail(data.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!data.query_type) {
      errors.query_type = "Please select a query type";
    }

    if (!data.message) {
      errors.message = "This field is required";
    }

    if (!data.contact_consent) {
      errors.contact_consent =
        "To submit this form, please consent to being contacted";
    }

    return errors;
  };

  return (
    <main className="form-wrapper">
      <form className="form" action="" noValidate onSubmit={handleSubmit}>
        <h1 className="form__title">Contact Us</h1>
        {/* For name */}
        <div className="name-wrapper">
          <div className="field">
            <label htmlFor="first_name">
              First Name{" "}
              <span className="asterisk" aria-hidden="true">
                *
              </span>
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="field__string-input"
              value={formData.first_name}
              onChange={handleChange}
              autoComplete="given-name"
              aria-autocomplete="both"
              aria-required="true"
              aria-describedby="first_name-error"
              aria-invalid="true"
            />
            {errors.first_name && (
              <p className="field__error" id="first_name-error" role="alert">
                {errors.first_name}
              </p>
            )}
          </div>
          <div className="field">
            <label htmlFor="last_name">
              Last Name{" "}
              <span className="asterisk" aria-hidden="true">
                *
              </span>
            </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="field__string-input"
              value={formData.last_name}
              onChange={handleChange}
              autoComplete="family-name"
              aria-autocomplete="both"
              aria-required="true"
              aria-describedby="last_name-error"
              aria-invalid="true"
            />
            {errors.last_name && (
              <p className="field__error" id="last_name-error" role="alert">
                {errors.last_name}
              </p>
            )}
          </div>
        </div>

        {/* For email address */}
        <div className="field">
          <label htmlFor="email">
            Email Address{" "}
            <span className="asterisk" aria-hidden="true">
              *
            </span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="field__string-input"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            aria-required="true"
            aria-describedby="email-error"
            aria-invalid="true"
          />
          {errors.email && (
            <p className="field__error" id="email-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* For radio buttons */}
        <div className="field">
          <p className="query-field">
            Query Type{" "}
            <span className="asterisk" aria-hidden="true">
              *
            </span>
          </p>
          <div className="radio-group">
            <label htmlFor="general_enquiry" className="radio-option__label">
              <input
                type="radio"
                name="query_type"
                id="general_enquiry"
                value="general_enquiry"
                onChange={handleChange}
                aria-required="true"
                aria-describedby="query_type-error"
                aria-invalid="true"
              />
              General Enquiry
            </label>
            <label htmlFor="support_request" className="radio-option__label">
              <input
                type="radio"
                name="query_type"
                id="support_request"
                value="support_request"
                onChange={handleChange}
              />
              Support Request
            </label>
          </div>
          {errors.query_type && (
            <p className="field__error" id="query_type-error" role="alert">
              {errors.query_type}
            </p>
          )}
        </div>

        {/* For message */}
        <div className="field">
          <label htmlFor="message">
            Message{" "}
            <span className="asterisk" aria-hidden="true">
              *
            </span>
          </label>
          <textarea
            rows={8}
            name="message"
            id="message"
            className="field__string-input"
            value={formData.message}
            onChange={handleChange}
            aria-required="true"
            aria-describedby="message-error"
            aria-invalid="true"
          ></textarea>
          {errors.message && (
            <p className="field__error" id="message-error" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* For checkbox */}
        <div className="field">
          <div className="consent-field">
            <input
              type="checkbox"
              name="contact_consent"
              id="contact_consent"
              checked={formData.contact_consent}
              onChange={handleChange}
              aria-required="true"
              aria-describedby="contact_consent-error"
              aria-invalid="true"
            />
            <label htmlFor="contact_consent">
              I consent to being contacted by the team{" "}
              <span className="asterisk" aria-hidden="true">
                *
              </span>
            </label>
          </div>
          {errors.contact_consent && (
            <p className="field__error" id="contact_consent-error" role="alert">
              {errors.contact_consent}
            </p>
          )}
        </div>

        <button type="submit" className="form__submit">
          Submit
        </button>
      </form>

      {isToastOpen && <Toast />}
    </main>
  );
}

export default App;

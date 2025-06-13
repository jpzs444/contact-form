import { successCheck } from "../assets/images";

const Toast = () => {
  return (
    <div className="toast" role="alert">
      <div className="toast__title-wrapper">
        <img src={successCheck} alt="check" className="toast__icon" />
        <p className="toast__title">Message Sent!</p>
      </div>
      <p className="toast__description">
        Thanks for completing the form. We'll be in touch soon!
      </p>
    </div>
  );
};

export default Toast;

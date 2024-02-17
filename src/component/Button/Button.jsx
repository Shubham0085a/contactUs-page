import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ isOutline, icon, text, ...rest }) => {
  return (
    <button {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  )
}

Button.propTypes = {
    icon: PropTypes.node, // You can adjust this based on the actual type of 'icon' prop
    text: PropTypes.string.isRequired,
    isOutline: PropTypes.bool,
  };

export default Button

import PropTypes from "prop-types";

const Button = ({color = "steelblue",text, onclick}) => {
   
  return  <button onClick={onclick} style={{backgroundColor: color}} className="btn">{text}</button>

}


Button.propTypes = {
  title: PropTypes.string,
   color: PropTypes.string,
   onclick: PropTypes.func
};
export default Button

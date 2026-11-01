import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title ="Task Tracker" }) => {
    const onclick=()=>{
        console.log("click");
        
    }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text="Add" color="green" onclick={onclick}/>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;

import "../../style.css";

import PropTypes from "prop-types";

const HomeLayout = ({ children, header, footer }) => {
  return (
    <>
      <header className="header">
        
      {header}
      </header>
      {children}
      
      {footer} 
      {/* <FooterTop /> */}
      </>
    );
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
  footer: PropTypes.node,
};

export default HomeLayout;

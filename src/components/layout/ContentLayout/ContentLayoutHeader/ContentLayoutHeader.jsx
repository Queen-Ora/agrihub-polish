import { BiNotification, BiSearch } from "react-icons/bi";
import ContentLayoutLogo from "../ContentLayoutLogo/ContentLayoutLogo";
import "./ContentLayoutHeader.css"

export default function ContentLayoutHeader() {
  return (
    <div className="content--header">
      {/* <h1 className='header--title'>AgriHu</h1> */}
      <ContentLayoutLogo />
      <div className="header--activity">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <BiSearch className="icon" />
        </div>
        <div className="notify">
          <BiNotification className="icon" />
        </div>
      </div>
    </div>
  );
}

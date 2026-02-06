import "./layout.css";
import ContentLayoutHeader from "./ContentLayoutHeader/ContentLayoutHeader.jsx";
import ContentLayoutSidebar from "./ContentLayoutSidebar/ContentLayoutSidebar.jsx";
export default function ContentLayout({ children }) {
  return (
    <div className="layout">
      <ContentLayoutHeader />
      <div className="sidebar-children-container">
        <ContentLayoutSidebar />
        <div className="children-container">{children}</div>
      </div>
    </div>
  );
}

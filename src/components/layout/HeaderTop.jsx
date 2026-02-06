
const HeaderTop = () => {
  return (
    <div className="topbar">
      {/* Topbar */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-5 col-12">
            {/* Contact */}
            <ul className="top-link">
              <li>
                <a href="#parteners">Nos partenaires</a>
              </li>
              <li>
                <a href="#Contacts">Contacts</a>
              </li>
              {/*<li>*/}
              {/*  <a href="#">FAQ</a>*/}
              {/*</li>*/}
            </ul>
            {/* End Contact */}
          </div>
          <div className="col-lg-6 col-md-7 col-12">
            {/* Top Contact */}
            <ul className="top-contact">
              <li>
                <i className="fa fa-phone" />
                +22890109999
              </li>
              <li>
                <i className="fa fa-envelope" />
                <a href="mailto:support@yourmail.com">info@agrihub.tg</a>
              </li>
            </ul>
            {/* End Top Contact */}
          </div>
        </div>
      </div>
      {/* End Topbar */}
    </div>
  );
};

export default HeaderTop;

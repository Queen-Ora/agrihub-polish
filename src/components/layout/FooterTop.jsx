

const FooterTop = () => {
  return (
    <footer id="footer" className="footer ">
          {/* Footer Top */}
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-footer">
                    <h2>A propos de nous</h2>
                    <p>Nous nous engageons à offrir une plateforme fiable, intuitive et complète qui simplifie le processus de recrutement et renforce les liens entre les professionnels de l&#39;agriculture..</p>
                    {/* Social */}
                    <ul className="social">
                      <li><a href="#"><i className="icofont-facebook" /></a></li>
                      <li><a href="#"><i className="icofont-google-plus" /></a></li>
                      <li><a href="#"><i className="icofont-twitter" /></a></li>
                      <li><a href="#"><i className="icofont-vimeo" /></a></li>
                      <li><a href="#"><i className="icofont-pinterest" /></a></li>
                    </ul>
                    {/* End Social */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-footer f-link">
                    <h2>Liens rapide</h2>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <ul>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" />Accueil</a></li>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" />A propos</a></li>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" />Services</a></li>
                          {/*<li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" />Our Cases</a></li>*/}
                          {/*<li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" />autres liens</a></li>	*/}
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <ul>
                          {/*<li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" />Consuling</a></li>*/}
                          {/*<li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" />Finance</a></li>*/}
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" />Testimonials</a></li>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" />FAQ</a></li>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" />Contact Us</a></li>	
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<div className="col-lg-3 col-md-6 col-12">*/}
                {/*  <div className="single-footer">*/}
                {/*    <h2>Open Hours</h2>*/}
                {/*    <p>Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod tempor incididunt.</p>*/}
                {/*    <ul className="time-sidual">*/}
                {/*      <li className="day">Monday - Fridayp <span>8.00-20.00</span></li>*/}
                {/*      <li className="day">Saturday <span>9.00-18.30</span></li>*/}
                {/*      <li className="day">Monday - Thusday <span>9.00-15.00</span></li>*/}
                {/*    </ul>*/}
                {/*  </div>*/}
                {/*</div>*/}
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-footer">
                    <h2>Newsletter</h2>
                    <p>Abonnez-vous à notre newsletter pour recevoir toutes nos actualités directement dans votre boîte de réception.</p>
                    <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                      <input name="email" placeholder="Email Address" className="common-input" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Your email address'" required type="email" />
                      <button className="button"><i className="icofont icofont-paper-plane" /></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ End Footer Top */}
          
        </footer>
  )
}

export default FooterTop

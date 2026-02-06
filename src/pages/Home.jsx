

const Home = () => {
  return (
    <>
    <section className="slider">
    <div className="hero-slider">
      {/* Start Single Slider */}
      <div className="single-slider" style={{backgroundImage: 'url("img/homme-africain-recolte-legumes_23-2151441275.jpg")'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="text">
                <h1>Nous vous offrons Des<span> ouvriers agricoles</span> Dont vous avez besoins<span> En un clic!</span></h1>
                <p>De la gestion de fermes à la recherche de talents agricoles, tout commence ici </p>
                <div className="button">
                  <a href="#rdv" className="btn">Prendre un RDV</a>
                  <a href="#" className="btn primary">Lire plus</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Single Slider */}
      {/* Start Single Slider */}
      <div className="single-slider" style={{backgroundImage: 'url("img/ideo2.webp")'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="text">
                <h1>Nous vous offrons Des<span> fermes Agricoles</span> Selon vos compétences vous attendez quoi?</h1>
                <p>AgriHub, au service d’une agriculture collaborative et innovante. </p>
                <div className="button">
                  <a href="#rdv" className="btn">Prendre un RDV</a>
                  <a href="#" className="btn primary">Lire plus</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start End Slider */}
      {/* Start Single Slider */}
      <div className="single-slider" style={{backgroundImage: 'url("img/pexels-mirkofabian-12495793.jpg")'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="text">
                <h1>Confiez nous la<span> gestion </span>De vos exploitations<span> agricoles</span> Et dormez sur vos Lauriers <span>Sans stress!</span></h1>
                <p>Une plateforme, des opportunités infinies pour le monde agricole.</p>
                <div className="button">
                  <a href="#rdv" className="btn">Prendre un RDV</a>
                  <a href="#" className="btn primary">Lire plus</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Single Slider */}
    </div>
  </section>
  <section className="schedule">
    <div className="container">
      <div className="schedule-inner">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 ">
            {/* single-schedule */}
            <div className="single-schedule first">
              <div className="inner">
                <div className="icon">
                  <i className="icofont-grapes" />
                </div>
                <div className="single-content">
                  <span>OUVRIERS</span>
                  <h4>Trouvez la ferme parfaite</h4>
                  <p>AgriHub vous ouvre les portes de <strong>la ferme idéale</strong>, parfaitement adaptée à vos ambitions. Que vous cherchiez une <strong>exploitation </strong>à courte durée ou une <strong>collaboration</strong> à long terme, notre plateforme vous <strong>connecte</strong> .</p>
                  <a href="#">Lire plus<i className="fa fa-long-arrow-right" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            {/* single-schedule */}
            <div className="single-schedule middle">
              <div className="inner">
                <div className="icon">
                  <i className="icofont-apple" />
                </div>
                <div className="single-content">
                  <span>Exploitants</span>
                  <h4>Trouvez des ouvriers fiable</h4>
                  <p>AgriHub <strong>simplifie</strong> votre recherche de main-d'œuvre agricole compétente et digne de confiance. Grâce à notre réseau de <strong>professionnels</strong>, trouvez des ouvriers expérimentés prêts à répondre à vos <strong>besoins spécifiques</strong>.</p>
                  <a href="#">Lire plus<i className="fa fa-long-arrow-right" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12">
            {/* single-schedule */}
            <div className="single-schedule last">
              <div className="inner">
                <div className="icon">
                  <i className="icofont-business-man" />									</div>
                <div className="single-content">
                  <span>Proprietaires</span>
                  <h4>Confiez nous la gestion</h4>
                  <ul className="time-sidual">
                    <li className="day">De votre exploitation pour une <strong>agriculture optimisée</strong> et rentable.</li>
                    <li className="day">De vos terres et bénéficiez d’un accompagnement <strong>expert</strong>.</li>
                    <li className="day">De vos parcelles pour un <strong>rendement assuré</strong>.</li>
                  </ul>
                  <a href="#">Lire plus<i className="fa fa-long-arrow-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*/End Start schedule Area */}
  {/* Start Feautes */}
  <section id="services" className="Feautes section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Une Nouvelle Ère pour l'Agriculture : Connectez-vous aux Experts</h2>
            <img src="img/section-img.png" alt="#" />
            {/* <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p> */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-12">
          {/* Start Single features */}
          <div className="single-features">
            <div className="signle-icon">
              <i className="icofont-wheat" />
            </div>
            <h3>Ouvriers de Ferme Générale</h3>
            <p>Travailleurs polyvalents qui aident à diverses tâches agricoles quotidiennes telles que la plantation, la récolte et l'entretien général de la ferme.</p>
          </div>
          {/* End Single features */}
        </div>
        <div className="col-lg-4 col-12">
          {/* Start Single features */}
          <div className="single-features">
            <div className="signle-icon">
              <i className="icofont-tractor" />
            </div>
            <h3>Ouvriers de Machinerie Agricole</h3>
            <p>Spécialisés dans l'utilisation et l'entretien des équipements et des machines agricoles.</p>
          </div>
          {/* End Single features */}
        </div>
        <div className="col-lg-4 col-12">
          {/* Start Single features */}
          <div className="single-features last">
            <div className="signle-icon">
              <i className="icofont-tomato" />
            </div>
            <h3>Jardiniers</h3>
            <p>Specialisés dans la culture de choux, carottes, betteraves...</p>
          </div>
          {/* End Single features */}
        </div>
      </div>
    </div>
  </section>
  {/*/ End Feautes */}
  {/* Start Why choose */}
  <section id="about" className="why-choose section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Découvrez AGRIHUB</h2>
            <img src="img/section-img.png" alt="#" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-12">
          {/* Start Choose Left */}
          <div className="choose-left">
            <h3>Qui sommes nous</h3>
            <p>Nous sommes AgriHub, une plateforme innovante dédiée à la mise en relation des ouvriers agricoles qualifiés et des propriétaires de fermes. Notre mission est de faciliter les connexions dans le secteur agricole, permettant aux fermes de trouver les talents dont elles ont besoin pour prospérer, et aux ouvriers de découvrir des opportunités enrichissantes qui correspondent à leurs compétences et à leurs aspirations. </p>
            <p>Rejoignez-nous dans cette aventure et découvrez comment nous pouvons transformer l'agriculture ensemble. </p>
            <div className="row">
              <div className="col-lg-6">
                <ul className="list">
                  <li><i className="fa fa-caret-right" /> Reussir le coton </li>
                  <li><i className="fa fa-caret-right" />L'ail hors sol</li>
                  <li><i className="fa fa-caret-right" />Engrais chimique ou fumier</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="list">
                  <li><i className="fa fa-caret-right" />L'acajou on en parle </li>
                  <li><i className="fa fa-caret-right" />Du manioc à l'Atiekè</li>
                  <li><i className="fa fa-caret-right" />Comment reussir le ccafé</li>
                </ul>
              </div>
            </div>
          </div>
          {/* End Choose Left */}
        </div>
        <div className="col-lg-6 col-12">
          Start Choose Rights
          <div className="choose-right">
            <div className="video-image">
              {/* Video Animation */}
              <div className="promo-video">
                <div className="waves-block">
                  {/* <div class="waves wave-1"></div> */}
                  {/* <div class="waves wave-2"></div> */}
                  {/* <div class="waves wave-3"></div> */}
                </div>
              </div>
              {/*/ End Video Animation */}
              {/* <a href="https://www.youtube.com/watch?v=kVSQYoHIbvk&pp=ygUUamFyZGluYWdlIGVuIGFmcmlxdWU%3D" class="video video-popup mfp-iframe"><i class="fa fa-play"></i></a> */}
              <iframe width={560} height={315} src="https://www.youtube.com/embed/UhiDW0iy2jo?si=iT4nLxlcd7NuyY3m" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </div>
          {/* End Choose Rights */}
        </div>
      </div>
    </div>
  </section>
  {/*/ End Why choose */}
  {/* Start Call to action */}
  <section className="call-action overlay" data-stellar-background-ratio="0.5">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="content">
            <h2>Vous pouvez nous confier vos fermes partout au togo</h2>
            <p>Arretez de stresser, faites nous confiance, nos experts gèrent tout.</p>
            <div className="button">
              <a href="#" className="btn">On en discute?</a>
              <a href="#" className="btn second">Lire plus<i className="fa fa-long-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*/ End Call to action */}
  {/* Start portfolio */}
  <section className="portfolio section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Boostez votre carrière et/ou vos revenus avec nous.</h2>
            <img src="img/section-img.png" alt="#" />
            <p>Chez AgriHub, nous croyons fermement que le succès agricole repose sur des partenariats solides et une collaboration efficace.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 col-12">
          <div className="owl-carousel portfolio-slider">
            <div className="single-pf">
              <img src="img/pamp - Copie.jpg" alt="#" />
              <a href="portfolio-details.html" className="btn">Voir les details</a>
            </div>
            <div className="single-pf">
              <img src="img/istockphoto-2178259541-1024x1024.jpg" alt="#" />
              <a href="portfolio-details.html" className="btn">Voir les details</a>
            </div>
            <div className="single-pf">
              <img src="img/istockphoto-1373233687-612x612.jpg" alt="#" />
              <a href="portfolio-details.html" className="btn">Voir les details</a>
            </div>
            <div className="single-pf">
              <img src="img/ideo7.jpg" alt="#" />
              <a href="portfolio-details.html" className="btn">Voir les details</a>
            </div>
            <div className="single-pf">
              <img src="img/ideo5.jpg" alt="#" />
              <a href="portfolio-details.html" className="btn">voir les details</a>
            </div>
            <div className="single-pf">
              <img src="img/ou7.jpg" alt="#" />
              <a href="portfolio-details.html" className="btn">Voir les details</a>
            </div>
            <div className="single-pf">
              <img src="img/ouvrier.jpg" alt="#" />
              <a href="portfolio-details.html" className="btn">Voir les details</a>
            </div>
            <div className="single-pf">
              <img src="img/pan - Copie.jpg" alt="#" />
              <a href="portfolio-details.html" className="btn">Voir les details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*/ End portfolio */}
  {/* Start Fun-facts */}
  <div id="fun-facts" className="fun-facts section overlay">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Fun */}
          <div className="single-fun">
            <i className="icofont icofont-home" />
            <div className="content">
              <span className="counter">1000</span>
              <p>Utilisateurs</p>
            </div>
          </div>
          {/* End Single Fun */}
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Fun */}
          <div className="single-fun">
            <i className="icofont icofont-user-alt-3" />
            <div className="content">
              <span className="counter">300</span>
              <p>Experts agricoles</p>
            </div>
          </div>
          {/* End Single Fun */}
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Fun */}
          <div className="single-fun">
            <i className="icofont-simple-smile" />
            <div className="content">
              <span className="counter">4379</span>
              <p>Partenaires</p>
            </div>
          </div>
          {/* End Single Fun */}
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Fun */}
          <div className="single-fun">
            <i className="icofont icofont-table" />
            <div className="content">
              <span className="counter">05</span>
              <p>Années d'experiences</p>
            </div>
          </div>
          {/* End Single Fun */}
        </div>
      </div>
    </div>
  </div>
  {/*/ End Fun-facts */}
  {/* Start service */}
  <section className="services section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Une seule Adresse , plusieurs services</h2>
            <img src="img/section-img.png" alt="#" />
            <p>Grâce à notre réseau étendu et à notre approche personnalisée, nous aidons à créer des fermes plus fortes, des carrières florissantes, et un avenir agricole prospère.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          {/* Start Single Service */}
          <div className="single-service">
            <i className="icofont-tree" />
            <h4><a href="service-details.html">Sylviculture et Agroécologie</a></h4>
            <p>Plantation d'arbres pour le bois, Gestion des forêts, Production de résine. </p>	
          </div>
          {/* End Single Service */}
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* Start Single Service */}
          <div className="single-service">
            <i className="icofont-grapes" />
            <h4><a href="service-details.html">Culture Bio</a></h4>
            <p>Agriculture biologique, Permaculture, Agroforesterie. </p>	
          </div>
          {/* End Single Service */}
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* Start Single Service */}
          <div className="single-service">
            <i className="icofont-peas" />
            <h4><a href="service-details.html">Producteurs Agricoles</a></h4>
            <p>Coton, Tabac, Canne à sucre. </p>	
          </div>
          {/* End Single Service */}
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* Start Single Service */}
          <div className="single-service">
            <i className="icofont-wheat" />
            <h4><a href="service-details.html">Producteurs Maraichers</a></h4>
            <p>Céréales (blé, maïs, riz), Légumes (carottes, tomates, pommes de terre), Fruits (pommes, oranges, bananes). </p>	
          </div>
          {/* End Single Service */}
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* Start Single Service */}
          <div className="single-service">
            <i className="icofont-tractor" />
            <h4><a href="service-details.html">Mecanisation agricole</a></h4>
            <p>Tracteurs, charrues, herse, pulverisateurs. </p>	
          </div>
          {/* End Single Service */}
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* Start Single Service */}
          <div className="single-service">
            <i className="icofont-farmer" />
            <h4><a href="service-details.html">Gestions de fermes B2B</a></h4>
            <p> Faites valoir vos terres, laissez nous gerer et gagnez des revenues. </p>	
          </div>
          {/* End Single Service */}
        </div>
      </div>
    </div>
  </section>
  {/*/ End service */}
  {/* Pricing Table */}
  <section className="pricing-table section">
    <div id="tarifs" className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Nos tarifs</h2>
            <img src="img/section-img.png" alt="#" />
            <p>Ayez une idée aproximatifs de ce que votre demande peut couter ou de ce que vos compétences valent.</p>
          </div>
        </div>
      </div>
      <div className="row">
      
        <div className="col-lg-4 col-md-12 col-12">
          <div className="single-table">
            {/* Table Head */}
            <div className="table-head">
              <div className="icon">
                <i className="icofont-crop-plant" />
              </div>
              <h4 className="title">sarclage simple</h4>
              <div className="price">
                <p className="amount">299000<span>/ par hectare</span></p>
              </div>	
            </div>
            {/* Table List */}
            <ul className="table-list">
              <li><i className="icofont icofont-ui-check" />defrichage</li>
              <li><i className="icofont icofont-ui-check" />sarclage avec charrues</li>
              <li><i className="icofont icofont-ui-check" />suivi post-sarclage</li>
              <li className="cross"><i className="icofont icofont-ui-close" />Traitement herbicide (optionnel)</li>
              <li className="cross"><i className="icofont icofont-ui-close" />Transport des outils/matériel</li>
            </ul>
            <div className="table-bottom">
              <a className="btn" href="#">Reservez</a>
            </div>
            {/* Table Bottom */}
          </div>
        </div>
        {/* End Single Table*/}
        {/* Single Table */}
        <div className="col-lg-4 col-md-12 col-12">
          <div className="single-table">
            {/* Table Head */}
            <div className="table-head">
              <div className="icon">
                <i className="icofont-tree" />
              </div>
              <h4 className="title">Plantation</h4>
              <div className="price">
                <p className="amount">199000<span>/ par hectare</span></p>
              </div>	
            </div>
            {/* Table List */}
            <ul className="table-list">
              <li><i className="icofont icofont-ui-check" />defrichage </li>
              <li><i className="icofont icofont-ui-check" />choix et achat de plants</li>
              <li className="cross"><i className="icofont icofont-ui-close" />Plantation manuelle/mécanisée</li>
              <li className="cross"><i className="icofont icofont-ui-close" />Protection contre les nuisibles</li>
              <li className="cross"><i className="icofont icofont-ui-close" />Suivi de croissance (optionnel)</li>
            </ul>
            <div className="table-bottom">
              <a className="btn" href="#">Reservez</a>
            </div>
            {/* Table Bottom */}
          </div>
        </div>
        {/* End Single Table*/}
        {/* Single Table */}
        <div className="col-lg-4 col-md-12 col-12">
          <div className="single-table">
            {/* Table Head */}
            <div className="table-head">
              <div className="icon">
                <i className="icofont-tractor" />
              </div>
              <h4 className="title">gestion de ferme</h4>
              <div className="price">
                <p className="amount">399000<span>/ par hectare</span></p>
              </div>	
            </div>
            {/* Table List */}
            <ul className="table-list">
              <li><i className="icofont icofont-ui-check" />permanament</li>
              <li><i className="icofont icofont-ui-check" />par saison</li>
              <li><i className="icofont icofont-ui-check" />Planification culturale</li>
              <li><i className="icofont icofont-ui-check" />Intrants (engrais, pesticides)</li>
              <li><i className="icofont icofont-ui-check" />Assistance technique et formation</li>
            </ul>
            <div className="table-bottom">
              <a className="btn" href="#">Reservez</a>
            </div>
            {/* Table Bottom */}
          </div>
        </div>
        {/* End Single Table*/}
      </div>	
    </div>	
  </section>	
  {/*/ End Pricing Table */}
  {/* Start clients */}
  <div className="clients overlay">
    <div id="parteners" className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="owl-carousel clients-slider">
            <div className="single-clients">
              <img src="img/client1.png" alt="#" />
            </div>
            <div className="single-clients">
              <img src="img/client2.png" alt="#" />
            </div>
            <div className="single-clients">
              <img src="img/client3.png" alt="#" />
            </div>
            <div className="single-clients">
              <img src="img/client4.png" alt="#" />
            </div>
            <div className="single-clients">
              <img src="img/client5.png" alt="#" />
            </div>
            <div className="single-clients">
              <img src="img/client1.png" alt="#" />
            </div>
            <div className="single-clients">
              <img src="img/client2.png" alt="#" />
            </div>
            <div className="single-clients">
              <img src="img/client3.png" alt="#" />
            </div>
            <div className="single-clients">
              <img src="img/client4.png" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*/Ens clients */}
  {/* Start Appointment */}
  <section className="appointment" >
    <div className="container" >
      <div className="row" >
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Satisfaire votre besoin agricole est le but de notre existence </h2>
            <img src="img/section-img.png" alt="#" />
            <p>Vous avez une demande speciale? n'hesitez pas à nous le faire savoir.</p>
          </div>
        </div>
      </div>
      <div id="Contacts" className="row" >
        <div className="col-lg-6 col-md-12 col-12">
          <form className="form" action="#">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <input name="name" type="text" placeholder="Nom" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <input name="email" type="email" placeholder="Email" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <input name="phone" type="text" placeholder="Numéro" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <div className="nice-select form-control wide" tabIndex={0}><span className="current">Catégories</span>
                    <ul className="list">
                      <li data-value={1} className="option selected ">Plantation</li>
                      <li data-value={2} className="option">Sarclage</li>
                      <li data-value={3} className="option">agri speciale</li>
                      <li data-value={4} className="option">gestion de ferme</li>
                      <li data-value={5} className="option">Jardinage</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <div className="nice-select form-control wide" tabIndex={0}><span className="current">Régions</span>
                    <ul className="list">
                      <li data-value={1} className="option selected ">Savanes</li>
                      <li data-value={2} className="option">Kara</li>
                      <li data-value={3} className="option">Plateau</li>
                      <li data-value={4} className="option">Centrale</li>
                      <li data-value={4} className="option">Maritime</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <input type="text" placeholder="Date" id="datepicker" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-12">
                <div className="form-group">
                  <textarea name="message" placeholder="Ecrivez votre message ici....." defaultValue={""} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 col-md-4 col-12">
                <div className="form-group">
                  <div className="button">
                    <button type="submit" className="btn">Prenez un RDV</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-8 col-12">
                <p>( Nous vous confirmons par un message)</p>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6 col-md-12 ">
          <div className="appointment-image">
            <img src="img/vegetable - Copie.png" alt="#" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Appointment */}
  {/* Start Newsletter Area */}
  <section className="newsletter section">
    <div className="container">
      <div className="row " >
        <div className="col-lg-6  col-12" >
          {/* Start Newsletter Form */}
          <div className="subscribe-text ">
            <h6>Incrivez vous à notre newsletter</h6>
            <p className>Recevez instantanement nos publication sur ,<br /> les offres disponibles.</p>
          </div>
          {/* End Newsletter Form */}
        </div>
        <div className="col-lg-6  col-12">
          {/* Start Newsletter Form */}
          <div className="subscribe-form ">
            <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
              <input name="EMAIL" placeholder="Votre adresse mail" className="common-input" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Votre adresse mail'" required type="email" />
              <button className="btn">Souscrire</button>
            </form>
          </div>
          {/* End Newsletter Form */}
        </div>
      </div>
    </div>
  </section>
  {/* /End Newsletter Area */}
  </>
  )
}

export default Home

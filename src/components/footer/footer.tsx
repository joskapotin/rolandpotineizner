import GitHubLogoSvg from "../svg/github-logo-svg"

function Footer() {
  return (
    <footer className="container flex flex-col gap-24 mx-auto text-center md:flex md:flex-wrap md:flex-row md:w-full md:justify-around md:text-start md:gap-12">
      <section className="mb-12">
        <h4 className="mb-4 tracking-widest text-amber-900">Mes amis</h4>
        <ul>
          <li>
            <a className="link" href="http://galeriephilippegelot.monsite-orange.fr">
              Galerie Philippe Gelot
            </a>
          </li>
          <li>
            <a className="link" href="http://www.galeriebinome.com">
              Galerie Binôme
            </a>
          </li>
          <li>
            <a className="link" href="http://www.ledelarge.fr/27427_artiste_potin_eizner__roland">
              Le Delarge
            </a>
          </li>
          <li>
            <a className="link" href="http://www.fundacion-lopez-fuseya.net">
              Fondation Lopez Fuseya
            </a>
          </li>
          <li>
            <a className="link" href="http://jeanclauderiedel.com">
              Jean-Claude Riedel
            </a>
          </li>
        </ul>
      </section>
      <section className="mb-12">
        <h4 className="mb-4 tracking-widest text-amber-900">Pour me contacter</h4>
        <ul>
          <li>
            <span>Téléphone:</span> 33 (0) 6 60 83 53 18
          </li>
          <li>
            <span>Email:</span> rolandpotin@gmail.com
          </li>
        </ul>
      </section>
      <section className="mb-12">
        <h4 className="mb-4 tracking-widest text-amber-900">Conception et réalisation</h4>
        <ul>
          <li className="inline-flex items-start gap-2">
            <a className="link" href="https://github.com/joskapotin">
              Joska Potin
            </a>
            <i className="-translate-y-1">
              <GitHubLogoSvg />
            </i>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer

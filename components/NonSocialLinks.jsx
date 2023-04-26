import { getLinks, getLinksLinks } from "../utils/data";
import "./component.css";

const NonSocialLinks = () => {
  const links = getLinksLinks();

  return (
    <p>
      <div class="container">
        <div class="center">
          {links.map((link) => (
            <a key={link.id} href={link.url}>
              <button className="link">{link.title}</button>
            </a>
          ))}
        </div>
      </div>
    </p>
  );
};

export default NonSocialLinks;

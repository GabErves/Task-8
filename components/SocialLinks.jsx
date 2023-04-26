import Image from "next/image";
import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import snapchat from '../images/snapchat.svg'
import twitter from '../images/twitter.svg'
import "./component.css";
import {getLinks, getSocialLinks} from "../utils/data";

const SocialLinks = () => {
    const links = getSocialLinks();

    return (
        <div className='photo'>
            <Image src={snapchat} className="photo" alt="Snapchat" height={59} width={59} />
            <Image src={instagram} className="photo" alt="Instagram" height={59} width={59} />
            {links.map((link) => (
                <a key={link.id} href={link.url}>
                    <Image
                        src={link.title === "Instagram" ? instagram : link.title === "Facebook" ? facebook : link.title === "Snapchat" ? snapchat : link.title === "Twitter" ? twitter : null}
                        alt={link.title}
                        height={59}
                        width={59}
                    />
                </a>
                
            ))}
           
        </div>
    );
};

export default SocialLinks;

import { getCurrentUser } from "../utils/data";
import "./component.css";
import monogram from "../images/Monogram2.png";
import Image from "next/image";



const TopContent = () => {
  const { name, email, avatar, bio } = getCurrentUser();
  return <div>

    

{/* <Image src={monogram} className='avatar' alt="Instagram" height={250} width={250} /> */}
<img src={avatar} className='avatar' alt="avatar"/>
    <h1 className="name">{name}</h1>
    
    
   


  </div>;
};

export default TopContent;

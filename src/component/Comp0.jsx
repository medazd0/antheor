import React from 'react'
import img0 from '../images/imgComp0/img0.png';
import img1 from '../images/imgComp0/img1.png';
import img2 from '../images/imgComp0/img2.png';
import img3 from '../images/imgComp0/img3.png';
import img4 from '../images/imgComp0/Google-Reviews.png' ;
import img5 from '../images/imgComp0/img4.jpg'
import etoil from '../images/imgComp0/5etoils.png'
import { GrCheckmark } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function Comp0() {
  return (
    <div className='w-full h-full'>
    <div className='flex justify-between justify-center mt-20 ml-14 mr-14'>
  <div className='flex'>
  <div><img src={img0} alt="" /></div>
  <div className='flex flex-col items-start ml-2'>
    <div className='font-bold'>01 42 89 53 18</div>
    <div>Contact @ antheor-paris.fr</div>
  </div>

  </div>
  <div><img src={img1} alt="" /></div>
  <div className='flex'>
  <div><img src={img2} alt="" /></div>
  <div className='flex flex-col items-start ml-2 font-bold'>
    <div>8 rue , Corvetto</div>
    <div>75008 Paris</div>
  </div>

  </div>
    
    </div>
  <div className=' menu flex justify-center mt-5  '>
  <Link to='/antheor/#'> 
    <div className=' flex justify-center items-center'>
    <div className='text-sm font-bold p-3 flex justify-center items-center space-x-1 border-t  border-opacity-50 pl-2 pr-2 hover:border-[#C59418] hover:border-t-2 '>Rachat Or</div>
    <div><FaAngleDown/></div>
    </div>
    </Link>
    <Link to='/antheor/#'> 
    <div className='flex justify-center items-center'>
      <div className='text-sm font-bold p-3 flex justify-center items-center space-x-1 border-t  border-opacity-50 pl-2 pr-2 hover:border-[#C59418] hover:border-t-2'>Argent</div>
      <div><FaAngleDown /></div>
    </div>
    </Link>
    <Link to='/antheor/#'> 
    <div className='text-sm font-bold p-3 flex justify-center items-center space-x-1 border-t  border-opacity-50 pl-2 pr-2 hover:border-[#C59418] hover:border-t-2'>Argenterie</div></Link>
    <Link to='/antheor/#'> 
    <div className='flex justify-center items-center'>
      <div className='text-sm font-bold p-3 flex justify-center items-center space-x-1 border-t  border-opacity-50 pl-2 pr-2 hover:border-[#C59418] hover:border-t-2'>Bijoux</div>
      <div><FaAngleDown/></div>
    </div>
    </Link>
    
    <Link to='/antheor/#'> 
    <div className='text-sm font-bold p-3 flex justify-center items-center space-x-1 border-t  border-opacity-50 pl-2 pr-2 hover:border-[#C59418] hover:border-t-2'>Antiquités</div> </Link>
    <Link to='/antheor/#'>  <div className='text-sm font-bold p-3 flex justify-center items-center space-x-1 border-t  border-opacity-50 pl-2 pr-2 hover:border-[#C59418] hover:border-t-2'>Diamnts</div></Link>
    <Link to='/antheor/#'>  <div className='text-sm font-bold p-3 flex justify-center items-center space-x-1 border-t  border-opacity-50 pl-2 pr-2 hover:border-[#C59418] hover:border-t-2'>Montres</div></Link>
    <Link to='/antheor/#'> <div className='text-sm font-bold p-3 flex justify-center items-center space-x-1 border-t  border-opacity-50 pl-2 pr-2 hover:border-[#C59418] hover:border-t-2'>Tableaux</div> </Link>
    <Link to='/antheor/#'>  <div className='text-sm font-bold p-3 flex justify-center items-center space-x-1 border-t  border-opacity-50 pl-2 pr-2 hover:border-[#C59418] hover:border-t-2'>Contact</div> </Link>
    <Link to='/antheor/#'> <div className='text-sm font-bold p-3 flex justify-center items-center space-x-1 border-t  border-opacity-50 pl-2 pr-2 hover:border-[#C59418] hover:border-t-2'>Plan d'accès</div> </Link>
    <Link to='/antheor/#'> <div className='text-sm font-bold p-3 flex justify-center items-center space-x-1 border-t  border-opacity-50 pl-2 pr-2 hover:border-[#C59418] hover:border-t-2'>que somment Nous</div> </Link>
    <Link to='/antheor/#'> <div className='text-sm font-bold p-3 flex justify-center items-center space-x-1 border-t  border-opacity-50 pl-2 pr-2 hover:border-[#C59418] hover:border-t-2'>Blog</div> </Link>
  </div>

  <div >
    <div className='mt-2 mb-10'> <img src={img3} alt="" /></div>
    
  </div>
  
  <div className='flex justify-center  mb-5 space-x-3  h-[400px] pr-52 pl-52  '>
    <div className=' w-1/2 flex flex-col justify-between  '>
      <div className=' Allreview text-[12px] bg-white border border-gray-100 border-opacity-25 flex flex-col  items-start   justify-start p-2 pl-5 pr-5 shadow-2xl rounded-md'>
  <h6 className='text-sm text-[#EAB120] tracking-widest mb-1'>ANTHÉOR PARIS</h6>
  <p className='text-1xl font-bold text-justify mb-2 uppercase'>Nous sommes spécialisées dans le rachat d'or d'argent & D'Antiquités de plus de 20 ans 
  </p>
  <div className='flex flex-col items-start space-y-2 pl-4'>
  <div className='flex justify-center space-x-1 ' >
       <div><GrCheckmark className='text-[#EAB120]'/></div>
       <div className='text-justify text-xs'>Achat de métaux préciaux : or( à 32 euro le gramme de 18k et jusqu'à 50 euro par gramme )Argent -Platine
       pièces or Argent -lingots Or Argent </div>
  </div>
  <div className='flex justify-center items-center space-x-1'>
    <div><GrCheckmark className='text-[#EAB120]'/></div>
    <div className='text-xs' >pièces or Argent -lingots Or Argent </div>
  </div>
  <div className='flex justify-center items-center space-x-1 '>
    <div><GrCheckmark className='text-[#EAB120]'/></div>
    <div className='text-xs'>Bijoux d'Occasion , bijoux de marque (Van -cleef , Cartier )</div>
  </div>
  <div className='flex justify-center items-center space-x-1'>
    <div><GrCheckmark className='text-[#EAB120]'/></div>
    <div className='text-xs'>Bijoux d'Occasion , bijoux de marque (Van -cleef , Cartier )</div>
  </div>
  <div className='flex justify-center items-center space-x-1'>
    <div><GrCheckmark className='text-[#EAB120]'/></div>
    <div className='text-xs text-justify'>Montres de marque (Rolex , Patek Philippe , Audemards de Piguet)</div>
  </div>
  <div>
    <div className='flex justify-center items-center space-x-1'>
<div><GrCheckmark className='text-[#EAB120]'/>
</div>      
<div className='text-xs'>Antiquités ( TAbleaux , Bronze , Art des années 30 et 50)</div>
      
      </div>
    
  </div>
  </div>


      </div>
      <div className='GoogleReview flex flex-col   '>
  
  <div className="  z-10    bg-[#271221] rounded-md flex flex-col items-center justify-center ">
    <div className='text-slate-200 font-bold '>9.9 / 10</div>
    <div className='flex justify-center'><img src={etoil} alt="" className='w-1/5' /></div>
   <div className='pb-2'>
   <div className='text-3xl text-slate-200'>Excellent</div>
   <div className='text-xs font-extralight  text-white '>basé sur 89 avis</div>
   </div>
    <div className='w-1/6  mb-1 ' ><img src={img4} alt=""   /></div>
  </div>


</div>

        
    </div>
    <div className='w-1/2  '><img src={img5} alt=""  className=' w-full h-full'/></div>
  </div>

   <div className='flex justify-center space-x-32 mt-16'>
    <div className='text-left '> 
    
      <div className='text-sm text-[#EAB120]'>ANTHÉOR PARIS</div>
      <div className='text-3xl font-bold'> Comment Se déroule le <br/>Rachat de Votre or ?</div>
    </div>
    <div className='flex flex-col items-start'>
  <div className='text-2xl text-[#EAB120] font-bold'>Expertise Gratuites</div>
  
  <div className='flex items-center justify-center space-x-2'>
   <div> <FaStore className='text-[#EAB120] ' /></div>
    <p className='text-lg font-bold' >En Boutique à Paris</p>
  </div>
  
  <div className='flex items-center justify-center space-x-2'>
    <div><FaHome className='text-[#EAB120]' /></div>
    <p className='text-lg font-bold'>Ou à Votre Domicile (Sur Rendez Vous)</p>
  </div>
</div>

   </div>






  
    </div>
  )
}

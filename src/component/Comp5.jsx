import React, { useState } from 'react';
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaPhone, FaAngleRight, FaAngleLeft, FaAnglesRight, FaPhoneFlip, FaStarOfLife } from "react-icons/fa6";
import { MdOutlineSecurity, MdOutlineMessage } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import img0 from '../images/imgComp5/img0.jpg';
import etoile from '../images/imgComp0/5etoils.png';
import imgp0 from '../images/imgComp5/png0.png';
import imgp1 from '../images/imgComp5/png1.png';
import img1 from '../images/imgComp5/img1.png';
import img5 from '../images/imgComp5/logo-ed.png';
import img6 from '../images/imgComp5/Ellipse 8.png'
import img7 from '../images/imgComp5/Ellipse.png'
import { FaRegCalendarCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

const avisData = [
  {
    name: 'Myiyah Myles',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis iure neque omnis beatae unde molestias iste sapiente facilis adipisci non libero nostrum cumque fugiat, atque exercitationem illo quas sequi officiis?',
    img: imgp0,
    rating: etoile,
  },
  {
    name: 'John Doe',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis iure neque omnis beatae unde molestias iste sapiente facilis adipisci non libero nostrum cumque fugiat, atque exercitationem illo quas sequi officiis?',
    img: imgp1,
    rating: etoile,
  },
 
  {
    name: 'Alice Johnson',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis iure neque omnis beatae unde molestias iste sapiente facilis adipisci non libero nostrum cumque fugiat, atque exercitationem illo quas sequi officiis?',
    img: img6,
    rating: etoile,
  },
  {
    name: 'Alex Azgdkj',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis iure neque omnis beatae unde molestias iste sapiente facilis adipisci non libero nostrum cumque fugiat, atque exercitationem illo quas sequi officiis?',
    img: img7,
    rating: etoile,
  }

];

function Comp5() {
  const [currentAvis, setCurrentAvis] = useState(0);

  const prevAvis = () => {
    setCurrentAvis((prev) => (prev === 0 ? avisData.length - 1 : prev - 1));
  };

  const nextAvis = () => {
    setCurrentAvis((prev) => (prev === avisData.length - 1 ? 0 : prev + 1));
  };

  return (
    
    <div className=''>
      <div className='bg-[#1E1E1E] mb-7 w-full h-44 flex justify-center space-x-20 '>
        <div className='flex flex-col items-center justify-center space-y-4'>
          <div><IoChatbubblesSharp className='text-2xl text-[#C59418]' /></div>
          <div className='text-white text-sm'>Besoin de conseils ? n'hésitez pas <br /> à nos contacter</div>
        </div>
        <div className='flex flex-col items-center justify-center space-y-4'>
          <div><FaPhone className='text-2xl text-[#C59418]' /></div>
          <div className='text-white text-sm'>Vous souhaitez vendre l'or ? faites appel <br /> à un spécialiste de rachat</div>
        </div>
        <div className='flex flex-col items-center justify-center space-y-4'>
          <div><MdOutlineSecurity className='text-2xl text-[#C59418]' /></div>
          <div className='text-white text-sm'>Réalisez Vos transactions en toute sécurité <br /> et en toute discrétion</div>
        </div>
      </div>

      <div className='flex justify-center mb-5 space-x-3 h-[400px] pr-52 pl-52'>
        <div className='col1 w-1/2 space-y-1'>
          <div className='bg-white border border-gray-100 border-opacity-25 flex flex-col items-start justify-start p-2 pl-5 pr-5 shadow-2xl rounded-md p-8'>
            <div className='text-justify font-bold text-lg mb-8'>
              Voilà maintenant <span className='text-[#C59418] text-2xl font-semibold'>plus de 20 ans</span> que notre comptoir spécialisé Anthéor est présent sur le marché.
            </div>
            <div className='text-justify text-xs mb-5'>N'hésitez pas à faire appel au spécialiste de l'achat et de la vente d'Or <span className='font-bold'>numéro 1 à Paris</span></div>
            <div className='text-justify text-xs'>Nous vous conseillons <span className='font-bold'>gratuitement</span> et en toute <span className='font-bold'>discrétion</span>. Des milliers de clients nous font confiance, faites comme eux !</div>
          </div>
          <div className='flex flex-col items-center justify-center bg-[#24101F] shadow-2xl rounded-md'>
            <div className='text-white font-mono tracking-wider pt-3'>CONTACTEZ-NOUS</div>
            <div className='text-white font-mono text-xs mt-3'>01 42 89 63 18</div>
            <div className='text-white font-serif text-xs pb-3'>contact@abtheir-paris.fr</div>
          </div>
        </div>
        <div className='col2 w-1/2'>
          <img src={img0} alt="" className='h-[365px]' />
        </div>
      </div>

      <div className='mt-5'>
        <div className='text-lg text-[#EAB120] tracking-widest'>ANTHÉOR PARIS</div>
        <div className='text-4xl'>Ils parlent de Nous</div>
        <div className='flex justify-center items-center pt-5 space-x-1'>
          <div className="w-44 h-0.5 bg-yellow-600 mb-2"></div>
          <div className='mb-2'><FaStarOfLife className='text-[#EAB120] text-[6px]' /></div>
          <div className="w-44 h-0.5 bg-yellow-600 mb-2"></div>
        </div>
      </div>

      <div className='mb-5'>
        <div className='flex justify-end space-x-2 pr-10 pb-2'>
          <div className='bg-[#DEDDDE] p-2 hover:bg-[#1e1d1e] hover:text-[#FFFFFF]' onClick={prevAvis}>
            <FaAngleLeft />
          </div>
          <div className='bg-[#DEDDDE] p-2 hover:bg-[#1e1d1e] hover:text-[#FFFFFF]' onClick={nextAvis}>
            <FaAngleRight />
          </div>
        </div>
        <div className='flex justify-center pr-10 pl-10 space-x-5'>
          {avisData.map((avis, index) => (
            index === currentAvis && (
              <div key={index} className='col w-1/2 flex justify-center border border-opacity-25 p-5'>
                <div className='profil mr-5'><img src={avis.img} alt="" className='w-36' /></div>
                <div className='flex flex-col items-start'>
                  <div className='text-sm text-[#EAB120] tracking-widest font-bold'>{avis.name}</div>
                  <div className='text-justify text-xs leading-loose'>{avis.text}</div>
                  <div className='w-1/6'><img src={avis.rating} alt="" /></div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>

     <div className='relative z-0'>
     <div className='space-x-8  z-50 flex justify-center -mb-7 '>
      <Link to='/antheor/er'>
      <div className='flex justify-center items-center bg-[#EAB120] p-3 text-zinc-50 space-x-2 rounded-md'>
<div><FaPhoneFlip className=' text-2xl'/></div>
<div className=' uppercase '>Etre Rappeleé</div>
</div>
      </Link>
      <Link to='/antheor/rv'>
      <div className='flex justify-center items-center bg-[#EAB120] p-3 text-zinc-50 space-x-2 rounded-md '>

     < FaRegCalendarCheck className='text-2xl '/>
    <div className='uppercase '>Prendre RDV</div>
    </div>
      </Link>

    
 
   </div>
     <div className='ligne1 flex justify-center items-center bg-[#24101F] space-x-20'>
        <div className='col1 p-8 '><img src={img1} alt="" className='w-60' /></div>
        <div className='col2 space-y-3'>
          <div className='font-bold text-left text-white'>LIENS UTILES</div>
          <div className='flex justify-start items-center space-x-1'>
            <div><FaAnglesRight className='text-[#EAB120]'/></div>
            <div className='text-xs text-white'>Rachat OR</div>
          </div>
          <div className='flex justify-start items-center space-x-1'>
            <div><FaAnglesRight className='text-[#EAB120]'/></div>
            <div className='text-xs text-white'>Diamants</div>
          </div>
          <div className='flex justify-start items-center space-x-1'>
            <div><FaAnglesRight className='text-[#EAB120]'/></div>
            <div className='text-xs text-white'>Argenterie</div>
          </div>
        </div>
        <div className='col3 space-y-3 mt-10'>
        <div className='flex justify-start items-center space-x-1'>
            <div><FaAnglesRight className='text-[#EAB120]' /></div>
            <div className='text-xs text-white'>Mentions légales</div>
          </div>
          <div className='flex justify-start items-center space-x-1'>
            <div><FaAnglesRight className='text-[#EAB120]' /></div>
            <div className='text-xs text-white'>Publique de Confidentialité</div>
          </div>
          <div className='flex justify-start items-center space-x-1'>
            <div><FaAnglesRight className='text-[#EAB120]'/></div>
            <div className='text-xs text-white'>Contact</div>
          </div>
        </div>
        <div className='col4 space-y-3'>
        <div className='font-bold text-left  text-white'>INFOS</div>
        <div className='flex justify-start items-center space-x-3'>
            <div><FaPhoneFlip className='text-[#EAB120]'/></div>
            <div className='text-white text-xs'>01 42 89 53 18</div>
          </div>
          <div className='flex justify-start items-center space-x-3'>
            <div><MdOutlineMessage className='text-[#EAB120]'/></div>
            <div className='text-xs text-white'>Contact@antheor.paris.fr</div>
          </div>
          <div className='flex justify-start items-center space-x-3'>
            <div><CiLocationOn className='text-[#EAB120]'/></div>
            <div className='text-xs text-white'>8, rue Corvetto 75008 , Paris  FRANCE</div>
          </div>
        </div>


      </div>
      <div className='bg-[#1A0515] w-full h-10 flex justify-center items-center space-x-10 '>
        <div className='text-white text-xs font-light'>Copyright www.antheor-paris.fr 2016-2021 - All rights reserved - Tous droits réservés</div>
        <div className='flex justify-center items-center space-x-1'>
          <div className='text-white text-xs font-light'>Développement & Référencement naturel par:</div>
          <div><img src={img5} alt="" /></div>
        </div>
      </div>
      

  </div>

   </div>
  );
}

export default Comp5;

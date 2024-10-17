import React from 'react'
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import img0 from '../images/imgComp5/img0.jpg'
import etoile from '../images/imgComp0/5etoils.png'
import imgp0 from '../images/imgComp5/png0.png'
import imgp1 from '../images/imgComp5/png1.png'
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import img1 from '../images/imgComp5/img1.png'
import { FaAnglesRight } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import img5 from '../images/imgComp5/logo-ed.png'
function Comp5() {
  return (
    <>
    <div className='bg-[#1E1E1E] mb-7 w-full h-44 flex justify-center space-x-20' >

      <div className='flex flex-col items-center justify-center space-y-4'>
        <div><IoChatbubblesSharp className=' text-2xl text-[#C59418]'/></div>
        <div className='text-white text-sm'> Besoin de conseils ? n'hésitez pas <br/>a nos contacter</div>
      </div>
      <div className='flex flex-col items-center justify-center space-y-4'>
        <div><FaPhone className='text-2xl text-[#C59418]'/></div>
        <div className='text-white text-sm'>Vous  souhaitez vendre l'or ? faites appel <br/> à un spécialiste de rachat</div>
      </div>
      <div className='flex flex-col items-center justify-center space-y-4'>
        <div><MdOutlineSecurity className='text-2xl text-[#C59418]'/></div>
        <div className='text-white text-sm'>Réalisez Vos transaction en toute sécurité <br/>et en toute discrétion</div>
      </div>


    </div>
    <div className=' flex justify-center items-center  space-x-6 ml-40'>
        <div className='col1 w-1/2  space-y-1 '>
                <div className='flex flex-col items-start justify-center border border-black border-opacity-25 p-8 shadow-2xl '>
                  <div className='text-justify font-bold text-lg mb-8'>
                  Voilà maintenant <span className='text-[#C59418] text-2xl font-semibold'>plus de 20 ans </span> que notre comptoir spécialisé Anthéor est présent sur le marché.</div>
                  <div className='text-justify text-xs mb-5 '>N'hésitez pas à faire appel au spécialiste de l'achat et de la vente d'Or <span className='font-bold'>numéro 1 à Paris</span></div>
                  <div className='text-justify text-xs'>Nous vous conseillons <span className=' font-bold'> gratuitement </span> et en toute <span className='font-bold'>discrétion</span>. Des milliers de clients nous font confiance, faites comme eux !</div>
                </div>
                <div className='flex flex-col items-center justify-center  bg-[#24101F] shadow-2xl'>
                  <div className='text-white font-mono tracking-wider pt-3 '>CONTACTEZ-NOUS</div>
                  <div className='text-white font-mono text-xs mt-3'>01 42 89 63 18</div>
                  <div className='text-white font-serif text-xs pb-3'>contact@abtheir-paris.fr</div>
                </div>

        </div>
        <div className='col2 w-1/2 '> <img src={img0} alt="" className='h-[365px]' /></div>



    </div>

    <div className='mt-5'>
        <div className='text-lg text-[#EAB120] tracking-widest'>Anthéor Paris</div>
        <div className='text-4xl'>Ils parlent de Nous</div>
      </div>*
      <div className='mb-5'>


        <div className='flex  justify-end space-x-2 pr-10 pb-2'>
          <div className='bg-[#DEDDDE] p-2 hover:bg-[#1e1d1e] hover:text-[#FFFFFF]'>< FaAngleLeft /></div>
          <div className='bg-[#DEDDDE] p-2 hover:bg-[#1e1d1e] hover:text-[#FFFFFF]'><FaAngleRight /></div>
        </div>
        <div className='flex justify-center pr-10 pl-10 space-x-5'>

          <div className='col1  w-1/2  flex justify-center border  border-opacity-25 p-5 '>


            <div className='profil mr-5 '><img src={imgp0} alt="" className='w-36' /></div>
            <div className='flex flex-col items-start'>
              <div className='text-sm text-[#EAB120] tracking-widest font-bold'>MyiyahMyles</div>
              <div className='text-justify text-xs leading-loose'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis iure neque omnis beatae unde molestias iste sapiente facilis adipisci non libero nostrum cumque fugiat, atque exercitationem illo quas sequi officiis?
            </div>
              <div className='w-1/6'><img src={etoile} alt="" /></div>
            </div>
           </div>
           <div className='col2  w-1/2  flex justify-center border border-gray-500 border-opacity-25 p-5 '>


            <div className='profil mr-5 '><img src={imgp1} alt="" className='w-36' /></div>
            <div className='flex flex-col items-start'>
              <div className='text-sm text-[#EAB120] tracking-widest font-bold'>MyiyahMyles</div>
              <div className='text-justify text-xs leading-loose'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis iure neque omnis beatae unde molestias iste sapiente facilis adipisci non libero nostrum cumque fugiat, atque exercitationem illo quas sequi officiis?
            </div>
              <div className='w-1/6'><img src={etoile} alt="" /></div>
            </div>
           </div>
        </div>
      </div>

      <div className='ligne1 flex justify-center items-center bg-[#24101F] space-x-10'>
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
      <div className='bg-[#1A0515] w-full h-10 flex justify-center items-center space-x-3 '>
        <div className='text-white text-xs font-light'>Copyright www.antheor-paris.fr 2016-2021 - All rights reserved - Tous droits réservés</div>
        <div className='flex justify-center items-center space-x-1'>
          <div className='text-white text-xs font-light'>Développement & Référencement naturel par:</div>
          <div><img src={img5} alt="" /></div>
        </div>
      </div>
    
    </>
  )
}

export default Comp5
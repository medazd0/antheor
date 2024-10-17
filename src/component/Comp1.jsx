import React from 'react'
import { HiOutlineIdentification } from "react-icons/hi2";
import { FaBalanceScale } from "react-icons/fa";
import img0 from '../images/imgComp1/img0.jpg';
import img1 from '../images/imgComp1/img1.jpg'
import img2 from '../images/imgComp1/img2.jpg'
import img3 from '../images/imgComp1/img3.jpg'
import img4 from '../images/imgComp1/img4.jpg'
import img5 from '../images/imgComp1/img5.jpg'
import img6 from '../images/imgComp1/img6.jpg'
import img7 from '../images/imgComp1/Layer0.png'
import { CiLocationOn } from "react-icons/ci";
import { PiTelegramLogo } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaBus } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { MdDirectionsTransitFilled } from "react-icons/md";
import maps from '../images/imgComp1/mapsNotWorking.PNG'
import frameWEB from '../images/imgComp1/frameWEB.png'



import '../style/Comp1/imageShow.css'
export default function comp1() {
  return (
    <div className='ContainerComp1 flex flex-col justify-center mt-10'>
      <div>
        <div className='text-lg text-[#EAB120] tracking-widest'>Anthéor Paris</div>
        <div className='text-4xl'>PREREQUIS</div>
      </div>
      <div className='flex justify-center mt-10 space-x-5 '>
                  <div className='flex justify-center items-center space-x-2'>
                  <div className='bg-[#EAB120] p-5 rounded-md' ><HiOutlineIdentification className='text-5xl text-white'/></div>
                  <div className='text-sm font-semibold'> N'oubliez pas de Vous munir<br/> d'une pièce d'identité</div>
                  </div>
                  <div className='flex justify-center items-center space-x-2'>
                    <div className='bg-[#EAB120] p-5 rounded-md '><FaBalanceScale className='text-5xl text-white' /></div>
                    <div className='text-sm font-semibold'>la Quantité minimale pour que nous <br/>rachitéons Votre or est de 10 grammes</div>
                  </div>
      </div>
      <div className='mt-10 mb-20'>
        <div className='text-lg text-[#EAB120] tracking-widest'>Anthéor Paris</div>
        <div className='font-semibold text-3xl'>Nous achetons , Aux Meilleurs prix n et Comptant</div>
      </div>

 <div className='space-y-3'>
  <div className='ligne1 flex space-x-6 ml-40 mr-40'> 
    <div className='col1'>
     <div><img src={img0} alt="" /></div>
     <div className='detailImg  text-left '>
      <h3 className='font-extrabold text-gray-100'>OR</h3>
      <div className='text-sm font-light text-gray-50 '>Débirs d'or -Or cassé -or dentaire Médailles -Bracelets Colliers à 32 euro<br/>
      lagramme de 18K et jusqu'à 50 euro par gramme
      </div>
     </div>
    </div>
    <div className='col2'>
     <div><img src={img1} alt="" /></div>
     <div className=' detailImg  text-left'>
      <h3 className='font-extrabold text-gray-100'>PIECES OR & ARGENT</h3>
      <div className='text-sm font-light text-gray-50'>
        Pièces francaises et étrangères : Napoléan 20 Francs , 20 Dollars US , 50 <br/>Pesos Mexicain ,Souveraine
      </div>
     </div>
    </div>
    
  </div>



  
  <div className='ligne2 flex space-x-6 ml-40 mr-40'>
  <div className='col1'>
     <div><img src={img2} alt="" /></div>
     <div className='detailImg text-left'>
      <h3 className='font-extrabold text-gray-100'>BIJOUX & MONTRES</h3>
      <div className='text-sm font-light text-gray-50'>Montres de Marque ,pierre précieuse , bijoux d'occasion <br/> bijoux Modernes , Bijoux de marque (Rolex ,Patek , Phillipe) 
      </div>
     </div>
    </div>
    <div className='col2'>
     <div><img src={img3} alt="" /></div>
     <div className='detailImg text-left'>
      <h3 className='font-extrabold text-gray-100'>ARGENTERIE</h3>
      <div className='text-sm font-light text-gray-50'>piece de Forme , Couverts en métal argenté et argent massif <br/>Odiot christofle puiforcat ..
      </div>
     </div>
    </div>

  </div>
  
  <div className='ligne3 flex space-x-6 ml-40 mr-40'>
  <div className='col1'>
     <div><img src={img4} alt="" /></div>
     <div className='detailImg text-left'>
      <h3 className='font-extrabold text-gray-100'>DIAMANTS</h3>
      <div className='text-sm font-light text-gray-50'>
      </div>
     </div>
    </div>
    <div className='col2'>
     <div><img src={img5} alt="" /></div>
     <div className='detailImg text-left'>
      <h3 className='font-extrabold text-gray-100'>ARGENT</h3>
      <div className='text-sm font-light text-gray-50 '>Toutes pièces en argent massif
      </div>
     </div>
     
    </div>
    <div className='col3'>
     <div><img src={img6} alt="" /></div>
     <div className='detailImg text-left'>
      <h3 className='font-extrabold text-gray-100'>ANTIQUITES</h3>
      <div className='text-sm font-light text-gray-50'>
        Tableau , Bronze ,Art asiatique , art déco ...
      </div>
     </div>
     
    </div>
  </div>
 </div>
 <div className='mt-5'>
  <div className='text-lg text-[#EAB120] tracking-widest '>ANTHÉOR PARIS</div>
  <div className='text-4xl mb-10'>SE Rendre En boutique</div>
      </div>  
      <div className='flex justify-center ml-28 mr-28  relative space-x-3  '>
     <div className=' w-1/2  relative'>
     <div className='absolute -z-40 '><img src={frameWEB} alt="" /></div>
 <div className='flex  items-center pt-6 pl-10 space-x-2'>
            <div><IoIosTime className='text-[#EAB120] text-3xl'/></div>
            <div className='text-3xl text-gray-50 font-medium'>Horaires D'Overture</div>
 </div>
 <div className='flex  items-center mt-6 pl-10 mb-4 space-x-2'>
            <div><CiLocationOn className='text-[#EAB120] text-2xl'/></div> 
            <div className='text-1xl text-gray-50 font-normal'>8,Rue Corvetto -75008 Paris</div>
 </div>
 <div className='flex  items-center pl-10 mb-4 space-x-2'>
            <div><MdDirectionsTransitFilled className='text-[#EAB120] text-2xl'/></div>
            <div className='text-1xl text-gray-50 font-normal'>Métro : Miromesnil (Ligne 9 et 13)</div>
 </div>
 <div className='flex  items-center pl-10 space-x-2 '>
            <div><FaBus className='text-[#EAB120] text-2xl'/></div>
            <div className='text-1xl text-gray-50 font-normal'>Bus :49 (Lisbonne Ou Mairie du 8 èeme)</div>
 </div  >
 <div className='text-left pl-10 mt-5 space-y-1'>
  <div className='text-1xl text-gray-50 font-normal'>Lundi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :de 13h à 17h</div>
  <div className='text-1xl text-gray-50 font-normal'>Mardi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: de 10h à 17h</div>
<div className='text-1xl text-gray-50 font-normal'>Mercredi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: de 10h à 17h</div>
<div className='text-1xl text-gray-50 font-normal'>Jeudi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: de 10h à 17h</div>
<div className='text-1xl text-gray-50 font-normal'>Vendredi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: de 10h à 17h</div>
<div className='text-1xl text-gray-50 font-normal'>Samedi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: de 10h à 17h</div>

 </div>
 
 <div className='text-[#EAB120] text-3xl text-left pl-10'>SUR RENDES-VOUS </div>
 <div className='text-gray-50 font-normal text-left pl-10 mt-2'>De 17h à 19h00</div>
     </div>
    
     <div className='w-1/2'><img src={maps} alt="" className='w-9/12 h-3/4' /></div>
    </div>

    <div className='mt-10 mb-10'>
  <div className='text-lg text-[#EAB120] tracking-widest'>Anthéor Paris</div>
  <div className='text-4xl'>CONTACTEZ-NOUS</div>
      </div> 

      <div className='flex justify-center items-center space-x-8'>
      <div className='flex flex-col justify-center relative z-10 '>
      <div className='space-x-14 flex flex-col justify-center items-center'>
            <div className='text-2xl font-normal text-zinc-50 pb-5 pt-5'>TELEPHONE </div>
            <div className='text-3xl font-semibold text-zinc-50 pr-20 pl-6 pb-7' >01 42 89 53 18</div>
            <div className='flex justify-center items-center'>
            <div className='text-sm font-light text-zinc-50 pr-5  '>Etre Rappelé</div><div><IoArrowForwardOutline className='text-2xl text-zinc-50'/></div>
            </div>
      </div>
      <div className=' absolute -z-20  '>
     <img src={img7} alt="" />
      </div>
      </div>
      
      <div>
       <div className='flex flex-col items-start space-y-3 w-'>
        <div className='flex justify-center items-center '>
             <div className='text-2xl text-[#f9f9f9] bg-[#EAB120] pl-5 pr-5 pt-3 pb-3 rounded-tl-lg rounded-bl-lg '><PiTelegramLogo/></div>
            <div className='bg-[#24101F] pl-5 pr-5 pt-3 pb-3 font-semibold text-stone-50 rounded-tr-lg rounded-br-lg'>Formulaire de Contact</div>
        </div>
        <div className='flex justify-center items-center '>
              <div className='text-2xl text-[#f7f6f4]  bg-[#EAB120] pl-5 pr-5 pt-3 pb-3 rounded-tl-lg rounded-bl-lg '><FaCalendarAlt/></div>
              <div className='bg-[#24101F] pl-5 pr-5 pt-3 pb-3 font-semibold text-stone-50 rounded-tr-lg rounded-br-lg'>Prendre Rendez-VOUS</div>
        </div>
        <div className='flex justify-center items-center'>
              <div className='text-2xl text-[#f3f3f2] bg-[#EAB120] pl-5 pr-5 pt-3 pb-3 rounded-tl-lg rounded-bl-lg '><IoIosChatboxes/></div>
              <div className='bg-[#24101F] pl-5 pr-5 pt-3 pb-3 font-semibold text-stone-50 rounded-tr-lg rounded-br-lg'>Chat En Ligne En direct</div>
        </div>
       </div>

      </div>
      </div>




    </div>
  )
}

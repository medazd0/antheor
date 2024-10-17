import React from 'react'
import img0 from '../images/imgComp3/Layer0.jpg'
import { IoArrowForwardOutline } from "react-icons/io5";

function c3() {
  return (
    <div className=' mt-10 relative'>
      
  <div className='flex  justify-center'>
  <div className='col1 flex flex-col  items-start w-1/2 mt-20 ml-16'>
      <div className='text-1xl text-slate-50 font-thin tracking-widest'>CONTACTEZ NOUS</div>
      <div className='text-3xl text-slate-50 font-bold '> Besoin d'un Conseil</div>
      <div className='text-3xl text-[#EAB120]  font-bold'>Une question sur l'achat de Votre Or , </div>
      <div className='text-3xl text-[#EAB120]  font-bold'>d'un  Bijou ... ?</div>
      <div className='text-slate-50 font-thin text-sm'> N'hesitez pas à nous contacter <b> 01 42 89 53 18</b></div>
    </div>



    <div className='col2 flex flex-col items-center justify-center  w-1/2 pt-10 '>
     <div className='ligne1  flex space-x-3'>
    <div className='flex flex-col items-start'>
        <div className='text-sm text-slate-50 font-thin tracking-wide'>Nom (Obligatoire)</div>
        <div><input type="text" name="nom" id="" className='bg-transparent border-b border-gray-500 text-gray-700  focus:outline-none p-2' /></div>
   </div>
   <div className='flex flex-col items-start'>
       <div className='text-sm text-slate-50 font-thin tracking-wide'>Prenom (Obligatoire)</div>
       <div><input type="text" name="nom" id="" className='bg-transparent border-b border-gray-500 text-gray-700 focus:outline-none p-2' /></div>
   </div>
     </div>
   <div className='ligne2 flex space-x-3'>
      <div className='flex flex-col items-start'> 
          <div className='text-sm text-slate-50 font-thin tracking-wide'>Télephone (Obligatoire)</div>
          <div><input type="text" name="nom" id="" className='bg-transparent border-b border-gray-500 text-gray-700 focus:outline-none p-2'/></div>
      </div>
      <div className='flex flex-col items-start'>
      <div className='text-sm text-slate-50 font-thin tracking-wide'>Email (Obligatoire)</div>
      <div><input type='email' name="nom" id=""className='bg-transparent border-b border-gray-500 text-gray-700 focus:outline-none p-2' /></div>
      </div>
    </div>
     <div className='ligne3 flex flex-col items-start w-full h-full relative mr-10 ml-10 '>
     <div className='text-sm text-slate-50 font-thin tracking-wide '>message (Obligatoire)</div>
     <div><input type="text" name="nom" id=""  className='bg-transparent border-b border-gray-500 text-gray-700 focus:outline-none p-2 absolute w-full '/></div>
     </div>
     <div className='ligne4 bg-slate-300 pr-4 pl-4 pt-2 pb-2   rounded-md mt-16'>
      <div className='flex justify-center'>
      <input type="submit" value="Envoyer" />
      <IoArrowForwardOutline className='text-2xl text-zinc-50'/>
      </div>
      
     </div>
     </div>
  </div>
      <div className='absolute top-0 left-0 right -z-10'><img src={img0} alt="" /></div>
    
    </div>
  )
}

export default c3
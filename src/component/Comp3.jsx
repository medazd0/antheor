import React from 'react'
import img0 from '../images/imgComp3/Layer0.jpg'
import { IoArrowForwardOutline } from "react-icons/io5";

function c3() {
  return (
    <div className='mt-10 relative'>
      
      <div className='flex justify-center'>
        <div className='col1 flex flex-col items-start w-1/2 mt-20 ml-16'>
          <div className='text-1xl text-slate-50 font-thin tracking-widest'>CONTACTEZ NOUS</div>
          <div className='text-3xl text-slate-50 font-bold'>Besoin d'un Conseil</div>
          <div className='text-3xl text-[#EAB120] font-bold'>Une question sur l'achat de Votre Or,</div>
          <div className='text-3xl text-[#EAB120] font-bold'>d'un Bijou... ?</div>
          <div className='text-slate-50 font-thin text-sm'>N'hésitez pas à nous contacter <b>01 42 89 53 18</b></div>
        </div>

        <form className='col2 flex flex-col items-center justify-center w-1/2 pt-10' onSubmit={handleSubmit}>
          
          <div className='ligne1 flex space-x-3'>
            <div className='flex flex-col items-start'>
              <label className='text-sm text-slate-50 font-thin tracking-wide'>Nom (Obligatoire)</label>
              <input type="text" name="nom" className='bg-transparent border-b border-gray-500 text-gray-700 focus:outline-none p-1' required />
            </div>
            <div className='flex flex-col items-start'>
              <label className='text-sm text-slate-50 font-thin tracking-wide'>Prénom (Obligatoire)</label>
              <input type="text" name="prenom" className='bg-transparent border-b border-gray-500 text-gray-700 focus:outline-none p-1' required />
            </div>
          </div>

          <div className='ligne2 flex space-x-3 mt-4'>
            <div className='flex flex-col items-start'>
              <label className='text-sm text-slate-50 font-thin tracking-wide'>Téléphone (Obligatoire)</label>
              <input type="tel" name="telephone" className='bg-transparent border-b border-gray-500 text-gray-700 focus:outline-none p-1' required />
            </div>
            <div className='flex flex-col items-start'>
              <label className='text-sm text-slate-50 font-thin tracking-wide'>Email (Obligatoire)</label>
              <input type="email" name="email" className='bg-transparent border-b border-gray-500 text-gray-700 focus:outline-none p-1' required />
            </div>
          </div>

          <div className='ligne3 flex flex-col items-start w-full h-full relative pl-5 pr-5'>
            <label className='text-sm text-slate-50 font-thin tracking-wide'>Message (Obligatoire)</label>
            <textarea name="message" className='bg-transparent border-b border-gray-500 text-gray-700 focus:outline-none  w-full' required></textarea>
          </div>

          <div className='ligne4 bg-slate-300 pr-4 pl-4 pt-2 pb-2 mt-5 rounded-md '>
            <div className='flex justify-center'>
              <button type="submit" className='flex items-center space-x-2'>
                <span>Envoyer</span>
                <IoArrowForwardOutline className='text-2xl text-zinc-50' />
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className='absolute top-0 left-0 right -z-10'><img src={img0} alt="" /></div>
    
    </div>
  );
}

function handleSubmit(event) {
  event.preventDefault();
  alert('Formulaire soumis !');
}

export default c3;

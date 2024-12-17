

"use client"

import React, { useState } from 'react';

function AddEventPopUp({ togglepopup }) {
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ heading, description, file });
    // Reset form or close popup after submission if needed
  };

  return (
    <div className="h-full w-full backdrop-blur-[2px] absolute left-0 top-0 flex justify-center items-center">
      <div className="w-[480px] py-4 bg-white shadow-xl rounded-2xl p-2 relative">
        <div onClick={togglepopup} className='text-4xl rotate-45 absolute right-2 cursor-pointer'>
          +
        </div>

        <form className='pt-10 px-2 flex flex-col gap-3' onSubmit={handleSubmit}>
          <label htmlFor="heading" className="sr-only">Heading</label>
          <input
            id="heading"
            type="text"
            placeholder='Heading'
            className='w-full h-10 bg-slate-100 rounded-lg border-slate-300 border-[1px] px-2 outline-none placeholder:text-black'
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />

          <label htmlFor="description" className="sr-only">Description</label>
          <textarea
            id="description"
            placeholder='Description...'
            className="w-full bg-slate-100 rounded-lg border-slate-300 border-[1px] px-2 py-2 outline-none placeholder:text-black"
            cols={10}
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <label htmlFor="file" className="sr-only">Upload File</label>
          <input
            id="file"
            type="file"
            className='w-full h-10 bg-slate-100 rounded-lg border-slate-300 border-[1px] px-2 pt-1'
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button type='submit' className='text-white bg-slate-900 font-semibold rounded-lg text-lg h-10 hover:bg-slate-800 transition duration-200'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEventPopUp;
import React from 'react'

const page = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
          <a href="#">
            <img className="rounded-t-lg" src="https://imgs.search.brave.com/iCzaAmdG7lDFIGrm8x_k8XF3gcQ30E-zkGL6h4tHqXc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vV2ZjeXRJ/VWxPTk1wZUpMbUwy/aDFyS0k3UWw5SmJ1/M2h6Sm9SOGp6Sllw/by9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlr/YVhOdS9aWGt1YVcx/aFoyVnpMbVZrL1oy/VXVZbUZ0WjNKcFpD/NWovYjIwdmNtbHdZ/M1YwTFdSbC9iR2wy/WlhKNUwzWXlMM1po/L2NtbGhiblF2Wkds/emJtVjUvTHpkaU16/VXdZVEptTFRCaS9N/MlV0TkRBek15MDRN/VEkxL0xUTTBZelJr/TmpkbE0ySmkvWlM5/elkyRnNaVDltYjNK/dC9ZWFE5ZDJWaWND/WjNhV1IwL2FEMDJN/REE" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
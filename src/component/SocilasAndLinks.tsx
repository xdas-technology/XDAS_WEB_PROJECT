import React from 'react'

const SocilasAndLinks = () => {
  return (
    <div className="bg-black h-screen w-min-screen text-white flex flex-col justify-between p-10 font-sans ">
        <div className=' h-[80%] flex flex-col justify-between'>
            <div className='md:m-16 '>
            <h1 className=' text-6xl font-bold font-sans'> Let There Be Change</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16 text-xl md:m-16">
                <div className="space-y-2">
                <a className="block">Preference Center</a>
                <a className="block">Careers</a>
                <a className="block">About Us</a>
                <a className="block">Contact Us</a>
                <a className="block">Locations</a>
                <a className="block">Sitemap</a>
                </div>
                <div className="space-y-2">
                <a className="block">Privacy Statement</a>
                <a className="block">Terms & Conditions</a>
                <a className="block">Cookie Policy/Settings</a>
                <a className="block">Accessibility Statement</a>
                </div>
            </div>
        </div>

        <div className="text-md text-gray-400 mt-8">
            © 2025 XDAS. All Rights Reserved.
        </div>
    </div>

  )

}

export default SocilasAndLinks;
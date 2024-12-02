// import React from 'react'
// import Hamburger from './Hamburger';
// import Image from 'next/image';
// import syslabLogo from '../../../public/logosyslab.svg';

// function NavList() {
//     return (
//         <ul className="relative flex flex-col lg:flex-row lg:items-center lg:gap-6 font-[system-ui] text-black font-medium un">
//             <li className="p-1">
//                 <a href="#" className="flex items-center transition-colors">
//                     Home
//                 </a>
//             </li>
//             <li className="p-1">
//                 <a href="#about" className="flex items-center transition-colors">
//                     About
//                 </a>
//             </li>
//             <li className="p-1">
//                 <a href="#products" className="flex items-center transition-colors">
//                     Products
//                 </a>
//             </li>
//             <li className="p-1">
//                 <a href="#awards" className="flex items-center transition-colors">
//                     Awards & Partners
//                 </a>
//             </li>
//             <li className="p-1">
//                 <a href="#services" className="flex items-center transition-colors">
//                     Services
//                 </a>
//             </li>
//             <li className="p-1">
//                 <a href="#contactus" className="flex items-center transition-colors">
//                     Contact Us
//                 </a>
//             </li>
//         </ul>
//     );
// }
// function Navbar() {
//     return (
//         <>
//             <div className='fixed -top-1 z-[10000] flex justify-between items-center w-full px-10 sm:px-12 md:px-20 py-6 bg-white font-[system-ui] text-black font-medium shadow'>
//                 <div>
//                     <Image alt="" src={syslabLogo}/>
//                 </div>
//                 <div className="hidden lg:block">
//                     <NavList />
//                 </div>
//                 {/* Hamburger Component for Mobile Navigation */}
//                 <Hamburger />
//             </div>
//         </>
//     )
// }

// export default Navbar



import React from 'react';
import Hamburger from './Hamburger';
import Image from 'next/image';
import syslabLogo from '../../../public/logosyslab.svg';

const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#awards", label: "Awards & Partners" },
    { href: "#services", label: "Services" },
    { href: "#contactus", label: "Contact Us" },
];

const NavList = () => (
    <ul className="relative flex flex-col lg:flex-row lg:items-center lg:gap-6 font-[system-ui] text-black font-medium un">
        {navLinks.map(({ href, label }) => (
            <li key={href} className="p-1">
                <a href={href} className="flex items-center transition-colors">
                    {label}
                </a>
            </li>
        ))}
    </ul>
);

const Navbar = () => (
    <div className="fixed -top-[1px] z-[10000] flex justify-between items-center w-full px-10 sm:px-12 md:px-20 py-4 md:py-5 bg-white font-[system-ui] text-black font-medium shadow">
        <div>
            <Image alt="Syslab Logo" src={syslabLogo} className='w-32 cursor-pointer' />
        </div>
        <div className="hidden lg:block">
            <NavList />
        </div>
        {/* Hamburger Component for Mobile Navigation */}
        <Hamburger />
    </div>
);

export default Navbar;

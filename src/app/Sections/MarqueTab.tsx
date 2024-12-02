import React from "react";
import FastMarquee from "./FastMarquee";
export default function MarqueTab() {
    return (
        <div id="awards" className="flex flex-col items-center justify-center bg-white min-h-screen text-gray-800">
            {/* Section: Translating Technology */}
            <section className="text-center py-16 px-6">
                <h1 className="text-4xl font-bold mb-6">
                    Translating technology <br /> into a positive impact
                </h1>
                <p className="text-lg max-w-3xl mx-auto mb-8">
                    Our approach allows us to deliver exceptional experiences that drive
                    growth and success for all stakeholders. Let’s rise to new heights
                    with the power of digital transformation.
                </p>
                <a
                    href="#"
                    className="text-orange-500 text-lg font-semibold hover:underline"
                >
                    LEARN MORE →
                </a>
            </section>

            {/* Metrics Section */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:px-12 sm:px-12 gap-8 text-center py-10">
                <div className="border rounded-lg shadow-md py-16 px-4">
                    <h2 className="text-3xl font-bold">47+</h2>
                    <p className="text-gray-600">Years of continual excellence</p>
                </div>
                <div className="border rounded-lg shadow-md py-16 px-4">
                    <h2 className="text-3xl font-bold">7000+</h2>
                    <p className="text-gray-600">Change makers driving revolution</p>
                </div>
                <div className="border rounded-lg shadow-md py-16 px-4">
                    <h2 className="text-3xl font-bold">16+</h2>
                    <p className="text-gray-600">
                        Countries with our presence and clientele
                    </p>
                </div>
                <div className="border rounded-lg shadow-md py-16 px-4">
                    <h2 className="text-3xl font-bold">618+</h2>
                    <p className="text-gray-600">Active clients across the globe</p>
                </div>
            </section>


            {/* <section className="w-full overflow-hidden py-2 bg-gray-50">
                <div
                    className="relative overflow-hidden py-8 whitespace-nowrap"
                >
                    <div
                        className="inline-flex px-12"
                        style={{ animation: "15s marquee infinite linear" }}
                    >
                        <img src={images.a} alt="AWS" className="h-12 sm:h-16 mx-6 px-6 sm:px-12" />
                        <img src={images.b} alt="Salesforce" className="h-12 sm:h-16 mx-6 px-6 sm:px-12" />
                        <img src={images.c} alt="Cloudera" className="h-12 sm:h-16 mx-6 px-6 sm:px-12" />
                        <img src={images.d} alt="Sprinklr" className="h-12 sm:h-16 mx-6 px-6 sm:px-12" />
                        <img src={images.e} alt="Informatica" className="h-12 sm:h-16 mx-6 px-6 sm:px-12" />
                        <img src={images.f} alt="AWS" className="h-12 sm:h-16 mx-6 px-6 sm:px-12" />
                        <img src={images.g} alt="Salesforce" className="h-12 sm:h-16 mx-6 px-6 sm:px-12" />
                        <img src={images.h} alt="Cloudera" className="h-12 sm:h-16 mx-6 px-6 sm:px-12" />
                    </div>
                    <div
                        className="inline-flex px-12"
                        style={{ animation: "15s marquee infinite linear" }}
                    >
                        <img src={images.a} alt="AWS" className="h-12 sm:h-16 mx-6 px-6 sm:px-12" />
                        <img src={images.b} alt="Salesforce" className="h-12 sm:h-16 mx-6 px-6 sm:px-12" />
                        <img src={images.c} alt="Cloudera" className="h-12 sm:h-16 mx-6 px-6 sm:px-12" />
                        <img src={images.d} alt="Sprinklr" className="h-12 sm:h-16 mx-6 px-6 sm:px-12" />
                        <img src={images.e} alt="Informatica" className="h-12 sm:h-16 mx-6 px-6 sm:px-12" />
                        <img src={images.f} alt="AWS" className="h-12 sm:h-16 mx-6 px-6 sm:px-12" />
                        <img src={images.g} alt="Salesforce" className="h-12 sm:h-16 mx-6 px-6 sm:px-12" />
                        <img src={images.h} alt="Cloudera" className="h-12 sm:h-16 mx-6 px-6 sm:px-12" />
                        <img src={images.i} alt="Sprinklr" className="h-12 sm:h-16 mx-6 px-6 sm:px-12" />
                    </div>
                </div>
            </section> */}

            <FastMarquee />


        </div>
    );
}






// import React from "react";
// import FastMarquee from "./FastMarquee";
// export default function MarqueTab() {
//     const images = {
//         a: "/fastone.png", // Referencing the image relative to the public folder
//         b: "/googlecloudplatform_.png", // Same here
//         c: "/hec2.jpg", // Same here
//         d: "/ncai2.png", // Same here
//         e: "/nic4.png", // Same here
//         f: "/nividia.png", // Same here
//         g: "/pasha7.png", // Same here
//         h: "/pif-logo.png", // Same here
//         i: "/shamsipng5.png", // Same here
//     };
//     return (
//         <div id="awards" className="flex flex-col items-center  bg-white min-h-screen text-gray-800 pt-12">
//             {/* Section: Translating Technology */}
//             <section className="w-[60%]">
//                 <h1 className="text-5xl font-bold mb-8">
//                     Translating technology <br /> into a positive impact
//                 </h1>
//                 {/* <p className="text-lg mx-auto mb-8 text-justify">
//                     Our approach allows us to deliver exceptional experiences that drive
//                     growth and success for all stakeholders. Let’s rise to new heights
//                     with the power of digital transformation.
//                 </p> */}
//                 <p className=" text-black text-justify">
//                     SYSLAB.AI (Private) Limited focuses on providing and developing innovative Artificially Intelligent (AI)
//                     solutions. Our motto is that technology and innovation should be explored to develop efficient and effective
//                     solutions. With a team of dedicated and talented professionals, developers, and scientists, we strive to
//                     deliver efficient solutions to B2B as well as B2C market. Inspired by the emerging technologies such as Deep
//                     Learning, Natural Language Processing, Computer Vision, Generative AI, IoTs, and Blockchain, we are developing
//                     and enriching solutions that can be beneficial for the industry. For details, please feel free to send us a
//                     query at info at syslab.com
//                 </p>
//                 <a
//                     href="#"
//                     className="text-orange-500 text-lg font-semibold hover:underline"
//                 >
//                     LEARN MORE →
//                 </a>
//             </section>



//             {/* Metrics Section */}
//             <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:px-12 sm:px-12 gap-8 text-center py-10">
//                 <div className="border rounded-lg shadow-md py-16 px-4">
//                     <h2 className="text-3xl font-bold">47+</h2>
//                     <p className="text-gray-600">Years of continual excellence</p>
//                 </div>
//                 <div className="border rounded-lg shadow-md py-16 px-4">
//                     <h2 className="text-3xl font-bold">7000+</h2>
//                     <p className="text-gray-600">Change makers driving revolution</p>
//                 </div>
//                 <div className="border rounded-lg shadow-md py-16 px-4">
//                     <h2 className="text-3xl font-bold">16+</h2>
//                     <p className="text-gray-600">
//                         Countries with our presence and clientele
//                     </p>
//                 </div>
//                 <div className="border rounded-lg shadow-md py-16 px-4">
//                     <h2 className="text-3xl font-bold">618+</h2>
//                     <p className="text-gray-600">Active clients across the globe</p>
//                 </div>
//             </section>

//             <FastMarquee />


//         </div>
//     );
// }

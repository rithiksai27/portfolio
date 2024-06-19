import { GlareCard1 } from "./ui/Glare-Card1";
import { GlareCard2 } from "./ui/Glare-Card2";
import { GlareCard3 } from "./ui/Glare-Card3";
import { GlareCard4 } from "./ui/Glare-Card4";

export function GlareCardDemo() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-5" id="Certifications">
      <h1 className="heading text-center mb-8">
        Discover My <span className="text-purple">Verified Expertise</span>
      </h1>

      {/* Adding margin bottom of 12 units */}
      <div className="mb-12"></div>

      {/* Flex container for the cards with space between them */}
      <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-8 lg:space-x-8">
        {/* First row */}
        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
          <a 
            href="https://www.udemy.com/certificate/UC-81939939-f432-4dcd-a2c3-5fbda3633925/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center h-full"
          >
            <GlareCard1 className="glare-card-1 flex flex-col items-center justify-between p-8">
              <h1 className="text-white-900 font-bold text-4xl">Complete Web Development Bootcamp</h1>
              <p className="text-custom-purple font-bold text-xl mt-4">Click here to verify</p>
            </GlareCard1>
          </a>

          <a 
            href="https://www.coursera.org/account/accomplishments/verify/TNTU4RFYVDRS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center h-full"
          >
            <GlareCard3 className="glare-card-2 flex flex-col items-center justify-between p-8">
              <h1 className="text-white-900 font-bold text-4xl">Introduction to Databases</h1>
              <p className="text-custom-purple font-bold text-xl mt-4">Click here to verify</p>
            </GlareCard3>
          </a>
        </div>

        {/* Second row */}
        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
        <a 
            href="https://ibb.co/dpwTjft" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center h-full"
          >
            <GlareCard2 className="glare-card-2 flex flex-col items-center justify-between p-8">
              <h1 className="text-white-900 font-bold text-4xl">Data Structures in Java</h1>
              <p className="text-custom-purple font-bold text-xl mt-4">Click here to verify</p>
            </GlareCard2>
          </a>
          <a 
            href="https://www.coursera.org/account/accomplishments/verify/J4XR9UWHANQS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center h-full"
          >
            <GlareCard4 className="glare-card-2 flex flex-col items-center justify-between p-8">
              <h1 className="text-white-900 font-bold text-4xl">Introduction to Object-Oriented Programming with Java</h1>
              <p className="text-custom-purple font-bold text-xl mt-4">Click here to verify</p>
            </GlareCard4>
          </a>
        </div>
      </div>
    </div>
  );
}

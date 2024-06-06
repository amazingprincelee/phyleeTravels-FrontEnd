import React from 'react';
import referalImage from '../images/ReferralBonus.png';

function HomeAbout() {
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="h-100 p-5 website-red text-white rounded-3">
            <h2>About us</h2>
            <p>Certainly! Here's a random 30-word lorem ipsum paragraph:

"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet eros nec lacus fermentum, at efficitur libero sodales. Fusce dapibus urna ut libero aliquam, vitae vehicula est gravida."</p>
            <ul className='' style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              <li>lorem consectetur</li>
              <li>lorem consectetur</li>
              <li>lorem consectetur</li>
            </ul>
            {/* <small>As a reputable entity, we specialize in crafting secure and lucrative applications designed specifically for cryptocurrency investors. With a focus on reliability and profitability, our offerings cater to the diverse needs of our discerning clientele, ensuring satisfaction and success in their investment endeavors.</small> */}
          </div>
        </div>
        <div className="col-md-6">
          <div className='text-center referal-container'>
            <img src={referalImage} alt='Referral Bonus' width={250} height={200} />
            <h3 style={{ fontFamily: 'Arial, sans-serif', color: '#1a1a1a' }}>Unlock a Rewarding Opportunity</h3>
            <p>Certainly! Here's a random 30-word lorem ipsum paragraph:

"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet eros nec lacus fermentum, at efficitur libero sodales. Fusce dapibus urna ut libero aliquam, vitae vehicula est gravida."</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HomeAbout;

import React from 'react';
import aboutImage from '../images/about-us.jpg';

function AboutUs() {
  return (
    <div className='mb-5'>
      <header style={{border: "2px solid"}}>
        <h1 className='page-title'>About Us</h1>
      </header>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id neque nisi. Curabitur ultrices eget sapien a porta. Sed auctor dignissim risus eu mollis. Curabitur a ipsum tincidunt, sodales ipsum non, tempor nisi. Proin lacinia ex vitae magna faucibus, vitae placerat mauris sagittis. Nullam ut eros hendrerit, varius nisi vitae, rhoncus eros.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id neque nisi. Curabitur ultrices eget sapien a porta. Sed auctor dignissim risus eu mollis. Curabitur a ipsum tincidunt, sodales ipsum non, tempor nisi. Proin lacinia ex vitae magna faucibus, vitae placerat mauris sagittis. Nullam ut eros hendrerit, varius nisi vitae, rhoncus eros.</p>

            <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id neque nisi. Curabitur ultrices eget sapien a porta. Sed auctor dignissim risus eu mollis. Curabitur a ipsum tincidunt, sodales ipsum non, tempor nisi. Proin lacinia ex vitae magna faucibus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id neque nisi.</p>
            <img src={aboutImage} alt='about' className='img-fluid mt-3' />
          </div>

          <div className='col-lg-6'>
            <h1>Testimonials</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id neque nisi. Curabitur ultrices eget sapien a porta. Sed auctor dignissim risus eu mollis. Curabitur a ipsum tincidunt, sodales ipsum non, tempor nisi. Proin lacinia ex vitae magna faucibus, vitae placerat mauris sagittis. Nullam ut eros hendrerit, varius nisi vitae, rhoncus eros</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id neque nisi. Curabitur ultrices eget sapien a porta. Sed auctor dignissim risus eu mollis. Curabitur a ipsum tincidunt, sodales ipsum non, tempor nisi. Proin lacinia </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id neque nisi. Curabitur ultrices eget sapien.</p>
            <p className='font-weight-bold'>A. O. <br />
            Lorem ipsum dolor sit amet<br />
            Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id neque nisi. Curabitur ultrices eget.</p>
            <p className='font-weight-bold'>Kadfdfdren E.
              Manager
              Wentworth Care Home</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

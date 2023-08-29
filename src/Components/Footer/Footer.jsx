import React from 'react';
import nordiclogo from '../../Assets/NORDIC ROSE.png';
function Footer() {
  return (
    <div>
      <footer>
        <div style={{ width: '100%', backgroundColor: 'black' }}>
          <div style={{ color: 'white', textAlign: 'center', marginBottom: '70px' }}>
            <h5>Digital product design Remote work UX design Distributed teams Creativity Strategy Suspense Growth</h5>
          </div>

          <div style={{ textAlign: 'center', color: 'white' }}>
            <div>
              <img src={nordiclogo} alt="" />
            </div>
            <div style={{ margin: '30px' }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu <br /> velit tempus erat egestas efficitur.
                In hac habitasse platea <br /> dictumst. Fusce a nunc eget ligula suscipit finibus.
              </p>
            </div>
            <div>
              <a style={{ color: 'white' }} href="/">Twitter</a>
              <a style={{ margin: '20px', color: 'white' }} href="/">LinkedIn</a>
              <a style={{ color: 'white' }} href="/">RSS</a>
            </div>
            <div style={{ marginTop: '30px', paddingBottom: '30px' }}>
              <p>© 2012–2020 Nordic Rose Co. <br /> All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

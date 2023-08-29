import React from 'react';
import img2 from '../../Assets/image2.png'
import mask from '../../Assets/Mask Group.png'
import grp55 from '../../Assets/Group 55.png'
import grp4 from '../../Assets/Group 4.png'
import grp8 from '../../Assets/Rectangle 8.png'
import grp38 from '../../Assets/Group 38.png'
import grp37 from '../../Assets/Group 37.png'
import grp10 from '../../Assets/Group 10.png'

function HeroSection() {
  return (
    <>
      <div id="topic">
        <h1>A few words about this blog <br/> platform, Ghost and how this <br/> site was made</h1>
        <p>Why Ghost (& Figma) instead of Medium, WordPress <br/> or other options?</p>
      </div>
      <div id="img-2">
        <img src={img2} alt=""/>
      </div>
      <hr id="hr"/>
      <div id="img-contain">
        <div id="mask">
          <img src={mask} alt=""/>
          <img src={grp55} alt=""/>
        </div>
        <div id="fb">
          <img src={grp4} alt=""/>
        </div>
      </div>
      <div className="after-img">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, molestias. Magnam eveniet ex quis minus <br/>
          perspiciatis saepe, deserunt dolor consequatur ipsam ea placeat quae. Vitae, sapiente. Labore molestias qui
          <br/> velit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis repudiandae rerum perferendis id
          repellendus <br/>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis fuga animi illo, possimus vitae iusto.
        </p>
      </div>
      <div className="after-img">
        <p>Ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, molestias. Magnam eveniet ex quis minus
          <br/> perspiciatis saepe, deserunt dolor consequatur ipsam ea placeat quae. Vitae, sapiente. Labore molestias
          qui <br/> velit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis repudiandae rerum perferendis
          id repellendus <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis fuga animi illo,
          possimus vitae iusto.
        </p>
      </div>
      <div id="pipeline">
        <h1>Next on this pipeline</h1>
      </div>
      <div className="after-img">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, molestias. Magnam eveniet ex quis minus <br/>
          perspiciatis saepe, deserunt dolor consequatur ipsam ea placeat quae. Vitae, sapiente. Labore molestias qui
          <br/> velit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis repudiandae rerum perferendis id
          repellendus <br/>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis fuga animi illo, possimus vitae iusto.
        </p>
      </div>
      <div id="pip-para">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, molestias. Magnam eveniet ex quis minus <br/>
          perspiciatis saepe, deserunt dolor consequatur ipsam ea placeat quae. Vitae, sapiente.</p>
      </div>
      <div className="after-img">
        <img src={grp8} alt=""/>
      </div>
      <div id="after-rectangle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis similique <br/> at voluptate nulla
        consectetur, veniam alias.
      </div>
      <div className="after-img">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, molestias. Magnam eveniet ex quis minus <br/>
          perspiciatis saepe, deserunt dolor consequatur ipsam ea placeat quae. Vitae, sapiente. Labore molestias qui
          <br/> velit. Lorem ipsum dolor sit
        </p>
      </div>
      <div className="after-img">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, molestias. Magnam eveniet ex quis minus <br/>
          perspiciatis saepe, deserunt dolor consequatur ipsam ea placeat quae. Vitae, sapiente. Labore molestias qui
          <br/> velit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis repudiandae rerum perferendis id
          repellendus <br/>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis fuga animi illo, possimus vitae iusto.
        </p>
      </div>
      <div id="list">
        <p>A list looks like this.</p>
        <ul>
          <li style={{ marginBottom: '9px' }}>First item in this list</li>
          <li style={{ marginBottom: '9px' }}>Second item in this list Lorem ipsum dolor sit amet consectetur adipisicing.
            <br/> Lorem ipsum dolor sit amet.
          </li>
          <li style={{ marginBottom: '9px' }}>Third item in this list.</li>
        </ul>
      </div>
      <div id="pip-para">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, molestias. Magnam eveniet ex quis minus <br/>
          perspiciatis saepe, deserunt dolor consequatur ipsam ea placeat quae. Vitae, sapiente.</p>
      </div>
      <div id="thanks">
        <p>Thanks for reading <br/> Mika </p>
      </div>
      <div id="share">
        <div id="share-fb">
          <button style={{ backgroundColor: 'white', border: 'none' }}>
            <img src={grp38} alt=""/>
          </button>
        </div>
        <div id="share-twitter">
          <button style={{ backgroundColor: 'white', border: 'none' }}>
            <img src={grp37} alt=""/>
          </button>
        </div>
      </div>
      <div className="container">
        <div>
          <p style={{ marginLeft: '300px', marginTop: '20px' }}>Tags: product design, culture</p>
          <hr style={{ width: '700px', marginTop: '20px' }}/>
        </div>
      </div>
      <div className="mika">
        <div className="mika-img">
          <div style={{ margin: '20px' }}><img src={mask} width="40px" alt=""/></div>
        </div>
        <div className="mika-para">
          <div>
            <p><b>Mika Matikainen</b> is a Design Founder & Advisor, Berlin School of <br/> Creative Leadership
              Executive MBA participant, Zippie advisor, Wolt <br/> co-founder, and Nordic Rose stakeholder. </p>
          </div>
        </div>
      </div>
      <div className="hr">
        <div style={{ width: '49%' }}>
          <hr/>
        </div>
        <div><img src={grp10} width="40px" alt=""/></div>
        <div style={{ width: '49%' }}>
          <hr/>
        </div>
      </div>
    </>
  );
}

export default HeroSection;

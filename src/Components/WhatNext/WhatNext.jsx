import React from 'react';
import rtc4 from '../../Assets/Rectangle 4.png'
import rtc11 from '../../Assets/Rectangle 11.png'
import rtc10 from '../../Assets/Rectangle 10.png'
import rtc37 from '../../Assets/Rectangle 37.png'
import rtc38 from '../../Assets/Rectangle 38.png'
import rtc39 from '../../Assets/Rectangle 39.png'

function WhatNext() {
  return (
    <>
      <div style={{ margin: '20px', textAlign: 'center' }}>
        <h1>What to read next</h1>
      </div>
      <div className="read-1">
        <div>
          <div style={{ margin: '20px' }}><img src={rtc4} width="200px" alt=""/></div>
          <div style={{ textAlign: 'center' }}>
            <p>Connecting artificial intelligence <br/> with digital product design</p>
          </div>
        </div>
        <div>
          <div style={{ margin: '20px' }}><img src={rtc11} width="200px" alt=""/></div>
          <div style={{ textAlign: 'center' }}>
            <p>Hello world, or, in other <br/> words, why this blog exists</p>
          </div>
        </div>
        <div>
          <div style={{ margin: '20px' }}><img src={rtc10} width="200px" alt=""/></div>
          <div style={{ textAlign: 'center' }}>
            <p>Here are some things you <br/> should know regarding how <br/> we work </p>
          </div>
        </div>
      </div>
      <div className="read-1">
        <div>
          <div style={{ margin: '20px' }}><img src={rtc37} width="200px" alt=""/></div>
          <div style={{ textAlign: 'center' }}>
            <p>A few words about this blog <br/> platform, Ghost, and how <br/> this site was made</p>
          </div>
        </div>
        <div>
          <div style={{ margin: '20px' }}><img src={rtc39} width="200px" alt=""/></div>
          <div style={{ textAlign: 'center' }}>
            <p>Updating list of 50+ sources <br/> on distributed teams, remote <br/> work, and how to make it all <br/>
              work better</p>
          </div>
        </div>
        <div>
          <div style={{ margin: '20px' }}><img src={rtc38} width="200px" alt=""/></div>
          <div style={{ textAlign: 'center' }}>
            <p>How modern remote <br/> working tools get along with <br/> Old School Cowboy's <br/> methods</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatNext;

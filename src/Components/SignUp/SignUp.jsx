import React from 'react';

function SignUp() {
  return (
    <>
      <div className="box">
        <div className="search">
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <h1>Sign up for the newsletter</h1>
          </div>
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <p>If you want relevant updates occasionally, sign up for <br/> the private newsletter. Your email is never shared. </p>
          </div>
          <div className="search-box">
            <div style={{ border: '1px solid black' }}>
              <table>
                <tr>
                  <td style={{ width: '280px' }}>Enter your email.. </td>
                </tr>
              </table>
            </div>
            <div style={{ width: '100px', backgroundColor: 'black', textAlign: 'center', color: 'white', paddingTop: '5px' }}>
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;

// eslint-disable-next-line no-unused-vars
import React from 'react';
import './download.css';
import Apple from '../../assets/Image/appstore.svg';
import Google from '../../assets/Image/googlestore.svg';
import Phone from  '../../assets/Image/banner-phones.svg';
import Stroke from '../../assets/Image/stroke-group.png';
// import Phone from '../../assets/images/banner-phones.svg';

function Download() {
    return (
        <div className='download'>
        <div className='download-container'>
          <div className='download-content'>
            <div className='download-header'>
              <h3 className='download-title'>
                Download Zojapay Now!
              </h3>
              <div className='download-app'>
                <a href='https://play.google.com/store/apps/details?id=com.zojatech.zojapay' target="_blank">
                  <img src={Google} alt='Link to play store' />
                </a>
                <a href='https://apps.apple.com/ng/app/zojapay/id1638399129' target="_blank" className='z-50'>
                  <img src={Apple} alt='Link to apple store' />
                </a>
              </div>
            </div>
            <div className='download-banner'>
              <div
                className='download-phone'
              >
                <img src={Phone}/>
              </div>
              <div className='download-stroke'>
                <img
                  src={Stroke}
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Download;

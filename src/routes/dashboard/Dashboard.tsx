import React, { useState } from 'react';
import styles from './Dashboard.module.scss';
import checkmark from '../../utils/checkmark.svg';
import { Footer } from '../../components/layout';
import Toggle from '../../components/atoms/toggle/Toggle';


const Donation = () => {
  const [activeTab, setActiveTab] = useState<string>('ANALYTICS');
  const [selectedChartButton, setSelectedChartButton] = useState<string>('DAY');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handleChartButtonClick = (buttonName: string) => {
    setSelectedChartButton(buttonName);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'ANALYTICS' ? styles['--selected'] : ''}`}
          onClick={() => handleTabClick('ANALYTICS')}
        >
          ANALYTICS
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'ALERTS' ? styles['--selected'] : ''}`}
          onClick={() => handleTabClick('ALERTS')}
        >
          ALERTS
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'SETTINGS' ? styles['--selected'] : ''}`}
          onClick={() => handleTabClick('SETTINGS')}
        >
          SETTINGS
        </button>
      </div>
      <div className={styles['tab-panel']}>

        {activeTab === 'ANALYTICS' && (
          <div className={styles.content}>
         
            <div className={styles['analyticstab-recentdonationheading']}>
             YOUR REVENUE
            </div>
            <div className={styles['analyticstab-recentdonationrectangle']}>
           
            </div>
          </div>
        )}
{activeTab === 'ALERTS' && (
  <div className={styles.content}>
    <div className={styles['alertstab-rectangle']}>
      <h4 className={styles['alertstab-alerttypeheading']}>ALERT-TYPE</h4>
      <p className={styles['alertstab-alerttypesubheading']}>
        Select an alert from our <br /> range of crypto-themed alerts.
      </p>
      <div className={styles['alertstab-alerttypealertslectionbox']}>
        {/* Rest of the code... */}
      </div>
      <div className={styles['alertstab-profanityfilterheading']}>PROFAINITY FILTER</div>
      <div className={styles['alertstab-profanityfiltermessageheading']}>MESSAGE</div>
      <div className={styles['alertstab-obsurlheading']}>OBS URL</div>
      <div className={styles['alertstab-alertbrowsersourceheading']}>ALERT BROWSER SOURCE URL</div>
      <div className={styles['alertstab-alertbrowsersourcelinkbox']}>
        {/* Insert content for the alert browser source link box */}
      </div>
      <h5 className={styles['alertstab-subscribecountheading']}>SUBSCRIBER-COUNT <br/> BROWSER SOURCE URL</h5>
      <div className={styles['alertstab-subscribecountbox']}></div>
      <div className={styles['alertstab-fontcontainer']}>
        <h4 className={styles['alertstab-fontheading']}>FONT</h4>
        <h5 className={styles['alertstab-fonttypeheading']}>FONT-TYPE</h5>
        <select className={styles['alertstab-fonttypeinput']}>
          <option value="font1">Font 1</option>
          <option value="font2">Font 2</option>
          {/* Add more font options */}
        </select>
        <h5 className={styles['alertstab-alertfontsizeheading']}>ALERT FONT-SIZE</h5>
        <select className={styles['alertstab-alertfontsizeinput']}>
          <option value="size1">Size 1</option>
          <option value="size2">Size 2</option>
          {/* Add more font size options */}
        </select>
        <h5 className={styles['alertstab-subscribercountfontsizeheading']}>SUBSCRIBER-COUNT FONT-SIZE</h5>
        <select className={styles['alertstab-subscribercountfontsizeinput']}>
          <option value="size1">Size 1</option>
          <option value="size2">Size 2</option>
          {/* Add more font size options */}
        </select>
        <h5 className={styles['alertstab-fontcolorheading']}>FONT COLOR</h5>
        <input className={styles['alertstab-fontcolorinput']} type="text" placeholder="#0000" />
        <div className={styles['alertstab-fontcolordefaultselections']}>
          <div className={styles['color-circle']} style={{ backgroundColor: 'blue' }}></div>
          <div className={styles['color-circle']} style={{ backgroundColor: 'red' }}></div>
          <div className={styles['color-circle']} style={{ backgroundColor: 'green' }}></div>
          <div className={styles['color-circle']} style={{ backgroundColor: 'yellow' }}></div>
        </div>
      </div>
      <h5 className={styles['alertstab-previewheading']}>PREVIEW:</h5>
      <div className={styles['alertstab-previewrectangle']}></div>
      <button className={styles['alertstab-testdonationbutton']}>TEST DONATION</button>
      <button className={styles['alertstab-testsubscriptionbutton']}>TEST SUBSCRIPTION</button>
      <button className={styles['alertstab-savebutton']}>SAVE CHANGES</button>
    </div>
  </div>
)}




{activeTab === 'SETTINGS' && (
  <div className={styles.content}>
    <div className={styles['settingstab-rectangle']}>
      <h4 className={styles['settingstab-donationpagenameheading']}>DONATION PAGE NAME</h4>
      <input className={styles['settingstab-donationpagenameinput']} type="text" placeholder="Enter your page name" />
        {/* Insert content for donation page name input */}
      </div>
      <h5 className={styles['settingstab-uploadprofileimageheading']}>UPLOAD PROFILE IMAGE</h5>
      <div className={styles['settingstab-profileimage']}></div>
      <button className={styles['settingstab-uploadbutton']}>UPLOAD</button>
      <h5 className={styles['settingstab-maximumsizeheading']}>MAXIMUM SIZE: 4MB <br/> (PNG, PDF, SVG)</h5>
      {/* Insert content for maximum size */}
      <h5 className={styles['settingstab-linktoyourdonationpageheading']}>LINK TO YOUR DONATION PAGE</h5>
      <div className={styles['settingstab-linktoyourdonationpageselectionbox']}>
      <button className={styles['settingstab-savechangesbutton']}>SAVE CHANGES</button>
        {/* Insert content for link to donation page selection box */}
      </div>
    </div>
  
)}

      </div>
    </div>
  );
};

export default Donation;

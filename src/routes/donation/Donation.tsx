import React, { useState, ChangeEvent } from 'react';
import styles from './Donation.module.scss';
import checkmark from '../../utils/checkmark.svg';

const Donation = () => {
  const [activeTab, setActiveTab] = useState<string>('Donate');
  const [connected, setConnected] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [message, setMessage] = useState<string>('');
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState<boolean>(false);
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState<boolean>(false);
  const [showTokenSelection, setShowTokenSelection] = useState<boolean>(false);
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedMonth, setSelectedMonth] = useState<string>('');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDonationAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDonationAmount(Number(event.target.value));
  };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleTokenDropdownClick = () => {
    setShowTokenSelection(true);
  };

  const handleYearDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  const handleMonthDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'Donate' ? styles['--selected'] : ''}`}
          onClick={() => handleTabClick('Donate')}
        >
          DONATE
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'Subscribe' ? styles['--selected'] : ''}`}
          onClick={() => handleTabClick('Subscribe')}
        >
          SUBSCRIBE
        </button>
      </div>

      <div className={styles['tab-panel']}>
        {activeTab === 'Donate' && (
          <div className={styles.content}>
            <div className={styles.rectangle}>
              <div className={styles.profileImage} />
              <div className={styles.creatorName}>CREATOR NAME</div>
              <div className={styles.subscriberBox}>
                {connected ? <p>SUBSCRIBED</p> : <p>NOT SUBSCRIBED</p>}
              </div>
              <div className={styles.yourName}>YOUR NAME</div>
              <div className={styles.nameInputContainer}>
                <input
                  type="text"
                  className={styles.nameInput}
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Enter your name"
                />
              </div>
              <div className={styles.alertSelectionContainer}>
                <div className={styles.alertSelectionText}>
                  SELECT ALERT .GIF
                  <span className={styles.subscribersOnlyText}> ( SUBSCRIBERS ONLY )</span>
                </div>
              </div>
              <div className={styles.alertRectangle} style={{ backgroundColor: '#241C32' }}></div>
              <div className={styles.messageContainer}>
                <div className={styles.messageText}>MESSAGE</div>
                <div className={styles.newMessageInputContainer}>
                  <textarea
                    className={styles.newMessageInput}
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div className={styles.donateButtonContainer}>
                  <button className={styles.donateButton}>DONATE</button>
                </div>
              </div>
             
              <div className={styles.donationAmountContainer}>
                <div className={styles.donationAmountText}>DONATION AMOUNT</div>
                <div className={styles.donationAmountInputContainer}>
                  <input
                    type="number"
                    className={styles.donationAmountInput}
                    value={donationAmount}
                    onChange={handleDonationAmountChange}
                    placeholder="Enter donation amount"
                  />
                </div>
              </div>
            </div>
          </div>
        )}  
{activeTab === 'Subscribe' && (
  <div className={styles.content}>
    <div className={styles.rectangle}>
      <div className={styles.profileImage} />
      <div className={styles.creatorName}>CREATOR NAME</div>
      <div className={styles.subscriberBox}>
        <p>NOT SUBSCRIBED</p>
      </div>
      <div className={styles.benefitsRectangle}>
        <h3 className={styles.benefitsHeading}>
          BENEFITS INCLUDED IN <span>$5 P/M</span> COMMITMENT
        </h3>
        <div className={styles.bulletPoints}>
          <div className={styles.bulletPoint}>
            <img src={checkmark} alt="Checkmark" className={styles.checkmark} />
            <p className={styles.benefitText}>Support creators with a 99:1 revenue split</p>
          </div>
          <div className={styles.bulletPoint}>
            <img src={checkmark} alt="Checkmark" className={styles.checkmark} />
            <p className={styles.benefitText}>Fee-less donations + gas</p>
          </div>
          <div className={styles.bulletPoint}>
            <img src={checkmark} alt="Checkmark" className={styles.checkmark} />
            <p className={styles.benefitText}>Access to alert .gifs</p>
          </div>
        </div>
      </div>
      <div className={styles.subscriptionExpiresContainer}>
        <div className={styles.subscriptionExpiresHeading}>SUBSCRIPTION EXPIRES IN:</div>
        <div className={styles.subscriptionExpiresSubheading}>{/* Display remaining subscription duration here */}</div>
      </div>
      <div className={styles.subscribeWithContainer}>
        <h3 className={styles.subscribeWithHeading}>SUBSCRIBE WITH</h3>
        <div className={styles.subscribeWithRectangle}></div>
        </div>
      <div className={styles.selectDurationOfSubscriptionHeading}>SELECT DURATION OF SUBSCRIPTION</div>
      <div className={styles.durationContainer}>
        <div className={styles.durationOption}>
          <div onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}>
          
          </div>
          <div className={`${styles.yearDropdown} ${isYearDropdownOpen ? styles.open : ''}`}>
            {/* Dropdown for years */}
            <select className={styles.dropdownSelect}>
              <option disabled selected>
                Years
              </option>
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3 Years</option>
              {/* Add more options for years */}
            </select>
          </div>
        </div>
        <div className={styles.durationOption}>
          <div onClick={() => setIsMonthDropdownOpen(!isMonthDropdownOpen)}>
           
          </div>
          <div className={`${styles.monthDropdown} ${isMonthDropdownOpen ? styles.open : ''}`}>
            {/* Dropdown for months */}
            <select className={styles.dropdownSelect}>
              <option disabled selected>
                Months
              </option>
              <option value="1">1 Month</option>
              <option value="2">2 Months</option>
              <option value="3">3 Months</option>
              {/* Add more options for months */}
            </select>
          </div>
        </div>
      </div>
      <button className={styles.subscribeButton}>SUBSCRIBE</button>
    </div>
  </div>
)}
</div>
</div>
);
};

export default Donation;

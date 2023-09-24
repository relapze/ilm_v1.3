import React, { useState } from 'react';
import './Stake.scss';
import QuestionPopupLogo from '../../utils/questionpopup.svg';

function Stake() {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('stake');
  const [selectedTab, setSelectedTab] = useState<string>('');

  const handleLogoHover = (hovered: boolean) => {
    setIsHovered(hovered);
    setShowPopup(hovered);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSelectedTab('');
  };

  const handleClaimEarnings = () => {
    // Handle claim earnings logic here
  };

  return (
    <div className="wrapper">
      <div className="stake-container">
        <h1 className="stakeheading">STAKE YOUR ILM</h1>
        <h2 className="stakesubheading">
          Stake your ILM for a share of the protocol's revenue,
          <br />
          where you will earn yield daily!
        </h2>

        <div className="current-stats-container">
          <h3 className="currentepochendsheading">CURRENT EPOCH ENDS IN:</h3>
          <div className="stakecurrentstatsrectangle">
            <div className="stats-box">
              <div className="stat-box">
                <h4 className="stat-heading">TOTAL LOCKED ILM</h4>
              </div>
              <div className="stat-box">
                <h4 className="stat-heading">AVG LOCK TIME</h4>
              </div>
              <div className="stat-box">
                <h4 className="stat-heading">CURRENT APR</h4>
                <div
                  className="questionpopuplogo-container"
                  onMouseEnter={() => handleLogoHover(true)}
                  onMouseLeave={() => handleLogoHover(false)}
                >
                  <img
                    src={QuestionPopupLogo}
                    alt="Question Popup Logo"
                    className={`questionpopuplogo ${isHovered ? 'hovered' : ''}`}
                  />
                  {showPopup && (
                    <div className="questionpopup-container">
                      <div className="questionpopuprectangle">
                        <h4 className="questionpopupheading">
                          <span>Only valid when</span>
                          <br />
                          <span>applying MAX-LOCK</span>
                          <br />
                          <span>ie. 2 YEARS</span>
                        </h4>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="yourstakecontainer">
          <h4 className="yourstakeheading">YOUR STAKE</h4>
          <div className="yourstakerectangle">
            <div className="yourstakestatboxes">
              <div className="yourstakestatbox">
                <h5 className="yourstakestatheading">YOUR LOCKED ILM</h5>
              </div>
              <div className="yourstakestatbox">
                <h5 className="yourstakestatheading">LOCKED UNTIL</h5>
              </div>
              <div className="yourstakestatbox">
                <h5 className="yourstakestatheading">ILM IN WALLET</h5>
              </div>
            </div>

            <div className="stake-tabs">
              <button
                className={`stake-tab ${activeTab === 'stake' ? 'active' : ''}`}
                onClick={() => handleTabChange('stake')}
              >
                STAKE
              </button>
              <button
                className={`withdraw-tab ${activeTab === 'withdraw' ? 'active' : ''}`}
                onClick={() => handleTabChange('withdraw')}
              >
                WITHDRAW
              </button>
            </div>
            {activeTab === 'stake' && (
              <div className="stake-tabrectangle">
                <h6 className="stake-tabheading">STAKE YOUR ILM</h6>
                <input className="stake-tabenterILMinput" type="text" placeholder="Enter amount of ILM" />
                <h6 className="stake-tablockforheading">LOCK FOR:</h6>
                <div className="stake-tablockforbuttons">
                  <button
                    className={`stake-tablock-button ${selectedTab === '2 WEEKS' ? 'selected' : ''}`}
                    onClick={() => setSelectedTab('2 WEEKS')}
                  >
                    2 WEEKS
                  </button>
                  <button
                    className={`stake-tablock-button ${selectedTab === '2 MONTHS' ? 'selected' : ''}`}
                    onClick={() => setSelectedTab('2 MONTHS')}
                  >
                    2 MONTHS
                  </button>
                  <button
                    className={`stake-tablock-button ${selectedTab === '1 YEAR' ? 'selected' : ''}`}
                    onClick={() => setSelectedTab('1 YEAR')}
                  >
                    1 YEAR
                  </button>
                  <button
                    className={`stake-tablock-button ${selectedTab === '2 YEARS' ? 'selected' : ''}`}
                    onClick={() => setSelectedTab('2 YEARS')}
                  >
                    2 YEARS
                  </button>
                </div>

                <div className="stake-tablockeduntilheading">
                  LOCKED UNTIL:
                </div>
                <div className="stake-tabstakeILMbutton">
                  <button className="stake-tabstakeILMbutton">STAKE ILM</button>
                </div>
              </div>
            )}
            {activeTab === 'withdraw' && (
              <div className="withdraw-content">
                <div className="withdraw-tabrectangle">
                  <h6 className="withdraw-tabheading">WITHDRAW YOUR ILM</h6>
                  <div className="withdraw-tabwithdrawheading">
                    <span>WITHDRAWABLE ONLY ONCE <br /> LOCK-PERIOD HAS EXPIRED</span>
                  </div>
                  <h6 className="withdraw-tabavailableheading">AVAILABLE:</h6>
                  <div className="withdraw-tabwithdrawILMbutton">
                    <button className="withdraw-tabwithdrawILMbutton">WITHDRAW ILM</button>
                  </div>
                </div>
              </div>
            )}

            <div className="revenue-share-rectangle">
              <h4 className="revenue-share-heading">
                <span className="purple-text">CLAIMABLE EARNINGS</span><br />
                <span className="white-text">FROM REVENUE-SHARE-VAULT</span>
              </h4>
              <div className="revenue-share-box">
                <h4 className="revenue-stat-heading">TOTAL EARNINGS :</h4>
              </div>
              <div className="revenue-sharebutton">
                <button className="revenue-share-button" onClick={handleClaimEarnings}>
                  CLAIM
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Stake;

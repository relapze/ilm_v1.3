import React, { useState, useEffect } from 'react';

const TokenSelection = () => {
  const [tokenList, setTokenList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch token list from Ethereum Token List or Chainlist API
    const fetchTokenList = async () => {
      try {
        const response = await fetch('https://api.ethplorer.io/getTopTokens?apiKey=your-api-key');
        const data = await response.json();
        setTokenList(data.tokens);
      } catch (error) {
        console.error('Error fetching token list:', error);
      }
    };

    fetchTokenList();
  }, []);

  const filteredTokenList = tokenList.filter((token) =>
    token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTokenSelection = (token) => {
    // Handle token selection
    console.log('Selected token:', token);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        placeholder="Search tokens..."
      />
      <div>
        {filteredTokenList.map((token) => (
          <div key={token.address} onClick={() => handleTokenSelection(token)}>
            <img src={token.logo} alt={token.symbol} />
            <span>{token.symbol}</span>
            <span>{token.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenSelection;

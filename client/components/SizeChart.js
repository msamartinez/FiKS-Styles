import React from 'react';

const SizeChart = () => {
  return (
    <div className="size-chart" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h1>Size Chart</h1>
      <h2>Clothing Size Guide</h2>
      <div style={{ 
        backgroundSize: 'contain', 
        backgroundRepeat: 'no-repeat', 
        height: '50vh', 
        width: '100%',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column' }}>
        <img src="https://cdn.shopify.com/s/files/1/0142/8897/7984/files/cloth.png?v=1622637682" alt="Clothing Size Chart" style={{width: '100%', height: 'auto', maxWidth: '600px', maxHeight: '100%'}} />
      </div>
    </div>
  );
};

export default SizeChart;

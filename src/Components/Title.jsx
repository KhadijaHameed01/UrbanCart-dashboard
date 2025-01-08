import React from 'react';

const Title = ({ text1, text2, className = '', alignment = 'left', size = 'text-2xl', spacing = 'mb-4' }) => {
  return (
    <div className={`w-full text-${alignment} ${spacing} ${className}`}>
      <p className={`font-bold ${size} text-gray-800`}>
        {text1} <span className="text-primary">{text2}</span>
      </p>
    </div>
  );
};

export default Title;

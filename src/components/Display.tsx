import React from 'react';
interface DisplayProps {
  text: string;
}

const Display: React.FC<DisplayProps> = ({ text }) => <div>{text}</div>;

export default Display;

import useTypingText from 'customs/useTypingText';
import React from 'react';

type Props = {
  text: string;
  size?: 'lg' | 'xl' | '2xl' | '3xl';
  bold?: 'medium' | 'semibold';
  typing?: boolean;
};

const Title = ({
  text,
  size = '2xl',
  bold = 'semibold',
  typing = false,
}: Props) => {
  const typingText = useTypingText(text);
  return (
    <h1 className={`text-${size} font-${bold}`}>
      <pre className="whitespace-pre-line">{typing ? typingText : text}</pre>
    </h1>
  );
};

export default Title;

import React, { useCallback, useState } from 'react';

import { Container } from './styles';

interface TextAreaProps {
  name: string;
  placeholder: string;
}

export default function TextArea({ name, placeholder }: TextAreaProps) {
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  function handleOnBlur(event) {
    setIsFocused(false);

    if (event.target.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }
  const handleOnFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container $isFilled={isFilled} $isFocused={isFocused}>
      <textarea
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        name={name}
        required
      />
      <span>{placeholder}</span>
    </Container>
  );
}

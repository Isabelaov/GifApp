import React, { useState } from 'react';

export const AddCategory = ({
  onAddCategory,
}: {
  onAddCategory: (category: string) => void;
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const onSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmedValue = inputValue.trim();

    if (trimmedValue.length <= 3) return;

    onAddCategory(trimmedValue);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type='text'
        placeholder='Add Category :3'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

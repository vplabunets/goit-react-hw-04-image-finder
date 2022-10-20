import { Btn } from 'components/Button/Button.styled';
import React from 'react';

export const Searcbar = () => {
  return (
    <header class="searchbar">
      <form class="form">
        <Btn type="submit" class="button">
          <span class="button-label">Search</span>
        </Btn>

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

import React from 'react';
import i18n from '../languages/config';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import { Home } from '../pages/Home';

const renderWithRouter = (ui:any, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: BrowserRouter})
}

test('renders home page welcome message', () => {
  const component = renderWithRouter(
    <I18nextProvider i18n={i18n}>
      <Home />
    </I18nextProvider>
  );
  const translationText = i18n.t('home.title');
  expect(component.getByText(translationText)).toHaveTextContent("Welcome to the homepage!");
});

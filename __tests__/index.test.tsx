import { renderRouter, screen } from 'expo-router/testing-library';

test('home screen renders and navigates to details', async () => {
  renderRouter('./app', { initialUrl: '/' });

  expect(await screen.findByText('IOS-app')).toBeTruthy();
  expect(screen.getByText('Go to details')).toBeTruthy();
});

#!/usr/bin/node
document.addEventListener('DOMContentLoaded', () => {
  async function fetchHello () {
    const helloDiv = document.querySelector('#hello');

    try {
      const response = await fetch('https://hellosalut.stefanbohacek.dev/?lang=fr');

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      helloDiv.textContent = data.hello;
    } catch (error) {
      helloDiv.textContent = 'Failed to load translation.';
      console.error('API Error:', error);
    }
  }

  fetchHello();
});

#!/usr/bin/node
document.addEventListener('DOMContentLoaded', () => {
  const btnTranslate = document.querySelector('#btn_translate');
  const languageInput = document.querySelector('#language_code');
  const helloDiv = document.querySelector('#hello');

  async function translateHello () {
    const lang = languageInput.value.trim();

    if (!lang) {
      helloDiv.textContent = 'Please enter a language code.';
      return;
    }

    try {
      const response = await fetch(`https://hellosalut.stefanbohacek.dev/?lang=${lang}`);

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

  btnTranslate.addEventListener('click', translateHello);

  languageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      translateHello();
    }
  });
});

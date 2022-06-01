import { refs } from './refs';

export function changeQuote(data) {
  let idxArr = 0;
  function indexPlus() {
    idxArr += 1;
  }
  setInterval(() => {
    if (idxArr < 49) {
      indexPlus();

      if (data[idxArr].text.length < 150) {
        refs.quoteText.textContent = data[idxArr].text;
        refs.quoteOwner.textContent = data[idxArr].author;
      }
    }
    return;
  }, 5000);
}

import { refs } from './refs';

export function changeQuote(data) {
  let idxArr = 0;

  function indexPlus() {
    idxArr += 1;
  }
  setInterval(() => {
    if (idxArr < 49) {
      indexPlus();
      refs.quoteText.textContent = data[idxArr].q;
      refs.quoteOwner.textContent = data[idxArr].a;
    }
    return;
  }, 8000);
}

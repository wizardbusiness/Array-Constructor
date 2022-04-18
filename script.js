
const constructArray = (arrayLength, range, dec) => {
    arrayLength = document.querySelector('#array-length').value;
    range = document.querySelector('#range').value;
    const output = [];
    dec = 1;
    while (arrayLength > 0) {
      let rndNum = Math.random();
      const multiplier = Math.random();
      const truncDec = Math.pow(10, dec + 1);
      if (rndNum <= .5) {
        rndNum = (rndNum * -range * multiplier).toFixed(dec);
        output.push(rndNum);
      } else if (rndNum > .5) {
        rndNum = (rndNum * range * multiplier).toFixed(dec);
        output.push(rndNum);
      }
      arrayLength--;
    }
    return output;
  }

const btn = document.querySelector('.create-array');
const displayArray = document.querySelector('#display-array');

btn.addEventListener('click', () => {
  displayArray.textContent = `[${constructArray()}]`
});

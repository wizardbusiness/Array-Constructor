
const constructArray = (arrayLength, range, dec) => {
    arrayLength = document.querySelector('#array-length').value;
    range = document.querySelector('#range').value;
    dec = document.querySelector('#decimal').value;
    const output = [];
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

const btn = document.querySelector('button');

const displayArray = document.querySelector('.display-array');


btn.addEventListener('mousedown', () => {
  btn.classList.toggle('change-color');
  displayArray.textContent = `[${constructArray()}]`;
});
btn.addEventListener('mouseup', () => btn.classList.toggle('change-color'));

btn.addEventListener('mousedown', () => {
  displayArray.style.display = 'block';
  displayArray.style.visibility = 'visible';
});

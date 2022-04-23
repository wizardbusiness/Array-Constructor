
const displayArray = document.querySelector('.display-array');

const constructArray = (arrayLength, range, dec, incNeg = false) => {
  // reset array every time function is invoked.
    displayArray.textContent = '[';
    arrayLength = document.querySelector('#array-length').value;
    range = document.querySelector('#range').value;
    dec = document.querySelector('#decimal').value;
    const output = [];
    while (arrayLength > 0) {
      let rndNum = Math.random();
      const multiplier = Math.random();
      if (incNeg === false) {
        rndNum = (rndNum * range * multiplier).toFixed(dec);
        if (arrayLength === 1) displayArray.textContent += rndNum + ']';
        else if (arrayLength > 1) displayArray.textContent += rndNum + ', '
      }
      else if (incNeg === true && rndNum <= .5) {
        rndNum = (rndNum * -range * multiplier).toFixed(dec);
        output.push(rndNum);
      } else if (incNeg === true && rndNum > .5) {
        rndNum = (rndNum * range * multiplier).toFixed(dec);
        output.push(rndNum);
      }
      arrayLength--;
    }
    return output;
  }

const btn = document.querySelector('button');

btn.addEventListener('mouseup', () => btn.classList.toggle('change-color'));

btn.addEventListener('mousedown', () => {
  constructArray();
  btn.classList.toggle('change-color');
  displayArray.style.display = 'flex';
  displayArray.style.flexWrap = 'wrap';
  displayArray.style.visibility = 'visible';
});

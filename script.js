
const displayArray = document.querySelector('.display-array');

const checkbox = document.querySelector('#toggle-neg-nums');

const checkCheckBox = () => {
  let count = 0;
  return () => {
    if (count === 0) {
    checkbox.checked = false;
    count++;
    }
    else if (count === 1) {
      checkbox.checked = true;
      count--;
    }
  }
}

const check = checkCheckBox();

checkbox.addEventListener('click', () => {
  check();
});

const constructArray = (arrayLength, range, dec, incNeg = false) => {
  // reset array every time function is invoked.
    
    const outputArray = [];
    arrayLength = document.querySelector('#array-length').value;
    range = document.querySelector('#range').value;
    dec = document.querySelector('#decimal').value;
    if (checkbox.checked === true) incNeg = true;
    console.log(incNeg)
    while (arrayLength > 0) {
      let rndNum = Math.random();
      const multiplier = Math.random();
      if (incNeg === false) {
        rndNum = (rndNum * range * multiplier).toFixed(dec);
      } else if (incNeg === true && rndNum <= .5) {
        rndNum = (rndNum * -range * multiplier).toFixed(dec);
      } else if (incNeg === true && rndNum > .5) {
        rndNum = (rndNum * range * multiplier).toFixed(dec);
      }
      outputArray.push(rndNum)
      arrayLength--;
    }

    // if array is more than 500 elements, return the whole result, but only display the first 500.
    let arrayText;
    outputArray.length > 500 ? arrayText = '[' + outputArray.slice(0, 500).join(', ') + '...' : arrayText = '[' + outputArray + ']'
    displayArray.textContent = arrayText;
    return outputArray;
  }

const btn = document.querySelector('button');
btn.id = 'create-array-btn'

btn.addEventListener('mouseup', () => btn.classList.toggle('change-color'));
btn.addEventListener('mousedown', () => {
  constructArray();
  btn.classList.toggle('change-color');
  displayArray.style.visibility = 'visible';
  const btnContainer = document.createElement('div')
  btnContainer.id = 'btn-container';
  displayArray.prepend(btnContainer)
  const copyArray = document.createElement('button')
  copyArray.textContent = 'Copy';
  copyArray.id = 'copy-btn';
  btnContainer.appendChild(copyArray);
});





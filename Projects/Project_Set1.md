# Projects related to DOM
## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-mgtruz?file=1-colorChanger%2Fchaiaurcode.js)

## project1 solution

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```


## project2 solution 
``` javascript

const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value);
// this usecase will give empty values
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || height < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the results

    if (bmi < 18.6) {
      results.innerHTML = `<span><b>You're Underweight,${bmi}</b></span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span><b>You're Normal,${bmi}</b></span>`;
    } else {
      results.innerHTML = `<span><b>You're Overweight,${bmi}</b></span>`;
    }
  }
});
```

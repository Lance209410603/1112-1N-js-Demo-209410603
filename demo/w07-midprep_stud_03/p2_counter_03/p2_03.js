// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

function styleChange()
{
  value.textContent = count;
  if(count > 0)
  {
    value.style.color = "#25bb32";
  }
  else if (count === 0)
  {
    value.style.color = "#102a42";
  }
  else
  {
    value.style.color = "#bb2525";
  }
}

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e)
  {
    console.log(`e.currentTarget.className = ${e.currentTarget.classList}`);
    switch (e.target.classList[1])
    {
      case "decrease":
        count -=1;
        break;
      case "increase":
        count += 1;
        break;
      default:
        count = 0;
    }
    styleChange();
  });
});
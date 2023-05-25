const cvPtButton = document.getElementById('cv-pt');
const plPtButton = document.getElementById('pl-pt');
const cvPtBody = document.querySelector('.cv-pt');
const plPtBody = document.querySelector('.pl-pt');

const cvEnButton = document.getElementById('cv-en');
const plEnButton = document.getElementById('pl-en');
const cvEnBody = document.querySelector('.cv-en');
const plEnBody = document.querySelector('.pl-en');

const brFlag = document.getElementById('brflag');
const usFlag = document.getElementById('usflag');

const ptPage = document.querySelector('.portuguese-page');
const enPage = document.querySelector('.english-page');

// Flags
usFlag.addEventListener('click', () => {
  enPage.classList.remove('display-none');
  ptPage.classList.add('display-none');
  usFlag.classList.add('img-small');
  brFlag.classList.add('img-small');
  usFlag.classList.add('full-color');
});
brFlag.addEventListener('click', () => {
  ptPage.classList.remove('display-none');
  enPage.classList.add('display-none');
  usFlag.classList.add('img-small');
  brFlag.classList.add('img-small');
});
// English
cvPtButton.classList.add('active-title');
cvEnButton.classList.add('active-title');

plPtButton.addEventListener('click', () => {
  plPtBody.classList.remove('display-none');
  cvPtBody.classList.add('display-none');
  plPtButton.classList.add('active-title');
  cvPtButton.classList.remove('active-title');
});
cvPtButton.addEventListener('click', () => {
  plPtBody.classList.add('display-none');
  cvPtBody.classList.remove('display-none');
  plPtButton.classList.remove('active-title');
  cvPtButton.classList.add('active-title');
});
// Portuguese
plEnButton.addEventListener('click', () => {
  plEnBody.classList.remove('display-none');
  cvEnBody.classList.add('display-none');
  plEnButton.classList.add('active-title');
  cvEnButton.classList.remove('active-title');
});
cvEnButton.addEventListener('click', () => {
  plEnBody.classList.add('display-none');
  cvEnBody.classList.remove('display-none');
  plEnButton.classList.remove('active-title');
  cvEnButton.classList.add('active-title');
});

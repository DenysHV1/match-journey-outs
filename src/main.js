const btn_open = document.querySelector('.header_mobile_btn');
const navigation_list = document.querySelector('.header_mobile_nav');
btn_open.addEventListener('click', () => {
  navigation_list.classList.contains('active')
    ? navigation_list.classList.remove('active')
    : navigation_list.classList.add('active');
  btn_open.classList.contains('active')
    ? btn_open.classList.remove('active')
    : btn_open.classList.add('active');
});
const listSection_item = document.querySelector(
  '.header_mobile_nav-section_list'
);
const onClick = evt => {
  if (!evt.target.classList.contains('header_list_item_link')) return;
  evt.target.parentElement.classList.add('active');
  const header_allElement = document.querySelectorAll(
    '.header_mobile_list-section_item'
  );
  header_allElement.forEach(item => {
    evt.target.parentElement.id !== item.id
      ? item.classList.remove('active')
      : '';
  });
};
listSection_item.addEventListener('click', onClick);

export const cookiePolicy = () => {
  const btnEl1 = document.querySelector('.cookies-accept-js');
  const btnEl2 = document.querySelector('.cookies-decline-js');
  const modalEl = document.querySelector('.cookies-section');

  if (JSON.parse(localStorage.getItem('match-journey-cookies'))) {
    modalEl.style.display = 'none';
    return;
  }

  btnEl1.addEventListener('click', () => {
    modalEl.style.display = 'none';
    localStorage.setItem('match-journey-cookies', JSON.stringify(true));
  });

  btnEl2.addEventListener('click', () => {
    modalEl.style.display = 'none';
    localStorage.setItem('match-journey-cookies', JSON.stringify(false));
  });
};
cookiePolicy();

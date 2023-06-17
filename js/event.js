const trigger = document.querySelector('.trigger-btn');

trigger.addEventListener('click', e => {
  unreadContainer.classList.remove('unread');
  count.innerHTML = 0;
})
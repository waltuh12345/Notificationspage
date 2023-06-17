const count = document.querySelector('.count');
const unreadContainer = document.querySelector('.ul1');
const seenContainer = document.querySelector('.ul2');
const unreadLi = Array.from(unreadContainer.children);
const seenLi = Array.from(seenContainer.children);


fetch('./js/data.json')
.then(response => response.json())
.then(data => {
  let unreadHTML = '';
  let seenHTML = '';
  const notifications = data.notifications;
  const unread = notifications.unread;
  const seen = notifications.seen;

  count.innerHTML = unread.length;

  unread.forEach(notification => {
    const {img,type,user,message,time} = notification;
    const about = notification.about || "";
    const content = notification.content || "";
    
    if (content !== "") {
      unreadHTML += `
      <li>
        <div><img src="${img}" alt="profile_pic"></div>
        <aside>
          <div>
            <div><span class="name">${user}</span> ${message} <span class="about">${about}</span></div>
            <div class="time">${time}</div>
          </div>
          <div class="content">${content}</div>
        </aside>
      </li>
      `
    } else {
      unreadHTML += `
      <li>
        <div><img src="${img}" alt="profile_pic"></div>
        <aside>
          <div>
            <div><span class="name">${user}</span> ${message} <span class="about">${about}</span></div>
            <div class="time">${time}</div>
          </div>
          <div>${content}</div>
        </aside>
      </li>
      `
    }
    

  })
  
  unreadContainer.innerHTML = unreadHTML;
  
  seen.forEach(notification => {
    let count = 0;
    const {img,type,user,message,time} = notification;
    const about = notification.about || "";
    const content = notification.content || "";
    if (content !== "") {
      seenHTML += `
      <li>
        <div><img src="${img}" alt="profile_pic"></div>
        <aside>
          <div>
            <div><span class="name">${user}</span> ${message} <span class="about">${about}</span></div>
            <div class="time">${time}</div>
          </div>
          <div class="content wow">${content}</div>
        </aside>
      </li>
      `
    } else {
      seenHTML += `
      <li>
        <div><img src="${img}" alt="profile_pic"></div>
        <aside>
          <div>
            <div><span class="name">${user}</span> ${message} <span class="about">${about}</span></div>
            <div class="time">${time}</div>
          </div>
          <div>${content}</div>
        </aside>
      </li>
      `
    }
  })

  seenContainer.innerHTML = seenHTML;
})
.catch(error => {
  console.error('Error fetching JSON data:', error);
});


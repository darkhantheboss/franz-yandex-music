module.exports = Franz => {
  getMessages = () => {
    const notification = document.querySelector('#notification-count').innerHTML;
    let count = parseInt(notification);
    Franz.setBadge(count);
  };
  Franz.loop(getMessages);
}

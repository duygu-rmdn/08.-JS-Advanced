function notify(message) {
  let messagediv = document.getElementById('notification');
  messagediv.style.display = 'block';
  messagediv.textContent = message;

  messagediv.addEventListener('click', () => {
    messagediv.style.display = 'none';
  })
}
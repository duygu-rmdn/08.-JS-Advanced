function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = Array.from(document.querySelectorAll('tbody tr'));
      let text = document.getElementById('searchField');
      let regex = new RegExp(text.value, 'gim');
      rows.map(element => {
         element.classList.remove('select')
         if (element.innerText.match(regex) !== null) {
            element.className = 'select'
         }
      });
   }
}
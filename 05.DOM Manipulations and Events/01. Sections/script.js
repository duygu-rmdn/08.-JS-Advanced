function create(words) {
   const contend = document.getElementById('content');

   for (const i of words) {
      const div = document.createElement('div');
      const para = document.createElement('p');
      para.textContent = i;
      para.style.display = 'none';
      div.appendChild(para);
      contend.appendChild(div);

      div.addEventListener('click', reveal);
      function reveal(ev) {
         ev.currentTarget.children[0].style.display = '';
      }

   }

}
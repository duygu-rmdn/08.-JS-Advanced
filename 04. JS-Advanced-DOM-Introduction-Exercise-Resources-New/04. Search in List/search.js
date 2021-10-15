function search() {
   let towns = Array.from(document.querySelectorAll('ul li'));
   let starter = document.getElementById('searchText').value;
   let matches = 0;
   towns.forEach(element => {
      element.innerHTML = element.textContent;
      if(element.textContent.startsWith(starter)){
         element.innerHTML = `<bold><u>${element.textContent}</u></bold>`;
         matches++;
      }
   });
   document.getElementById('result').textContent = `${matches} matches found`
}
/*function search() {
   towns = Array.from(document.querySelectorAll('ul#towns>li'));
   searchText = document.querySelector('input#searchText').value;
   resultDiv = document.querySelector('div#result');

   let matches = 0;
   towns.forEach(townLiElement => {
      let townName = townLiElement.textContent;
      if (searchText && townName.indexOf(searchText) >= 0) {
         townLiElement.innerHTML = `<bold><u>${townName}</u></bold>`;
         matches++;
      }
   });
   resultDiv.textContent = `${matches} matches found`;
}*/
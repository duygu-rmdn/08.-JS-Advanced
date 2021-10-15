function solve() {
  let text = document.getElementById('text').value.toLowerCase();
  let casing = document.getElementById('naming-convention').value;
  let splited = text.split(' ');
  let result = '';
  if(casing == 'Camel Case'){
    result += splited[0];
  } else if(casing == 'Pascal Case'){
    result += splited[0].charAt(0).toUpperCase() + splited[0].slice(1);
  } else{
    document.getElementById('result').textContent = 'Error!';
    return;
  }
  for (let i = 1; i < splited.length; i++) {
    result += splited[i].charAt(0).toUpperCase() + splited[i].slice(1);
  }
  document.getElementById('result').textContent = result;
}
window.addEventListener('load', solve);

function solve() {
    let fialds = document.getElementsByTagName('form')[0];
    let furnitureList = document.getElementById('furniture-list');
    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');
    let addBth = document.getElementById('add');
    let totalPrice = document.getElementsByClassName('total-price')[0];

    addBth.addEventListener('click', addFurniture);

    function addFurniture(ev) {
        ev.preventDefault();
        let year1 = Number(year.value)
        let price1 = Number(price.value)

        if (model.value == '' || description.value == '' || year1 < 0 || price1 < 0) {
            return;
        }
        let pr = price1.toFixed(2);

        let trInfo = document.createElement('tr');
        trInfo.classList.add("info");
        trInfo.innerHTML += `<td>${model.value}</td><td>${pr}</td><td><button class="moreBtn">More Info</button><button class="buyBtn">Buy it</button></td>`;

        let trhide = document.createElement('tr');
        trhide.classList.add("hide");
        trhide.innerHTML += `<td>Year: ${year.value}</td><td colspan="3">Description ${description.value}</td>`;

        furnitureList.appendChild(trInfo)
        furnitureList.appendChild(trhide)

        model.value = '';
        description.value = '';
        document.getElementById('year').value = '';
        document.getElementById('price').value = '';

        let moreInfoBtns = trInfo.querySelectorAll('button');
        let moreBtn = moreInfoBtns[0]
        let buyBth = moreInfoBtns[1]

        moreBtn.addEventListener('click', moreInfoLess)

        buyBth.addEventListener('click', buyFurniture)
    }
    function moreInfoLess(e) {
        if (e.target.textContent == 'More Info') {
            e.target.textContent = 'Less Info';
            e.target.parentElement.parentElement.nextSibling.style.display = 'contents';
        } else {
            e.target.textContent = 'More Info';
            e.target.parentElement.parentElement.nextSibling.style.display = 'none';
        }
    }

    function buyFurniture(e){
        let price = e.target.parentElement.parentElement.querySelectorAll('td')[1];
        let pr = Number(totalPrice.textContent) + Number(price.textContent);
        totalPrice.textContent = pr.toFixed(2);

        e.target.parentElement.parentElement.nextSibling.remove();
        e.target.parentElement.parentElement.remove();
    }
}

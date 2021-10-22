function solve() {
    const fields = document.querySelectorAll('#container input')
    const addBth = document.querySelector('#container button')
    const adoption = document.querySelector('#adoption ul')
    const adoped = document.querySelector('#adopted ul')

    let input = {
        name : fields[0],
        age: fields[1],
        kind: fields[2],
        currOwner: fields[3]
    };

    addBth.addEventListener('click', adopedPets);

    function adopedPets(ev){
        ev.preventDefault();

        const name = input.name.value;
        const age = Number(input.age.value);
        const kind = input.kind.value;
        const owner = input.currOwner.value;

        if (name == '' || Number.isNaN(age) || age == '' || kind == '' || owner == '') {
            return;
        }

        const liPet = document.createElement('li');
        const newbtn = document.createElement('button');
        newbtn.textContent = 'Contact with owner';
        liPet.innerHTML += `<p><strong>${input.name.value}</strong> is a <strong>${input.age.value}</strong> year old <strong>${input.kind.value}</strong></p><span>Owner: ${input.currOwner.value}</span>`
        liPet.appendChild(newbtn);

        adoption.appendChild(liPet);

        Array.from(fields).forEach(x => x.value = '');

        newbtn.addEventListener('click', takeIt);

        function takeIt(ev){
            const divtake = document.createElement('div');
            const inputTake = document.createElement('input');
            inputTake.placeholder = 'Enter your names';
            const btnTake = document.createElement('button');
            btnTake.textContent = 'Yes! I take it!';

            divtake.appendChild(inputTake);
            divtake.appendChild(btnTake);

            liPet.appendChild(divtake);

            newbtn.remove();

            btnTake.addEventListener('click', adop.bind(null, inputTake, liPet));
        }
    }

    function adop(newOwnerName, pet){
        let own = newOwnerName.value.trim();
        if(own == ''){
            return;
        }

        const chekedBtn = document.createElement('button');
        chekedBtn.textContent = 'Checked';
        pet.querySelector('div').remove();
        pet.appendChild(chekedBtn);
        pet.querySelector('span').textContent = `New Owner: ${own}`;
        adoped.appendChild(pet);

        chekedBtn.addEventListener('click', check.bind(null, pet))
    }

    function check(pet){
        pet.remove();
    }
}


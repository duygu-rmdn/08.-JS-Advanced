function validate() {
    document.getElementById('email').addEventListener('change', isValid);

    function isValid({target}) {
        const pattern = /^[a-x]+@[a-z]+.[a-z]+$/;

        if(pattern.test(target.value)){
            target.classList.remove('error');
        } else{
            target.classList.add('error');
        }
    }
}
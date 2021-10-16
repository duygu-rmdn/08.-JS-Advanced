function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(b => b.addEventListener('click', onToggle))

    function onToggle(e) {
        const infoDiv = Array
            .from(e.target.parentElement.querySelectorAll('div'))
            .find(d => d.id.includes('HiddenFields'));

        const infoLock = e.target.parentElement.querySelector('input[type="radio"][value="unlock"]').checked;

        if (infoLock) {

            if (e.target.textContent == 'Show more') {
                infoDiv.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                infoDiv.style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }
    }
}
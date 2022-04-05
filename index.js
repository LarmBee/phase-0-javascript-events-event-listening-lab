function addingEventListener() {
    let input = document.getElementById('input');

    function clickAlert(){
        alert("This section has been clicked");
    }

    input.addEventListener('click',clickAlert);

    
};

addingEventListener()

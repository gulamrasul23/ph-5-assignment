document.getElementById('card-container')
    .addEventListener('click', function(e){
        if(e.target.classList.contains('heart')){
            const heartCount = parseInt(document.getElementById('heart-count').innerText);
            const newHeartCount = heartCount + 1;
            document.getElementById("heart-count").innerText = newHeartCount;
        }
    })
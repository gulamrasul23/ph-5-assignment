
let callHistoryData = [];

// function for count ----------------------------------------

function count(id){
    const countNumber = parseInt(document.getElementById(id).innerText);
    const newCountNumber = countNumber + 1;
    document.getElementById(id).innerText = newCountNumber;
}

document.getElementById('card-container')
    .addEventListener('click', function(e){
        if(e.target.classList.contains('heart')){
            count('heart-count');
        }

        if(e.target.classList.contains('call-button')){
            const card = e.target.closest('.card');
            const title = card.querySelector('.title-name').textContent;
            const number = card.querySelector('.call-number').textContent;
            const availableCoin = parseInt(document.getElementById('available-coin').innerText);
            if(availableCoin < 20){
                alert("❌ You don't have enough coins, you need at least 20 coins to make a call.");
                return;
            }else {
                alert("📞 Calling" + " " + title + " " + number + " " + "......");
                const callHistory = {
                    name: title,
                    callNumber: number,
                    date: new Date().toLocaleTimeString()
                }
                callHistoryData.push(callHistory);

                const callHistoryParent = document.getElementById('call-history');
                    callHistoryParent.innerText = '';
                    for(const history of callHistoryData){
                    const div = document.createElement("div");
                    div.innerHTML = `
                        <div  class="flex justify-between items-center gap-2 bg-[#FAFAFA] p-[12px] rounded-[10px] mt-2">
                        <div class=" w-[62%]">
                            <h2 class="font-semibold text-[16px] leading-5">${history.name}</h2>
                            <p class="text-[#5C5C5C]">${history.callNumber}</p>
                        </div>
                        <div>
                            <span class="text-ms">${history.date}</span>
                        </div>
                    </div>
                    
                    `
                    callHistoryParent.appendChild(div);
                }
            }
            const newAvailableCoin = availableCoin - 20;
            document.getElementById('available-coin').innerText = newAvailableCoin;
        }

        if(e.target.classList.contains('copy-button')){
            const card = e.target.closest('.card');
            const number = card.querySelector('.call-number').textContent;
            navigator.clipboard.writeText(number);
            alert("Number Copied:" + " " + number);
            count('copy-count');
        }  
    })

    document.getElementById('clear-button')
                .addEventListener('click', function(e){
                    const callHistoryParent = document.getElementById('call-history');
                    callHistoryParent.innerText = '';
                    callHistoryData = [];
                })
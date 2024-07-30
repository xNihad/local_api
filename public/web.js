let BaseUrl="http://localhost:7070/rooms/"
let cardsDiv = document.querySelector(".products-container")


async function GetDatas() {
    let datas = await axios.get(BaseUrl)
    try {
        console.log(datas.data);
        CreateCards(datas.data)
    } catch (error) {
        console.log(error);
    }
}
GetDatas()

function CreateCards(cards) {
    cards.forEach(element => {
        cardsDiv.innerHTML+=
        `
        <div class="card">
          <div class="card-top">
             <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" class="image">
           </div>
         <div class="card-bottom">
            <h3>${element.name}</h3>
            <span>${element.description}</span>
          <button>View</button>
      </div>
  </div>

        `
    });
    
}

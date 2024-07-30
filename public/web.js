let BaseUrl="http://localhost:7070/rooms/"
let cardsDiv = document.querySelector(".products-container")

async function GetDatas() {
    let datas = await axios.get("http://localhost:7070/rooms/")
    try {
        console.log(datas);
    } catch (error) {
        console.log(error);
    }
}
GetDatas()

// function CreateCards(cards) {
//     cardsDiv
    
// }
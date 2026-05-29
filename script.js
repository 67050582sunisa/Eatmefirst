let foods = []

function addFood(){

    let foodName = document.getElementById("foodName").value
    let expireDate = document.getElementById("expireDate").value

    if(foodName === "" || expireDate === ""){
        alert("กรอกข้อมูลให้ครบ")
        return
    }

    foods.push({
        name: foodName,
        expire: expireDate
    })

    showFoods()

    document.getElementById("foodName").value = ""
    document.getElementById("expireDate").value = ""
}

function showFoods(){

    let list = document.getElementById("foodList")

    list.innerHTML = ""

    for(let i = 0; i < foods.length; i++){

        let today = new Date()
let expire = new Date(foods[i].expire)

let diffTime = expire - today
let diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

let warning = ""

if(diffDay <= 3){
    warning = "⚠️ ใกล้หมดอายุ"
}

list.innerHTML += `
    <li>
        ${foods[i].name} - ${foods[i].expire}
        <br>
        ${warning}
        <br>
        <button onclick="deleteFood(${i})">ลบ</button>
    </li>
`
        
    }
}
function deleteFood(index){

    foods.splice(index,1)

    showFoods()
}
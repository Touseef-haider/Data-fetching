console.log("this is random data fetching api")

const baseURl = 'https://random-data-api.com/api/v2/users'

async function fetchData(){
    try {
        const response = await fetch(baseURl)
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}




const button = document.getElementById("btn");

button.addEventListener("click",handleButtonClick)

async function handleButtonClick(e){
    e.target.innerText = "Loading..."
    try {
        const data = await fetchData()
        
        const keys = Object.keys(data)

        
        console.log(data)
 
        const table = document.createElement("table")
 
        const tableHead = document.createElement("thead");
        const tableHeadRow = document.createElement("tr");
        const tableBody = document.createElement("tbody");
        const tableBodyRow = document.createElement("tr");


        Array.isArray(keys) && keys.map(key=>{ if(key !== "address" && key!=="employment" && key !=="credit_card" && key!=="subscription"){ // head

                const tableHeadCol = document.createElement("td")
                tableHeadCol.style.fontWeight="bold"
                tableHeadCol.innerText = key
                tableHeadRow.append(tableHeadCol)
    
                // body
                const tableBodyCol = document.createElement("td")
                tableBodyCol.innerText = data[key]
                tableBodyRow.append(tableBodyCol)
            }
        })


        e.target.innerText = "Fetch random data"


        tableHead.append(tableHeadRow)
        tableBody.appendChild(tableBodyRow)
        table.append(tableHead)
        table.append(tableBody)
        table.setAttribute("border","2")
        document.body.append(table)
    } catch (error) {
        console.log(error)  
    }
}

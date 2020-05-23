const appntCollectionDiv = document.querySelector('#appnt-collection')
const newForm = document.querySelector("#newAppntForm")
const stylyst1btn = document.querySelector("#imaria")
const stylyst2btn = document.querySelector("#sekinah")
const stylyst3btn = document.querySelector("#may")
let stylystNameForm = document.querySelector("#stylyst-name")
let editAppnt = false
let style_id;
let stylystNameCard;



fetch("http://localhost:3000/appointments")
    .then(r => r.json())
    .then(appntArr => {
        appntArr.forEach(turnJSONtoHTML)
    })

//stylyst 1 booker

stylyst1btn.addEventListener("click", (evt) => {
    
    stylystNameForm.innerText = 'Stylist: Imaria';

})

stylyst2btn.addEventListener("click", (evt) => {
    //
    stylystNameForm.innerText = 'Stylist: Sekinah';
    
})

stylyst3btn.addEventListener("click", (evt) => {
     
    stylystNameForm.innerText = 'Stylist: May';
    
})


newForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    let style_id = 1
     debugger 
     
    if (stylystNameForm.innerText === "Stylist: Imaria")
    {
        style_id = 2
    }
    else if (stylystNameForm.innerText === "Stylist: Sekinah"){
        style_id = 3
    }
    else if (stylystNameForm.innerText === "Stylist: May") {
        style_id = 4
    }
    
    //let appName = evt.target.name.value
    let appDate = evt.target.date.value
    let appTime = evt.target.time.value
    
    debugger

    let appntObj = {
        date: appDate,
        time: appTime,
        stylist_id: style_id
    }

    
    //evt.target.reset()

    fetch("http://localhost:3000/appointments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(appntObj)
    })
        .then(r => r.json())
        .then(appntObj => { 
            turnJSONtoHTML(appntObj)
        })

    newForm.reset()

})



function turnJSONtoHTML(appntObj) {
     //debugger 
    // if (stylystNameCard != "Imaria" && stylystNameCard != "Sekinah" && stylystNameCard != "May"){
        
    //     stylystNameCard = "General Booking"
      
    // }
    let appntDiv = document.createElement("div")
    appntDiv.className = "card"
    appntDiv.id = appntObj.id;

    appntDiv.innerHTML = `<h2> Stylist: ${appntObj.stylist_name} </h2>
      <img src="https://i.pinimg.com/474x/dc/c9/25/dcc9251ba29669a8a4359b2a5c06b071.jpg"  />
      <p class="appntDate">Date: ${appntObj.date_text}  </p>
      <p class="appntTime">Time: ${appntObj.time_text}  </p>
        <button class="delete-btn">Delete</button>
        <button class="edit-btn">Change Time</button>
        
        <div class="edit-container" style="display: none;">
        <form class="edit-appnt-form" >
            <br>
            <h5>Change your appointment time!</h5> 
            <input type="date" name="date" value="" >
            <br>
            <input type="time" name="time" value="" >
            <br>
            <input type="submit" name="submit" value="Create New Appointment">
        </form>
        </div>`
        //< button id = "eb" > Extra Button</button >
    let editForm = appntDiv.querySelector(".edit-container")
    let dltBtn = appntDiv.querySelector(".delete-btn")
    let editBtn = appntDiv.querySelector(".edit-btn")
    //let extraButton = appntDiv.querySelector("#eb")

    /*extraButton.addEventListener("click", (evt) => {
        
        let styleName = evt.target.parentNode.querySelector("h2")
        //debugger 
        styleName.innerHTML = styleName.innerHTML.split("").reverse().join("") 
        
        

        // fetch(`http://localhost:3000/stylists/${appntObj.stylist_id}`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify({
        //         name: new_name
        //     })
        // })
        //     .then(r => r.json())
        //     .then(stylistObj => {
        //         console.log(stylistObj.name)
            
        //     })
    })
    */

    //  let pTag = appntDiv.querySelector("p")

    dltBtn.addEventListener("click", (evt) => {
        deleteAppnt(appntObj.id)
        evt.target.parentNode.remove()
    })

    editBtn.addEventListener("click", (evt) => {
        editAppnt = !editAppnt
        if (editAppnt) {
            //debugger  
            evt.target.parentNode.style.height = "50rem"
            editForm.style.display = 'block'
            //debugger

        } else {
            evt.target.parentNode.style.height = "35rem"
            editForm.style.display = 'none'
        }
    })

    editForm.addEventListener("submit", (evt) => {
        evt.preventDefault()

        let appDate = evt.target.date.value
        let appTime = evt.target.time.value

        let appntObj = {
            date: appDate,
            time: appTime,
            stylist_id: style_id
        }

        let id = evt.target.parentNode.parentNode.id
        changeAppnt(id, appntObj, evt)
    })

    appntCollectionDiv.append(appntDiv)

}


function deleteAppnt(id) {
    fetch(`http://localhost:3000/appointments/${id}`, {
        method: "DELETE"
    })
}




function changeAppnt(id, appntObj, event) {

    fetch(`http://localhost:3000/appointments/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(appntObj)
    }).then(resp => resp.json())
        .then(json => {
            event.target.parentNode.parentNode.querySelector(".appntDate").innerText = "Date: " + json.date_text;
            event.target.parentNode.parentNode.querySelector(".appntTime").innerText = "Time: " + json.time_text;
            event.target.parentNode.style.display = 'none'
            editAppnt = !editAppnt
            event.target.parentNode.parentNode.style.height = "35rem"
            //editForm.style.display = 'none'
        })

}


















class Activity{
    constructor(title,description,imgURL){
        this.id = Math.random().toString(36).substr(2, 9)
        this.title = title
        this.description = description
        this.imgURL = imgURL
    }
}


class Repository{
    constructor(){
        this.activities = []
    }

    addActivity(title,description,imgURL){
        const newActivity = new Activity(title,description,imgURL)
        this.activities.push(newActivity)
    }
    getAllActivities(){
        return this.activities
    }
    deleteActivity(idActivity){
         this.activities = this.activities.filter((activity)=> idActivity != activity.id)
        
    }
}

const tileInput = document.getElementById("titleInput")
const descriptionInput = document.getElementById("descriptionInput")
const imgInput = document.getElementById("imgInput")


const activityForm = document.getElementById("activityForm")

const repository = new Repository()




function activityToCard(activity){
    const {id, title,description,imgURL}= activity
    
    const nuevoDiv = document.createElement("div")
    nuevoDiv.classList = "cardActivity"
    const nuevoP = document.createElement("h3")
    nuevoP.innerHTML = title
    nuevoP.classList = "title"
    const otroP = document.createElement("p")
    otroP.innerHTML = description
    otroP.classList= "description"
    const nuevoImg = document.createElement("img")
    nuevoImg.src = imgURL
    nuevoImg.classList = "image"

    const deleteCard = document.createElement("button")
    deleteCard.innerHTML = "X"
    deleteCard.id = "deleteCard"
    deleteCard.value = id

    nuevoDiv.appendChild(deleteCard)
    nuevoDiv.appendChild(nuevoP)
    nuevoDiv.appendChild(otroP)
    nuevoDiv.appendChild(nuevoImg)

    return nuevoDiv
}



function handlerAddActivityArray(event){
    event.preventDefault()

    tileInfo = tileInput.value
    descriptionInfo = descriptionInput.value
    imgInfo = imgInput.value

    if (tileInfo && descriptionInfo && imgInfo) {
        repository.addActivity(tileInfo,descriptionInfo,imgInfo)
        activityForm.reset()
    }else{
        if (!tileInfo && descriptionInfo && imgInfo) {
        alert("Falta agregar el titulo de la actividad")
        }else{
             if (tileInfo && !descriptionInfo && imgInfo) {
                 alert("Falta agregar la descripcion de la actividad")
             }else{
                  if (tileInfo && descriptionInfo && !imgInfo) {
                 alert("Falta agregar la url de la actividad")
                 }else{
                     alert("Falta llenar campos")
                 }
             }
        }
    } 

    activityToCardAll()
}

function activityToCardAll(){

    const actividades = document.getElementById("actividades")

    if (repository.getAllActivities().length > 0) {
        
        actividades.replaceChildren()

        const cardAll = repository.getAllActivities().map((activity) => activityToCard(activity))

        cardAll.forEach(card => {
            card.childNodes[0].addEventListener("click",deleteCardActivity)
            actividades.appendChild(card)
        });

        function deleteCardActivity(event){
            const card = event.target.value
            console.log(card);
            repository.deleteActivity(card)
            activityToCardAll()
        }
    }else{
        actividades.replaceChildren()
        const comments = document.createElement("p")
        comments.innerHTML = "Sin actividades por el momento"
        actividades.appendChild(comments)
    }

}

activityForm.addEventListener("submit",handlerAddActivityArray)




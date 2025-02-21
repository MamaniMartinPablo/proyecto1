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

    addActivity(tile,description,imgURL){
        const newActivity = new Activity(tile,description,imgURL)
        this.activities.push(newActivity)
    }
    getAllActivities(){
        return this.activities
    }
    deleteActivity(idActivity){
         this.activities = this.activities.filter((activity)=> idActivity !== activity.id)
        
    }
}
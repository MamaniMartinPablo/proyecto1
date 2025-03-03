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

describe('La clase Activity', () => {
  it('Debe ser una clase',() => {
    expect(typeof(Activity.prototype.constructor)).toBe("function")
  })
  it('Cada instancia de la clase Activity debe contener una propiedad "id" ', async () => {
    const newActivity = new Activity("lorem","lorem2","loremlorem")
    expect(newActivity.hasOwnProperty("id")).toBeTrue
  })
  it('Cada instancia de la clase Activity debe tener un id aleatorio asignado', () => {
    const newActivity = new Activity("lorem","lorem2","loremlorem")
    const otherActivity = new Activity("lorem","lorem2","loremlorem")
    expect(newActivity.id).not.toEqual(otherActivity.id)
  })
})


describe('La clase Repository', () => {
  it('Debe ser una clase', () => {
    expect(typeof(Activity.prototype.constructor)).toBe("function")
  }) 
  it('La clase Repository debe tener definido el metodo getAllActivities',() => {
    const newRepository = new Repository()
    expect(newRepository.getAllActivities).toBeDefined()
  })
  it('La clase Repository debe tener definido el metodo addActivity',() => {
    const newRepository = new Repository()
    expect(newRepository.addActivity).toBeDefined()
  }) 
  it('La clase Repository debe tener definido el metodo deleteActivity',() => {
    const newRepository = new Repository()
    expect(newRepository.deleteActivity).toBeDefined()
  })
  it('El metodo getAllActivities debe retornar un array',() => {
    const newRepository = new Repository()
    expect(Array.isArray(newRepository.getAllActivities())).toBeTrue
  })
  it('El metodo addActivity agrega una actividad dentro del repositorio', () => {
    const newRepository = new Repository()
    newRepository.addActivity("lorem","lorem2","loremlorem")
    expect(newRepository.getAllActivities()).toBeDefined()
  })
  it('El metodo deleteActivity elimina una actividad en base a su id', () => {
    const newRepository = new Repository()
    newRepository.addActivity("lorem1","lorem1","loremlorem1")
    newRepository.addActivity("lorem2","lorem2","loremlorem2")
    const id1 = newRepository.getAllActivities()[0].id
    const id2 = newRepository.getAllActivities()[1].id
    newRepository.deleteActivity(id1)
    newRepository.deleteActivity(id2)
    expect(newRepository.getAllActivities().length).toBe(0)
  })
})


console.log('controller körs');

class Controller{
    constructor(model, view){
        console.log('controller');
        this.model = model
        this.view = view
        
        this.start()
    }
    start = () => {
    this.view.clearFirst(this.removeFirstPlanet)
    this.updated()
    }
    removeFirstPlanet = (handler) =>{
        this.result4 = this.model.removePlanetClosest()        
        this.view.clearPlanets()
        this.updated()
    }

    updated = () => {
        // this.result2 = this.view.displayPlanets(this.result)
        this.result2 = this.model.getClosest().slice(1,5)
        this.view.getFourClosest(this.result2)
        
        this.result = this.model.getAllPlanets().slice(5)
        this.view.displayPlanets(this.result)

        this.result3 = this.model.getAllPlanets()
        this.view.getTypes(this.result3)
        this.view.displayTypes()

        this.view.getAtmosphericComposition(this.result3)
        this.view.getThreeCommonSubj()        
    }     
}


let model1 = new Model()
let view1 = new View()
let controller1 = new Controller(model1, view1)

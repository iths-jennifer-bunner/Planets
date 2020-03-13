console.log('model körs');

class Model{
    constructor(){
        console.log('model');
        this.allPlanets = [
        {
            "name": "Saturn",
            "order": 6,
            "type": "Gas planet",
            "atmospheric_composition": [
                "H2",
                "He"
            ],
            "discovery": "Antiquity"
        },
        {
            "name": "Venus",
            "order": 2,
            "type": "Terrestrial planet",
            "atmospheric_composition": [
                "CO2",
                "N2",
                "SO2"
            ],
            "discovery": "Antiquity"
        },
        {
            "name": "Jupiter",
            "order": 5,
            "type": "Gas planet",
            "atmospheric_composition": [
                "H2",
                "He"
            ],
            "discovery": "Antiquity"
        },
        {
            "name": "Mars",
            "order": 4,
            "type": "Terrestrial planet",
            "atmospheric_composition": [
                "CO2",
                "N2",
                "Ar"
            ],
            "discovery": "Antiquity"
        },
        {
            "name": "Mercury",
            "order": 1,
            "type": "Terrestrial planet",
            "atmospheric_composition": [
                "He",
                "Na+",
                "P+"
            ],
            "discovery": "Antiquity"
        },
        {
            "name": "Neptune",
            "order": 8,
            "type": "Gas planet",
            "atmospheric_composition": [
                "H2",
                "He",
                "CH4"
            ],
            "discovery": "Urbain Le Verrier, 1846"
        },
        {
            "name": "Earth",
            "order": 3,
            "type": "Terrestrial planet",
            "atmospheric_composition": [
                "N2",
                "O2",
                "Ar",
                "CO2"
            ],
            "discovery": "Antiquity"
        },
        {
            "name": "Sun",
            "order": 0,
            "type": "Star",
            "atmospheric_composition": [
                "H",
                "He",
                "O",
                "C",
                "Fe",
                "S"
            ],
            "discovery": "Antiquity"
        },
        {
            "name": "Uranus",
            "order": 7,
            "type": "Gas planet",
            "atmospheric_composition": [
                "H2",
                "He",
                "CH4"
            ],
            "discovery": "William Herschel, 1781"
        }
        ]        
    }
    getAllPlanets(){
        return this.allPlanets
    }
    getClosest(){
        return this.allPlanets.sort((a,b) =>{
            return a.order-b.order
        })
    }
    removePlanetClosest(){
        this.getClosest().splice(1,1)
        return this.getClosest
    }
}





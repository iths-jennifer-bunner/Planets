console.log('view körs');

class View {
    constructor(){
        console.log('view');
        this.reference = document.querySelector('.fourplanets')        
        this.h1 = document.createElement('h1')
        this.h1.innerHTML = 'Planets'
        this.reference.append(this.h1)
        this.question1 = document.createElement('h3')
        this.question1.innerHTML = '1. Vilka är de 4 planeter som ligger närmast solen?'
        this.reference.append(this.question1)
        
        this.reference2 = document.querySelector('.types')
        this.question2 = document.createElement('h3')
        this.question2.innerHTML ='2.Hur många objekt finns det av varje typ? '
        this.reference2.append(this.question2)

        this.reference3 = document.querySelector('.subjects')
        this.question3 = document.createElement('h3')
        this.question3.innerHTML ='3. Vilka är de 3 vanligast förekommande ämnena som finns i atmosfären runt objekten i vårt solsystem?'
        this.reference3.append(this.question3)

        this.reference4 =document.querySelector('.remove')
        this.removeButton = document.createElement('button')
        this.removeButton.innerHTML= 'Remove'
        this.reference4.append(this.removeButton)
    }
    displayPlanets(planets){
        planets.forEach(planet => {
            this.p = document.createElement('p')
            this.p.innerHTML ='('+ planet.name+')'
            this.reference.append(this.p)            
        })
    }
    getFourClosest(planets){
        planets.forEach(planet =>{
        this.pOrder = document.createElement('p')
        this.pOrder.innerHTML = planet.order + ': ' +planet.name
        this.reference.append(this.pOrder)
        })
    }
    getTypes(planets){        
    this.foundTypes = []
        planets.forEach(planet => {
            if( planet.type in this.foundTypes != true ){
                this.foundTypes.push(planet.type)
            }    
        })
    }
    displayTypes(){
        let result1 = this.foundTypes.filter(i => i === 'Star').length
        let result2 = this.foundTypes.filter(i => i === 'Terrestrial planet').length
        let result3 = this.foundTypes.filter(i => i === 'Gas planet').length
        this.types = document.createElement('p')
        this.types.innerHTML = 'number of Star planets: ' + result1+ ','+ ' number of Terrestrial planets: ' + result2+ ','+' number of Gas planets: '+ result3+'.'
        this.reference2.append(this.types)
    }
    getAtmosphericComposition(planets){
        this.pickAtmosphericComposition = []
        planets.forEach(planet => {
        this.pickAtmosphericComposition.push(planet.atmospheric_composition)
    })
        this.flatten = this.pickAtmosphericComposition.flat().sort()
    }
    getThreeCommonSubj(){
        let elements = []
        let count = []
    function countEl(currentEl){
        if(elements.includes(currentEl)){
        count[count.length-1] ++        
        }else{
        elements.push(currentEl)
        count.push(1)
        }
        return elements, 
            count
    }
    this.flatten.forEach(countEl)

    let finalArray = []
    for( let i = 0; i < 3; i++){
    let largest = 0
    count.forEach( (count) => {
        if(count > largest){
        largest = count
        }
    })
    elements.forEach( (element, i) => {
        if(count[i] === largest){
            finalArray.push([element, count[i]])
            elements.splice(i, 1)
            count.splice(i, 1)
        }
    })
    }
    this.final = document.createElement('p')
    this.final.innerHTML = finalArray
    this.reference3.append(this.final)
    }
    clearPlanets(){
        let element = document.querySelectorAll("p")
        for( let i= 0; i < element.length; i++){
            element[i].remove()
        }
    }
    clearFirst(handler){
        this.removeButton.addEventListener('click', handler)
        console.log('click!');        
    }
}

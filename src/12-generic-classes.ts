type TMyCar = 'Tesla' | 'Audi'
type THisCar = 'BMW' | 'Mercedes' | 'Jeep'

class NewCar<M> {
    private model: M

    constructor(initialModel: M){
        this.model = initialModel
    }

    getModel() {
        console.log(this.model)
    }

    setModel(newModel: M) {
        this.model = newModel
    }

}

const myCar = new NewCar<TMyCar>('Tesla')
myCar.getModel()
myCar.setModel('Audi')

// Error - his car can't be "Tesla" or "Audi"
// const hisCar = new NewCar<THisCar>('Tesla')
// hisCar.getModel()
// hisCar.setModel('Audi')

const hisCar = new NewCar<THisCar>('BMW')
hisCar.getModel()
hisCar.setModel('Jeep')

export {}
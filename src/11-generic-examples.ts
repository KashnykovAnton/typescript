type TMyCar = 'Tesla' | 'Audi'
type THisCar = 'BMW' | 'Mercedes' | 'Jeep'

const newCar = <M>(initialModel: M) => {
    let model = initialModel;

    const getModel = () => {
        console.log(model)
    }

    const setModel = (newModel: M) => {
        model = newModel
    }

    return {
        getModel,
        setModel
    }
}

const myCar = newCar<TMyCar>('Tesla')
myCar.getModel()
myCar.setModel('Audi')

// Error - his car can't be "Tesla" or "Audi"
// const hisCar = newCar<THisCar>('Tesla')
// hisCar.getModel()
// hisCar.setModel('Audi')

const hisCar = newCar<THisCar>('BMW')
hisCar.getModel()
hisCar.setModel('Jeep')



export {}
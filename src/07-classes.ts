interface Params {
    size: string,
    toppings: string[]
}

interface IPizza {
    size: string,
    toppings: string[],
    addTopping(topping: string): void,
    // validateTopping(topping: string): boolean,
}

// IMPORTANT - private values and methods - must not be inside interface!!


class Pizza implements IPizza {

    public size: string;
    // public toppings: readonly string[];
    public toppings: string[];
    // By default all valuea are public. If we want to do it private:
    // private size: string;
    // private toppings: string[];
    // IMPORTANT - this private - is private only in development!!! After compilation to JS - all values will be PUBLIC!!!

    constructor ({size, toppings = []}: Params) {
        // in TS - this.name - doesn't work! At first we have to define this before!
        this.size = size;
        this.toppings = toppings;
    }

    public addTopping(topping: string){
        this.toppings.push(topping)
    }

    // We can add private method
    private validateTopping(topping: string): boolean {
        console.log(topping)
        return true
    }
}

const pizza: IPizza = new Pizza({size: 'medium', toppings: ['cheese', 'sausages']})

console.log(pizza)

const newTopping = pizza.addTopping('mushrooms')
console.log(newTopping)

// private method - an error!
// const topping = pizza.validateTopping('tomatoes')
// console.log(topping)

export {}
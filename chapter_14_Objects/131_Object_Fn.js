const user = {
    name: "Pramod",
    age: 43
}

const calculator = {
    value: 0,
    add(n) {
        this.value += n;
    },
    subtract(n) {
        this.value -= n;
    }
};


calculator.add(10);
calculator.add(5);
calculator.subtract(3);
console.log(calculator.value);
console.log(calculator);
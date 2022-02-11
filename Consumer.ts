class Consumer extends IPerson {
    finish: boolean;
    constructor(name: string, age: number, finish: boolean) {
        super(name, age);
        this.finish = finish;

    }
}

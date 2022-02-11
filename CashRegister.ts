class CashRegister {
    CashRegisterNumber: number;
    productsarray: Product[];
    worker: StaffMember;
    consumer: Consumer;
    constructor(CashRegisterNumber: number, productsarray?: Product[], worker?: StaffMember, consumer?: Consumer) {
        this.CashRegisterNumber = CashRegisterNumber;
        this.productsarray = productsarray;
        this.worker = worker;
        this.consumer = consumer;
    }
    startNewPurchase(): void {
        console.log('ERROR!!! No worker assigned');
        this.productsarray = [];
    }
    changeWorker(someone: StaffMember): void {
        this.worker = someone;
    }
    addProduct(item: Product): void {
        this.productsarray.push(item);
    }
    endPurchase(x: Consumer) {
        let sum: number;
        if (this.consumer.finish == true) {
            this.productsarray.forEach(p => {
                sum += p.price;
            })
        }
        return sum;
    }
}

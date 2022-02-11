import { StaffMember } from "./StaffMember";
import { Consumer } from "./Consumer";
import { Product } from "./Product";
class CashRegister {
    CashRegisterNumber: number;
    productsarray: Product[];
    worker: StaffMember;
    consumer: Consumer;
    private static cashIdCounter: number = 1;
    constructor(CashRegisterNumber: number, productsarray?: Product[], worker?: StaffMember, consumer?: Consumer) {
        this.CashRegisterNumber = CashRegisterNumber;
        this.productsarray = productsarray;
        this.worker = worker;
        this.consumer = consumer;
        CashRegister.cashIdCounter++;
    }
    startNewPurchase(): void {
        throw Error('ERROR!!! No worker assigned');
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
        this.productsarray.forEach(p => {sum += p.price;})
        return sum;
    }
}

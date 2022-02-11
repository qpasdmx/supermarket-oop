import { StaffMember } from "./StaffMember";
import { Consumer } from "./Consumer";
import { Product } from "./Product";
export class CashRegister {
    cashId: number;
    worker: StaffMember;
    products: Product[];
    private static cashIdCounter: number = 1;
    constructor(worker?: StaffMember, products?: Product[], cashId?: number) {
        this.worker = worker;
        this.products = products;
        this.cashId = cashId;
        CashRegister.cashIdCounter++;
    }
    startNewPurchase() {
        if (!this.worker) {
            throw Error('ERROR!!! No worker assigned');
        }
        else {
            this.products = [];
        }
    }
    changeWorker(someone: StaffMember) {
        this.worker = someone;
    }
    addProduct(item: Product){
        this.products.push(item);
    }
    endPurchase(x: Consumer) {
        var sum=0;
        this.products.forEach(p => {
            sum += p.price;
        })
        return sum;
    }
}

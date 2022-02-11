export class StaffMember implements IPerson {
    role: string;
    constructor(name: string, age: number, role: string) {
        super(name, age);
        this.role = role;
    }
}

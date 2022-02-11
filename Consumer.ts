class Consumer extends IPerson {
    isClubMember: boolean;
    constructor(name: string, age: number, finish: boolean) {
        super(name, age);
        this.isClubMember = finish;

    }
}

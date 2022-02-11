class Consumer extends IPerson {
    isClubMember: boolean;
    constructor(name: string, age: number,  isClubMember: boolean) {
        super(name, age);
        this.isClubMember =  isClubMember;

    }
}

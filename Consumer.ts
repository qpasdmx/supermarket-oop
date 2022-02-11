export class Consumer implements IPerson {
    firstName:string;
    lastName:string;
    isClubMember: boolean;
    constructor(firstName:string, lastName:string,  isClubMember: boolean) {
        this.firstName= firstName;
        this.lastName=lastName;
        this.isClubMember =  isClubMember;

    }
}

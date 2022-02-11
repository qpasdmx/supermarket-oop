# supermarket-oop

Classes:
- `CashRegister` (`cashId`, `products: Product[]`, `worker: StaffMember`)
  - `private static cashIdCounter: number = 1;`
- `Consumer` (`isClubMember`)
- `IPerson`
- `Product` (`price`, `name`, `brand`, `barcode`)
- `StaffMember` (`role`)

Inheritance:
`StaffMember` and `Consumer` inherit `IPerson`

 cashId: number;
    products?: Product[];
    ;

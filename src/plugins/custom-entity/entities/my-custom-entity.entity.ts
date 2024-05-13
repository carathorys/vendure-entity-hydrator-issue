import {
    Customer,
    DeepPartial,
    VendureEntity,
} from '@vendure/core';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class MyCustomEntity extends VendureEntity {
    constructor(input?: DeepPartial<MyCustomEntity>) {
        super(input);
    }

    @Column()
    code: string;

    @OneToMany(() => Customer, (customer) => customer.customFields.myCustomEntity)
    customers: Customer[];
}

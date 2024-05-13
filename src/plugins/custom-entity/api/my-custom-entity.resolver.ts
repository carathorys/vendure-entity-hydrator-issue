import { Args, Query, Resolver } from '@nestjs/graphql';
import {
    Ctx,
    EntityHydrator,
    ID,
    RequestContext,
    TransactionalConnection
} from '@vendure/core';
import { MyCustomEntity } from '../entities/my-custom-entity.entity';

@Resolver()
export class MyCustomEntityResolver {
    constructor(
        private dbContext: TransactionalConnection,
        private entityHydrator: EntityHydrator
    ) { }

    @Query()
    async getDataWithEntityHydrator(
        @Ctx() ctx: RequestContext,
        @Args('id') id: ID
    ) {
        const customer = await this.dbContext.getRepository(ctx, MyCustomEntity).findOneOrFail({ where: { id } });
        await this.entityHydrator.hydrate(ctx, customer, { relations: ['customers'] });
        return customer;
    }

    @Query()
    async getDataWithJoin(
        @Ctx() ctx: RequestContext,
        @Args('id') id: ID
    ) {
        return this.dbContext.getRepository(ctx, MyCustomEntity).findOneOrFail({
            where: { id },
            relations: ['customers'],
        });
    }

}

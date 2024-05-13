import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { PluginInitOptions } from './types';
import { MyCustomEntity } from './entities/my-custom-entity.entity';
import { MyCustomEntityResolver, adminApiExtensions, shopApiExtensions } from './api';

@VendurePlugin({
    imports: [PluginCommonModule],
    configuration: config => {
        config.customFields.Customer.push({
            type: 'relation',
            name: 'myCustomEntity',
            list: false,
            entity: MyCustomEntity,
            nullable: true
        });
        return config;
    },
    compatibility: '^2.0.0',
    entities: [MyCustomEntity],
    providers: [],
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [MyCustomEntityResolver]
    },
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [MyCustomEntityResolver]
    },
})
export class CustomEntityPlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<CustomEntityPlugin> {
        this.options = options;
        return CustomEntityPlugin;
    }
}

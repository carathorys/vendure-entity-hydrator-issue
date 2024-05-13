import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedDB1715578296421 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`INSERT INTO seller ("createdAt", "updatedAt", "deletedAt", name, id) VALUES (NOW(), NOW(), null, 'Default Seller', 1);`, undefined);
    await queryRunner.query(`INSERT INTO channel ("createdAt", "updatedAt", code, token, description, "defaultLanguageCode", "availableLanguageCodes", "defaultCurrencyCode", "availableCurrencyCodes", "trackInventory", "outOfStockThreshold", "pricesIncludeTax", id, "sellerId", "defaultTaxZoneId", "defaultShippingZoneId") VALUES (NOW(), NOW(), '__default_channel__', 'w9hlkyufefvwpv8brcmg', '', 'en', 'en', 'USD', 'USD', true, 0, false, 1, 1, null, null);`, undefined);
    await queryRunner.query(`INSERT INTO global_settings ("createdAt", "updatedAt", "availableLanguages", "trackInventory", "outOfStockThreshold", id) VALUES (NOW(), NOW(), 'en', true, 0, 1);`, undefined);
    await queryRunner.query(`INSERT INTO role ("createdAt", "updatedAt", code, description, permissions, id) VALUES (NOW(), NOW(), '__super_admin_role__', 'SuperAdmin', 'Authenticated,SuperAdmin,UpdateGlobalSettings,CreateCatalog,ReadCatalog,UpdateCatalog,DeleteCatalog,CreateSettings,ReadSettings,UpdateSettings,DeleteSettings,CreateAdministrator,ReadAdministrator,UpdateAdministrator,DeleteAdministrator,CreateAsset,ReadAsset,UpdateAsset,DeleteAsset,CreateChannel,ReadChannel,UpdateChannel,DeleteChannel,CreateCollection,ReadCollection,UpdateCollection,DeleteCollection,CreateCountry,ReadCountry,UpdateCountry,DeleteCountry,CreateCustomer,ReadCustomer,UpdateCustomer,DeleteCustomer,CreateCustomerGroup,ReadCustomerGroup,UpdateCustomerGroup,DeleteCustomerGroup,CreateFacet,ReadFacet,UpdateFacet,DeleteFacet,CreateOrder,ReadOrder,UpdateOrder,DeleteOrder,CreatePaymentMethod,ReadPaymentMethod,UpdatePaymentMethod,DeletePaymentMethod,CreateProduct,ReadProduct,UpdateProduct,DeleteProduct,CreatePromotion,ReadPromotion,UpdatePromotion,DeletePromotion,CreateShippingMethod,ReadShippingMethod,UpdateShippingMethod,DeleteShippingMethod,CreateTag,ReadTag,UpdateTag,DeleteTag,CreateTaxCategory,ReadTaxCategory,UpdateTaxCategory,DeleteTaxCategory,CreateTaxRate,ReadTaxRate,UpdateTaxRate,DeleteTaxRate,CreateSeller,ReadSeller,UpdateSeller,DeleteSeller,CreateStockLocation,ReadStockLocation,UpdateStockLocation,DeleteStockLocation,CreateSystem,ReadSystem,UpdateSystem,DeleteSystem,CreateZone,ReadZone,UpdateZone,DeleteZone', 1);`, undefined);
    await queryRunner.query(`INSERT INTO role ("createdAt", "updatedAt", code, description, permissions, id) VALUES (NOW(), NOW(), '__customer_role__', 'Customer', 'Authenticated', 2);`, undefined);
    await queryRunner.query(`INSERT INTO role_channels_channel ("roleId", "channelId") VALUES (1, 1);`, undefined);
    await queryRunner.query(`INSERT INTO role_channels_channel ("roleId", "channelId") VALUES (2, 1);`, undefined);
    await queryRunner.query(`INSERT INTO stock_location ("createdAt", "updatedAt", name, description, id) VALUES (NOW(), NOW(), 'Default Stock Location', 'The default stock location', 1);`, undefined);
    await queryRunner.query(`INSERT INTO stock_location_channels_channel ("stockLocationId", "channelId") VALUES (1, 1);`, undefined);

  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    // Doesn't matter
  }

}

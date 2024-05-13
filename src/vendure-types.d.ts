import { MyCustomEntity } from "./plugins/custom-entity/entities/my-custom-entity.entity";

declare module '@vendure/core' {
  interface CustomCustomerFields {
    myCustomEntity?: MyCustomEntity;
  }
}
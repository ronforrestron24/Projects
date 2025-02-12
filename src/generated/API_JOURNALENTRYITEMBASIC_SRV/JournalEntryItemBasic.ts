/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { JournalEntryItemBasicApi } from './JournalEntryItemBasicApi';
import { CompanyCode, CompanyCodeType } from './CompanyCode';
import { CostCenter, CostCenterType } from './CostCenter';
import { ProfitCenter, ProfitCenterType } from './ProfitCenter';
import {
  GlAccountInChartOfAccounts,
  GlAccountInChartOfAccountsType
} from './GlAccountInChartOfAccounts';

/**
 * This class represents the entity "A_JournalEntryItemBasic" of service "API_JOURNALENTRYITEMBASIC_SRV".
 */
export class JournalEntryItemBasic<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements JournalEntryItemBasicType<T>
{
  /**
   * Technical entity name for JournalEntryItemBasic.
   */
  static override _entityName = 'A_JournalEntryItemBasic';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata/sap/API_JOURNALENTRYITEMBASIC_SRV';
  /**
   * All key fields of the JournalEntryItemBasic entity.
   */
  static _keys = ['ID'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Ledger in General Ledger Accounting.
   * Maximum length: 2.
   * @nullable
   */
  declare ledger?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Name.
   * Maximum length: 30.
   * @nullable
   */
  declare ledgerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Ledger.
   * Maximum length: 2.
   * @nullable
   */
  declare sourceLedger?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Year of Ledger.
   * Maximum length: 4.
   * @nullable
   */
  declare ledgerFiscalYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Controlling Area.
   * Maximum length: 4.
   * @nullable
   */
  declare controllingArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Controlling Area Name.
   * Maximum length: 25.
   * @nullable
   */
  declare controllingAreaName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Code.
   * Maximum length: 4.
   * @nullable
   */
  declare companyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Code Name.
   * Maximum length: 25.
   * @nullable
   */
  declare companyCodeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * G/L Account.
   * Maximum length: 10.
   * @nullable
   */
  declare glAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * G/L Account Name.
   * Maximum length: 30.
   * @nullable
   */
  declare glAccountName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Financial Transaction Type.
   * Maximum length: 3.
   * @nullable
   */
  declare financialTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Transaction Category.
   * Maximum length: 4.
   * @nullable
   */
  declare businessTransactionCategory?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Business Transaction Type.
   * Maximum length: 4.
   * @nullable
   */
  declare businessTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Reference Document Type.
   * Maximum length: 5.
   * @nullable
   */
  declare sourceReferenceDocumentType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Journal Entry Item Obsolete Reason.
   * Maximum length: 1.
   * @nullable
   */
  declare jrnlEntryItemObsoleteReason?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Center.
   * Maximum length: 10.
   * @nullable
   */
  declare costCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Center Name.
   * Maximum length: 20.
   * @nullable
   */
  declare costCenterName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profit Center.
   * Maximum length: 10.
   * @nullable
   */
  declare profitCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description of Profit Center.
   * Maximum length: 20.
   * @nullable
   */
  declare profitCenterName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Functional Area.
   * Maximum length: 16.
   * @nullable
   */
  declare functionalArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Functional Area Name.
   * Maximum length: 30.
   * @nullable
   */
  declare functionalAreaName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Area.
   * Maximum length: 4.
   * @nullable
   */
  declare businessArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Area Name.
   * Maximum length: 30.
   * @nullable
   */
  declare businessAreaName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment for Segmental Reporting.
   * Maximum length: 10.
   * @nullable
   */
  declare segment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name.
   * Maximum length: 50.
   * @nullable
   */
  declare segmentName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Cost Center.
   * Maximum length: 10.
   * @nullable
   */
  declare partnerCostCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Cost Center Name.
   * Maximum length: 20.
   * @nullable
   */
  declare partnerCostCenterName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Profit Center.
   * Maximum length: 10.
   * @nullable
   */
  declare partnerProfitCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Profit Center Name.
   * Maximum length: 50.
   * @nullable
   */
  declare partnerProfitCenterName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Functional Area.
   * Maximum length: 16.
   * @nullable
   */
  declare partnerFunctionalArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Functional Area Name.
   * Maximum length: 30.
   * @nullable
   */
  declare partnerFunctionalAreaName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Business Area.
   * Maximum length: 4.
   * @nullable
   */
  declare partnerBusinessArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Business Area Name.
   * Maximum length: 30.
   * @nullable
   */
  declare partnerBusinessAreaName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company ID of Trading Partner.
   * Maximum length: 6.
   * @nullable
   */
  declare partnerCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Name.
   * Maximum length: 30.
   * @nullable
   */
  declare partnerCompanyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Segment for Segmental Reporting.
   * Maximum length: 10.
   * @nullable
   */
  declare partnerSegment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Segment Name.
   * Maximum length: 50.
   * @nullable
   */
  declare partnerSegmentName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Currency.
   * Maximum length: 5.
   * @nullable
   */
  declare transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount in Transaction Currency.
   * @nullable
   */
  declare amountInTransactionCurrency?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Company Code Currency.
   * Maximum length: 5.
   * @nullable
   */
  declare companyCodeCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount in Company Code Currency.
   * @nullable
   */
  declare amountInCompanyCodeCurrency?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Global Currency.
   * Maximum length: 5.
   * @nullable
   */
  declare globalCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount in Global Currency.
   * @nullable
   */
  declare amountInGlobalCurrency?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Fixed Amount in Global Currency.
   * @nullable
   */
  declare fixedAmountInGlobalCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Functional Currency.
   * Maximum length: 5.
   * @nullable
   */
  declare functionalCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount in Functional Currency.
   * @nullable
   */
  declare amountInFunctionalCurrency?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * CO Object Currency.
   * Maximum length: 5.
   * @nullable
   */
  declare controllingObjectCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount in Object Currency.
   * @nullable
   */
  declare amountInObjectCurrency?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Cost Source Unit.
   * Maximum length: 3.
   * @nullable
   */
  declare costSourceUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valuation Quantity.
   * @nullable
   */
  declare valuationQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Valuation Fixed Quantity.
   * @nullable
   */
  declare valuationFixedQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Unit of Measure for Reference Quantity.
   * Maximum length: 3.
   * @nullable
   */
  declare referenceQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference quantity.
   * @nullable
   */
  declare referenceQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Freely Defined Currency 1.
   * Maximum length: 5.
   * @nullable
   */
  declare freeDefinedCurrency1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount in Freely Defined Currency 1.
   * @nullable
   */
  declare amountInFreeDefinedCurrency1?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Freely Defined Currency 2.
   * Maximum length: 5.
   * @nullable
   */
  declare freeDefinedCurrency2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount in Freely Defined Currency 2.
   * @nullable
   */
  declare amountInFreeDefinedCurrency2?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Freely Defined Currency 3.
   * Maximum length: 5.
   * @nullable
   */
  declare freeDefinedCurrency3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount in Freely Defined Currency 3.
   * @nullable
   */
  declare amountInFreeDefinedCurrency3?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Freely Defined Currency 4.
   * Maximum length: 5.
   * @nullable
   */
  declare freeDefinedCurrency4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount in Freely Defined Currency 4.
   * @nullable
   */
  declare amountInFreeDefinedCurrency4?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Freely Defined Currency 5.
   * Maximum length: 5.
   * @nullable
   */
  declare freeDefinedCurrency5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount in Freely Defined Currency 5.
   * @nullable
   */
  declare amountInFreeDefinedCurrency5?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Freely Defined Currency 6.
   * Maximum length: 5.
   * @nullable
   */
  declare freeDefinedCurrency6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount in Freely Defined Currency 6.
   * @nullable
   */
  declare amountInFreeDefinedCurrency6?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Freely Defined Currency 7.
   * Maximum length: 5.
   * @nullable
   */
  declare freeDefinedCurrency7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount in Freely Defined Currency 7.
   * @nullable
   */
  declare amountInFreeDefinedCurrency7?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Freely Defined Currency 8.
   * Maximum length: 5.
   * @nullable
   */
  declare freeDefinedCurrency8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount in Freely Defined Currency 8.
   * @nullable
   */
  declare amountInFreeDefinedCurrency8?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Base Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  declare baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   * @nullable
   */
  declare quantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Additional Quantity 1 Unit.
   * Maximum length: 3.
   * @nullable
   */
  declare additionalQuantity1Unit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Quantity 1.
   * @nullable
   */
  declare additionalQuantity1?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Additional Quantity 2 Unit.
   * Maximum length: 3.
   * @nullable
   */
  declare additionalQuantity2Unit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Quantity 2.
   * @nullable
   */
  declare additionalQuantity2?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Additional Quantity 3 Unit.
   * Maximum length: 3.
   * @nullable
   */
  declare additionalQuantity3Unit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Quantity 3.
   * @nullable
   */
  declare additionalQuantity3?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Journal Entry Category.
   * Maximum length: 1.
   * @nullable
   */
  declare accountingDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Period.
   * Maximum length: 3.
   * @nullable
   */
  declare fiscalPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Year Variant.
   * Maximum length: 2.
   * @nullable
   */
  declare fiscalYearVariant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Year Period.
   * Maximum length: 8.
   * @nullable
   */
  declare fiscalYearPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Chart of Accounts.
   * Maximum length: 4.
   * @nullable
   */
  declare chartOfAccounts?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plant.
   * Maximum length: 4.
   * @nullable
   */
  declare plant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plant Name.
   * Maximum length: 30.
   * @nullable
   */
  declare plantName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Number.
   * Maximum length: 10.
   * @nullable
   */
  declare customer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Customer.
   * Maximum length: 80.
   * @nullable
   */
  declare customerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Controlling Debit Credit Code.
   * Maximum length: 1.
   * @nullable
   */
  declare controllingDebitCreditCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project External ID.
   * Maximum length: 24.
   * @nullable
   */
  declare projectExternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project.
   * Maximum length: 24.
   * @nullable
   */
  declare project?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Description.
   * Maximum length: 40.
   * @nullable
   */
  declare projectDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * WBS Element External ID.
   * Maximum length: 24.
   * @nullable
   */
  declare wbsElementExternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * WBS Element.
   * Maximum length: 24.
   * @nullable
   */
  declare wbsElement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Breakdown Structure Element Name.
   * Maximum length: 40.
   * @nullable
   */
  declare wbsElementDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Company Code.
   * Maximum length: 4.
   * @nullable
   */
  declare partnerCompanyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Company Code Name.
   * Maximum length: 25.
   * @nullable
   */
  declare partnerCompanyCodeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Type.
   * Maximum length: 6.
   * @nullable
   */
  declare costCtrActivityType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Type Name.
   * Maximum length: 60.
   * @nullable
   */
  declare costCtrActivityTypeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order ID.
   * Maximum length: 12.
   * @nullable
   */
  declare orderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Order.
   * Maximum length: 12.
   * @nullable
   */
  declare partnerOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Cost Center Activity Type.
   * Maximum length: 6.
   * @nullable
   */
  declare partnerCostCtrActivityType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Activity Type Name.
   * Maximum length: 60.
   * @nullable
   */
  declare partnerCostCtrActivityTypeName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Partner Project.
   * Maximum length: 24.
   * @nullable
   */
  declare partnerProject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Project Description (1st text line).
   * Maximum length: 40.
   * @nullable
   */
  declare partnerProjectDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner WBS Element.
   * Maximum length: 24.
   * @nullable
   */
  declare partnerWbsElement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner WBS Element Description.
   * Maximum length: 40.
   * @nullable
   */
  declare partnerWbsElementDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Organization.
   * Maximum length: 4.
   * @nullable
   */
  declare salesOrganization?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Organization Name.
   * Maximum length: 20.
   * @nullable
   */
  declare salesOrganizationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Channel.
   * Maximum length: 2.
   * @nullable
   */
  declare distributionChannel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Channel Name.
   * Maximum length: 20.
   * @nullable
   */
  declare distributionChannelName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Division.
   * Maximum length: 2.
   * @nullable
   */
  declare organizationDivision?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Division.
   * Maximum length: 30.
   * @nullable
   */
  declare divisionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Number.
   * Maximum length: 40.
   * @nullable
   */
  declare product?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Name.
   * Maximum length: 40.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sold Material.
   * Maximum length: 40.
   * @nullable
   */
  declare soldMaterial?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sold Material Name.
   * Maximum length: 40.
   * @nullable
   */
  declare soldMaterialName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Sold Group (Deprecated).
   * Maximum length: 9.
   * @nullable
   */
  declare materialGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Group Description.
   * Maximum length: 20.
   * @nullable
   */
  declare materialGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group.
   * Maximum length: 2.
   * @nullable
   */
  declare customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Customer Group.
   * Maximum length: 30.
   * @nullable
   */
  declare customerGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer or Supplier Country/Region.
   * Maximum length: 3.
   * @nullable
   */
  declare customerSupplierCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country/Region Name.
   * Maximum length: 50.
   * @nullable
   */
  declare customerSupplierCountryName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Supplier Industry.
   * Maximum length: 4.
   * @nullable
   */
  declare customerSupplierIndustry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description of the Industry Key.
   * Maximum length: 20.
   * @nullable
   */
  declare customerSupplierIndustryName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales District.
   * Maximum length: 6.
   * @nullable
   */
  declare salesDistrict?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of the District.
   * Maximum length: 20.
   * @nullable
   */
  declare salesDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Financial Management Area.
   * Maximum length: 4.
   * @nullable
   */
  declare financialManagementArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fund.
   * Maximum length: 10.
   * @nullable
   */
  declare fund?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Grant.
   * Maximum length: 20.
   * @nullable
   */
  declare grantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Period.
   * Maximum length: 10.
   * @nullable
   */
  declare budgetPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sponsored Program.
   * Maximum length: 20.
   * @nullable
   */
  declare sponsoredProgram?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sponsored Class.
   * Maximum length: 20.
   * @nullable
   */
  declare sponsoredClass?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Validity Number.
   * Maximum length: 3.
   * @nullable
   */
  declare gteeMBudgetValidityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Joint Venture.
   * Maximum length: 6.
   * @nullable
   */
  declare jointVenture?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Joint Venture Equity Group.
   * Maximum length: 3.
   * @nullable
   */
  declare jointVentureEquityGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Joint Venture Cost Recovery Code.
   * Maximum length: 2.
   * @nullable
   */
  declare jointVentureCostRecoveryCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Joint Venture Production Date.
   * @nullable
   */
  declare jointVentureProductionDate?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * RE Business Entity.
   * Maximum length: 8.
   * @nullable
   */
  declare reBusinessEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Real Estate Building.
   * Maximum length: 8.
   * @nullable
   */
  declare realEstateBuilding?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Real Estate Property.
   * Maximum length: 8.
   * @nullable
   */
  declare realEstateProperty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * RE Rental Object.
   * Maximum length: 8.
   * @nullable
   */
  declare reRentalObject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Real Estate Contract.
   * Maximum length: 13.
   * @nullable
   */
  declare realEstateContract?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * RE Service Charge Key.
   * Maximum length: 4.
   * @nullable
   */
  declare reServiceChargeKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * RE Settlement Unit.
   * Maximum length: 5.
   * @nullable
   */
  declare reSettlementUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settlement Reference Date.
   * @nullable
   */
  declare settlementReferenceDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * One-to-one navigation property to the {@link CompanyCode} entity.
   */
  declare toCompanyCode?: CompanyCode<T> | null;
  /**
   * One-to-one navigation property to the {@link CostCenter} entity.
   */
  declare toCurrentCostCenter?: CostCenter<T> | null;
  /**
   * One-to-one navigation property to the {@link ProfitCenter} entity.
   */
  declare toCurrentProfitCenter?: ProfitCenter<T> | null;
  /**
   * One-to-one navigation property to the {@link GlAccountInChartOfAccounts} entity.
   */
  declare toGlAccountInChartOfAccounts?: GlAccountInChartOfAccounts<T> | null;

  constructor(_entityApi: JournalEntryItemBasicApi<T>) {
    super(_entityApi);
  }
}

export interface JournalEntryItemBasicType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  ledger?: DeserializedType<T, 'Edm.String'> | null;
  ledgerName?: DeserializedType<T, 'Edm.String'> | null;
  sourceLedger?: DeserializedType<T, 'Edm.String'> | null;
  ledgerFiscalYear?: DeserializedType<T, 'Edm.String'> | null;
  controllingArea?: DeserializedType<T, 'Edm.String'> | null;
  controllingAreaName?: DeserializedType<T, 'Edm.String'> | null;
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  companyCodeName?: DeserializedType<T, 'Edm.String'> | null;
  glAccount?: DeserializedType<T, 'Edm.String'> | null;
  glAccountName?: DeserializedType<T, 'Edm.String'> | null;
  financialTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  businessTransactionCategory?: DeserializedType<T, 'Edm.String'> | null;
  businessTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  sourceReferenceDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  jrnlEntryItemObsoleteReason?: DeserializedType<T, 'Edm.String'> | null;
  costCenter?: DeserializedType<T, 'Edm.String'> | null;
  costCenterName?: DeserializedType<T, 'Edm.String'> | null;
  profitCenter?: DeserializedType<T, 'Edm.String'> | null;
  profitCenterName?: DeserializedType<T, 'Edm.String'> | null;
  functionalArea?: DeserializedType<T, 'Edm.String'> | null;
  functionalAreaName?: DeserializedType<T, 'Edm.String'> | null;
  businessArea?: DeserializedType<T, 'Edm.String'> | null;
  businessAreaName?: DeserializedType<T, 'Edm.String'> | null;
  segment?: DeserializedType<T, 'Edm.String'> | null;
  segmentName?: DeserializedType<T, 'Edm.String'> | null;
  partnerCostCenter?: DeserializedType<T, 'Edm.String'> | null;
  partnerCostCenterName?: DeserializedType<T, 'Edm.String'> | null;
  partnerProfitCenter?: DeserializedType<T, 'Edm.String'> | null;
  partnerProfitCenterName?: DeserializedType<T, 'Edm.String'> | null;
  partnerFunctionalArea?: DeserializedType<T, 'Edm.String'> | null;
  partnerFunctionalAreaName?: DeserializedType<T, 'Edm.String'> | null;
  partnerBusinessArea?: DeserializedType<T, 'Edm.String'> | null;
  partnerBusinessAreaName?: DeserializedType<T, 'Edm.String'> | null;
  partnerCompany?: DeserializedType<T, 'Edm.String'> | null;
  partnerCompanyName?: DeserializedType<T, 'Edm.String'> | null;
  partnerSegment?: DeserializedType<T, 'Edm.String'> | null;
  partnerSegmentName?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  amountInTransactionCurrency?: DeserializedType<T, 'Edm.Decimal'> | null;
  companyCodeCurrency?: DeserializedType<T, 'Edm.String'> | null;
  amountInCompanyCodeCurrency?: DeserializedType<T, 'Edm.Decimal'> | null;
  globalCurrency?: DeserializedType<T, 'Edm.String'> | null;
  amountInGlobalCurrency?: DeserializedType<T, 'Edm.Decimal'> | null;
  fixedAmountInGlobalCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  functionalCurrency?: DeserializedType<T, 'Edm.String'> | null;
  amountInFunctionalCurrency?: DeserializedType<T, 'Edm.Decimal'> | null;
  controllingObjectCurrency?: DeserializedType<T, 'Edm.String'> | null;
  amountInObjectCurrency?: DeserializedType<T, 'Edm.Decimal'> | null;
  costSourceUnit?: DeserializedType<T, 'Edm.String'> | null;
  valuationQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  valuationFixedQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  referenceQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  referenceQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  freeDefinedCurrency1?: DeserializedType<T, 'Edm.String'> | null;
  amountInFreeDefinedCurrency1?: DeserializedType<T, 'Edm.Decimal'> | null;
  freeDefinedCurrency2?: DeserializedType<T, 'Edm.String'> | null;
  amountInFreeDefinedCurrency2?: DeserializedType<T, 'Edm.Decimal'> | null;
  freeDefinedCurrency3?: DeserializedType<T, 'Edm.String'> | null;
  amountInFreeDefinedCurrency3?: DeserializedType<T, 'Edm.Decimal'> | null;
  freeDefinedCurrency4?: DeserializedType<T, 'Edm.String'> | null;
  amountInFreeDefinedCurrency4?: DeserializedType<T, 'Edm.Decimal'> | null;
  freeDefinedCurrency5?: DeserializedType<T, 'Edm.String'> | null;
  amountInFreeDefinedCurrency5?: DeserializedType<T, 'Edm.Decimal'> | null;
  freeDefinedCurrency6?: DeserializedType<T, 'Edm.String'> | null;
  amountInFreeDefinedCurrency6?: DeserializedType<T, 'Edm.Decimal'> | null;
  freeDefinedCurrency7?: DeserializedType<T, 'Edm.String'> | null;
  amountInFreeDefinedCurrency7?: DeserializedType<T, 'Edm.Decimal'> | null;
  freeDefinedCurrency8?: DeserializedType<T, 'Edm.String'> | null;
  amountInFreeDefinedCurrency8?: DeserializedType<T, 'Edm.Decimal'> | null;
  baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  quantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  additionalQuantity1Unit?: DeserializedType<T, 'Edm.String'> | null;
  additionalQuantity1?: DeserializedType<T, 'Edm.Decimal'> | null;
  additionalQuantity2Unit?: DeserializedType<T, 'Edm.String'> | null;
  additionalQuantity2?: DeserializedType<T, 'Edm.Decimal'> | null;
  additionalQuantity3Unit?: DeserializedType<T, 'Edm.String'> | null;
  additionalQuantity3?: DeserializedType<T, 'Edm.Decimal'> | null;
  accountingDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  fiscalPeriod?: DeserializedType<T, 'Edm.String'> | null;
  fiscalYearVariant?: DeserializedType<T, 'Edm.String'> | null;
  fiscalYearPeriod?: DeserializedType<T, 'Edm.String'> | null;
  chartOfAccounts?: DeserializedType<T, 'Edm.String'> | null;
  plant?: DeserializedType<T, 'Edm.String'> | null;
  plantName?: DeserializedType<T, 'Edm.String'> | null;
  customer?: DeserializedType<T, 'Edm.String'> | null;
  customerName?: DeserializedType<T, 'Edm.String'> | null;
  controllingDebitCreditCode?: DeserializedType<T, 'Edm.String'> | null;
  projectExternalId?: DeserializedType<T, 'Edm.String'> | null;
  project?: DeserializedType<T, 'Edm.String'> | null;
  projectDescription?: DeserializedType<T, 'Edm.String'> | null;
  wbsElementExternalId?: DeserializedType<T, 'Edm.String'> | null;
  wbsElement?: DeserializedType<T, 'Edm.String'> | null;
  wbsElementDescription?: DeserializedType<T, 'Edm.String'> | null;
  partnerCompanyCode?: DeserializedType<T, 'Edm.String'> | null;
  partnerCompanyCodeName?: DeserializedType<T, 'Edm.String'> | null;
  costCtrActivityType?: DeserializedType<T, 'Edm.String'> | null;
  costCtrActivityTypeName?: DeserializedType<T, 'Edm.String'> | null;
  orderId?: DeserializedType<T, 'Edm.String'> | null;
  partnerOrder?: DeserializedType<T, 'Edm.String'> | null;
  partnerCostCtrActivityType?: DeserializedType<T, 'Edm.String'> | null;
  partnerCostCtrActivityTypeName?: DeserializedType<T, 'Edm.String'> | null;
  partnerProject?: DeserializedType<T, 'Edm.String'> | null;
  partnerProjectDescription?: DeserializedType<T, 'Edm.String'> | null;
  partnerWbsElement?: DeserializedType<T, 'Edm.String'> | null;
  partnerWbsElementDescription?: DeserializedType<T, 'Edm.String'> | null;
  salesOrganization?: DeserializedType<T, 'Edm.String'> | null;
  salesOrganizationName?: DeserializedType<T, 'Edm.String'> | null;
  distributionChannel?: DeserializedType<T, 'Edm.String'> | null;
  distributionChannelName?: DeserializedType<T, 'Edm.String'> | null;
  organizationDivision?: DeserializedType<T, 'Edm.String'> | null;
  divisionName?: DeserializedType<T, 'Edm.String'> | null;
  product?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  soldMaterial?: DeserializedType<T, 'Edm.String'> | null;
  soldMaterialName?: DeserializedType<T, 'Edm.String'> | null;
  materialGroup?: DeserializedType<T, 'Edm.String'> | null;
  materialGroupName?: DeserializedType<T, 'Edm.String'> | null;
  customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  customerGroupName?: DeserializedType<T, 'Edm.String'> | null;
  customerSupplierCountry?: DeserializedType<T, 'Edm.String'> | null;
  customerSupplierCountryName?: DeserializedType<T, 'Edm.String'> | null;
  customerSupplierIndustry?: DeserializedType<T, 'Edm.String'> | null;
  customerSupplierIndustryName?: DeserializedType<T, 'Edm.String'> | null;
  salesDistrict?: DeserializedType<T, 'Edm.String'> | null;
  salesDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  financialManagementArea?: DeserializedType<T, 'Edm.String'> | null;
  fund?: DeserializedType<T, 'Edm.String'> | null;
  grantId?: DeserializedType<T, 'Edm.String'> | null;
  budgetPeriod?: DeserializedType<T, 'Edm.String'> | null;
  sponsoredProgram?: DeserializedType<T, 'Edm.String'> | null;
  sponsoredClass?: DeserializedType<T, 'Edm.String'> | null;
  gteeMBudgetValidityNumber?: DeserializedType<T, 'Edm.String'> | null;
  jointVenture?: DeserializedType<T, 'Edm.String'> | null;
  jointVentureEquityGroup?: DeserializedType<T, 'Edm.String'> | null;
  jointVentureCostRecoveryCode?: DeserializedType<T, 'Edm.String'> | null;
  jointVentureProductionDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  reBusinessEntity?: DeserializedType<T, 'Edm.String'> | null;
  realEstateBuilding?: DeserializedType<T, 'Edm.String'> | null;
  realEstateProperty?: DeserializedType<T, 'Edm.String'> | null;
  reRentalObject?: DeserializedType<T, 'Edm.String'> | null;
  realEstateContract?: DeserializedType<T, 'Edm.String'> | null;
  reServiceChargeKey?: DeserializedType<T, 'Edm.String'> | null;
  reSettlementUnitId?: DeserializedType<T, 'Edm.String'> | null;
  settlementReferenceDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  toCompanyCode?: CompanyCodeType<T> | null;
  toCurrentCostCenter?: CostCenterType<T> | null;
  toCurrentProfitCenter?: ProfitCenterType<T> | null;
  toGlAccountInChartOfAccounts?: GlAccountInChartOfAccountsType<T> | null;
}

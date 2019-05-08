# ![LOGO](logo.png) Storecove **flow**ground Connector

## Description

A generated **flow**ground connector for the Storecove API (version 2.0.1).

Generated from: https://api.apis.guru/v2/specs/storecove.com/2.0.1/swagger.json<br/>
Generated at: 2019-05-07T17:44:15+03:00

## API Description

Storecove API

## Authorization

Supported authorization schemes:
- API Key
## Actions

### Submit a new invoice

> Submit an invoice for delivery.<br/>
> include::examples/invoice_submissions/create_invoice_submission/tabs.adoc[]

*Tags:* `InvoiceSubmissions`

### Preflight an invoice recipient

> Check whether Storecove can deliver an invoice for a list of ids.<br/>
> include::examples/invoice_submissions/preflight_invoice_recipient/tabs.adoc[]

*Tags:* `InvoiceSubmissions`

### Create a new LegalEntity

> Create a new LegalEntity.

*Tags:* `LegalEntities`

### Delete LegalEntity

> Delete a specific LegalEntity.

*Tags:* `LegalEntities`

#### Input Parameters
* `id` - _required_ - legal_entity id

### Get LegalEntity

> Get a specific LegalEntity.

*Tags:* `LegalEntities`

#### Input Parameters
* `id` - _required_ - legal_entity id

### Update LegalEntity

> Update a specific LegalEntity.

*Tags:* `LegalEntities`

#### Input Parameters
* `id` - _required_ - legal_entity id

### Create a new PeppolIdentifier

> Create a new PeppolIdentifier.

*Tags:* `PeppolIdentifiers`

#### Input Parameters
* `legal_entity_id` - _required_ - The id of the LegalEntity for which to create the PeppolIdentifier

### Delete PeppolIdentifier

> Delete a PeppolIdentifier.

*Tags:* `PeppolIdentifiers`

#### Input Parameters
* `legal_entity_id` - _required_ - The id of the LegalEntity this PeppolIdentifier belongs to
* `superscheme` - _required_ - The superscheme of the identifier. Should always be "iso6523-actorid-upis".
* `scheme` - _required_ - PEPPOL identifier scheme id, e.g. "DE:VAT". For a full list see <<peppol_schemes_list>>.
* `identifier` - _required_ - PEPPOL identifier

### Get Invoice

> Get a specific Invoice.

*Tags:* `PurchaseInvoices`

#### Input Parameters
* `guid` - _required_ - purchase invoice guid

### Get Invoice as UBL

> Get a specific Invoice in UBL form.

*Tags:* `PurchaseInvoices`

#### Input Parameters
* `guid` - _required_ - purchase invoice guid

### Get ShopAccountRequests

> Retrieve all active ShopAccountRequests for one of your entities.<br/>
> include::examples/shop_account_requests/shop_account_requests_index/tabs.adoc[]

*Tags:* `ShopAccountRequests`

#### Input Parameters
* `external_user_id` - _required_ - Filter by the external_user_id

### Create ShopAccountRequest

> Create a new ShopAccountRequest<br/>
> include::examples/shop_account_requests/create_shop_account_request/tabs.adoc[]

*Tags:* `ShopAccountRequests`

### Delete ShopAccountRequest

> Delete a specific ShopAccountRequest<br/>
> include::examples/shop_account_requests/delete_shop_account_request/tabs.adoc[]

*Tags:* `ShopAccountRequests`

#### Input Parameters
* `id` - _required_ - shop_account_request id

### Get ShopAccountRequest

> Show a specific ShopAccountRequest<br/>
> include::examples/shop_account_requests/get_shop_account_request/tabs.adoc[]

*Tags:* `ShopAccountRequests`

#### Input Parameters
* `id` - _required_ - shop_account_request id

### Update ShopAccountRequest

> Update a specific ShopAccountRequest<br/>
> include::examples/shop_account_requests/update_shop_account_request/tabs.adoc[]

*Tags:* `ShopAccountRequests`

#### Input Parameters
* `id` - _required_ - shop_account_request id

### Get ShopAccounts for an entity

> Retrieve all active ShopAccounts for one of your entities.<br/>
> include::examples/shop_accounts/shop_accounts_index/tabs.adoc[]

*Tags:* `ShopAccounts`

#### Input Parameters
* `external_user_id` - _required_ - Filter by the external_user_id

### Create ShopAccount

> Create a new ShopAccount.<br/>
> include::examples/shop_accounts/create_shop_account/tabs.adoc[]

*Tags:* `ShopAccounts`

### Get ShopAccounts with authorization failures

> Get ShopAccounts with authorization failures.<br/>
> include::examples/shop_accounts/shop_accounts_auth_failures/tabs.adoc[]

*Tags:* `ShopAccounts`

### Delete ShopAccount

> Delete a specific ShopAccount.<br/>
> include::examples/shop_accounts/delete_shop_account/tabs.adoc[]

*Tags:* `ShopAccounts`

#### Input Parameters
* `id` - _required_ - shop_account id

### Get ShopAccount

> Get a specific ShopAccount.<br/>
> include::examples/shop_accounts/get_shop_account/tabs.adoc[]

*Tags:* `ShopAccounts`

#### Input Parameters
* `id` - _required_ - shop_account id

### Update ShopAccount

> Update a specific ShopAccount.<br/>
> include::examples/shop_accounts/update_shop_account/tabs.adoc[]

*Tags:* `ShopAccounts`

#### Input Parameters
* `id` - _required_ - shop_account id

### Get Shops

> Get all available shops.<br/>
> include::examples/shops/shops_index/tabs.adoc[]

*Tags:* `Shops`

#### Input Parameters
* `cc` - _optional_ - Include creditcards in list. Add ?cc=true to URL to use.

## License

**flow**ground :- Telekom iPaaS / storecove-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.

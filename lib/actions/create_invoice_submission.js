/**
 * Auto-generated action file for "Storecove" API.
 *
 * Generated at: 2019-05-07T14:44:15.043Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / storecove-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'create_invoice_submission'
 * Endpoint Path: '/invoice_submissions'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "attachments": "attachments",
    "document": "document",
    "documentUrl": "documentUrl",
    "accountingCost": "accountingCost",
    "code": "code",
    "list": "list",
    "listAgency": "listAgency",
    "listVersion": "listVersion",
    "accountingCostCode": "accountingCostCode",
    "accountId": "accountId",
    "city": "city",
    "country": "country",
    "county": "county",
    "department": "department",
    "number": "number",
    "postbox": "postbox",
    "street1": "street1",
    "street2": "street2",
    "zip": "zip",
    "address": "address",
    "companyName": "companyName",
    "email": "email",
    "firstName": "firstName",
    "lastName": "lastName",
    "phone": "phone",
    "contact": "contact",
    "party": "party",
    "accountingCustomerParty": "accountingCustomerParty",
    "accountingSupplierParty": "accountingSupplierParty",
    "allowanceCharges": "allowanceCharges",
    "amountIncludingVat": "amountIncludingVat",
    "billingReference": "billingReference",
    "buyerCustomerParty": "buyerCustomerParty",
    "buyerReference": "buyerReference",
    "contractDocumentReference": "contractDocumentReference",
    "actualDate": "actualDate",
    "id": "id",
    "schemeAgencyId": "schemeAgencyId",
    "schemeId": "schemeId",
    "location": "location",
    "quantity": "quantity",
    "delivery": "delivery",
    "documentCurrencyCode": "documentCurrencyCode",
    "dueDate": "dueDate",
    "invoiceLines": "invoiceLines",
    "invoiceNumber": "invoiceNumber",
    "invoicePeriod": "invoicePeriod",
    "invoiceType": "invoiceType",
    "issueDate": "issueDate",
    "note": "note",
    "orderReference": "orderReference",
    "paymentMeansCode": "paymentMeansCode",
    "paymentMeansIban": "paymentMeansIban",
    "paymentMeansPaymentId": "paymentMeansPaymentId",
    "projectReference": "projectReference",
    "salesOrderId": "salesOrderId",
    "taxExemptReason": "taxExemptReason",
    "taxPointDate": "taxPointDate",
    "ublExtensions": "ublExtensions",
    "vatReverseCharge": "vatReverseCharge",
    "invoice": "invoice",
    "emails": "emails",
    "publicIdentifiers": "publicIdentifiers",
    "legalEntityId": "legalEntityId",
    "widgetIdentification": "widgetIdentification",
    "invoiceRecipient": "invoiceRecipient",
    "legalSupplierId": "legalSupplierId",
    "mode": "mode",
    "supplierId": "supplierId",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Bearer'] = cfg['Bearer'];

    let callParams = {
        spec: spec,
        operationId: 'create_invoice_submission',
        pathName: '/invoice_submissions',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}
export interface Product{
    uniqueID?: string;
    partNumber?: string;
    name?: string;
    locals?: {
        outOfStockList: {
            xCatEntryQuantity: boolean,
            blacklist: boolean
        },
        unavailableList: {
            blacklist: boolean
        },
        promotion: {
            stock: boolean,
            badge: boolean
        }
    };
    images?: [string] ;
    prices?: {
        listPrice?: number,
        offerPrice?: number,
        discount?: number,
        discountPercentage?: number,
        ripleyPuntos?: number,
        formattedListPrice?: string,
        formattedOfferPrice?: string,
        formattedDiscount?: string
    };
    shortDescription?: string;
    longDescription?: string;
    definingAttributes?: [{
        displayable: true,
        id: string,
        identifier: string,
        name: string,
        usage: string,
        values?: [{
                values: string,
                extendedValue?: [{
                        value: string,
                        key: string
                    },
                    {
                        value: string,
                        key: string
                    }
                ],
                identifier: string,
                uniqueID: string,
                slug: string
            }
        ]
    }];
    attributes?: [{
            displayable?: boolean,
            name?: string,
            usage?: string,
            value?: string
        }
    ];
    shipping?:  {
        rTienda: boolean,
        dDomicilio: boolean,
        rCercano: boolean,
        cashOnDelivery: boolean
    };
    parentProductID?: string;
    xCatEntryCategory?: string;
    productString?: string;
    isMarketplaceProduct?: boolean;
    marketplace?: {
        shopName: string,
        shopId: number
    };
    warranties?: [];
    url?: string;
    thumbnailImage?: string;
    simple?: {
        lists: {
            outOfStockList: {
                xCatEntryQuantity: boolean,
                blacklist: boolean
            },
            unavailableList: {
                blacklist: boolean
            },
            promotion: {
                stock: boolean,
                badge: boolean
            }
        },
        isUnavailable: boolean,
        isOutOfStock: boolean,
        isMarketplaceProduct: boolean
    };
    single?: boolean;

}
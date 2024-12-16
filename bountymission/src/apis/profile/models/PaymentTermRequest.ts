/**
 * @description 卡信息
*/
export type PaymentTermRequest = {
    /**
     * @description 银行开户国家
     * @type string | undefined
    */
    country?: string;
    /**
     * @description 持卡人街道2
     * @type string | undefined
    */
    customerStreet2?: string;
    /**
     * @description 持卡人街道1
     * @type string | undefined
    */
    customerStreet1?: string;
    /**
     * @description 银行开户城市
     * @type string | undefined
    */
    city?: string;
    /**
     * @description 持卡人邮政编码
     * @type string | undefined
    */
    customerPostalCode?: string;
    /**
     * @description 用途
     * @type integer | undefined, int32
    */
    usage?: number;
    /**
     * @description swiftCode
     * @type string | undefined
    */
    swiftCode?: string;
    /**
     * @description 银行名称
     * @type string | undefined
    */
    bankName?: string;
    /**
     * @description 持卡人护照
     * @type string | undefined
    */
    passportOcrPic?: string;
    /**
     * @description 持卡人城市
     * @type string | undefined
    */
    customerCity?: string;
    /**
     * @description 卡号
     * @type string | undefined
    */
    accountNumber?: string;
    /**
     * @description 卡类型
     * @type integer | undefined, int32
    */
    type?: number;
    /**
     * @description 持卡人英文姓
     * @type string | undefined
    */
    passportFirstName?: string;
    /**
     * @description 街道详细地址
     * @type string | undefined
    */
    street?: string;
    /**
     * @description 持卡人英文名
     * @type string | undefined
    */
    passportLastName?: string;
    /**
     * @description US/CA必须
     * @type string | undefined
    */
    district?: string;
    /**
     * @description 证明
     * @type string | undefined
    */
    proof?: string;
};
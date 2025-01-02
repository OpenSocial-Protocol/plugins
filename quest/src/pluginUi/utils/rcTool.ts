// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Object.prototype.toString.call(arr) // "[object String]"
  /* 是否字符串类型 */
  isStringType(o: any): boolean {
    return Object.prototype.toString.call(o).slice(8, -1) === "String";
  },
  /* 是否数字类型 */
  isNumberType(o: unknown): boolean {
    //
    return Object.prototype.toString.call(o).slice(8, -1) === "Number";
  },
  /* 是否对象类型 */
  isObjType(o: any): boolean {
    return Object.prototype.toString.call(o).slice(8, -1) === "Object";
  },
  /* 是否数组 */
  isArrayType(o: any): boolean {
    return Object.prototype.toString.call(o).slice(8, -1) === "Array";
  },
  /* 是否时间 */
  isDateType(o: any): boolean {
    return Object.prototype.toString.call(o).slice(8, -1) === "Date";
  },
  /* 是否booleanType */
  isBooleanType(o: any): boolean {
    return Object.prototype.toString.call(o).slice(8, -1) === "Boolean";
  },
  /* 是否函数 */
  isFunctionType(o: any): boolean {
    return Object.prototype.toString.call(o).slice(8, -1) === "Function";
  },
  /* 是否为null类型 */
  isNullType(o: any): boolean {
    return Object.prototype.toString.call(o).slice(8, -1) === "Null";
  },
  /* 是否undefined类型 */
  isUndefined(o: any): boolean {
    return Object.prototype.toString.call(o).slice(8, -1) === "Undefined";
  },
  /* 是否为假 */
  isFalse(o: any): boolean {
    if (
      o === "" ||
      o === undefined ||
      o === null ||
      o === "null" ||
      o === "undefined" ||
      o === 0 ||
      o === false
    ) {
      return true;
    }
    return false;
  },
  /* 是否为真 */
  isTrue(o: any): boolean {
    return !this.isFalse(o);
  },
  /* 是否为true string */
  isTrueString(o: any): boolean {
    if (this.isStringType(o)) {
      return o === "true";
    }
    if (this.isBooleanType(o)) {
      return o;
    }
    return false;
  },
  /* 是否为空 */
  isNull(o: any): boolean {
    if (
      o === "" ||
      o === undefined ||
      o === null ||
      o === "null" ||
      o === "undefined"
    ) {
      return true;
    }
    return false;
  },
  /* 是否为整数 */
  isInteger(num: number): boolean {
    if (num % 1 === 0) {
      return true;
    }
    return false;
  },
  /* 校验字符串是否为空 */
  isBlankString(text: string): boolean {
    if (text === null) {
      return true;
    }
    if (text === "") {
      return true;
    }
    if (text.length === 0) {
      return true;
    }
    if (text === undefined) {
      return true;
    }
    return false;
  },
  /* 校验字符串是否不为空 */
  isBlankStringNot(text: string): boolean {
    return !this.isNull(text);
  },
  /* 验对象是否为空 空YES 非空NO */
  isBlankObject(obj: any): boolean {
    if (this.isNull(obj)) {
      return true;
    }
    if (!this.isObjType(obj)) {
      return true;
    }
    if (JSON.stringify(obj) === "{}") {
      return true;
    }
    if (Object.keys(obj).length === 0) {
      return true;
    }
    return false;
  },
  /* 校验对象不为空 */
  isBlankObjectNot(obj: any): boolean {
    return !this.isBlankObject(obj);
  },
  /* 校验数组是否不为空 */
  isBlankArray(arr: any): boolean {
    if (this.isNull(arr)) {
      return true;
    }
    if (!this.isArrayType(arr)) {
      return true;
    }
    if (arr.length === 0) {
      return true;
    }
    // 过滤掉全为空的数组对象 如：let obj = [undefined, undefined, undefined]
    const filterArray = arr.filter((item: any) => item !== this.isNull(item));
    if (filterArray.length === 0) {
      return true;
    }
    return false;
  },
  /* 校验数组不为空 */
  isBlankArrayNot(arr: any): boolean {
    return !this.isBlankArray(arr);
  },
  /* 检查对象是否存在一个属性 */
  isHasOwnProperty(obj: any, key: string): boolean {
    if (this.isNull(obj)) {
      return false;
    }
    if (!this.isObjType(obj)) {
      return false;
    }
    return {}.hasOwnProperty.call(obj, key);
  },
  /* 检查对象是否有值 */
  getObjectKeyValue(key: string, value: any) {
    const obj: { [key: string]: any } = {};
    if (!this.isNull(value) && !this.isNull(key)) {
      obj[key] = value;
    }
    return obj;
  },
  /* 数组中是否存储某值 */
  isArrayValue(arry: any, value: any): boolean {
    if (!value) {
      return false;
    }
    if (this.isBlankArray(arry)) {
      return false;
    }
    if (arry.indexOf(value) > -1) {
      return true;
    }
    return false;
  },
  /* 取时间戳 */
  getATime(o: string) {
    const time = new Date().getTime();
    if (!this.isNull(o)) {
      return o + time;
    }
    return time;
  },
  /* 10以下的数字补0操作 */
  getzf(num: string | number): string {
    let numSt = "";
    if (parseInt(num + "", 10) < 10) {
      numSt = `0${num}`;
    }
    return numSt;
  },
  /* 判断一个元素是否在数组中 */
  contains(arr: [], val: never): boolean {
    return arr.indexOf(val) !== -1;
  },
  /* 正规校验 */
  checkStr(str: string, type: string): boolean {
    switch (type) {
      case "phone": // 手机号码
        return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
      case "tel": // 座机
        return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
      case "card": // 身份证
        return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
      case "pwd": // 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
        return /^[a-zA-Z]\w{5,17}$/.test(str);
      case "postal": // 邮政编码
        return /[1-9]\d{5}(?!\d)/.test(str);
      case "QQ": // QQ号
        return /^[1-9][0-9]{4,9}$/.test(str);
      case "email": // 邮箱
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
      case "money": // 金额(小数点2位)
        return /^\d*(?:\.\d{0,2})?$/.test(str);
      case "URL": // 网址
        // eslint-disable-next-line no-useless-escape
        return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(
          str
        );
      case "IP": // IP
        return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(
          str
        );
      case "date": // 日期时间
        return (
          // eslint-disable-next-line no-useless-escape
          /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(
            str
          ) ||
          // eslint-disable-next-line no-useless-escape
          /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
        );
      case "number": // 数字
        return /^[0-9]$/.test(str);
      case "english": // 英文
        return /^[a-zA-Z]+$/.test(str);
      case "chinese": // 中文
        return /^[\u4E00-\u9FA5]+$/.test(str);
      case "lower": // 小写
        return /^[a-z]+$/.test(str);
      case "upper": // 大写
        return /^[A-Z]+$/.test(str);
      case "HTML": // HTML标记
        return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
      case "PAGENAME": // HTML标记
        return /^(\w|[\u4E00-\u9FA5])*$/.test(str);
      default:
        return true;
    }
  },
  /* 正规校验HTML 里面是否有img 标签 */
  hasImgTag(html: string, type: "img"): boolean {
    switch (type) {
      case "img": // 手机号码
        const imgRegex = /<img[^>]*>/;
        return imgRegex.test(html);
      default:
        return false;
    }
  },
  strongPasswordCheck(str: string): number {
    const pattern =
      /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![a-z0-9]+$)[a-zA-Z0-9]{6,20}$/;
    // 如果符合至少6个，至多20个字符组成。至少包含一个小写字母，一个大写字母，和一个数字。
    if (pattern.test(str)) {
      const reg = /(\w)\1{2}/g;
      let strContinue: any = null;
      strContinue = str.match(reg);
      if (strContinue && strContinue.length > 0) {
        // 出现了aaa这种连续的字符
        // console.log(strContinue);
        return 1;
      } // 符合条件的字符
      return 0;
    }
    return 1;
  },
  /* 随机数范围 */
  random(min: number, max: number): number {
    if (arguments.length === 2) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    }
    return 0;
  },
  /*
        深层复制
        */
  deepCopy(o: any) {
    if (o instanceof Array) {
      const n: any = [];
      for (let i = 0; i < o.length; ++i) {
        n[i] = this.deepCopy(o[i]);
      }
      return n;
    }
    if (o instanceof Object) {
      const n: { [key: string]: any } = {};
      for (const i in o) {
        n[i] = this.deepCopy(o[i]);
      }
      return n;
    }
    return o;
  },
  /*
        动态删除对象Key
        */
  deleteObjectKey(
    obj: {
      [key: string]: string | number;
    },
    key: string
  ) {
    if (this.isNull(obj)) {
      return false;
    }
    if (!this.isObjType(obj)) {
      return false;
    }
    delete obj[key];
    return true;
  },
  /* 数组填充 */
  fillNANArray(length: number) {
    const nanArr: any[] = [];
    for (let i = 0; i < length; i++) {
      nanArr.push(null);
    }
    return nanArr;
  },
  // 数值越界
  isNumberOr16(num = 0): boolean {
    if (num && num > 1000000000000000) {
      return true;
    }
    return false;
  },
  /** 判断str串为 JSON 类型 */
  isJSONStr(str: string) {
    if (this.isStringType(str)) {
      try {
        const obj = JSON.parse(str);
        return !!this.isTrue(obj);
      } catch (e) {
        console.log(`error：${str}!!!${e}`);
        return false;
      }
    }
    return false;
  },
  /* string 转JSON */
  getJsonObject(str: string) {
    let data = {};
    if (this.isTrue(str) && this.isJSONStr(str)) {
      data = JSON.parse(str);
    }
    return data;
  },
  /* ** 字符串转哈希值 */
  getHashCode(str: string, caseSensitive: boolean) {
    let hasStr = "";
    if (!caseSensitive) {
      hasStr = str.toLowerCase();
    }
    // 1315423911=b'1001110011001111100011010100111'
    let hash = 1315423911;
    let i: number;
    let ch: number;
    for (i = hasStr.length - 1; i >= 0; i--) {
      ch = hasStr.charCodeAt(i);
      // eslint-disable-next-line no-bitwise
      hash ^= (hash << 5) + ch + (hash >> 2);
    }
    // eslint-disable-next-line no-bitwise
    return hash & 0x7fffffff;
  },
  getShopfyPrices(prices: any) {
    return prices?.price?.amount || prices?.price || "0";
  },
  toDecimal2(x: number) {
    const num = x + "";
    var f = parseFloat(num);

    if (isNaN(f)) {
      return "0";
    }

    var f = Math.round(x * 100) / 100;

    var s = f.toString();

    var rs = s.indexOf(".");

    if (rs < 0) {
      rs = s.length;

      s += ".";
    }

    while (s.length <= rs + 2) {
      s += "0";
    }

    return s;
  },

  fomatFloat(src: number, pos: number) {
    return Math.round(src * Math.pow(10, pos)) / Math.pow(10, pos);
  },
  //十进制转换16进制
  devtoHex(n: number) {
    var str = "";
    if (n === 0) {
      return "0";
    }
    while (n !== 0) {
      str = this.getHexStrring(n % 16) + str;
      let t = n / 16 + "";
      n = parseInt(t, 10);
    }
    return str;
  },
  getHexStrring(num: number) {
    switch (num) {
      case 10:
        return "A";
      case 11:
        return "B";
      case 12:
        return "C";
      case 13:
        return "D";
      case 14:
        return "E";
      case 15:
        return "F";
      default:
        return num;
    }
  },
  // /* 随机数范围 e表示长度，默认32位 */
  // randomString(e?: string | number) {
  //   let num = this.isTrue(e) ? e : 32;
  //   var t = "abcdefhijkmnprstwxyz0123456789";
  //   let a = t.length;
  //   let n = "";
  //   for (var i = 0; i < parseInt(num + "" ?? "10", 10); i++) {
  //     n += t.charAt(Math.floor(Math.random() * a));
  //   }
  //   return n;
  // },

  /*
      trace_id 由以连字符分隔的三组数字组成。例如：1-58406520-a006649127e371903a2de979。这包括：
    
        版本号，即 1。
    
        原始请求的时间，采用 Unix 纪元时间，为 8 个十六进制数字。
        例如，2016 年 12 月 1 日上午 10:00 (太平洋标准时间) 采用纪元时间为 1480615200，或者是十六进制数字 58406520。
    
        跟踪的 96 位标识符，全局唯一，字。使用24个十六进制数
      */
  getTraceId() {
    let versioValue = "1";
    // 生成Unix时间
    let time = Math.floor(Date.now() / 1000);
    // 转化层16进制
    let timeValue = time.toString(16);
    // 随机生成24位
    let randomValue = this.randomString("24");
    return "Root=" + versioValue + "-" + timeValue + "-" + randomValue;
  },
  getRandomId() {
    // 生成Unix时间
    let time = Math.floor(Date.now() / 1000);
    // 转化层16进制
    let timeValue = time.toString(16);
    return timeValue;
  },
  uniqueFunc(arr: [], uniId: string) {
    const resobj = new Map();
    return arr.filter(
      (obj) => !resobj.has(obj[uniId]) && resobj.set(obj[uniId], 1)
    );
  },
  createUUID(baseString?: string): string {
    return (baseString || "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx").replace(
      /[xy]/g,
      function (c: string): string {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  },
  replaceAll(text: string, search: string, replace: string) {
    return text.split(search).join(replace);
  },
};

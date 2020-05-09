
//游戏方法调用类，这里存放游戏中逻辑调用方法
class _gameLib {
    // 复制判断
    private deviceGuid = "deviceGuid";

    public constructor() {
    }

    // 获取当前操作系统名称
    public getOSString(): string {
        if (cc.sys.isBrowser) {
            switch (cc.sys.os) {
                case cc.sys.OS_LINUX:
                    // cc.log("LINUX");
                    return "LINUX";
                case cc.sys.OS_OSX:
                    // cc.log("MAC");
                    return "MAC";
                case cc.sys.OS_UNKNOWN:
                    // cc.log("UNKNOWN");
                    return "UNKNOWN";
                case cc.sys.OS_WINDOWS:
                    // cc.log("ANDROID");
                    return "ANDROID";
                case cc.sys.OS_ANDROID:
                    // cc.log("ANDROID");
                    return "ANDROID";
                case cc.sys.OS_IOS:
                    // cc.log("IOS");
                    return "IOS";
                default:
                    // cc.log("其他1")
                    return "其他1";
            }
        } else {
            // cc.log("其他2")
            return "其他2";
        }
    }

    //int数据组合，将数据以位的方式处理。int是数据，bit是位大小
    public creatrBitInt(int, num, bit, index): number[] {
        let toint = int;
        toint += num << index;
        index += bit;
        return [toint, index];
    }

    // 旋转坐标点
    // x,y ：要被旋转的坐标
    // rx0,ry0 ：中心点坐标
    // a ：角度
    public rotatePos(x: number, y: number, rx0: number, ry0: number, a: number): { x: number, y: number } {
        let x0 = (x - rx0) * Math.cos(a) - (y - ry0) * Math.sin(a) + rx0;
        let y0 = (x - rx0) * Math.sin(a) + (y - ry0) * Math.cos(a) + ry0;
        return { x: x0, y: y0 };
    }

    // 获取一个随机数
    public GetRandomNum(Min: number, Max: number): number {
        let Range = Max - Min;
        let Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    }

    // 删除数组元素
    public removeArrayElement(array: any[], element: any): boolean {
        if (array && array.length && element) {
            for (let i = 0; i < array.length; ++i) {
                if (array[i] == element) {
                    array.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }

    // 根据经纬度计算距离
    public getDisance(lat1, lng1, lat2, lng2): number { //lat为纬度, lng为经度, 一定不要弄错
        const toRad = (d) => {
            return d * Math.PI / 180;
        }
        var dis = 0;
        var radLat1 = toRad(lat1);
        var radLat2 = toRad(lat2);
        var deltaLat = radLat1 - radLat2;
        var deltaLng = toRad(lng1) - toRad(lng2);
        var dis = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(deltaLat / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(deltaLng / 2), 2)));
        return Math.floor(dis * 6378137 * 100) / 100;
    }

    // rgb 转 16进制颜色值
    public rgb2hex(r: number, g: number, b: number): number {
        return (0 << 24) + (r << 16) + (g << 8) + b;
    }

    public getTime(time: number) {
        //计算出小时数
        // var leave1=time%(24*3600*1000) //计算天数后剩余的毫秒数
        var hours = Math.floor(time / (3600 * 1000))
        //计算相差分钟数
        var leave2 = time % (3600 * 1000)        //计算小时数后剩余的毫秒数
        var minutes = Math.floor(leave2 / (60 * 1000))
        //计算相差秒数
        var leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
        var seconds = Math.round(leave3 / 1000)
        return hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    }

    // 计算当前时间与另一个时间之间的比较值，返回一个字符串例如：5天前
    public getMidDate(time: number) {
        let date = new Date();
        let now = date.getTime();
        let mid = now - time;
        let str: string = "秒";
        if (mid / (1000 * 60 * 60 * 24 * 30 * 12) >= 1) {
            mid = Math.floor(mid / (1000 * 60 * 60 * 24 * 30 * 12));
            str = "年";
        } else if (mid / (1000 * 60 * 60 * 24 * 30) >= 1) {
            mid = Math.floor(mid / (1000 * 60 * 60 * 24 * 30));
            str = "月";
        } else if (mid / (1000 * 60 * 60 * 24) >= 1) {
            mid = Math.floor(mid / (1000 * 60 * 60 * 24));
            str = "日";
        } else if (mid / (1000 * 60 * 60) >= 1) {
            mid = Math.floor(mid / (1000 * 60 * 60));
            str = "小时";
        } else if (mid / (1000 * 60) >= 1) {
            mid = Math.floor(mid / (1000 * 60));
            str = "分钟";
        } else if (mid / 1000 >= 1) {
            mid = Math.floor(mid / (1000));
            str = "秒";
        }

        if (mid > 0) {// 前
            return Math.abs(mid) + str + "前";
        } else {// 后
            return 0 + str + "前";
        }
    }

    // 根据输入的时间（秒）转换为具体的时间，例如500天3小時2分
    public getDHMBySecond(second: number = null): string {
        let str: string = "";
        str += this.getDayBySecond(second, true);
        str += this.getHourBySecond(null, true);
        str += this.getMinutesBySecond(null, true);
        return str;
    }

    // 根据输入的时间（秒）转换为具体的时间，例如5年
    protected _timeTemp: number = 0;
    public getYearBySecond(second: number = null): string {
        let splitTime: number = 0;
        if (second != null) {
            this._timeTemp = second;
        }
        let str: string = "";
        if (this._timeTemp / (60 * 60 * 24 * 30 * 12) >= 1) {
            splitTime = Math.floor(this._timeTemp / (60 * 60 * 24 * 30 * 12));
            str += splitTime + "年";
            this._timeTemp -= splitTime * (60 * 60 * 24 * 30 * 12);
        }
        return str;
    }

    // 根据输入的时间（秒）转换为具体的时间，例如5年2个月
    public getMonthBySecond(second: number = null, only: boolean = false): string {
        let splitTime: number = 0;
        if (second != null) {
            this._timeTemp = second;
        }
        let str: string = "";
        if (!only) {
            str += this.getYearBySecond();
        }
        if (this._timeTemp / (60 * 60 * 24 * 30) >= 1) {
            splitTime = Math.floor(this._timeTemp / (60 * 60 * 24 * 30));
            str += splitTime + "月";
            this._timeTemp -= splitTime * (60 * 60 * 24 * 30);
        }
        return str;
    }

    // 根据输入的时间（秒）转换为具体的时间，例如5年2个月17天
    public getDayBySecond(second: number = null, only: boolean = false): string {
        let splitTime: number = 0;
        if (second != null) {
            this._timeTemp = second;
        }
        let str: string = "";
        if (!only) {
            str += this.getMonthBySecond();
        }
        if (this._timeTemp / (60 * 60 * 24) >= 1) {
            splitTime = Math.floor(this._timeTemp / (60 * 60 * 24));
            str += splitTime + "天";
            this._timeTemp -= splitTime * (60 * 60 * 24);
        }
        return str;
    }

    // 根据输入的时间（秒）转换为具体的时间，例如5年2个月17天10小时
    public getHourBySecond(second: number = null, only: boolean = false): string {
        let splitTime: number = 0;
        if (second != null) {
            this._timeTemp = second;
        }
        let str: string = "";
        if (!only) {
            str += this.getDayBySecond();
        }
        if (this._timeTemp / (60 * 60) >= 1) {
            splitTime = Math.floor(this._timeTemp / (60 * 60));
            str += splitTime + "小時";
            this._timeTemp -= splitTime * (60 * 60);
        }
        return str;
    }

    // 根据输入的时间（秒）转换为具体的时间，例如5年2个月17天10小时30分钟
    public getMinutesBySecond(second: number = null, only: boolean = false): string {
        let splitTime: number = 0;
        if (second != null) {
            this._timeTemp = second;
        }
        let str: string = "";
        if (!only) {
            str += this.getHourBySecond();
        }
        if (this._timeTemp / 60 >= 1) {
            splitTime = Math.floor(this._timeTemp / 60);
            str += splitTime + "分";
            this._timeTemp -= splitTime * 60;
        }
        return str;
    }

    // 根据输入的时间（秒）转换为具体的时间，例如5年2个月17天10小时30分钟20秒
    public getDateBySecond(second: number = null, only: boolean = false): string {
        let splitTime: number = 0;
        if (second != null) {
            this._timeTemp = second;
        }
        let str: string = "";
        if (!only) {
            str += this.getMinutesBySecond();
        }
        if (this._timeTemp >= 1) {
            str += this._timeTemp + "秒";
        }
        return str;
    }

    // 根据阿拉伯数字转化为中文汉字 (目前支持百以下)
    public getWordByNum(changeNum: number): string {
        let str = "";
        let wordArr = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
        if (Math.floor(changeNum / 100) == 0) {
            let decade = Math.floor(changeNum / 10);
            let unit = changeNum % 10;
            if (decade == 0) {
                str = wordArr[unit];
            } else if (decade == 1) {
                str = "十" + wordArr[unit];
            } else {
                str = wordArr[decade] + "十" + wordArr[unit];
            }
        }
        return str;
    }

    // 限制字符串长度，多余的用。。。表示
    public stringLimit(name: string, limit: number = 6) {
        if (!name || !name.length) {
            return;
        }
        let sum = 0;
        let num = 0;
        for (let i = 0; i < name.length; i++) {
            let a = name.charCodeAt(i);
            if (a >= 0 && a <= 128) {
                sum += 1;
                if (num < limit) {
                    num += 1;
                }

            } else {
                sum += 2;
                if (num < limit) {
                    num += 2;
                }
            }
        }
        if (sum > limit * 2 + 1) {
            return name.substr(0, num) + "...";
        }
        return name;
    }

    // 生成全局唯一ID
    public generateGUID() {
        let d = new Date().getTime();
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };

    // 转大写去空格
    public toUpperCaseRemoveSpace(str: string) {
        if (!str) {
            return null;
        }
        let ret = str.replace(" ", "");
        ret = ret.toUpperCase();
        return ret;
    }

    // 判断大数组是否包含小数组
    public isSAInBA(smallArray: number[], bigArray: number[]): boolean {
        if (!smallArray || !bigArray || !smallArray.length || !bigArray.length) {
            return false;
        }
        for (let v of smallArray) {
            let have = false;
            for (let w of bigArray) {
                if (v == w) {
                    have = true;
                    break;
                }
            }
            if (have == false) {
                return false;
            }
        }
        return true;
    }

    /*
        数字转中文
        @number {Integer} 形如123的数字
        @return {String} 返回转换成的形如 一百二十三 的字符串            
    */
    public numberToChinese(number: number): string {
        // 单位
        let units = '个十百千万@#%亿^&~';
        // 字符
        let chars = '零一二三四五六七八九';

        let a = (number + '').split(''), s = [];
        if (a.length > 12) {
            throw new Error('too big');
        } else {
            for (var i = 0, j = a.length - 1; i <= j; i++) {
                if (j == 1 || j == 5 || j == 9) {//两位数 处理特殊的 1*
                    if (i == 0) {
                        if (a[i] != '1') s.push(chars.charAt(Number(a[i])));
                    } else {
                        s.push(chars.charAt(Number(a[i])));
                    }
                } else {
                    s.push(chars.charAt(Number(a[i])));
                }
                if (i != j) {
                    s.push(units.charAt(j - i));
                }
            }
        }
        //return s;
        return s.join('').replace(/零([十百千万亿@#%^&~])/g, function (m, d, b) {//优先处理 零百 零千 等
            b = units.indexOf(d);
            if (b != -1) {
                if (d == '亿') return d;
                if (d == '万') return d;
                if (a[j - b] == '0') return '零'
            }
            return '';
        }).replace(/零+/g, '零').replace(/零([万亿])/g, function (m, b) {// 零百 零千处理后 可能出现 零零相连的 再处理结尾为零的
            return b;
        }).replace(/亿[万千百]/g, '亿').replace(/[零]$/, '').replace(/[@#%^&~]/g, function (m) {
            return { '@': '十', '#': '百', '%': '千', '^': '十', '&': '百', '~': '千' }[m];
        }).replace(/([亿万])([一-九])/g, function (m, d, b, c) {
            c = units.indexOf(d);
            if (c != -1) {
                if (a[j - c] == '0') return d + '零' + b
            }
            return m;
        });
    }

    /*
        查找數組元素所有的組合（不包含順序）
        @num {number} 組合的個數
        @array {any[]} 任意數組
    */
    public findComboByArray(num: number, array: any[]): number[][] {
        // 保護
        if (!num || !array || num >= array.length) {
            return [];
        }
        let ret: number[][] = []; // 結果
        let indexArray: number[] = [];
        for (let i = 0; i < num; ++i) {
            indexArray.push(i);
        }
        // 開始查找
        let find = (retArray: number[][]) => {
            if (!retArray) {
                return;
            }
            let arrayTemp: number[] = [];
            for (let v of indexArray) {
                arrayTemp.push(array[v]);
            }
            retArray.push(arrayTemp);

            // 數組依次進位
            let carry = (indexArray: number[], array: any[], index: number = null) => {
                let lastIndex = indexArray.length - 1;
                index != null ? index : index = lastIndex;
                // 判斷最後一位是否觸底
                if (indexArray[lastIndex] >= array.length) {
                    if (index <= 0) {
                        // 如果不能進位
                        return false;
                    } else {
                        // 進位
                        ++indexArray[index - 1];
                        for (let i = index; i < indexArray.length; ++i) {
                            indexArray[i] = indexArray[i - 1] + 1;
                        }
                        return carry(indexArray, array, index - 1);
                    }
                }
                return true;
            }
            ++indexArray[indexArray.length - 1];
            if (carry(indexArray, array)) {
                find(retArray);
            }
        }
        find(ret);
        return ret;
    }

    public convertToSpacePos(tar: cc.Node, src: cc.Node): cc.Vec2 {
        let worldPos = tar.parent.convertToWorldSpaceAR(new cc.Vec2(tar.position.x, tar.position.y));
        return src.parent.convertToNodeSpaceAR(worldPos);
    }

    //处理金额格式化
    public getChineseLabel2(num: number): string {
        try {
            let isF = "";
            if (num < 0) {
                isF = "-";
                num = Math.abs(num);
            }

            return isF + this.number_format(num, 2, ".", ",", "floor").toString();
            // if (num >= 1000000 * 10) {
            //     return isF + Math.floor(num / 10000) / 100 + "M";
            // } else {
            //     return isF + number_format(num, 2, ".", ",", "floor").toString();
            // }
        } catch (e) {
            cc.log("转换数字错误：" + e);
        }
        return;
    }

    // 格式化数字（每三位，隔开）
    public number_format(number, decimals, dec_point, thousands_sep, roundtag) {
        number = (number + '').replace(/[^0-9+-Ee.]/g, '');
        roundtag = roundtag || "ceil"; //"ceil","floor","round"
        var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            s = [],
            toFixedFix = function (n, prec) {

                var k = Math.pow(10, prec);

                return '' + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)) / k;
            };
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        var re = /(-?\d+)(\d{3})/;
        while (re.test(s[0])) {
            s[0] = s[0].replace(re, "$1" + sep + "$2");
        }

        var num = 0;
        if ((s[1] || '').length < prec && (s[1] || '').length != 0) {
            s[1] = s[1] || '';
            num++;
            s[1] += new Array(prec - s[1].length + 1).join('0');
        } else {
            if ((s[1] || '').length >= prec) {
                num++;
            }
        }

        if (num) {
            return s.join(dec)
        } else {
            return s;
        }
    }

    /**
     * 搜索数组中对应元素的索引值并返回
     */
    public isHasElementOne(arr, value) {
        for (var i = 0, vlen = arr.length; i < vlen; i++) {
            if (arr[i] == value) {
                return i;
            }
        }
    }

    /**
     * 判断json
     * @param obj json对像
    */
    public isJSON(obj: Object): boolean {
        try {
            let str = JSON.stringify(obj);
            if (str.indexOf('{') > -1) {
                return true;
            } else {
                return false;
            }

        } catch (e) {
            cc.log(e);
            return false;
        }
    }


    // base64的字符串与二进制数组的直接转换方法
    public byteArrayToBase64(array) {
        var base64hash = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        // if (/([^\u0000-\u00ff])/.test(s)) {
        //     throw new Error('INVALID_CHARACTER_ERR');
        // }    
        var i = 0,
            prev,
            ascii,
            mod,
            result = [];


        while (i < array.length) {
            ascii = array[i];
            mod = i % 3;


            switch (mod) {
                // 第一个6位只需要让8位二进制右移两位
                case 0:
                    result.push(base64hash.charAt(ascii >> 2));
                    break;
                //第二个6位 = 第一个8位的后两位 + 第二个8位的前4位
                case 1:
                    result.push(base64hash.charAt((prev & 3) << 4 | (ascii >> 4)));
                    break;
                //第三个6位 = 第二个8位的后4位 + 第三个8位的前2位
                //第4个6位 = 第三个8位的后6位
                case 2:
                    result.push(base64hash.charAt((prev & 0x0f) << 2 | (ascii >> 6)));
                    result.push(base64hash.charAt(ascii & 0x3f));
                    break;
            }


            prev = ascii;
            i++;
        }


        // 循环结束后看mod, 为0 证明需补3个6位，第一个为最后一个8位的最后两位后面补4个0。另外两个6位对应的是异常的“=”；
        // mod为1，证明还需补两个6位，一个是最后一个8位的后4位补两个0，另一个对应异常的“=”
        if (mod == 0) {
            result.push(base64hash.charAt((prev & 3) << 4));
            result.push('==');
        } else if (mod == 1) {
            result.push(base64hash.charAt((prev & 0x0f) << 2));
            result.push('=');
        }


        return result.join('');
    }

    public base64ToByteArray(s) {
        var base64hash = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        s = s.replace(/\s|=/g, '');
        var cur,
            prev,
            mod,
            i = 0,
            result = [];


        while (i < s.length) {
            cur = base64hash.indexOf(s.charAt(i));
            mod = i % 4;


            switch (mod) {
                case 0:
                    //TODO
                    break;
                case 1:
                    result.push((prev << 2 | cur >> 4));
                    break;
                case 2:
                    result.push(((prev & 0x0f) << 4 | cur >> 2));
                    break;
                case 3:
                    result.push(((prev & 3) << 6 | cur));
                    break;

            }


            prev = cur;
            i++;
        }


        return result;
    }

    //得到url参数
    public getUrlParams(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); //定义正则表达式 
        var r = window.location.search.substr(1).match(reg);
        // if (r != null) return unescape(r[2]);
        if (r != null) return decodeURI(r[2]);
        return null;
    }

    public CryptoJS_stringify(wordArray) {
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var u8 = new Int8Array(sigBytes);
        for (var i = 0; i < sigBytes; i++) {
            var byte = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
            u8[i] = byte;
        }
        return u8;
    }

    // json转换Uint8Array
    public json2Int8Array(json: any) {
        let str = JSON.stringify(json);
        let byte = this.stringToByte(str);
        let u8 = new Int8Array(byte);
        return u8;
    }

    public Int8Array2Json(u8arr: Int8Array) {
        let str = this.byteToString(u8arr);
        let json = JSON.parse(str);
        return json;
    }

    public stringToByte(str) {
        var bytes = new Array();
        var len, c;
        len = str.length;
        for (var i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if (c >= 0x010000 && c <= 0x10FFFF) {
                bytes.push(((c >> 18) & 0x07) | 0xF0);
                bytes.push(((c >> 12) & 0x3F) | 0x80);
                bytes.push(((c >> 6) & 0x3F) | 0x80);
                bytes.push((c & 0x3F) | 0x80);
            } else if (c >= 0x000800 && c <= 0x00FFFF) {
                bytes.push(((c >> 12) & 0x0F) | 0xE0);
                bytes.push(((c >> 6) & 0x3F) | 0x80);
                bytes.push((c & 0x3F) | 0x80);
            } else if (c >= 0x000080 && c <= 0x0007FF) {
                bytes.push(((c >> 6) & 0x1F) | 0xC0);
                bytes.push((c & 0x3F) | 0x80);
            } else {
                bytes.push(c & 0xFF);
            }
        }
        return bytes;


    }


    public byteToString(arr) {
        if (typeof arr === 'string') {
            return arr;
        }
        var str = '',
            _arr = arr;
        for (var i = 0; i < _arr.length; i++) {
            var one = _arr[i].toString(2),
                v = one.match(/^1+?(?=0)/);
            if (v && one.length == 8) {
                var bytesLength = v[0].length;
                var store = _arr[i].toString(2).slice(7 - bytesLength);
                for (var st = 1; st < bytesLength; st++) {
                    store += _arr[st + i].toString(2).slice(2);
                }
                str += String.fromCharCode(parseInt(store, 2));
                i += bytesLength - 1;
            } else {
                str += String.fromCharCode(_arr[i]);
            }
        }
        return str;
    }

    public getChineseLabel(num): string {
        try {
            let isF = "";
            if (num < 0) {
                isF = "-";
                num = Math.abs(num);
            }

            if (num > 1000000000000) {
                return isF + Math.floor(num / 1000000) / 100 + "兆";
            } else if (num > 100000000) {
                return isF + Math.floor(num / 1000000) / 100 + "亿";
            } else if (num > 10000) {
                return isF + Math.floor(num / 100) / 100 + "万";
            } else {
                return isF + num.toString();
            }
        } catch (e) {
            cc.log("转换数字错误：" + e);
        }
    }

    // 加权随机数，百度抄的，第一个参数是权值表，类型数组，不传返回0。第二个参数是随机数，大小在权值表范围内，否则返回0
    public getWeightedRandomAtom(atomList: Array<number>, random) {
        if (atomList.length <= 0) {
            return 0;
        }
        let weightSum = 0;//总权值  
        for (let atom of atomList) {
            weightSum += atom;
        }
        //获取总权值之间任意一随机数  
        // let random = Math.random();  //random in [0, weightSum)   
        //{.},{..},{...},{....}...根据权值概率区间，获得加权随机对象  
        for (let atom of atomList) {
            random -= atom;
            if (random < 0) {
                return atom;
            }
        }
        return 0;
    }

    // 打印js对象
    public writeObj(obj) {
        let overObj = {};
        try {
            let fun = function (json, kongnum = 0) {
                let str = "";

                let k = "";
                for (let i = 0; i < kongnum; i++) {
                    k += " ";
                }

                for (let i in json) {
                    if (overObj[i]) {
                        continue;
                    }
                    overObj[i] = true;
                    let property = json[i];
                    if (typeof (property) === "object") {
                        if (Array.isArray(property) && typeof (property[0]) != "object") {
                            str += k + i + " = [ ";
                            for (let i of property) {
                                str += i + ", ";
                            }
                            str += " ]\n";
                        } else {
                            str += k + i + " = [ \n" + fun(property, kongnum + 4) + k + "]\n";
                        }

                    } else {
                        str += k + "\"" + i + "\" = " + property + "\n";
                    }
                }
                return str;
            };

            let description = fun(obj);;

            cc.log("打印出对象，内容为 ：\n" + description);
        } catch (e) {
            cc.log("打印出错：" + e);
        }



    }
    /**
     * IP转成整型
     */
    public ip2Int(pip: string) {
        var num = 0;
        let nip = pip.split(".");
        num = Number(nip[0]) * 256 * 256 * 256 + Number(nip[1]) * 256 * 256 + Number(nip[2]) * 256 + Number(nip[3]);
        num = num >>> 0;
        return num;
    }
    // 初始化成员数组
    public initClassMemberArray(array: any[], memberName: string, obj: cc.Node) {
        for (let i = 0; true; ++i) {
            let v = obj[memberName + i];
            if (v) {
                array.push(v);
            } else {
                break;
            }
        }
    }
    // 保存字符串内容到文件。
    // 效果相当于从浏览器下载了一个文件到本地。
    // textToWrite - 要保存的文件内容
    // fileNameToSaveAs - 要保存的文件名
    protected downloadLink: HTMLAnchorElement;
    public saveForBrowser(textToWrite, fileNameToSaveAs) {
        let textFileAsBlob = new Blob([textToWrite], { type: 'application/json' });
        if (!this.downloadLink) {
            this.downloadLink = document.createElement("a");
        }
        this.downloadLink.download = fileNameToSaveAs;
        this.downloadLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            // Chrome allows the link to be clicked
            // without actually adding it to the DOM.
            this.downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        }
        else {
            // Firefox requires the link to be added to the DOM
            // before it can be clicked.
            this.downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            // downloadLink.onclick = destroyClickedElement;
            this.downloadLink.style.display = "none";
            document.body.appendChild(this.downloadLink);
        }
        this.downloadLink.click();
    }

    /**
     * 获取某年某月有多少天
     * month
    */
    public getDayCountForMonth = function (year, month) {
        let runYear = false;
        if (year % 4 == 0) {//判读是否为闰年
            runYear = true;
        }
        if (month == 2) {//2月
            if (runYear) {
                return 29;
            } else {
                return 28;
            }
        } else if (month <= 7) {//上半年
            if (month % 2 == 0) {
                //30
                return 30;
            } else {
                //31
                return 31;
            }
        } else {//下半年
            if (month % 2 == 0) {
                //31
                return 31;
            } else {
                //30
                return 30;
            }
        }
    }

    protected elementSelectPhoto: HTMLInputElement;
    /**
     * 选择本地图片
    */
    chooseLocalPhoto(callback: (base64: string | ArrayBuffer | null) => void) {
        if (!callback) {
            return;
        }
        //判断是否选择了图片
        if (!this.elementSelectPhoto) {
            this.elementSelectPhoto = document.createElement("input");
            this.elementSelectPhoto.accept = "image/jpeg,image/jpg,image/png";
            this.elementSelectPhoto.type = "file";
        }
        this.elementSelectPhoto.onchange = () => {
            if (this.elementSelectPhoto.files && this.elementSelectPhoto.files[0]) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    //此处得到是图片的base64编码数据
                    let imagUrl = e.target.result;
                    callback(imagUrl);
                };
                reader.readAsDataURL(this.elementSelectPhoto.files[0]);
            }
        }
        this.elementSelectPhoto.click();
    }

    /**
     * base64转spriteFrame
     * @param onLoaded 纹理加载完成的回调（不加载完成，没有大小）
    */
    getSpriteFrameByBase64(base64: string, onLoaded: (sf: cc.SpriteFrame) => void = null): cc.SpriteFrame {
        if (!base64 || !base64.length) {
            return null;
        }
        let img = new Image();
        img.src = base64;
        let texture = new cc.Texture2D();
        texture.initWithElement(img);
        texture.handleLoadedTexture();
        let sf = new cc.SpriteFrame(texture);
        if (onLoaded) {
            if (!sf.textureLoaded()) {
                sf.once("load", () => {
                    onLoaded(sf);
                });
            } else {
                onLoaded(sf);
            }
        }
        return sf;
    }

    //除以100后，保留两位小数
    public getFixedNumString = function (preNum: any) {
        preNum = Number(preNum) / 10000;
        return this.getToFixedNumString(preNum);
    }

    //保留两位小数
    public getToFixedNumString = function (preNum: any) {
        let strNum = String(preNum);
        if (strNum.indexOf(".") == -1) {
            return strNum + ".00";
        } else {
            let splitStrs = strNum.split(".");
            if (splitStrs[1].length >= 2) {
                return splitStrs[0] + "." + splitStrs[1].substring(0, 2);
            } else {
                return splitStrs[0] + "." + splitStrs[1] + 0;
            }
        }
    }

    /**
    * 对日期进行格式化， 和C#大致一致 默认yyyy-MM-dd HH:mm:ss
    * 可不带参数 一个日期参数 或一个格式化参数
    * @param date 要格式化的日期
    * @param format 进行格式化的模式字符串
    *     支持的模式字母有：
    *     y:年,
    *     M:年中的月份(1-12),
    *     d:月份中的天(1-31),
    *     H:小时(0-23),
    *     h:小时(0-11),
    *     m:分(0-59),
    *     s:秒(0-59),
    *     f:毫秒(0-999),
    *     q:季度(1-4)
    * @return String
    * @author adswads@gmail.com
    */
    public formatDate = function (date?: any, format?: string): string {
        //无参数
        if (date == undefined && format == undefined) {
            date = new Date();
            format = "yyyy-MM-dd HH:mm:ss";
        }
        //无日期
        else if (typeof (date) == "string") {
            format = date;
            date = new Date();
        }
        //无格式化参数
        else if (format === undefined) {
            format = "yyyy-MM-dd HH:mm:ss";
        }
        else { }
        //没有分隔符的特殊处理
        var map = {
            "y": date.getFullYear() + "",//年份
            "M": date.getMonth() + 1 + "", //月份
            "d": date.getDate() + "", //日
            "H": date.getHours(), //小时 24
            "m": date.getMinutes() + "", //分
            "s": date.getSeconds() + "", //秒
            "q": Math.floor((date.getMonth() + 3) / 3) + "", //季度
            "f": date.getMilliseconds() + "" //毫秒
        };
        //小时 12
        if (map["H"] > 12) { map["h"] = map["H"] - 12 + ""; }
        else { map["h"] = map["H"] + ""; }
        map["H"] += "";
        var reg = "yMdHhmsqf";
        var all = "", str = "";
        for (var i = 0, n = 0; i < reg.length; i++) {
            n = format.indexOf(reg[i]);
            if (n < 0) { continue; }
            all = "";
            for (; n < format.length; n++) {
                if (format[n] != reg[i]) {
                    break;
                }
                all += reg[i];
            }
            if (all.length > 0) {
                if (all.length == map[reg[i]].length) {
                    str = map[reg[i]];
                }
                else if (all.length > map[reg[i]].length) {
                    if (reg[i] == "f") {
                        str = map[reg[i]] + this.charString("0", all.length - map[reg[i]].length);
                    }
                    else {
                        str = this.charString("0", all.length - map[reg[i]].length) + map[reg[i]];
                    }
                }
                else {
                    switch (reg[i]) {
                        case "y": str = map[reg[i]].substr(map[reg[i]].length - all.length); break;
                        case "f": str = map[reg[i]].substr(0, all.length); break;
                        default: str = map[reg[i]]; break;
                    }
                }
                format = format.replace(all, str);
            }
        }
        return format;
    }

    /**
        * 返回字符串 为n个char构成
        * @param char 重复的字符
        * @param count 次数
        * @return String
        * @author adswads@gmail.com
        */
    public charString = function (char: string, count: number): string {
        var str: string = "";
        while (count--) {
            str += char;
        }
        return str;
    }
    /**
     * 获取网络URL图片
     * @param url url地址
     * @param onLoaded 纹理加载完成的回调（加载失败返回null）
     */
    public getUrlImage = function (url: string, onLoaded: (img: cc.Texture2D) => void = null) {
        if (!url || url == "") {
            return null;
        }
        cc.loader.load({ url: url, type: "png" }, (err, img: cc.Texture2D) => {
            if (onLoaded) {
                if (err) {
                    cc.error(err);
                    onLoaded(null);
                } else {
                    onLoaded(img);
                }
            }
        });
    }
}

export var gameLib = new _gameLib();
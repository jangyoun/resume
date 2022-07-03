import Moment from 'moment';

export class Util {
   
    static isMobile(): boolean {
        return /Mobi|Android/i.test(navigator.userAgent);
    }
    static isNotMobile(): boolean {
        return !/Mobi|Android/i.test(navigator.userAgent);
    }
    static date(timeStamp: string, to: string = 'MM-DD HH:mm', from: string = "YYYY-MM-DD'T'HH:mm:ss.SSS"): string {
        return Moment(timeStamp, from).format(to);
    }
}

export class Date {
    static getHour(datetime: string) {
        const reg = /(\d+)(T)(\d{2})(\d{2})(.+)/g;
        const toto = reg.exec(datetime) as any;
        return `${toto[3]}:${toto[4]}`;
    }
}

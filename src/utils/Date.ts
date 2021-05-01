import dayjs from "dayjs";

export class Date {
    static getHour(datetime: string) {
        return dayjs(datetime).format("HH:mm");
    }
}

export default class utils {

    //Dakikayı -> 1sa 30dk, 12sa 3dk, 5dk gibi formata dönüştürür.
    static minutesToHours = (minutes) => {
        var hours = Math.floor(minutes / 60);
        var remainingMinutes = minutes % 60;

        var minutesStr = "";

        let result = "";
        if (hours > 0) {
            result += (hours.toString() + "sa ")
        }

        if (remainingMinutes > 0) {
            result += remainingMinutes < 10 ? ("" + remainingMinutes) : remainingMinutes.toString();
            result += "dk";
        }

        return result;
    }

    //Dakikayı hh:mm formatına dönüştürür
    static convertMinutesToTimeFormat = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;

        const hoursStr = String(hours).padStart(2, '0');
        const minutesStr = String(remainingMinutes).padStart(2, '0');

        return `${hoursStr}:${minutesStr}`;
    }

}
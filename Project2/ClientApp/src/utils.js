export default class utils {
    static minutestToHours = (minutes) => {
        var hours = Math.floor(minutes / 60);
        var remainingMinutes = minutes % 60;

        var minutesStr = "";

        let result = "";
        if (hours > 0) {
            result += (hours.toString() + "sa ")
        }

        if (remainingMinutes > 0) {
            result += remainingMinutes < 10 ? ("0" + remainingMinutes) : remainingMinutes.toString();
            result += "dk";
        }

        return result;
    }
    
}
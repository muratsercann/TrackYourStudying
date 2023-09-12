export default class utils {
    static minutestToHours = (minutes) => {
        var hours = Math.floor(minutes / 60);
        var remainingMinutes = minutes % 60;

        var hoursStr = hours < 10 ? "" + hours : hours.toString();
        var minutesStr = remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes.toString();

        let str = "";
        if (hours > 0) {
            str += (hoursStr + "sa ")
        }

        str += minutesStr + "dk";
        return str;
    }
    
}
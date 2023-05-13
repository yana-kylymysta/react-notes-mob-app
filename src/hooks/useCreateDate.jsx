
const useCreateDate = () => {
    const dateObj = new Date();
    const month = dateObj.getMonth();
    let monthName;
    switch(month){
        case 0: monthName = "Jan";
        break;
        case 1: monthName = "Feb";
        break;
        case 2: monthName = "Mar";
        break;
        case 3: monthName = "Apr";
        break;
        case 4: monthName = "May";
        break;
        case 5: monthName = "Jun";
        break;
        case 6: monthName = "Jul";
        break;
        case 7: monthName = "Aug";
        break;
        case 8: monthName = "Sep";
        break;
        case 9: monthName = "Oct";
        break;
        case 10: monthName = "Nov";
        break;
        case 11: monthName = "Dec";
        break;
    }

    const formatDate = (num) => {
       const item = num.toString().padStart(2, '0');
       return item
    }

    const date = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()} [${formatDate(dateObj.getHours())}:${formatDate(dateObj.getMinutes())}]`;
    return date;
}

export default useCreateDate;
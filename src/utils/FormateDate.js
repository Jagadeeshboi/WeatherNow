const FormateDate = (inputDate) => {
    const dateObj = new Date(inputDate);
    
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const day = days[dateObj.getDay()];
    const date = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    
    const formattedDate = `${day}, ${date} ${month}`;
    
    return formattedDate;
    
}

export default FormateDate

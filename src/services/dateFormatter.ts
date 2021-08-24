/**
  * Function to change unix to human readable date format
  * Returns in format DD MMM YYYY HH:MM
*/

const formatUnixTime = (unix_timestamp: number) => {
  
    var a = new Date(Number(unix_timestamp));
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return a.getDate() + ' ' + months[a.getMonth()] + ' ' + a.getFullYear() + ' ' + a.getHours() + ':' + (a.getMinutes().toString().length === 1 ? '0' + a.getMinutes() : a.getMinutes());
    
  };
  
  export default formatUnixTime;
  
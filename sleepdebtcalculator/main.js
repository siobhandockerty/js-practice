///how much sleep user got each day this week - change these to see different answers to the sleep debt etc
const getSleepHours = day => {
  switch(day){
    case 'Monday':
      return 8;
    case 'Tuesday':
      return 7;
    case 'Wednesday':
      return 6;
    case 'Thursday':
      return 9;
    case 'Friday':
      return 6;
    case 'Saturday':
      return 6;
    case 'Sunday':
      return 8;
  }
};

//total sleep hours for week is
const getActualSleepHours = () =>{
  return getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');
}

//times by 7 to calculate for whole week
const getIdealSleepHours = () =>{
  let idealHours = 8;
  return idealHours*7;
}

//calculate sleep debt
const calculateSleepDebt = () =>{
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  
//output answers to terminal, responses depending on the hours of sleep achieved vs ideal sleep hours
  if (actualSleepHours === idealSleepHours) {
    console.log('You have got ' + actualSleepHours + ' hours of sleep this week, you go Glen Coco.');
  }
 if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than you needed this week. You lazy turnip.');
  }
  if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Get some rest. Eef is not happy.');
}
}

//go go go
calculateSleepDebt();

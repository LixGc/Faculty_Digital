const isToday = (date) => {
  const currentDate = new Date();
  return date.getDate() === currentDate.getDate() && date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear();
};
// Helper function to check if a date is within the last 7 days
function isWithinLast7Days() {
  var currentDate = new Date();

  // Subtract 7 days to get the last 7 days
  var sevenDaysAgo = new Date(currentDate);
  sevenDaysAgo.setDate(currentDate.getDate() - 7);

  return sevenDaysAgo;
}

const sevenDaysAgo = isWithinLast7Days();

function isWithinLast14Days() {
  var currentDate = new Date();

  // Subtract 14 days to get the last 14 days
  var fourteenDaysAgo = new Date(currentDate);
  fourteenDaysAgo.setDate(currentDate.getDate() - 14);

  return fourteenDaysAgo;
}
var last14DaysAgo = isWithinLast14Days();

// Helper function to count today's revenue
const countTodayRevenue = (transactions) => {
  let todayRevenue = 0;

  transactions.forEach((el) => {
    const transactionDate = new Date(el.createdAt);
    if (isToday(transactionDate)) {
      todayRevenue += el.price;
    }
  });
  return todayRevenue;
};
// helper function to  count today's product sold
const countTodayProductSold = (transactions) => {
  let amount = 0;

  transactions.forEach((el) => {
    const transactionDate = new Date(el.createdAt);
    if (isToday(transactionDate)) {
      amount += el.amount;
    }
  });
  return amount;
};
// helper function to count last 7 days total revenue
const countLast7DaysRevenue = (transactions) => {
  let totalRevenueLast7Days = 0;

  transactions.forEach((el) => {
    if (new Date(el.createdAt) >= sevenDaysAgo && new Date(el.createdAt) <= new Date()) {
      totalRevenueLast7Days += el.price;
    }
  });
  return totalRevenueLast7Days;
};

// helper function to count previous week's total revenue
const countPreviousWeekRevenue = (transactions) => {
  let totalRevenuePreviousWeek = 0;

  transactions.forEach((el) => {
    if (new Date(el.createdAt) < sevenDaysAgo && new Date(el.createdAt) >= last14DaysAgo) {
      console.log(sevenDaysAgo, last14DaysAgo);
      console.log(new Date(el.createdAt));
      totalRevenuePreviousWeek += el.price;
    }
  });
  return totalRevenuePreviousWeek;
};

const countLast7DaysProductSold = (transactions) => {
  let totalProductSoldLast7Days = 0;

  transactions.forEach((el) => {
    if (new Date(el.createdAt) >= sevenDaysAgo && new Date(el.createdAt) <= new Date()) {
      totalProductSoldLast7Days += el.amount;
    }
  });
  return totalProductSoldLast7Days;
};
module.exports = { countTodayRevenue, countTodayProductSold, countLast7DaysRevenue, countPreviousWeekRevenue, countLast7DaysProductSold };

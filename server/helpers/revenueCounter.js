const isToday = (date) => {
  const currentDate = new Date();
  return date.getDate() === currentDate.getDate() && date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear();
};
// Helper function to check if a date is within the last 7 days
function isWithinLast7Days() {
  var currentDate = new Date();
  var sevenDaysAgo = new Date(currentDate);
  sevenDaysAgo.setDate(currentDate.getDate() - 7);

  return sevenDaysAgo;
}

const sevenDaysAgo = isWithinLast7Days();

function isWithinLast14Days() {
  var currentDate = new Date();
  var fourteenDaysAgo = new Date(currentDate);
  fourteenDaysAgo.setDate(currentDate.getDate() - 14);

  return fourteenDaysAgo;
}
var last14DaysAgo = isWithinLast14Days();

// Helper function to check if a date is within the last 30 days
function isWithinLast30Days() {
  var currentDate = new Date();
  var thirtyDaysAgo = new Date(currentDate);
  thirtyDaysAgo.setDate(currentDate.getDate() - 30);

  return thirtyDaysAgo;
}

var thirtyDaysAgo = isWithinLast30Days();

// Helper function to check if a date is within the last 60 days
function isWithinLast60Days() {
  var currentDate = new Date();
  var sixtyDaysAgo = new Date(currentDate);
  sixtyDaysAgo.setDate(currentDate.getDate() - 60);

  return sixtyDaysAgo;
}

var sixtyDaysAgo = isWithinLast60Days();

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

// helper function to count last 7 days ago until last 14 days ago revenue
const countPreviousWeekRevenue = (transactions) => {
  let totalRevenuePreviousWeek = 0;

  transactions.forEach((el) => {
    if (new Date(el.createdAt) < sevenDaysAgo && new Date(el.createdAt) >= last14DaysAgo) {
      totalRevenuePreviousWeek += el.price;
    }
  });
  return totalRevenuePreviousWeek;
};

// helper function to count last 30 days total revenue
const countLast30DaysRevenue = (transactions) => {
  let totalRevenueLast30Days = 0;

  transactions.forEach((el) => {
    if (new Date(el.createdAt) >= thirtyDaysAgo && new Date(el.createdAt) <= new Date()) {
      totalRevenueLast30Days += el.price;
    }
  });
  return totalRevenueLast30Days;
};

// helper function to count last 30 days ago until last 60 days ago revenue
const countLast60DaysRevenue = (transactions) => {
  let totalRevenueLast60Days = 0;
  transactions.forEach((el) => {
    if (new Date(el.createdAt) < sixtyDaysAgo && new Date(el.createdAt) >= thirtyDaysAgo) {
      totalRevenueLast60Days += el.price;
    }
  });
  return totalRevenueLast60Days;
};

// helper function to count last 7 days total product sold
const countLast7DaysProductSold = (transactions) => {
  let totalProductSoldLast7Days = 0;

  transactions.forEach((el) => {
    if (new Date(el.createdAt) >= sevenDaysAgo && new Date(el.createdAt) <= new Date()) {
      totalProductSoldLast7Days += el.amount;
    }
  });
  return totalProductSoldLast7Days;
};
// helper function to count last 7 days until last 14 days ago revenue
const countPreviousWeekProductSold = (transactions) => {
  let totalProductSoldLast14Days = 0;

  transactions.forEach((el) => {
    if (new Date(el.createdAt) < sevenDaysAgo && new Date(el.createdAt) >= last14DaysAgo) {
      totalProductSoldLast14Days += el.amount;
    }
  });
  return totalProductSoldLast14Days;
};
// helper function to count last 30 days product sold
const countLast30DaysProductSold = (transactions) => {
  let totalProductSoldLast30Days = 0;

  transactions.forEach((el) => {
    if (new Date(el.createdAt) >= thirtyDaysAgo && new Date(el.createdAt) <= new Date()) {
      totalProductSoldLast30Days += el.amount;
    }
  });
  return totalProductSoldLast30Days;
};

// helper function to count last 30 days ago until last 60 days ago revenue
const countLast60DaysProductSold = (transactions) => {
  let totalProductSoldLast60Days = 0;
  transactions.forEach((el) => {
    if (new Date(el.createdAt) < sixtyDaysAgo && new Date(el.createdAt) >= sixtyDaysAgo) {
      totalProductSoldLast60Days += el.amount;
    }
  });
  return totalProductSoldLast60Days;
};
module.exports = {
  countTodayRevenue,
  countTodayProductSold,
  countLast7DaysRevenue,
  countPreviousWeekRevenue,
  countLast7DaysProductSold,
  countPreviousWeekProductSold,
  countLast30DaysRevenue,
  countLast60DaysRevenue,
  countLast30DaysProductSold,
  countLast60DaysProductSold,
};

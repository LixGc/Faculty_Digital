const { Op } = require("sequelize");
const {
  countTodayRevenue,
  countTodayProductSold,
  countLast7DaysRevenue,
  countPreviousWeekRevenue,
  countLast7DaysProductSold,
  countLast30DaysRevenue,
  countLast60DaysRevenue,
  countLast30DaysProductSold,
  countLast60DaysProductSold,
  countPreviousWeekProductSold,
} = require("../helpers/revenueCounter");
const { Product, Transaction } = require("../models");
class ProductController {
  static async revenue(req, res, next) {
    try {
      const transactionOption = {};
      // Filtering transaction by product name
      if (req.query.transactionProductName && req.query.transactionProductName.trim() !== "") {
        transactionOption.where = {
          name: {
            [Op.iLike]: `%${req.query.transactionProductName}%`,
          },
        };
      }

      let transactionHistory = await Transaction.findAll(transactionOption);

      //Money

      //This is total revenue of all time
      let totalRevenue = transactionHistory.reduce((accumulator, el) => {
        return accumulator + el.price;
      }, 0);
      //This is today's total revenue
      let todayRevenue = countTodayRevenue(transactionHistory);
      //This is revenue for last 7 days ago
      let totalRevenueLast7Days = countLast7DaysRevenue(transactionHistory);
      //This is revenue for last 7 days until last 14 days ago
      let totalRevenuePreviousWeek = countPreviousWeekRevenue(transactionHistory);
      //This is revenue for last 30 days ago
      let totalRevenueLast30DaysAgo = countLast30DaysRevenue(transactionHistory);
      //This is revenue for last 30 days until last 60 days ago
      let totalRevenueLast60Days = countLast60DaysRevenue(transactionHistory);
      //This is average daily revenue from last 7 days ago
      let averageLast7DaysRevenue = totalRevenueLast7Days / 7;
      averageLast7DaysRevenue = averageLast7DaysRevenue.toFixed(2);
      //This is comparison between last 7 days ago with last 7 days until last 14 days ago revenue
      let thisWeekRevenueComparedWithPreviousWeekRevenue = totalRevenueLast7Days - totalRevenuePreviousWeek;
      //This is comparison between last 30 days ago with last 30 days ago until last 60 days ago revenue
      let last30DaysAgoComparedWithLast60DaysAgoRevenue = totalRevenueLast30DaysAgo - totalRevenueLast60Days;

      //Product

      // This is total product sold of all time
      let totalProductSold = transactionHistory.reduce((accumulator, el) => {
        return accumulator + el.amount;
      }, 0);
      //This is today's total product sold
      let todayProductSold = countTodayProductSold(transactionHistory);
      //This is last 7 days ago total product sold
      let totalProdudctSoldLast7Days = countLast7DaysProductSold(transactionHistory);
      //This is last 7 days ago until 14 days ago total product sold
      let totalProductSoldPreviousWeek = countPreviousWeekProductSold(transactionHistory);
      let totalProductSoldLast30Days = countLast30DaysProductSold(transactionHistory);
      let totalProductSoldLast60Days = countLast60DaysProductSold(transactionHistory);
      //This is comparison between last 7 days ago with last 7 days until last 14 days ago product sold
      let thisWeekProductSoldComparedWithPreviousWeekRevenue = totalProdudctSoldLast7Days - totalProductSoldPreviousWeek;
      //This is comparison between last 30 days ago with last 30 days until last 60 days ago product sold
      let last30DaysAgoComparedWithLast60DaysAgoProductSold = totalProductSoldLast30Days - totalProductSoldLast60Days;
      //This is average daily product sold from last 7 days ago
      let averageLast7DaysProductSold = totalProdudctSoldLast7Days / 7;
      averageLast7DaysProductSold = averageLast7DaysProductSold.toFixed(2);

      let result = {
        transactionHistory,
        totalRevenue,
        todayRevenue,
        totalRevenueLast7Days,
        totalRevenuePreviousWeek,
        totalRevenueLast30DaysAgo,
        totalRevenueLast60Days,
        thisWeekRevenueComparedWithPreviousWeekRevenue,
        last30DaysAgoComparedWithLast60DaysAgoRevenue,
        averageLast7DaysRevenue,
        totalProductSold,
        todayProductSold,
        totalProdudctSoldLast7Days,
        totalProductSoldPreviousWeek,
        totalProductSoldLast30Days,
        totalProductSoldLast60Days,
        averageLast7DaysProductSold,
        thisWeekProductSoldComparedWithPreviousWeekRevenue,
        last30DaysAgoComparedWithLast60DaysAgoProductSold,
      };
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
  static async product(req, res, next) {
    try {
      const productOption = {
        include: [Transaction],
      };
      // Filtering product by name
      if (req.query.productName && req.query.productName.trim() !== "") {
        productOption.where = {
          name: {
            [Op.iLike]: `%${req.query.productName}%`,
          },
        };
      }
      let products = await Product.findAll(productOption);
      res.json(products);
    } catch (error) {
      next(error);
    }
  }
  static async addProduct(req, res, next) {
    try {
      const { name, price, stock, category, imageUrl } = req.body;
      await Product.create({ name, price, stock, category, imageUrl });
      res.status(201).json({ message: `${name} has been successfully added!` });
    } catch (error) {
      next(error);
    }
  }

  static async editProduct(req, res, next) {
    try {
      const { id } = req.params;
      const { name, price, stock, category, imageUrl } = req.body;
      await Product.update({ name, price, stock, category, imageUrl }, { where: { id } });
      res.json({ message: "Product successfully updated!" });
    } catch (error) {
      next(error);
    }
  }
  static async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      await Product.destroy({ where: { id } });
      res.json({ message: "Product successfully deleted!" });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = ProductController;

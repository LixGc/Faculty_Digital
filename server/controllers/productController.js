const { Op } = require("sequelize");
const {
  countTodayRevenue,
  countTodayProductSold,
  countLast7DaysRevenue,
  countPreviousWeekRevenue,
  countLast7DaysProductSold,
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
      let totalProductSold = transactionHistory.reduce((accumulator, el) => {
        return accumulator + el.amount;
      }, 0);
      let totalRevenue = transactionHistory.reduce((accumulator, el) => {
        return accumulator + el.price;
      }, 0);
      let todayRevenue = countTodayRevenue(transactionHistory);
      let todayProductSold = countTodayProductSold(transactionHistory);
      let totalProdudctSoldLast7Days = countLast7DaysProductSold(transactionHistory);
      let totalRevenueLast7Days = countLast7DaysRevenue(transactionHistory);
      let totalRevenuePreviousWeek = countPreviousWeekRevenue(transactionHistory);
      let averageLast7DaysRevenue = totalRevenueLast7Days / 7;
      let averageLast7DaysProductSold = totalProdudctSoldLast7Days / 7;
      averageLast7DaysRevenue = averageLast7DaysRevenue.toFixed(2);
      averageLast7DaysProductSold = averageLast7DaysProductSold.toFixed(2);
      let thisWeekRevenueComparedWithPreviousWeekRevenue = totalRevenueLast7Days - totalRevenuePreviousWeek;
      let result = {
        transactionHistory,
        totalRevenue,
        totalProductSold,
        totalProdudctSoldLast7Days,
        todayRevenue,
        todayProductSold,
        totalRevenueLast7Days,
        totalRevenuePreviousWeek,
        averageLast7DaysProductSold,
        averageLast7DaysRevenue,
        thisWeekRevenueComparedWithPreviousWeekRevenue,
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

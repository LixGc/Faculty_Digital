const { Op, where } = require("sequelize");
const {
  countTodayRevenue,
  countTodayProductSold,
  countLast7DaysRevenue,
  countPreviousWeekRevenue,
  countLast7DaysProductSold,
} = require("../helpers/revenueCounter");
const { Product, Transaction } = require("../models");
class ProductController {
  static async dashboard(req, res, next) {
    try {
      const option = {
        include: [Transaction],
      };
      if (req.query.name && req.query.name.trim() !== "") {
        option.where = {
          name: {
            [Op.iLike]: `%${req.query.name}%`,
          },
        };
      }
      let products = await Product.findAll(option);
      let transactionHistory = await Transaction.findAll();
      let totalProducts = products.length;
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
        products,
        transactionHistory,
        totalProducts,
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
      const { id, name, price, stock, category, imageUrl } = req.body;
      await Product.update({ name, price, stock, category, imageUrl }, { where: id });
      res.json({ message: "Product successfully updated!" });
    } catch (error) {
      next(error);
    }
  }
  static async deleteProduct(req, res, next) {}
}
module.exports = ProductController;

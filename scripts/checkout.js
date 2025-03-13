import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { products, loadProducts } from "../data/products.js";
// import "../data/backend-practice.js";
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

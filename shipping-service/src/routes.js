export function registerRoutes(app) {
  app.get("/health", (req, res) => {
    res.json({ status: "ok", service: "shipping-service" });
  });

  // Shipping-specific endpoints
  app.post("/shipping/create", (req, res) => {
    const { orderId, address } = req.body;
    res.json({ message: `Shipping order ${orderId} created`, address, status: "Pending" });
  });

  app.get("/shipping/:orderId", (req, res) => {
    const { orderId } = req.params;
    res.json({ orderId, carrier: "UPS", status: "In Transit", estimatedDelivery: "2025-09-25" });
  });

  app.post("/shipping/update", (req, res) => {
    const { orderId, status } = req.body;
    res.json({ message: `Shipping status for order ${orderId} updated to ${status}` });
  });
}

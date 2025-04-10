import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    // Allow all requests to pass through without JWT verification
    req.user = {}; // Mock user object
    next();
  } catch (error) {
    console.log("Error in protectRoute middleware: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

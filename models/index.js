const mongoose = require("mongoose");

// Use MONGO_URI from environment variables
const uri = `mongodb+srv://vercel-admin-user:RtSWyalbVeBFiY7R@de-damak.sue7t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
function main() {
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
}

module.exports = { main };

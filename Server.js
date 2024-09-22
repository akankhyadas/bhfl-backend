const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/bfhl", (req, res) => {
  const { data } = req.body;
  const user_id = "as6788";
  const email = "as6788@srmist.edu.in";
  const roll_number = "RA2111004020012";

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => isNaN(item));
  const highest_alphabet = alphabets.length
    ? [alphabets.sort((a, b) => b.localeCompare(a))[0]]
    : [];

  res.json({
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_alphabet,
  });
});

app.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
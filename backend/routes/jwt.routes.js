app.post("/user/gToken", (req, res) => {
    let Key = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: 12,
    }
  
    const token = jwt.sign(data, Key);
  
    res.send(token);
});
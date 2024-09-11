const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001; // 你可以根据需要修改端口
// 使用 cors 中间件
app.use(cors());

app.use(bodyParser.json());

app.post('/post', (req, res) => {
  const { name, address } = req.body;

  if (!name || !address) {
    return res.status(400).json({ message: 'Name and address are required' });
  }

  const filePath = path.join(__dirname, 'data.json');
  jsonData =  req.body
  
  fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to write data file' });
    }

    res.status(200).json({ message: 'Data added successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

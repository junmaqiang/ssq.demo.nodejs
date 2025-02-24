const express = require('express');
const app = express();
const port = 3000;

// 设置静态文件目录
app.use(express.static('public'));

// 路由处理
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// 监听端口
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});

## 调用示例
```js
let requestRes = await vk.request({
  url:`https://xxxx.xxxx.com/xxxx`,
  method:"POST",
  data:{
  
  },
  useContent:true, // 是否需要将data请求参数转成body请求体
});
```
## API参数 
| 参数名           | 类型       | 是否必填  | 默认值   | 说明                                                                                                            |                                                                                             |
|---------------|----------|-------|-------|---------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| method        | String   | -     | POST  | HTTP 请求方法, 可选值： GET, POST, DELETE, PUT                                                                        |                                                                                             |
| data          | Object   | -     | -     | 发送的数据                                                                                                         |                                                                                             |
| contentType | String   | -     | json     | 请求内容数据的格式，设为json会自动在header内设置Content-Type: application/json 默认'json'，可选 'default'（数据不做处理） 
| dataType      | String   | -     | json     | 返回的数据格式，可选值为 'json'（返回数据转为JSON），'text'（返回数据转为字符串）， 'default'（返回数据不做处理）                                           |                                                                                             |
| headers       | Object   | -     | -     | 请求头                                                                                                           |                                                                                             |
| timeout       | Number   | Array | -     |                                                                                                            超时时间设置。设置为数组时第一项为请求超时，第二项为返回超时。设置为数字时相当于同时设置请求超时和返回超时，即timeout:3000效果等于timeout:[3000,3000] |
| beforeRequest | Function | -     | -     | 请求发送前的钩子                                                                                                      |                                                                                             |
| gzip          | Boolean  | -     | false | 是否支持 gzip 响应格式。开启 gzip 之后，HttpClient 将自动设置 Accept-Encoding: gzip 请求头， 并且会自动解压带 Content-Encoding: gzip 响应头的数据。 |                                                                                             |
| timing        | Boolean  | -     | false | 是否开启请求各阶段的时间测量                                                                                                |                                                                                             |
| enableProxy   | Boolean  | -     | false | 是否启用代理         
| proxy| String| -     | null| 代理地址        
| trace| Boolean| -     | false| 是否启用捕获堆栈                                                                                    |                                                                                             |

1、必须开启云函数的URL化，假如URL地址为：https://xxx.bspapp.com/http/router
2、`axios`请求时，`URL`为：https://xxx.bspapp.com/http/router
3、请求的`data`（请求参数）为：
```js
{
  "$url":"user/pub/login",
  "data":{
   
  }

}
```
其中`$url`是需要访问的云函数路径(从`service`目录算起)
`data`是你的请求参数
完整案例
```js
axios.post('https://xxx.bspapp.com/http/router', {
  "$url":"user/pub/login",
  "data":{
   
  }
})
.then(function (res) {
  console.log(res);
})
.catch(function (err) {
  console.log(err);
});
```
如果需要带token,则
```js
axios.post('https://xxx.bspapp.com/http/router', {
  "uni_id_token":"用户token",  
  "$url":"user/pub/login",
  "data":{
   
  }
})
.then(function (res) {
  console.log(res);
})
.catch(function (err) {
  console.log(err);
});

```
## crypto 是Nodejs的内置模块，提供了加密功能，包括对 OpenSSL 的哈希、HMAC、加密、解密、签名、以及验证功能的一整套封装。

### MD5加密 
```js
const crypto = require('crypto');
const md5 = crypto.createHash('md5');
let cryptostr = md5.update('Hello, world!').digest('hex');
```

### SHA1加密 
```js
const crypto = require('crypto');
const md5 = crypto.createHash('sha1');
let cryptostr = md5.update('Hello, world!').digest('hex');
```


### HMAC加密
#### HMAC算法也是一种哈希算法，它可以利用MD5或SHA1等哈希算法，需要配置密钥。
```js
const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'secret-key');
let cryptostr = md5.update('Hello, world!').digest('hex');
```

###  AES加解密
```js
const crypto = require('crypto');
 
// 加密
function aesEncrypt(data, key) {
  const cipher = crypto.createCipher('aes192', key);
  var crypted = cipher.update(data, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}

// 解密
function aesDecrypt(encrypted, key) {
  const decipher = crypto.createDecipher('aes192', key);
  var decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
```

function jsonp(url) {
  return new Promise((resolve, reject) => {
    const random = 'frankJSONPCallbackName' + Math.random();
    window[random] = (data) => {
      resolve(data);
    };
    const script = document.createElement(`script`);
    script.src = `${url}?callback=${random}`;
    script.onload = () => {
      script.remove();
    };
    script.onerror = () => {
      reject();
    };
    document.body.appendChild(script);
  });
}
//functionName前端程序员默认写成callback
//上面是封装的代码,JSONP只知道成功和失败，拿不到状态
// const random = 'frankJSONPCallbackName' + Math.random();
// window[random] = (data) => {
//   console.log(data);
// };

// const script = document.createElement(`script`);
// script.src = `http://qq.com:8888/friends.js?functionName=${random}`;
// script.onload = () => {
//   script.remove();
// };

// document.body.appendChild(script);

jsonp('http://qq.com:8888/friends.js').then((data) => {
  console.log(data);
});

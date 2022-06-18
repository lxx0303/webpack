import { marquee } from './marquee.js';
import { tab } from './tab.js';

// 1. yarn init
// 安装yarn  npm i yarn -g
// 2.yarn add webpack webpack-cli -D
// -webpack核心包 webpack-cli/command line interce
// 3.scripts
// 4.执行脚本 yarn run <scriptname>
// yarn build  或者 yarn run build
tab();
marquee();

// 引用css
import './styles/index.css'

// 引用less
import './styles/index.less'

// 1.引入图片
import gifSrc from './assets/1.gif';
import pngSrc from './assets/logo_small.png';

// 2.创建图片节点
const gif = document.createElement('img');
const png = document.createElement('img');

// 3.给src赋值
gif.src = gifSrc;
png.src = pngSrc;

// 4.
document.body.appendChild(gif);
document.body.appendChild(png);


// 字体图标
import './assets/fonts/iconfont.css'

// 高版本js -->  低版本js
const fn = () => {
    console.log('你好');
}
console.log(fn);


// 引入vue
import App from './app.vue'

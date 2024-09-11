
创建或更新你的页面组件
在你的页面组件中，你需要导入getCfg函数，并在组件中调用它。你可以选择在组件的函数体内调用，

# import fun

import { getCfg } from './cfg';

# 组件的函数体内调用,,,output dao html by {}


const Home = () => {
  const cfg331 = getCfg();

  return (
    <div>
      <h1>Home Page</h1>
      <h1>appName::{cfg331.appName}</h1>
      <Link to="/table">
        <button>Go to Table Page</button>
      </Link>
    </div>
  );
};
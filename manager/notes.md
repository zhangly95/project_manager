#20181120工作汇报
##1.ant design pro 代码学习
###（一）路由分析
**流程图：**
![avatar](/public/route.png)
**以basiclist为例：**
src/router.js ---*AuthorizedRoute根据权限生成不同的路由组件，权限通过时生成route否则重定向到redirectPath="/exception/403"*
"/"相关的路由 -----*权限通过 进入BasicLayout*
BasicLayout  -----*每个页面的公共部分：侧边栏、头部、内容、底部*
/Common/router.js/getRouterData    -----*获取所有和“/”相关的路由配置*
/src/routes ------*各个页面组件*

**BasicLayout.js：**
````
   <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <Switch>
              {redirectData.map(item => (
                <Redirect key={item.from} exact from={item.from} to={item.to} />
              ))}
              {getRoutes(match.path, routerData).map(item => (
                <AuthorizedRoute
                  key={item.key}
                  path={item.path}
                  component={item.component}
                  exact={item.exact}
                  authority={item.authority}
                  redirectPath="/exception/403"
                />
              ))}
              <Redirect exact from="/" to={baseRedirect} />
              <Route render={NotFound} />
            </Switch>
          </Content>
````
BasicLayout里包含每个页面的公共部分，即siderMenu、Header、Content、Footer。其中路由的布局放在content中，通过getRouter匹配相关路由信息，routerDate里生成了所有path对应加载的页面组件。
AuthorizedRoute权限通过，getRoutes(match.path, routerData)，对应到各个path对应的route。



###（二）理解react前后端交互逻辑
**以basiclist为例**
/src/routes/basiclist          -----*页面组件*
/models/list   ------*请求数据的action*
/sevices ------*请求后端接口服务*
request -------*利用原生fetch函数封装请求函数*
.roadhogrc.mock.js -------*判断node参数process.env是否设置了no_proxy参数，设置为true则返回空对象，否则返回mock对象，开启mock功能，使用mock数据*
/mock/api.js   -------*设置mock数据*
**api.js**
````
export const getNotices = (req, res) => {
  res.json([
    {
      id: '000000001',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: '你收到了 14 份新周报',
      datetime: '2017-08-09',
      type: '通知',
    },
    {
      id: '000000002',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      datetime: '2017-08-08',
      type: '通知',
    },
````
**mock数据的配置**
支持以下几种类型：
````
export default {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1,2] },

  // GET POST 可省略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => { res.end('OK'); },

  // Forward 到另一个服务器
  'GET /assets/*': 'https://assets.online/',

  // Forward 到另一个服务器，并指定子路径
  // 请求 /someDir/0.0.50/index.css 会被代理到 https://g.alicdn.com/tb-page/taobao-home, 实际返回 https://g.alicdn.com/tb-page/taobao-home/0.0.50/index.css
  'GET /someDir/(.*)': 'https://g.alicdn.com/tb-page/taobao-home',
};
````
**mock数据的代理**
````
export default (noProxy
  ? {
    '/api/*': "https://your.server.com/",
  }
  : delay(proxy, 1000));
````
请求/api/自动转换为http://your.server.com/api/



##2实现了IDE文件设计清单的列表页面








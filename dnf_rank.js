// dnf助手排行榜活动自动化完成获取鲜花任务以及编年史相关任务脚本
var common = require("_common.js")

common.init()

common.log("登录助手app并等待一段时间")
launchPackage("com.tencent.gamehelper.dnf")
sleep(8000)

common.log("按多次back，确保跳到最顶层")
common.back_to_top(5, 3000)

common.log("--阅读资讯--")
common.log("点击 [资讯] tab")
click(140, 2080)
common.sleep_default()
common.log("点击 [推荐] 分页")
click(88, 244)
common.sleep_default()
common.log("点击 [第一条资讯]")
click(650, 1150)
common.sleep_default()
common.log("回到主页")
back()
common.sleep_default()

common.log("--阅读视频资讯--")
common.log("点击 [资讯] tab")
click(140, 2080)
common.sleep_default()
common.log("点击 [视频] 分页")
click(788, 244)
common.sleep_default()
common.log("点击 [第一条视频资讯评论按钮以进入详情页]")
click(821, 1300)
common.sleep_default()
common.log("回到主页（并确保回到第一个分页）")
back()
common.sleep_default()
common.log("点击 [作品] 分页")
click(50, 244)
common.sleep_default()
common.log("点击 [推荐] 分页")
click(88, 244)
common.sleep_default()

common.log("--阅读动态--")
common.log("点击 [动态] tab")
click(400, 2080)
common.sleep_default()
common.log("点击 [第一条动态]")
click(650, 1150)
common.sleep_default()
common.log("回到主页")
back()
common.sleep_default()

common.log("--访问他人主页并关注社区好友--")
// 访问主页
common.log("点击 [动态] tab")
click(400, 2080)
common.sleep_default()
common.log("点击 [第一条动态的发送者头像] 以进入其主页")
click(95, 1050)
common.sleep_default()
// 关注，并取消关注，方便后续关注能顺利进行
common.log("点击 [加好友] 关注他")
click(1000, 345)
common.sleep_default()
common.log("点击 [...] 打开选项框")
click(1013, 138)
common.sleep_default()
common.log("点击 [删除好友] 取消关注")
click(540, 1838)
common.sleep_default()
common.log("回到主页")
back()
common.sleep_default()

common.log("--分享周报--")
common.log("点击 [三横杠] 进入左侧栏")
click(67, 140)
common.sleep_default()
common.log("点击 [新周报-体验版]")
click(500, 980)
common.sleep_long() // 加载比较慢，多等会
common.log("上滑到第2页")
swipe(540, 1600, 540, 600, 300)
common.sleep_default()
common.log("上滑到第3页")
swipe(540, 1600, 540, 600, 300)
common.sleep_default()
common.log("上滑到第4页")
swipe(540, 1600, 540, 600, 300)
common.sleep_default()
common.log("点击 [立即分享]")
click(725, 1495)
common.sleep_default()
common.log("点击 [QQ好友]")
click(620, 1818)
common.sleep_default()
common.log("点击 [我的电脑]")
click(570, 988)
common.sleep_default()
common.log("点击 [发送]")
click(745, 1500)
common.sleep_default()
common.log("点击 [返回DNF助手]")
click(340, 1205)
common.sleep_default()
common.log("回到主页")
back()
common.sleep_default()

// 运行完毕
common.log("操作完成，请看看是否ok")

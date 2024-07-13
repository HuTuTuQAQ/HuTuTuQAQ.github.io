var now = new Date();
function createtime() {
  var grt = new Date("07/31/2023 00:00:00");
  now.setTime(now.getTime() + 250);
  var days = (now - grt) / 1e3 / 60 / 60 / 24,
    t = Math.trunc(234e8 + (now - grt) / 1e3 * 17),
    a = (t / 1496e5).toFixed(6),
    dnum = Math.floor(days),
    hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
    hnum = Math.floor(hours);
  1 == String(hnum).length && (hnum = "0" + hnum);
  var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
    mnum = Math.floor(minutes);
  1 == String(mnum).length && (mnum = "0" + mnum);
  var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
    snum = Math.round(seconds);
  1 == String(snum).length && (snum = "0" + snum);
  let currentTimeHtml = "";
  (currentTimeHtml =
    hnum < 18 && hnum >= 9
      ? `<img class='boardsign' src='https://tutu-blog.obs.cn-southwest-2.myhuaweicloud.com/bolg/siticon/HuTuTu-%E7%BF%BB%E8%B7%9F%E6%96%97%E4%B8%AD-pink.svg' title='距离月入25k也就还差一个大佬带我~'><span class='textTip'> <br> 本站居然运行了 ${dnum} 天</span><span id='runtime'> ${hnum} 小时 ${mnum} 分 ${snum} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀`
      : `<img class='boardsign' src='https://tutu-blog.obs.cn-southwest-2.myhuaweicloud.com/bolg/siticon/HuTuTu-%E6%8C%81%E7%BB%AD%E5%8F%91%E5%91%86ing-pink.svg' title='下班了就该开开心心的玩耍，嘿嘿~'><span class='textTip'> <br> 本站居然运行了 ${dnum} 天</span><span id='runtime'> ${hnum} 小时 ${mnum} 分 ${snum} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀`),
    document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
setInterval(() => {
  createtime();
}, 250);
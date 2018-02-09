/*
 * WordPress 转微信小程序
 * author               : pimgeek
 * original author      : jianbo
 * original github repo : https://github.com/iamxjb/winxin-app-watch-life.net
 * open source license  : MIT - https://choosealicense.com/licenses/mit/
 */

var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})

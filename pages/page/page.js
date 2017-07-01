/*
 * WordPress 转微信小程序
 * author               : pimgeek
 * original author      : jianbo
 * original github repo : https://github.com/iamxjb/winxin-app-watch-life.net
 * open source license  : MIT - https://choosealicense.com/licenses/mit/
 */

var wpApi = require('../../utils/api.js');
var util = require('../../utils/util.js');
var WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {
    title: '页面内容',
    pageData: {},
    pagesList: {},
    hidden: false,
    wxParseData:[]
  },

  onLoad: function(options) {
    this.fetchData(options.id),
    this.fetchPagesData()
  },

  fetchData: function(id) {
    var self = this;
    self.setData({
      hidden: false
    });
    wx.request({
      url: wpApi.getPageByID(id, { mdrender: false }),
      success: function (response) {
        console.log(response);
        self.setData({
         pageData:response.data,
        // wxParseData: WxParse('md',response.data.content.rendered)
         wxParseData: WxParse.wxParse('article', 'html', response.data.content.rendered, self, 5) 
       });
        setTimeout(function () {
          self.setData({
            hidden: true
          });
        }, 300);
      }
    });   
  },

  fetchPagesData: function() {
    var self = this;       
    wx.request({
      url: wpApi.getPages(),
      success: function (response) {
        self.setData({
              pagesList: response.data 
          });
        setTimeout(function () {
          self.setData({
            hidden: true
          });
        }, 300);
      }
    });
  }   
})
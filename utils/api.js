/*
 * WordPress 转微信小程序
 * author               : pimgeek
 * original author      : jianbo
 * original github repo : https://github.com/iamxjb/winxin-app-watch-life.net
 * open source license  : MIT - https://choosealicense.com/licenses/mit/
 */

var HOST_URI = 'https://hintsnet.com/pimgeek/wp-json/wp/v2/';

module.exports = {
  // 获取文章列表数据
  getPosts: function(obj) {
    var url = HOST_URI + 'posts?per_page=6&page=' + obj.page;
    
    if (obj.categories != 0) {
      url += '&categories=' + obj.categories;
    }
    if (obj.search != '') {
      url += '&search=' + encodeURIComponent(obj.search);
    }   
    return url;

  },

  getStickyPosts: function() {
    var url = HOST_URI + 'posts?sticky=true&per_page=5&page=1';
    return url;

  },

  // 获取特定id的文章列表
  getPostsByIDs: function(obj) {
    var url = HOST_URI + 'posts?include=' + obj;

    return url;

  },

  // 获取内容页数据
  getPostByID: function(id, obj) {
    
    return HOST_URI + 'posts/' + id;
  },

  // 获取页面列表数据
  getPages: function() {
    
    return HOST_URI + 'pages';
  },

  // 获取页面列表数据
  getPageByID: function(id, obj) {
    return HOST_URI + 'pages/' + id;
  },

  //获取分类列表
  getCategories: function() {
    return HOST_URI + 'categories?per_page=50&orderby=count&order=desc'
  },

  //获取评论
  getComments: function(obj) {
    return HOST_URI + 'comments?per_page=6&orderby=date&order=asc&post=' + obj.postID + '&page=' + obj.page
  },

  //获取最近的50个评论
  getRecentfiftyComments: function() {
    return HOST_URI + 'comments?per_page=30&orderby=date&order=desc'
  },

  //获取最近的50个评论
  postComment: function() {
    return HOST_URI + 'comments'
  },

  //获取文章的第一个图片地址,如果没有给出默认图片
  getContentFirstImage: function(content) {
    var regex = /<img.*?src=[\'"](.*?)[\'"].*?>/i;
    var arrReg = regex.exec(content);
    var src ="../../images/watch-life-logo-128.jpg";
    if(arrReg){   
      src=arrReg[1];
    }
    return src;  
  }
};
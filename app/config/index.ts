// ========================================
//  Fumomo 网站配置文件
// ========================================
// 
// 这个文件包含了网站的所有配置信息。你可以通过修改这些值来：
// 更改网站标题和描述
// 设置文章RSS订阅地址  
// 自定义首页内容和介绍
// 修改个人信息和社交链接
// 调整主题色彩和样式
//
// 修改后保存文件，网站会自动更新！
// ========================================

// 网站配置文件 - 集中管理所有网站设置
export const siteConfig = {
  // ========================================
  // 🌟 核心网站设置 - 最重要的配置
  // ========================================
  site: {
    // 网站标题 - 显示在浏览器标签页和导航栏
    title: "Takina PhiLia093",

    // 网站副标题 - 显示在首页标题下方
    subtitle: "你好，欢迎来到Takina的文字站PhiLia！",

    // 网站描述 - 用于SEO和社交媒体分享
    description: "欢迎来到Takina PhiLia的温柔世界，在这里分享技术、生活和思考",

    // 网站URL - 完整的域名地址
    url: "https://philia.takinablog.top",

  },

  // ========================================
  // 文章设置 - 配置文章来源
  // ！！！如果要订阅文章请在server/api/rss.get.ts中修改订阅链接！！！
  // ========================================
  articles: {


    // 文章页面标题
    pageTitle: "我的文章",

    // 文章页面描述
    pageDescription: "技术分享与学习记录",

    // 每页显示文章数量
    postsPerPage: 10,

    // 文章来源说明
    sourceDescription: "文章内容来自我的博客TakinaBlog"
  },

  // ========================================
  // 首页内容设置 - 自定义首页展示
  // ========================================
  home: {
    // 主标题（通常使用site.title）
    mainTitle: "TakinaBlog",

    // 欢迎语句
    welcomeText: "一个充满温暖与创意的小窝",

    // 首页特色介绍卡片 - 可以自由修改图标、标题和描述
    features: [
      {
        title: "技术分享",
        description: "分享技术知识、框架使用心得和行业思考"
      },
      {
        title: "生活记录",
        description: "记录日常生活中的美好瞬间和感悟"
      },
      {
        title: "创意项目",
        description: "展示个人项目和创意作品"
      }
    ]
  },

  // ========================================
  // 页面配置
  // ========================================
  pages: {
    home: {
      title: "首页",
    },
    articles: {
      title: "我的文章",
      description: "技术分享与生活感悟"
    },
    about: {
      title: "关于",
    },
    projects: {
      title: "项目作品",
      description: "我的一些项目作品"
    },
    website: {
      title: "我的网站",
      description: "正在运行的网站信息"
    }
  },

  // ========================================
  // 个人信息设置
  // ========================================
  personal: {
    // 基本信息
    name: "Takina",
    bio: "书里总爱写到喜出望外的傍晚",
    hobby: "创造、运营、收集",
    location: "广东深圳",
    learning: "数据分析、游戏拆解、功能开发",
    avatar: "/aigre.jpg",

    // 关于页面社交媒体链接
    social: {
      github: "https://github.com/kawaii993",
      email: "zh9931207@163.com"
    }
  },

  // ========================================
  // 网站UI设置
  // ========================================


  // 导航菜单
  navigation: [
    { name: "首页", href: "/", key: "home" },
    { name: "文章", href: "/articles", key: "articles" },
    { name: "关于", href: "/about", key: "about" },
    { name: "项目", href: "/projects", key: "projects" },
    { name: "网站", href: "/website", key: "website" }
  ],

  // 主题配置
  theme: {
    primaryColor: "#8b5a8c",
    secondaryColor: "#f0f9ff",
    accentColor: "#ffeef8",
    textColor: "#666",
    fontFamily: "'Comic Sans MS', 'XiaokeNailao', cursive, sans-serif"
  },

  // ========================================
  // Umami统计配置 - 记得在layout插入Umami的脚本
  // ========================================
  umami: {
    enable: false, // 是否显示umami统计
    shareId: "VAARDWeRY31dw6ug", // 填入共享URL最后面那一串  比如：https://eu.umami.is/api/share/2dKQ5T0WrUn6AYtr 你就填入2dKQ5T0WrUn6AYtr
    region: "eu", // Umami有两个区域，按需选择即可  比如：https://eu.umami.is 你就填入eu
  },


};

// ========================================
// 类型定义和辅助函数
// ========================================

// 页面类型定义
export type PageKey = keyof typeof siteConfig.pages;

// 获取页面配置的辅助函数
export function getPageConfig(pageKey: PageKey) {
  return siteConfig.pages[pageKey];
}

// 获取页面标题的辅助函数
export function getPageTitle(pageKey: PageKey) {
  return siteConfig.pages[pageKey].title;
}

// 获取社交媒体链接的辅助函数
export function getSocialLinks() {
  return Object.entries(siteConfig.personal.social).map(([platform, url]) => ({
    platform,
    url,
    name: platform.charAt(0).toUpperCase() + platform.slice(1)
  }));
}

// 获取网站完整标题的辅助函数
export function getFullTitle(pageTitle?: string) {
  return pageTitle ? `${pageTitle} - ${siteConfig.site.title}` : siteConfig.site.title;
}

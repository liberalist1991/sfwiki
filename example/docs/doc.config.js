const version = process.env.VERSION || require("../package.json").version;

module.exports = {
    header: {
        logo: {
            image:
                "https://t.focus-res.cn/front-end/image/focus-logo-v2/logo_120_120.png",
            title: "Example" ,
            href: "#/"
        },
        nav: {
            '导航1': "http://www.baidu.com",
        }
    },
    navEnter: '/index',
    nav: [
        {
            path: "/index",
            title: "Index",
        },
        {
            name: "",
            groups: [
                {
                    name: "分组1",
                    children: [
                        {
                            path: "/page1",
                            title: "页面1",
                        },
                        
                    ]
                },
            ]
        }, 
        {
            path: "page2",
            title: "页面2",
        }
    ]
};

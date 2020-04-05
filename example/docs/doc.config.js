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
            'nav': "http://www.baidu.com",
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
                    name: "a group",
                    children: [
                        {
                            path: "/page1",
                            title: "markdown doc",
                        },
                        
                    ]
                },
            ]
        }, 
        {
            path: "demoCode",
            title: "vue doc1",
        },
        {
            path: "demoMd",
            title: "vue doc2",
        }
    ]
};

const { ASYNC } = require("./settings");

const Sunucu_1 = "Witcher";
module.exports = {
    apps: [    
        {
            name: `${Sunucu_1}-MOD`,
            script: "./Moderasyon/main.js",
            watch: false
        },
        {
            name: `${Sunucu_1}-EXECUTİVE`,
            script: "./Executive/main.js",
            watch: false
        },
        {
            name: `${Sunucu_1}-STATS`,
            script: "./Stats/main.js",
            watch: false
        },
        {
            name: `${Sunucu_1}-LOG`,
            script: "./Log/main.js",
            watch: false
        },
        {
            name: `${Sunucu_1}-ASYNC`,
            script: "./Async/main.js",
            watch: false 
        },
        {   name: `${Sunucu_1}-EVENTS`,
            script: "./Events/main.js",
            watch: false
        }
    ]
};

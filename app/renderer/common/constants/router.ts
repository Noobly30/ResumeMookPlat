const ROUTER = {
    root: '/',
    resume: '/resume',
};
export default ROUTER;

export const ROUTER_KEY = {
    root: 'root',
    resume: 'resume',
};

// 入口模块
export const ROUTER_ENTRY = [
    {
        url: 'https://github.com/Noobly30/ResumeMookPlat',
        key: 'intro',
        text: '介绍',
    },
    {
        url: ROUTER.resume,
        key: ROUTER_KEY.resume,
        text: '简历',
    },
    {
        url: 'https://github.com/Noobly30/ResumeMookPlat',
        key: 'code',
        text: '源码',
    },
];
import { defineConfig } from 'umi';
import routes from './routes'

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    layout: { // 开启项目视骨架配置
        name: 'Ant Design',
        locale: true,
        layout: 'side',
    },
    routes,
    fastRefresh: {},
});

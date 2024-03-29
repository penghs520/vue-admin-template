import SvgIcon from './icon/SvgIcon.vue';
import type { App, Component } from 'vue';
const components: { [name: string]: Component } = { SvgIcon };

//全局注册自定义组件
export default {
    install(app: App) {
        Object.keys(components).forEach((key: string) => {
            app.component(key, components[key]);
        })
    }
}
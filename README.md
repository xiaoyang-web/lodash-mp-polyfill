### 说明

因为小程序的全局对象跟浏览器的全局对象不同，直接在小程序环境中使用 `lodash` 时会报错，所以需要一个适用于小程序的 ployfill，让 `lodash` 在小程序中正常运行。

### 安装

```shell
npm install lodash-mp-polyfill -D
```

### 使用

需要在使用 `lodash` 之前引入该 ployfill，建议使用 `lodash-es` 可以按需导入减少打包后的体积。

**示例 1**

新增文件 `src/utils/lodashFix.ts`

```typescript
import "lodash-mp-polyfill";
export * from "lodash-es";
```

然后在页面 `src/pages/index/index.vue` 中引入该文件即可正常使用 `lodash`

```vue
<template>
  <view>{{ msg }}</view>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { isString } from "../../utils/lodashFix.ts";

const msg = ref("hello world");

console.log(isString(msg.value)); // true
</script>
```

**示例 2**

直接在入口文件 `main.ts` 中引入

```typescript
import "lodash-mp-polyfill";
```

然后在页面中导入并使用 `lodash` 即可

```vue
<template>
  <view>{{ msg }}</view>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { isString } from "lodash-es";

const msg = ref("hello world");

console.log(isString(msg.value)); // true
</script>
```

上述示例均在 uniapp 中使用，并在微信小程序环境下测试通过，其他小程序平台暂未测试过，理论上应该处理方式类似。

# a6

## Q

設計並實現一個具有動態數據交互的個人Blog系統，使用 Vue.js 作為前端框架。要求包含以下功能： 
使用 Vue CLI (Vue2) 建立項目結構，配置 ESLint 進行代碼質量控制，可使用主流第三方UI框架加速開發過程。
利用 Vuex 管理文章數據狀態，展示對應的增刪改查操作。 
使用 Vue Router 實現路由的懶加載。 
頁面需要有基礎的響應式設計，兼容主流的桌面和移動瀏覽器。 
進階要求：實現一個簡易的前端性能優化方案，如圖片懶加載、代碼分割等。 
頁面需包含列表展示、文章發布、文章詳情及多層級評論功能。

## A

Vue2 + ESLint + prettier
vue-router (使用路由的懶加載)
vuex
Element-ui

性能優化:
1. 打包後移除console.log，因為console.log會佔用內存。
2. 圖片懶加載

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

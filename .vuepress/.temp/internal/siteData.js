export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"TOHE\",\"description\":\"An Among Us Mod that adds a ton of new roles and settings to the game!\"},\"/fr/\":{\"lang\":\"fr-FR\",\"title\":\"TOHE\",\"description\":\"Un mod Among Us qui ajoute une tonne de nouveaux rôles et paramètres au jeu!\"},\"/zh-CN/\":{\"lang\":\"zh-CN\",\"title\":\"TOHE\",\"description\":\"一个在我们中间的模组，为游戏添加了大量新角色和设置！\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}

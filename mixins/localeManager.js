export default {
  computed: {
    locales () {
      return [
        { text: '简体中文', locale: 'zh', path: '' + this.$route.path },
        { text: 'English', locale: 'en', path: 'https://nuxtjs.org' + this.$route.path }
      ]
    },
    currentLang: {
      get () {
        return this.locales.map(l => l.locale).indexOf(this.$store.state.locale)
      },
      set (index) {
        const lang = this.locales[index]
        if (!lang) {
          return
        }
        window.location.href = lang.path
      }
    }
  }
}

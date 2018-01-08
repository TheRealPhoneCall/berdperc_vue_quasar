export const percImgMixin = {
  methods: {
    loadImg (percSlug, percImg) {
      return require(`@/../assets/images/${percSlug}/${percImg}`)
    }
  }
}

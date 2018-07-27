const images = {
  methods: {
    getImg(img) {
      return require(`@/assets/${img}`); // eslint-disable-line
    },
  },
};

export default images;

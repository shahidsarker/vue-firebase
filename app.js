const app = Vue.createApp({
  // data, functions
  //   template: `<h2>I am the template</h2>`,
  data() {
    return {
      showBooks: true,
      books: [
        { title: "The Life of Pi", author: "Yann Martel" },
        { title: "Convenience Store Woman", author: "Sayaka Murata" },
        { title: "Earthlings", author: "Sayaka Murata" },
      ],
      x: 0,
      y: 0,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) console.log(data);
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");

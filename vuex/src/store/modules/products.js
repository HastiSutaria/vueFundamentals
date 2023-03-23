export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: 'Book Collection',
          description:
            'A collection of must-read books. All-time classics included!',
          price: 999.99
        },
        {
          id: 'p2',
          image:
            'https://assetscdn1.paytm.com/images/catalog/product/S/SP/SPOTENT-ADVENTUHOME17233444451E42/1562050508114_0..jpg',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 1299.99
        },
        {
          id: 'p3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 66.99
        }
      ]
    };
  },
  getters: {
    products(state) {
      return state.products;
    }
  }
};

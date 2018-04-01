import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const categories = [
  {
    id: '1',
    name: 'Bat-Sidekick'
  },
  {
    id: '2',
    name: 'Bat-Transportation'
  },
  {
    id: '3',
    name: 'Bat-Weapon'
  },
  {
    id: '4',
    name: 'Bat-Gadget'
  }
];

class CategoryApi {
  static getAllCategories() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], categories));
      }, delay);
    });
  }

}

export default CategoryApi;

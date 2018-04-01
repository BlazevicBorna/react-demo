import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const assets = [
  {
    id: "batarang-asset",
    name: "Batarang",
    category: "Bat-Weapon",
    quantity: "500"
  },
  {
    id: "batmobile-asset",
    name: "Batmobile",
    category: "Bat-Transportation",
    quantity: "1"
  },
  {
    id: "robin-asset",
    name: "Robin",
    category: "Bat-Sidekick",
    quantity: "1"
  },
  {
    id: "barbra-gordon-asset",
    name: "Barbra Gordon",
    category: "Bat-Sidekick",
    quantity: "1"
  },
  {
    id: "alfred-thaddeus-crane-pennyworth-asset",
    name: "Alfred Thaddeus Crane Pennyworth",
    category: "Bat-Sidekick",
    quantity: "1"
  },
  {
    id: "batwing-asset",
    name: "Batwing",
    category: "Bat-Transportation",
    quantity: "1"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

const generateId = (asset) => {
  let id = replaceAll(asset.name, ' ', '-');
  id = id + '-asset';
  id = id.toLowerCase();
  return id;
};

class AssetApi {
  static getAllAssets() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], assets));
      }, delay);
    });
  }

  static saveAsset(asset) {
    asset = Object.assign({}, asset); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minAssetNameLength = 1;
        if (asset.name.length < minAssetNameLength) {
          reject(`Name must be at least ${minAssetNameLength} characters.`);
        }
        asset.id = generateId(asset);
        const existingAssetIndex = assets.findIndex(a => a.id == asset.id);
        const updateCheck = existingAssetIndex !== -1;
        if (updateCheck) {
          asset.quantity = Number.parseInt(asset.quantity) + Number.parseInt(assets[existingAssetIndex].quantity);
          assets.splice(existingAssetIndex, 1, asset);
        } else {
          assets.push(asset);
        }

        resolve(asset, updateCheck);
      }, delay);
    });
  }

  static deleteAsset(assetId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfAssetToDelete = assets.findIndex(asset => {
          asset.id == assetId;
        });
        assets.splice(indexOfAssetToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default AssetApi;

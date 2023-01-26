'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "153a2a666e862046877b56b90f61de6f",
"index.html": "b753925cf1b8c42bbada75f0c122bc0e",
"/": "b753925cf1b8c42bbada75f0c122bc0e",
"CNAME": "16a18a10e99bbb2e262d38ac4c297d45",
"main.dart.js": "2df4ce48b52ee60d1d15ef9e2514f64d",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"README.md": "a9dc4a8f5d9c93a086c1905c5b54f42c",
"favicon.png": "b5396636f21edd778024a75728588f16",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "abafb8c4ef37b2532c82066fd19a3c70",
".git/ORIG_HEAD": "5563e2f1e80c5f2092e6966c8d22a752",
".git/config": "ef4df4ba6e4348f26235ce7ffad702c5",
".git/objects/94/a318131c2793ab3972ffabe264cc0320e9b9d2": "b2988da2f5608ba779b0b8602e8285ae",
".git/objects/a4/15273e3c8ec23f4b844f7bc9b4221374f6773f": "85693f77a35ecf7f12beb74138fbcbc0",
".git/objects/d0/b82f63949ea31ac4aa78af5a5067e0667757ea": "a35361b2b0da785f3fa3eda7214a0a9b",
".git/objects/da/56bf7de58fe1fe19d1f31acfa7f80d6f09bb76": "b9c1956943ddb5fb1b4ab21ca2bbae08",
".git/objects/da/f4aa7734607bbf9a0670ae323fe6a022375ca8": "d19da9c7a4b2f33aacce03a5b98c0d59",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/b3c8f79620a65c03fb62e5a409f74b8f56c1b2": "0b9e373de5356fa0bed7591a1d600c8e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/5302eafa2492a1670ad6fb6f3f760f3e03ff86": "e33835cf7aa402e0c7f24d54bbdb0d84",
".git/objects/f2/962cc50cf86659907d2df601f6f37cd610c635": "58f65d40a725efbbb396072267367b31",
".git/objects/fe/18094638017084e1f55ee193ee7bd1d193b034": "25b79d987bd23dbbeb07827db5b735c4",
".git/objects/c1/cee1dfa6e425263549a7174c71e3ec5f47e8dc": "025caf41730793c8f6e985ea9eced173",
".git/objects/7c/c72a74fd42c8cb054362ea48af24e3f6f6e349": "b7094aa791a58e9d910bf397c7339765",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/1f/047b6f3028fe0d7d07069305c983f161b05a8c": "8170f8515e8a3e1fe4c397ef0e1a716f",
".git/objects/87/c0bdbcc3c263d2729d55cd77902bd14bb4006a": "067887e49885c20f806daebf64d64423",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/ff2d8f2c614560c01a5589d18d78fee4236e40": "c52fd39fca9c140196f722352ee0b518",
".git/objects/4d/77843604e01aaacfd14d7554e48593b5e5c81e": "4cd2f1641c98c291474241a827f01d3a",
".git/objects/4d/ad242a46375401104a70cf2b6c70ec8fcda835": "05a7e2059f9605a4d6f2482d9bc9550d",
".git/objects/43/e6ed20d74bd669e32eb13a2a05eab6edbefc4e": "c5e20ca8ec2d2ca3d0a399a3ef4a66b2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/e04507db844f98703a28b60a42470a0726fd10": "401a4f64aec987739d9ae3229c16a7ee",
".git/objects/91/9ade4f5b46aca13edfb3e24f4e6da3c36002eb": "e64bfa1e019cadd1de2f746f02390d17",
".git/objects/62/25fa5298f6818d266217670b8d7dda4e803c3c": "a85ed12e62fee747992b4174e67cbddc",
".git/objects/98/3aa4af14cadf87b7ade83c20bcde9dfe29c0da": "9839d1582266ef26a04c071fd7834bfd",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/97/052b3c812910539bda5ad4bceb8d6f68b71e41": "e3f4a925332cadf08b90bf497765c4af",
".git/objects/97/7375f5f0b2d57c851618d81abb50b9e28469e6": "173613d5c12675b4fb7bad518619650b",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/d3/8b65eeb2d290d61f0e8b768007d6ddc3185c9d": "808bd1deeb4c1e879421e25e5050585e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/00d8d888c141d66d302fd4c0184faf4640cc52": "d51e67ef6081b39ad36f7bf7290839f9",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/56d813c8a397d7ed06840bdb78b0814c5195cf": "0962b9188afe4ba188daff8ea5dca344",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f0/aa5c5c32ee2e653ca7dc9337bb8867347dd22a": "3b04449b628b70ac5e17f2ba35497536",
".git/objects/f8/a293470da81ca26d7ada1e8956e299679c2879": "b6090a87cfee53b327103f755d672d75",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/f15210eae209dff6f127a36eb724c7513771dd": "b6546017e9bb1372fc379d586a2c7730",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/99545b43fcdad451fb3b08586b507ad30d05c8": "a999c4ec1f5be50e7768c473eaf8dc85",
".git/objects/48/bc3c50d85820421f36c2114d4bd1b88d7652c1": "d96a317b8a506c95fccf299bf95c6a0e",
".git/objects/84/e7181b27181a4b1082ff2b6574d79529510e97": "25fa124e2f1f4b4c49cebb6110e89d49",
".git/objects/8c/bc578a163443cbd00decb2f165956284afc384": "441c007144012464dac72c600a6e854b",
".git/objects/82/43bd1629db11886fc7ddffd15b8efb770b2399": "a6ee4bfa88ec25695c65ace14bc96832",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/7f/2c67461bcf6ffe9d0dc7b92b5e2487c543bcd2": "f25217bbd305ffbd347d32d5a701d1f2",
".git/HEAD": "dfebbe193e255e26c1b45fa445375b01",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d967206b1e876d31d0982934e28a9e70",
".git/logs/refs/heads/release": "008630b26d25bdfe1e38290a3f472b13",
".git/logs/refs/heads/main": "134d44f689273c3a847de138a007ed00",
".git/logs/refs/remotes/origin/release": "0dbd02485494ca9302c7e175fd199e41",
".git/logs/refs/remotes/origin/main": "8e27bdd37255ce81984df9b25aafc0e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/release": "901af136421b59bbe6cca65155d81ef3",
".git/refs/heads/main": "0dfa409540a42e12ea287d4b5dd8a7f7",
".git/refs/remotes/origin/release": "901af136421b59bbe6cca65155d81ef3",
".git/refs/remotes/origin/main": "b73bc302e0d5a8df375687048f4ae857",
".git/index": "718a4277040256ea7f9d984482a10a8d",
".git/COMMIT_EDITMSG": "8e9b04dd8d0db83b32479b66ab3a8dd6",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/images/placeholder_logo.jpeg": "b5396636f21edd778024a75728588f16",
"assets/AssetManifest.json": "2ebfbb5e2cb804eee3e0bc4ba9f05174",
"assets/NOTICES": "edc422ceab08b593cd990d0aa290f9f1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "0f2007b20d29ef3259dfb6625c393334",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

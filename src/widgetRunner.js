const baseUrl = '/*@BASE_URL*/';
const fileNames = [/*@FILE_NAMES*/]; // This array is filled by webpack

function createDomNode(filename, onLoad = false) {
  const isJsFile = /\.js$/.test(filename);
  let node;

  if(isJsFile) {
    node = document.createElement('script');

    node.type = 'text/javascript';
    node.src = `${baseUrl}/${filename}`;
  }
  else {
    node = document.createElement('link');

    node.rel = 'stylesheet';
    node.href = `${baseUrl}/${filename}`;
  }

  if(onLoad) {
    node.onload = onLoad;
  }

  return node;
}

let loadedFilesAmount = 0;

for(const fileName of fileNames) {
  const node = createDomNode(fileName, () => {
    loadedFilesAmount++;

    // eslint-disable-next-line
    console.log('loaded', loadedFilesAmount + '/' + fileNames.length);

    if(loadedFilesAmount === fileNames.length) {
      // eslint-disable-next-line
      console.log('all done');

      if(window.initLotto) {
        window.initLotto(window.lotto);
      }
    }
  });

  document.body.appendChild(node);
}

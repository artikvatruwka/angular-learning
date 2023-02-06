const chokidar = require('chokidar');
const _ = require('lodash');
const fs = require('fs');

const  allowedFilenames = ['.svg', '.png', '.jpg', '.webm','.gif','.mp4','.mp3'];
const items = [];

const saveAssetTypes = _.debounce(() => {
  fs.writeFileSync('./src/assets/assets.ts',`export const assets = ${JSON.stringify(items, null, 2).replaceAll(`\\\\`,'/')} as const;` )
  console.log(new Date().toISOString(), 'assets updated' )
},3000);
  

chokidar.watch('./src/assets').on('add', (path ) => {
  if(  allowedFilenames.some((ext)=>path.endsWith(ext)) ) {
    items.push(path.replace('src',''));
  }
  saveAssetTypes();
}).on('unlink',(path)=>{
  items.filter(item=>item!==path);
  saveAssetTypes()
});
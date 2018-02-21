var thumb = require('node-thumbnail').thumb;
 
// thumb(options, callback);
 
thumb({
  source: 'contents/images/gallery', // could be a filename: dest/path/image.jpg
  destination: 'contents/images/gallery/thumbs',
  concurrency: 4
}, function(files, err, stdout, stderr) {
  console.log('All done!');
});
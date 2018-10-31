const AWS = require('aws-sdk');
AWS.config.update({region: 'ap-south-1'});
var rekognition = new AWS.Rekognition();


var params = {
    CollectionId: 'Test',
    Image: {
      S3Object: {
        Bucket: 'bucketname',
        Name: 'image.jpg',
      }
    },
    FaceMatchThreshold: 70,
    MaxFaces: 10
  };
  for (i = 0; i < 2; i++){
  rekognition.searchFacesByImage(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data.FaceMatches); // successful response
  });
}

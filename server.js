const AWS = require('aws-sdk');
AWS.config.update({region: 'ap-south-1'});
var rekognition = new AWS.Rekognition();

// var params = {
//     CollectionId: "Test"
//    };
//    rekognition.createCollection(params, function(err, data) {
//      if (err) console.log(err, err.stack); // an error occurred
//      else     console.log(data);           // successful response
//    });

var params = {
    CollectionId: "Test", 
    DetectionAttributes: [
    ], 
    ExternalImageId: "shrey", 
    Image: {
     S3Object: {
      Bucket: "harshkibucket123",
      Name: "Shrey.jpg"
     }
    }
   };
   rekognition.indexFaces(params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(data.FaceRecords);
    });


// var params = {
//   CollectionId: 'Test' /* required */
// };
// rekognition.deleteCollection(params, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
// });


// var params = {
//   CollectionId: 'Rootsapp' /* required */
// };
// rekognition.describeCollection(params, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
// });

// var params = {
//   CollectionId: 'Test', 
//   FaceIds: [ 
//     'b10ed30c-ca63-4d30-acb9-d1ad102bfc18'
//   ]
// };
// rekognition.deleteFaces(params, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
// });

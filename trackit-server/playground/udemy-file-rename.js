const fs = require("fs");
const _ = require("lodash");

const videosFolder =
  "C:\\Users\\HAREESHPolla\\Downloads\\Video\\GCP- Complete Google Data Engineer and Cloud Architect Guide";
const namesFile =
  "C:\\Users\\HAREESHPolla\\Downloads\\Video\\GCP- Complete Google Data Engineer and Cloud Architect Guide\\names.txt";

const fileNamePrefix =
  "GCP- Complete Google Data Engineer and Cloud Architect Guide_";

if (!fs.existsSync(namesFile)) {
  console.log("could not find names file", namesFile);
  return;
}
console.log("found names file", namesFile);

//read whole data from file
var names = fs.readFileSync(namesFile, "utf8");

//filenames as array
var names = _.split(names, "\r\n");

//number file names
var names = names.map((name, idx) => {
  idx++; //index starts with 0, our names must start with 1
  var sIdx = (idx < 10 ? "00" : idx < 100 ? "0" : "") + idx + ". ";
  return sIdx + name;
});
console.log(names);

//read files from given folder
var files = fs.readdirSync(videosFolder);

//optional - correct filenames
// files.forEach(file => {
//   var suffix = file.split(fileNamePrefix)[1];
//   if (!suffix) return;
//   suffix = suffix.split(".");
//   var idx = Number.parseInt(suffix[0]);
//   if (idx < 45) return;
//   console.log(file, " -> ", fileNamePrefix + (idx - 1) + "." + suffix[1]);
//   fs.renameSync(
//     videosFolder + "\\" + file,
//     videosFolder + "\\" + fileNamePrefix + (idx - 1) + "." + suffix[1]
//   );
// });

//prepare file names map { old, new}
var namesMap = files.map(file => {
  var suffix = file.split(fileNamePrefix)[1];
  if (!suffix) return;
  suffix = suffix.split(".");
  var idx = Number.parseInt(suffix[0]) - 2;
  // console.log(file, " -> ", names[idx] + "." + suffix[1]);
  return { old: file, new: names[idx] + "." + suffix[1] };
});
console.log(namesMap);

namesMap.forEach(map => {
  if (!map) return;
  //console.log(map); //print out the map

  //logic to rename the files
  fs.renameSync(videosFolder + "\\" + map.old, videosFolder + "\\" + map.new);
});
console.log("files renamed");

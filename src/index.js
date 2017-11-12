// import _ from "lodash";
// import './style.css';
// import Icon from './icon.png';
// import Data from './sample-csv.csv';
import printMe from "./print.js";

// function component() {
 // function getComponent() {
 async function getComponent() {

  // var element = document.createElement("div");
  // var btn = document.createElement("button");

  // Lodash, now imported by this script
  // element.innerHTML = _.join(["Hello", "webpack"], " ");
  // element.classList.add("hello");
  // Add the image to our existing div.
  // var myIcon = new Image();
  // myIcon.src = Icon;
  //
  // element.appendChild(myIcon);
  // console.log(Data);
//   btn.innerHTML = "Click me and check the console page!";
//   btn.onclick = printMe;
//
//   element.appendChild(btn);
//   return element;
// }

// return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//      var element = document.createElement('div');
//
//      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//
//      return element;
//
//    }).catch(error => 'An error occurred while loading the component');
var element = document.createElement('div');
   const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
}

// document.body.appendChild(component());
getComponent().then(component => {
   document.body.appendChild(component);
 })

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let generateDomain = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".org", ".com", ".us", ".net"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let adjIndx = Math.floor(Math.random() * adj.length);
  let nounIndx = Math.floor(Math.random() * noun.length);
  let domainIndx = Math.floor(Math.random() * domain.length);

  return (
    pronoun[proIndx] +
    "" +
    adj[adjIndx] +
    "" +
    noun[nounIndx] +
    "" +
    domain[domainIndx]
  );
};

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-domain").innerHTML = generateDomain();
  });
  console.log("Hello Rigo from the console!");
};

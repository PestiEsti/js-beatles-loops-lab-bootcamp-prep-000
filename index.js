// add solution here
function theBeatlesPlay (musicians,instruments){
  let output = [];
  
  for(let i=0;i<musicians.length;i++) {
    output.push(musicians[i]+" plays "+instruments[i]);
  }
  return(output);
}

function johnLennonFacts (facts){
  let i=0;
  while(i<facts.length) {
    facts[i]=facts[i]+"!!!";
    i++
  }
  return(facts);
}
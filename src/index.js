module.exports = function check(str, bracketsConfig) {
  var pop = {};
  var stack = [];
  for(var open = 0; open<bracketsConfig.length; open++){
        pop[bracketsConfig[open][1]] = bracketsConfig[open][0];
}
    for(var i=0;i<str.length;i++){
        var char = str.charAt(i);
        if(!pop[char] && char !=='|' && typeof char !== 'number'){
            stack.push(char);
        }
        else if(pop[char]==char && !stack.includes(char)){
            stack.push(char);
        }
        else if(pop[char]==char && stack.includes(char)){
            if(stack.pop()!=pop[char]) return false;
        }
        else{
            if(stack.length==0 || stack.pop()!=pop[char])return false;
        }
    }
    return stack.length==0?true:false;
}


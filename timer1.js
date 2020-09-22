let args = process.argv;

const timer1 = function(n) { //n is a string
  if(n.length != 0) {
    speed = 0;
    n.sort();
    for (let i = 0; i < n.length; i++) {
      if (n[i] > 0) {
        setTimeout (() => { process.stdout.write('\007')}, speed += n[i]*100);}
        else { return;}
      } 
    }
  }; 

timer1(process.argv.slice(2));
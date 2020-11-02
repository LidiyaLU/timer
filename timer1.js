let args = process.argv.slice(2);


  if(args.length != 0) {
    speed = 0;
    for (let i = 0; i < args.length; i++) {
      if (args[i] > 0) {
        setTimeout (() => { process.stdout.write('\007')}, speed += args[i]*100);}
        else { return;}
      } 
    }
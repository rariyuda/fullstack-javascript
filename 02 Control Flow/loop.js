// Using for loop, Print name from 0 through 100, but every multiple of 8 print Woohoo!
for (let i=0; i<=100; i++){
    if (i%8 == 0){
        console.log("Wohoo!")
    }
    else{
        console.log("Kremi Jowo",i)
    }
}

// Using While, Print name 100 times, start printing from 10.
let i = 10;
while(i < 100){
    console.log(i, "Kremi Jowo");
    i++;
}

// Using Do While, Print hello world 400 times, start from 20.
let idx = 20;
do {
    console.log(idx,"Kremijowo",idx);
    idx++;
} while (idx <= 400)
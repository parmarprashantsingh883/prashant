let marks=[100,90,70,80,96,59]
sum=0;
for(let i=0; i<marks.length; i++)
    sum=sum+marks[i];
    console.log( "the tole is" + " " +sum);

    let movies=['war','master','st','vikram','money heist'];
    console.log(movies);

    // push method

    movies.push('got');
    console.log(movies);
    // shift method
    movies.shift();
    console.log(movies);
    // map function to turn uppercase
    var moviesupper= movies.map(movies => movies.toUpperCase());
    console.log(moviesupper);
    
    let newmarks=marks.slice(1,3);
    console.log(newmarks);
    let sent=["hello" ,"everyone"]
    let newsent=sent.slice(0,2)
    console.log(newsent)
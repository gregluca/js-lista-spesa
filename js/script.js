
    const list = ["mele","pere","detersivo","carta"];
    console.log(list);

    let i = 0;
    let listString = "";

    while (i < list.length) {
        let curList = list[i];
        i++;
        console.log(curList);

        listString += `<li>${curList}</li>`;
    }
 
    document.querySelector("ul").innerHTML = listString;
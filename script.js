const myLibrary = [];

function Book(title,author,rating,uuid,read) {
    this.title = title;
    this.author = author;
    this.rating = rating;
    this.uuid = uuid;
    this.read = read;
    
}
let x;
let y;
let z;
let j = 0;
let check;

function add(name,writer,review,reading) {
    this.name = name;
    this.writer = writer;
    this.review = review;
    this.reading = reading;
    

    one_id = self.crypto.randomUUID();
    
  
    
   
    const one  = new Book(name,writer,review,one_id,reading);
    
    

    
    myLibrary.push(one);
    console.log(myLibrary);
}

function displays() {
   
       
            /*const table = document.createElement("table");
            
            const title1 = table.insertRow();
            const nameheader = title1.insertCell();
            const authorheader = title1.insertCell();
            const ratingheader = title1.insertCell();
            nameheader.innerText = "Title";
            authorheader.innerText = "Author";
            ratingheader.innerText = "Rating(1-10)";

            table.classList.add("rows");
            dip.appendChild(table); */
            
            
            const table = document.querySelector(".rows");
             while (table.rows.length > 1) {
        table.deleteRow(1);
    }
            const table_width = dip.clientWidth;
            table.style.width = (table_width- 40) + "px";
        
        for(let i = 0; i<myLibrary.length ; i++) {
        
       // console.log(myLibrary[i].title);
        /*if (dip.textContent == "") {
            row.textContent = myLibrary[i].title;
            console.log(row.textContent);


        } */
            const row = table.insertRow();
         
            
            const namecell = row.insertCell();
            const authorcell = row.insertCell();
            const ratingcell = row.insertCell();
            const habits = row.insertCell();
            var toggle = document.createElement("button");
            toggle.type = "button";
            toggle.id = "toggle";
            toggle.textContent = "Read";
            toggle.style.backgroundColor = "yellow"
            toggle.style.color = "black";
            toggle.value = myLibrary[i].uuid;
            habits.appendChild(toggle);

            toggle.addEventListener("click",() => {
               if(myLibrary[i].read == "yes") {
                myLibrary[i].read = "no";
                row.style.backgroundColor = "rgb(255,49,49)";
               }
               else {
                myLibrary[i].read = "yes";
                row.style.backgroundColor = "lightgreen";
               } 
            });

            

            namecell.innerText = myLibrary[i].title;
            namecell.style.fontweight = "bold";
            authorcell.innerText = myLibrary[i].author;
            ratingcell.innerText = myLibrary[i].rating;
            if (myLibrary[i].read == "yes") {
                row.style.backgroundColor = "lightgreen";
            }
            else {
                row.style.backgroundColor = "red";
            }
            
            

            
            /*row.textContent = `\nTitle: ${myLibrary[i].title}\nAuthor: ${myLibrary[i].author}\nRating: ${myLibrary[i].rating}`;
            console.log(row.textContent); */
        
            
    }
    
}

function remove_display() {
    const table2 = document.querySelector(".around");
    while(table2.rows.length > 1) {
        table2.deleteRow(1);

    }
    const table2_width = out.clientWidth;
    table2.style.width = (table2_width - 40) + "px";
    for (let i = 0; i< myLibrary.length ; i++) {
        const row2 = table2.insertRow();
        const namecell = row2.insertCell();
        const authorcell = row2.insertCell();
        const delete1 = row2.insertCell();
        
        namecell.innerText = myLibrary[i].title;
        authorcell.innerText = myLibrary[i].author;
        const check1 = document.createElement("button");
        check1.id = "check1";
        check1.textContent = "Delete";
        check1.style.backgroundColor = "red"
        check1.style.color = "white";
        check1.value = myLibrary[i].uuid;
        delete1.appendChild(check1);
    }
       const checks2 = document.querySelectorAll("#check1");
        checks2.forEach((check1) => {
            check1.addEventListener("click",() => {
               for(let j = 0; j < myLibrary.length ; j++) {
                    check1.value = myLibrary[j].uuid;
                    if (check1.value == myLibrary[j].uuid) {
                        myLibrary.splice(j,1);
                        console.log(myLibrary);
                        table2.deleteRow(j+1);
                        
                    }
                    break;
            }
                
            });
        });
        
        
        
    
   

}


  





var slider = document.querySelector("#rating");
var checkbox = document.querySelector("#read");

var slider_value = document.querySelector("#value");

const closer = document.querySelector("#submit");

slider_value.textContent = slider.value;
let nameof = document.querySelector("#nameof");

let author = document.querySelector("#authorn")
const display = document.querySelector(".display");
const dialog1 = document.querySelector("#now");
const form1 = document.querySelector("#ori");
const dip = document.querySelector("#dip");
const new1 = document.querySelector(".new");
const remove = document.querySelector(".remove");
const out = document.querySelector("#out");
const dip1 = document.querySelector("#dip1");
const done = document.querySelector(".done");
const removal = document.querySelector(".removal");

new1.addEventListener("click",() => {
   
    dialog1.showModal();
});
nameof.addEventListener("input",() => {
    x = nameof.value;
    // console.log(x);
});

author.addEventListener("input",() => {
    y = author.value;
    // console.log(y);
});

slider.addEventListener("input",() => {
    slider_value.textContent = slider.value;
    z = slider_value.textContent;
   // console.log(z);
});

closer.addEventListener("click",(event) => {
    event.preventDefault();
   /* alert(x);
    alert(y);
    alert(z); */
    if (checkbox.checked == true) {
        check = "yes";

    }
    else {
        check = "no";
    }
    add(x,y,z,check);
    
    
    form1.reset();
    dialog1.close();
});

display.addEventListener("click",() => {
    if (myLibrary.length > 0 ) {
    
    dip.showModal();
    displays();
    
    
    

}
    
    
});

done.addEventListener("click",() => {
    dip1.reset();
    dip.close();
});

remove.addEventListener("click",() => {
    if (myLibrary.length > 0) {
    out.showModal();
    remove_display();
    }
});

removal.addEventListener("click",() => {
    out.close();
});




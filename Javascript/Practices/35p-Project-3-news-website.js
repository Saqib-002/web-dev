// my api key 
// 06333d389ca44c27a19028a7acc489fa

let newselem=document.getElementById('news');

let xhr=new XMLHttpRequest();
let source="bbc-news";
let apiKey='06333d389ca44c27a19028a7acc489fa';
xhr.open("GET",`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,true);

xhr.onload=function(){
    if(this.status==200)
    {
        let json=JSON.parse(this.responseText);
        let articles=json['articles'];
        console.log(json);
        console.log(articles);
        let news='';
        articles.forEach((element,index) => {
            news+=`<p>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample${index}" aria-expanded="false" aria-controls="collapseWidthExample${index}">
            ${element.title}
            </button>
            </p>
            <div ">
            <div class="collapse collapse-verticle" id="collapseWidthExample${index}">
            <div class="card card-body my-5" >
              ${element.content}
            </div>
            </div>
            </div>`
        
        });
        newselem.innerHTML=news;
    }
    else{

    }
}

xhr.send();





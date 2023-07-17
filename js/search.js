'use strict';

window.SearchApp = {
  output: document.getElementById("output"),
  searchData: {},
  searchIndex: {},
};

// Retrieve the query value from the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('query');

axios.get('/search/index.json', {
  params: {
    query: query,
  },
})
  .then(result => {
    SearchApp.searchData = result.data;
    SearchApp.searchIndex = lunr(function () {
      this.ref('href');
      this.field('title');
      this.field('body');
      result.data.results.forEach(e => {
        this.add(e);
      });
    });

    let resultList = SearchApp.searchIndex.search(query);
    let list = [];
    let results = resultList.map(entry => {
      SearchApp.searchData.results.filter(d => {
        if (entry.ref == d.href) {
          list.push(d);
        }
      });
    });
    display(list);
  });

function display(list) {
  SearchApp.output.innerText = '';
  if (list.length > 0) {
    const ul = document.createElement("ul");
    ul.classList.add("mod-nav-items");
    list.forEach(el => {
      const li = document.createElement("li");
      li.classList.add("mod-nav-item");
      const a = document.createElement("a");
      a.href = el.href;
      a.text = el.title;
      li.appendChild(a);
      ul.appendChild(li);
      
    });
    
    SearchApp.output.appendChild(ul);
  } else {
    SearchApp.output.innerHTML = "Nothing found";
  }
}
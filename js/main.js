
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  const paginator = new Paginator(defaultList, 8);
  const pageController = new PageController(paginator);

  // self defined render items function
  const paginatorRenderFunction = (listItems) => {
    console.log("render", listItems);
    const contentHolder = document.querySelector(".page_content");
    contentHolder.innerHTML = "";
    for(let item of listItems) {
      contentHolder.appendChild(createElementFromHTML(`<div id="list_item_${item.id}">${item.content}</div>`));
    }
  }
  // set render function for paginator class
  paginator.setRenderContentFunction(paginatorRenderFunction);

  // render initial index
  paginator.renderPageIndex(0);
  pageController.displayPageItems(document.querySelector(".page_index_holder"))
});

function createElementFromHTML(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
}

const defaultList = []
for(let i = 0; i < 50; ++i) {
  defaultList.push({id: i, content: `number_${i}`})
}

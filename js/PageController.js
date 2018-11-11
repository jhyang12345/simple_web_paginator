class PageController {
  constructor(paginator) {
    this.paginator = paginator;
    this.init();
  }

  init() {
    const itemCount = this.paginator.itemList.length
    this.pageCount = Math.ceil(itemCount / this.paginator.itemPerPage);
    this.pageitemContainer = createElementFromHTML(`<div></div>`)
    for(let i = 0; i < this.pageCount; ++i) {
      this.pageitemContainer.appendChild(this.createPageIndexElement(i))
    }
  }

  createPageIndexElement(index) {
    const elementHTML = `<a id="element_${index}">${index}</a>`
    const elem = createElementFromHTML(elementHTML);
    elem.addEventListener("click", (evt) => {
      console.log(index, "clicked")
      this.dispatchPageRenderRequest(index);
    });
    return elem
  }

  dispatchPageRenderRequest(index) {
    this.paginator.renderPageIndex(index)
  }

  displayPageItems(elem) {
    elem.appendChild(this.pageitemContainer)
  }

}

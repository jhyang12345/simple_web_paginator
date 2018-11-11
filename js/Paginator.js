class Paginator {
  constructor(itemList = [], itemPerPage = 3) {
    this.itemList = itemList
    this.itemPerPage = itemPerPage
    this.renderContent = (pageIndex) => {}
    this.pageController = undefined;
  }

  // renderFunction takes in a list of selected elements
  setRenderContentFunction(renderFunction) {
    this.renderContent = renderFunction;
  }

  renderPageIndex(pageIndex) {
    const startIndex = this.itemPerPage * pageIndex;
    const endIndex = Math.min(this.itemList.length, startIndex + this.itemPerPage);
    this.renderContent(this.itemList.slice(startIndex, endIndex));
  }

  setPageController(pageController) {
    this.pageController = pageController;
  }

}

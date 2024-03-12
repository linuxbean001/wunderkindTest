const fnLoadInfo = function externalLoadMore(
  displayedItems,
  qty,
  itemList,
  loadMore = false
) {
  let itemsToDisplay =
    displayedItems?.length > 0 && loadMore
      ? displayedItems.concat(
          itemList.slice(displayedItems.length, displayedItems.length + qty)
        )
      : itemList.slice(0, qty);

  return {
    itemsToDisplay,
    isThereMore: itemList.length > itemsToDisplay.length,
  };
};

export default fnLoadInfo;

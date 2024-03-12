function GetHeaderFooterDataPages(data) {
  return {
    header:
      data?.wordPress?.hPageTemplates.nodes[0].hPages.nodes[0].hPageLayouts
        .header,
    footer:
      data?.wordPress?.hPageTemplates.nodes[0].hPages.nodes[0].hPageLayouts
        .footer,
  };
}
export default GetHeaderFooterDataPages;

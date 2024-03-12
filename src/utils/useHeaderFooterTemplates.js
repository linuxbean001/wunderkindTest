function GetHeaderFooterDataTemplates(data) {
  return {
    header: data.wordPress.hPageBy.hPageLayouts.header,
    footer: data.wordPress.hPageBy.hPageLayouts.footer,
  };
}
export default GetHeaderFooterDataTemplates;

const resourcesCategoriesUrlMap = new Map([
    ['case-study', 'case-studies'],
    ['research-study', 'research-study'],
    ['guide', 'guides'],
    ['webinar', 'webinars'],
    ['podcast', 'podcasts'],
    ['c-suite-series', 'csuite-series'],
    ['podcast', 'podcasts'],
]);

export const getResourceUrlPath = (slug, category = '') => {
    const mappedCategory = resourcesCategoriesUrlMap.get(category);
    return mappedCategory ? `/resources/${mappedCategory}/${slug}/` : `/resources/${slug}/`;
}
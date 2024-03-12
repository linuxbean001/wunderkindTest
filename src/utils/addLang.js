function leftTrim(string) {
  return string.replace(/^\/+/, "");
}

export function AddLang(url, lang) {
  if (
    url &&
    !(
      url.indexOf("http://") === 0 ||
      url.indexOf("https://") === 0 ||
      url.indexOf("#") === 0
    )
  ) {
    url = lang === "uk" ? "/uk/" + leftTrim(url) : url;
  }

  return url;
}

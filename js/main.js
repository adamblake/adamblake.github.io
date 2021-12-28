function main() {
  // make social links open in new windows
  document
    .querySelectorAll(
      [
        "body > nav > div > div.collapse.navbar-collapse > ul.nav.navbar-nav.navbar-right > li:nth-child(2) > a",
        "body > nav > div > div.collapse.navbar-collapse > ul.nav.navbar-nav.navbar-right > li:nth-child(3) > a",
        "body > nav > div > div.collapse.navbar-collapse > ul.nav.navbar-nav.navbar-right > li:nth-child(4) > a",
      ].join(",")
    )
    .forEach((link) => link.setAttribute("target", "_blank"));
}

if (document.readyState !== "loading") {
  main();
} else {
  document.addEventListener("DOMContentLoaded", main);
}

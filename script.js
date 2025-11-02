//your JS code here. If required.
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000); 
  document.cookie = `fontsize=${fontSize}; expires=${d.toUTCString()}; path=/`;
  document.cookie = `fontcolor=${fontColor}; expires=${d.toUTCString()}; path=/`;

  document.documentElement.style.setProperty("--fontsize", fontSize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontColor);
});

window.addEventListener("load", () => {
  const cookies = document.cookie.split("; ");
  let fontSize = "16";
  let fontColor = "#000000";

  cookies.forEach((c) => {
    const [key, value] = c.split("=");
    if (key === "fontsize") fontSize = value;
    if (key === "fontcolor") fontColor = value;
  });

  document.documentElement.style.setProperty("--fontsize", fontSize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontColor);

  document.getElementById("fontsize").value = fontSize;
  document.getElementById("fontcolor").value = fontColor;
});
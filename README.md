# html
Create HTML pages in pure JavaScript!

---
#### Status
![Dependencies](https://img.shields.io/badge/Dependencies-none-darklime.svg)
![Package Version](https://img.shields.io/github/package-json/v/olton/html)
![NPM Version](https://img.shields.io/npm/v/%40olton%2Fhtml)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?color=7852a9)
![Code size](https://img.shields.io/github/languages/code-size/olton/html.svg?color=830000)

---
## Install
```shell
npm i @olton/html
```

of use from `CDN`:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@olton/html@latest">
```

## Using
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="path-to/html.js"></script>
</head>
<body>

<script>
    ((() => {
        htmljs.extract()
        const body = document.querySelector("body")
        const root = document.createElement("main")
        body.appendChild(root)
        root.innerHTML = div(
            h1("Header"),
            form(
                label("Label", {class: "class1"}),
                input({type: "text", value:"123", data:{role: "input"}}),
                hr(),
                div(
                    button("Ok", {events: {onclick: "alert('Click Button')"}}),
                    button("Cancel", {type: "button"}),
                    {class: "actions"}
                )    
            )
        )
    })())
</script>
</body>
</html>
```

## Support

If you like this project, please consider supporting it by:

+ Star this repository on GitHub
+ Sponsor this project on GitHub Sponsors
+ **PayPal** to `serhii@pimenov.com.ua`.
+ [**Patreon**](https://www.patreon.com/metroui)
+ [**Buy me a coffee**](https://buymeacoffee.com/pimenov)

---

Copyright (c) 2025 by [Serhii Pimenov](https://pimenov.com.ua)
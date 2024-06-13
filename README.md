# html
Create HTML pages in JavaScript! Including all standard components, a Router for creating SPA, wrappers for awesome frameworks.

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
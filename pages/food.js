const food = document.querySelectorAll('iframe').forEach( item =>
    console.log(item.contentWindow.document.body.querySelectorAll('iframe'),
    item.contentWindow.document.body.style = "color: white; font-size: 18px;"
    )
  )

module.exports = food;
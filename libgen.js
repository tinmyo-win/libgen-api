const libgen = require('libgen');
(async () => {
    let urlString = await libgen.mirror()
    console.log(`${urlString} is currently fastest`)

    const options = {
        mirror: urlString,
        query: 'PHP for beginner',
        count: 2,
        fields: [
            "Title",
            {
              extension: "pdf" 
            }
          ],
        sort_by: 'year',
        reverse: true
    }


    try {
        const data = await libgen.search(options)
        let n = data.length
        console.log(`${n} results for "${options.query}"`)
        while (n--) {
            console.log('');
            console.log('Title: ' + data[n].title)
            console.log('Author: ' + data[n].author)
            console.log("Download: " +
            "http://gen.lib.rus.ec/book/index.php?md5=" +
            data[n].md5.toLowerCase())
        }
    } catch (err) {
        console.error(err)
    }
})()


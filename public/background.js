chrome.commands.onCommand.addListener(function (command) {
    var search_query = prompt(`Enter ${command} search`)
    if (search_query) {
        if (command === "Google") {
            var newURL = "https://www.google.com/search?q=" + search_query
            chrome.tabs.create({url: newURL})
        }
        if (command === 'Amazon') {
            var newURL = "http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=" + search_query
            chrome.tabs.create({url: newURL})
        }
        if (command === 'YouTube') {
            var newURL = "https://www.youtube.com/results?search_query=" + search_query
            chrome.tabs.create({url: newURL})
        }
        if (command === 'Reddit') {
            var newURL = "https://www.reddit.com/search/?q=" + search_query
            chrome.tabs.create({url: newURL})
        }
        if (command === "Google-Images") {
            var newURL = "https://www.google.com/search?tbm=isch&q=" + search_query
            chrome.tabs.create({url: newURL})
        }

    }
})
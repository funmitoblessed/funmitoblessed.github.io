# Feed Reader Testing App

In this project, a web-based application that reads RSS feeds is provided. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

This app consists of **Four** Test suites and **Seven** specs as follows:

## 1. RSS Feeds 
### specs
* `are defined`
test checks the `allFeeds` variable and ensures it has been defined and that it is not empty
* `each feed is defined`
test loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
* `each name is defined`
test loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.

## 2. The menu
### specs
* `menu is hidden`
test ensures the menu element is hidden by default.
* `menu changes`
test ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: ensures the menu display when clicked and that it hides when clicked again

## 3. Initial Entries
### specs
* `has at least one entry`
test ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.

## 4. New Feed Selection
### specs
* `changes content`
test ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.


## App Dependencies

- [jQuery 2.1.1](http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js)
- [Jasmine](http://jasmine.github.io/)
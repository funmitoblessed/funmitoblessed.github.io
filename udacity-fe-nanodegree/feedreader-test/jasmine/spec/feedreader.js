/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url is defined', function() {
            allFeeds.forEach(function(content, index) {
                expect(allFeeds[index].url).toBeDefined();
                expect(allFeeds[index].url.length).not.toBe(0);
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name is defined', function() {
            allFeeds.forEach(function(content, index) {
                expect(allFeeds[index].name).toBeDefined();
                expect(allFeeds[index].name.length).not.toBe(0);
            });
        });

    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('menu changes', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        // spec
        it('has at least one entry', function(done) {
            let feed = document.querySelector('.feed');
            expect(feed.children.length > 0).toBe(true);
            done();
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        const feed = document.querySelector('.feed');
        const feedOneList = [];

        beforeEach(function(done) {
            // Load first feed in the loadFeed Array
            loadFeed(0);
            // Make an array from links in first feed and 
            // push each link into the feedOneList Array
            // before loading second feed so we can compare
            Array.from(feed.children).forEach(function(link) {
                feedOneList.push(link.innerText);
            });
            // Load second feed in the array
            loadFeed(1, done);
        });


        it('changes content', function(done) {
            /*
             * Here, we must compare the loadFeed(1) children 
             * to the feedOneList equivalents to be sure they
             * are not equal
             */
            Array.from(feed.children).forEach(function(content, index) {
                expect(content.innerText === feedOneList[index]).toBe(false);
            });
            done();
        });

    });

}());
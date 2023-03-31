describe("test suite description - Hidden Button", () => {

    it('Find a button in the scroll view and record button click ', async () => {
        await browser.url('http://uitestingplayground.com/scrollbars');
        //resolved, pending, rejected
        // search for the button by its id
        const button = await browser.$('#hidingButton');

        // Confirm if the button exists
        const isExisting = await button.isExisting();
        console.log('The button exists ' + isExisting);

        // print if the button is clickable or not
        const isClickable = await button.isEnabled();
        console.log(`The button is clickable: ${isClickable}`);

        // click the button if it is clickable
        if (isExisting && isClickable) {
            await button.click();
        }
    });

    it('Automatically scroll the button into a visible area', async () => {
        await browser.url('http://uitestingplayground.com/scrollbars');
        //resolved, pending, rejected

        // Find the scrollable element
        const divScrollable = $('.container div[style*="height:150px;overflow-y: scroll;width:300px;overflow-x:scroll"]');

        // Find the button inside the scrollable element
        const hidingButton = divScrollable.$('#hidingButton');

        // Scroll the button to make sure it is visible
        hidingButton.scrollIntoView();

        // Click the button
        hidingButton.click();
    });

});


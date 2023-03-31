export default class Page {

    async open() {
        await browser.url('http://uitestingplayground.com/scrollbars/');
    }

    async open(path) {
        await browser.url(`/${path}`)

    }

}
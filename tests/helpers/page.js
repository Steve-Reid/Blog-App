const puppeteer = require("puppeteer");
const sessionFactory = require("../factories/sessionFactory");
const userFactory = require("../factories/userFactory");

class CustomPage {
  static async build() {
    const broswer = await puppeteer.launch({
      headless: false
    });

    const page = await broswer.newPage();
    const customPage = new CustomPage(page);

    return new Proxy(customPage, {
      get: function(target, property) {
        return customPage[property] || broswer[property] || page[property];
      } // browser needs priority over page as they both have a .close() property
    });
  }

  constructor(page) {
    this.page = page; // reference to new instance of page on customPage
  }

  async login() {
    const user = await userFactory();
    const { session, sig } = sessionFactory(user);

    // use page.goto prior to setCookie or set a domain key value pair
    await this.page.setCookie({ name: "session", value: session });
    await this.page.setCookie({ name: "session.sig", value: sig });
    await this.page.goto("localhost:3000/blogs"); // page refresh after setting credentials
    await this.page.waitFor('a[href="/auth/logout"]'); // waits for React to render element
  }

  async getContentsOf(selector) {
    return this.page.$eval(selector, el => el.innerHTML);
  }
}

module.exports = CustomPage;

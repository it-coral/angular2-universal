/*
 * TODO: ES5 for now until I make a webpack plugin for protractor
 */
// import WebElement = protractor.WebElement;
/*
import { protractor, browser, element, by } from 'protractor';
export const homeFooter = {
  load() {
    return browser.get('/#/');
  },


  clickTermsOfServiceLink: () => {
    return element(by.id('footer-tos-link')).click();
  },

  twitterLink() {
    return element(by.id('link-twitter')).getWebElement();
  },
  facebookLink() {
    return element(by.id('link-facebook')).getWebElement();
  },
  registerButtonFull() {
    return element(by.id('button-register-full')).getWebElement();
  },
  setFullWidthScreen() {
    browser.manage().window().setSize(1080, 1920);
  },
  setMobileScreen() {
    browser.manage().window().setSize(320, 480);
  }
};

var hasClass = function (element, cls) {
  return element.getAttribute('class').then(function (classes) {
    return classes.split(' ').indexOf(cls) !== -1;
  });
};



describe('Footer', () => {

  afterEach(() => {
    // verifyNoBrowserErrors();
  });

  describe('When in full-width mode', () => {
    beforeAll(() => {
      homeFooter.load();
      homeFooter.setFullWidthScreen();
    });

    describe('Twitter link', () => {
     it('should be displayed', () => {
        expect(homeFooter.twitterLink().isDisplayed()).toBe(true);
      });
      it('should link to contain the correct twitter link', () => {
        expect(homeFooter.twitterLink().getAttribute('href')).toBe('https://twitter.com/Must_Race_Com');
      });
      it('should contain the font awesome twitter icon', () => {
        expect(homeFooter.twitterLink().findElement(by.tagName('i')).getAttribute('class')).toBe('fa fa-twitter');
      });
    });

    describe('Facebook link', () => {
      it('should be displayed', () => {
        expect(homeFooter.facebookLink().isDisplayed()).toBe(true);
      });
      it('should link to contain the correct twitter link', () => {
        expect(homeFooter.facebookLink().getAttribute('href')).toBe('https://www.facebook.com/mustracecom/?fref=ts');
      });
      it('should contain the font awesome facebook-official icon', () => {
        expect(homeFooter.facebookLink().findElement(by.tagName('i')).getAttribute('class')).toBe('fa fa-facebook');
      });
    });
  });

  //describe('Email link', () => {
  //  it('should be displayed', () => {
  //    expect(page.emailLink().isDisplayed()).toBe(true);
  //  });
  //  it('should link to contain the correct mailto link', () => {
  //    expect(page.emailLink().getAttribute('href')).toBe('mailto:contact@mustrace.com?Subject=Hello%20again');
  //  });
  //  it('should contain the font awesome envelope icon', () => {
  //    expect(page.emailLink().findElement(by.tagName('i')).getAttribute('class')).toBe('fa fa-envelope');
  //  });
  //});


});
*/

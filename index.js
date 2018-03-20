const TIME_OUT_DEFAULT = 5000;

class Page {
   
     clickOn( element, timeout=TIME_OUT_DEFAULT ){
       browser.waitForVisible( element,timeout );
       browser.click( element );
     }
   
     sendValue( element, value, timeout=TIME_OUT_DEFAULT ){
       browser.waitForVisible( element, timeout );
       browser.setValue( element, value );
     }
   
     getValue(element, timeout = TIME_OUT_DEFAULT) {
       browser.waitForVisible(element, timeout);
       browser.getValue(element)
     }
   
     isElementVisible( element, reverse = false, timeout=TIME_OUT_DEFAULT ){
       browser.waitForVisible( element,timeout, reverse );
       return browser.isVisible( element );
    }
}
module.exports = Page;

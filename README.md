# WdioPageHelper
 This library is a Helper for WebDriverIO Tests.

## Usage 

  To install, execute the command:
```
 npm install wdio-helper --save-dev
 ```
*** 

### PAGE

First, import the module into your PageObject and extends Page:

```JavaScript
const Page = require('wdio-helper');

class MyNewPage extends Page{
  ...
}
```

* clickOn
```JavaScript
super.clickOn(element, timetout)
```
This method receives an element to click and a timeout (optional, default is 5000)


* setValue
```JavaScript
super.setValue(element, value, timeout)
```
This method receives an element, a value to set and a timeout (optional, default is 5000)

* getValue
```JavaScript
super.getValue(element, timeout)
```
This method return a value of a element and receives an element and a timeout (optional, default is 5000)

* isElementVisible
```JavaScript
super.isElementVisible(element, reverse,  timeout)
```
This method receives an element, boolean parameter reverse (if true it waits for the opposite, it's optional)  and a timeout (optional, default is 5000)
## Work in progress:
## Southside-Catering Home & Menu Pages 
- A proposed layout working with the requirements received for the Southside-Catering Home & Menu pages.
- Made to be simple & easily adaptable to changing context & business requirements.
- Design purposed for non technical owner to easily customise menu items using a text document.
---
## In order to view the current state of the design process: 
#### clone repo or download zip and run locally to view in the browser.

- **Home page:**<pre> Not yet optimized for mobile                      **X**</pre>
- **Food menu page:**<pre> Desktop & mobile responsive iframe grid menu      **√**</pre>


---
#### Dev notes:

##### Ref: Home Page
#### Context: (Images)
- Accredit all photographers work featured by names in this design which is using images sourced from unsplash.com
- Provide alternative image sizes for viewing on smaller devices with srcset attribute
- Instead of inline svg code implementation. Find url to replace equivalent whatsapp button logo svg
#### ALL PHOTOS USED FOR DEMONSTRATION ARE SOURCED FROM THE FREE TO USE UNSPLASH LIBRARY: https://unsplash.com/license


#### (Initial Page Load)
- `Lazy load` static assets

---
#### (Revisiting The Home Page)
etags - update & invalidate dynamic content  

`if new content has been submitted the next time the user revisits the Home page`

- Start pre-loading new data on Home page entry
 **`before`** user has visited the Food Menu (iframe page) 
- Invalidate data & update cache  

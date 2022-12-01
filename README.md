## Work in progress:
## Southside-Catering Home & Menu pages 
- A proposed layout working with the functional requirements received for the Southside-Catering Home & Menu pages.
- Made to be simple & easily adaptable to frequently changing context & business requirements.
- Design purposed for non technical owner to easily customise menu items using a text document.
---
## In order to view the current state of the design process... (Currently Desktop Only): 
#### clone repo or download zip and run locally to view in the browser.

- **Home page:**<pre> Not yet optimized for mobile                      **X**</pre>
- **Food menu page:**<pre> Desktop & mobile responsive iframe grid menu      **√**</pre>

---
#### Dev notes:

#### Ref: Home Page
#### Context: (Images)
- Cite unsplash photographer names here 
- Add alt tags
- Provide alternative image sizes for viewing on smaller devices with srcset attribute
- Find and use appropriate url for svg logo to replace current inline button whatsapp svg code implementation

#### Ref: Menu Page: 
#### Context: (Iframes) 
- Suggestion - Replace iframe method with a revised lighterweight alternative
###### else:
- Move iframe script into js file in directory or separate working folder to decouple from clientside logic

--- 
#### Subject: Static and dynamic asset loading optimizations using cache control:

#### Context: (Initial Page Load)
- `Lazy load` static assets

---
#### Context: (Revisiting The Home Page)
- Use etags to control cache updates & invalidation for dynamic assets  

- Check to see **if cache is still valid**
###### else `if (new content has been updated when the user revisits the Home page)`
- `Preload` new iframe data **`before`** user has visited the Food Menu(iframe page) - Then invalidate and update users cache

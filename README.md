## Work in progress:
## Southside-Catering Home & Menu pages 
- A proposed layout working with the functional requirements received for the Southside-Catering Home & Menu pages.
- Made to be simple & easily adaptable to frequently changing context & business requirements.
- Design purposed for non technical owner to easily customise menu items using a text document.
---
## In order to view the current state of the design process... (Currently Desktop Only): 
#### Please fork the repo or download zip and run locally to view in the browser.

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
#### Subject: Static and Dynamic Asset loading optimizations using cache control:

#### Context: On 1st Time (Initial Page Load)
- Lazy load static assets

---
#### Context: On 2nd Home Page: (Revisiting Page Load):
- Use etags to control cache updates with invalidation for evolving dynamic assets  

---
#### Context: On Every (Future Home Page Load):
- Check to see **if cache is still valid**
###### else if not valid (new content has been updated) when revisiting Home page
- preload new iframe data **`before`** user visits the Food Menu(iframe page) - update & invalidate cache 

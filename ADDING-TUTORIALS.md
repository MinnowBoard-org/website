## **NOTE:** This document is a work-in-progress.

## Adding new tutorials in **'tutorials'** section

## Primary Steps

1. Create a new directory in the following path ```/elements/tuto-reader/tutorials/``` (the name defined for that directory will be the reference to access to the tutorial thru the url, so we suggest to use the shortest word or phrase using dashes '-' instead of spaces in lowercase).

1. Inside the recently directory created must to be placed a file exactly named ```info.json```

1. The ```info.json``` file must to contain at least the properties ```content``` and ```img``` defined, see example below:
```json
  {
    "content": "docs/my-markdown-file.md",
    "img" : "elements/tuto-reader/tutorials/tutorial-n/my-image-file.jpg"
  }
```
Both properties are of type ```String```, the values expected are absolute urls where the specific files are located and are allowed to its access. For the case of the ```content``` property the url must to be a valid path for a markdown file wich contains all the content to render. And for the ```img``` property must to be a valid path for a image file wich gonna serve as a cover image over the general grid of tutorials (different extensions allowed, being .jpg and .png the most supported for all browsers).

1. Define your tutorial on the application ( in order to show in the grid and allow the access to the content thru the url), adding the name of the directory just inside the ```.items``` property inside the 'tutorials' section located on the file:```/pages/tutorials.html```.
The ```items``` propety is an ```Array``` of objects in JavaScript object notation (JSON). Example:
```javascript
items: {
  type: Array,
  notify: true,
  value: [
      {location: "tutorial-1"},
      {location: "totorial-2"},
      {location: "tutorial-3"}
    ]
}
```
If we want to add our new tutorial, we only need to add a new object ```{location: "tutorial-n"}``` on the ```Array```, in the position that we want to show it on the grid, (the grid shows the tutorials in the same order as the objects appears in the array) example:
```javascript
value: [
  {location: "tutorial-1"},
  {location: "totorial-2"},
  {location: "tutorial-3"},
  {location: "tutorial-n"}
 ];
```

To this point we should be able to see our new tutorial rendered on the grid in the next path ```tutorials``` in the same order as we defined on the ```items``` ```Array``` and access to the markdown content defined on the ```content``` property inside the ```info.json``` thru the next relative url ```tutorials/tutorial-n```.

## Adding extra information to tutorials

The only mandatory properties in the ```info.json``` in order to add a new tutorial to the app are only ```content``` and ```img```, with this 2 properties we ensure that we can show a cover image on the general grid of tutorials and we can show the proper content for the tutorial, but we can also add more information to increase the context of the tutorial, and the information will be rendered on a left sidebar at the same level of our tutrial output content. The extra information that can be added must to be encapsuled inside a new propety called ```meta``` at the same level of ```content``` and ```img```, and the kind of properties currently defined are explained on the following bullets:

1. **Author**: Information about authoring can be appended in an easy way, only we need to define that information in our ```info.json``` file adding a new property called ```author``` inside the  ```meta``` property, ```author``` property must contains in it the required properties ```name``` wich is the name of the person who created the tutorial, ```location``` string that expected to render the hometown or current city of the author, and ```img``` an absoulte url for an image file that serves as thumbnail or avatar picture of the author. See the example below of how to add the author's information to our tuturial:
```json
  {
    "content": "docs/my-markdown-file.md",
    "img" : "elements/tuto-reader/tutorials/tutorial-n/my-image-file.jpg",
    "meta": {
      "author": {
        "name": "The name of the author",
        "location": "Hometown or current city",
        "img": "https://www.images.com/my-avatar.jpg"
      }
    }
  }
```
The property ```meta.author``` is not required, but if is defined on the ```info.json``` the information will be rendered at the first slot on the left side bar if not  ```meta.abstract``` property is defined, or in other words that means that will be placed at the top on the sidebar.

1. **Info**: This property main function is add some meta data related with the tutorial (for example, the level required or expertise to accomplish the tutorial, a certain date, a specific board, or whatever value that is important to our tutorial), and render them as pairs of label and value ```{label}:{value}``` at the sidebar. The ```info``` property is an ```Array``` of objects, and all those objects inside must to contain the properties ```label``` and ```value``` where both properties are of type ```String``` and are open to the creator to set up or define the value to show. There is another example below of how to add extra data thru the ```meta.info``` property:
```json
  {
    "content": "docs/my-markdown-file.md",
    "img" : "elements/tuto-reader/tutorials/tutorial-n/my-image-file.jpg",
    "meta": {
      "author": {
        "name": "The name of the author",
        "location": "Hometown or current city",
        "img": "https://www.images.com/my-avatar.jpg"
      },
       "info": [
        {"label": "My custom label 1", "value": "My custom value 1"},
        {"label": "My custom label 2", "value": "My custom value 2"},
        {"label": "My custom label 3", "value": "My custom value 3"},
        {"label": "My custom label n", "value": "My custom value n"}
      ]
    }
  }
```
Each object on the array will be rendered in a row within a contianer at the sidebar just after the Author's information (if is defined) in the same order as the objects were defined in the array.

1. **Keywords**: This property is similar to the ```info``` property but its main function differs a little bit in comparison, due the main porpuse is to add some data and group that data by categories and show multi values in its own proper container, for example we can add a set of words that are related with an important topic to the tutorial. The ```meta.keywords``` property is an ```Array``` of objects, and all those objects inside must to contain the properties ```label``` and ```value``` where the ```label``` property is an ```String``` and ```value``` is an ```Array``` of Strings wich contains all the words related with the category placed on the label value. There is another example below of how to add extra data thru the ``meta.keywords``` property:
```json
  {
    "content": "docs/my-markdown-file.md",
    "img" : "elements/tuto-reader/tutorials/tutorial-n/my-image-file.jpg",
    "meta": {
      "author": {
        "name": "The name of the author",
        "location": "Hometown or current city",
        "img": "https://www.images.com/my-avatar.jpg"
      },
       "info": [
        {"label": "My custom label 1", "value": "My custom value 1"},
        {"label": "My custom label 2", "value": "My custom value 2"},
        {"label": "My custom label 3", "value": "My custom value 3"},
        {"label": "My custom label n", "value": "My custom value n"}
      ],
       "keywords": [
        {"label": "Category 1", "value": ["Category 1 word 1", "Category 1 word 2", "Category 1 word 3", "Category 1 word n"]},
        {"label": "Category 2", "value": ["Category 2 word 1", "Category 2 word 2", "Category 2 word 3", "Category 2 word n"]},
        {"label": "Category 3", "value": ["Category 3 word 1", "Category 3 word 2", "Category 3 word 3", "Category 3 word n"]},
        {"label": "Category n", "value": ["Category n word 1", "Category n word 2", "Category n word 3", "Category n word n"]}
      ]
    }
  }
```
Each object on the array will be rendered in as a container within the sidebar just after the Author's information (if is defined) and after the Info's container (if is defined as well), Putting the label as individual title of the container and placing all the words inside the contianer one besides the other in the same order as the objects and string were defined in the array.

1. **Abstract**: The main porpouse of this property is to add an extra paragraph or summary that is not wihin our main content, but We need to render on the lef sidbar. To add this extra paragraph we only need to add a new property inside the ```meta``` property on the  ```info.json``` file named exactly ```abstract```, We need to take care of this variable due its own value can be an ```String``` or can be an ```Object``` with the ```{"label": "My custom label", "value": "My abstract"}``` structure.
The difference defining an ```String``` instead an ```Object``` Will be that the title of the abstract section will be replaced with the title of the tutorial and the literal string will be the paragraph rendered. If we define this property as an object, the property ```label``` inside will be our custom title for the abstact, an the ```value``` property will be rendered as the paragraph.
The example below shows how to add an abstract as an ```String```:
```json
  {
    "content": "docs/my-markdown-file.md",
    "img" : "elements/tuto-reader/tutorials/tutorial-n/my-image-file.jpg",
    "meta": {
      "abstract": "This is a paragraph will be rendered on the top at leftsidebar menu",
      "author": {
        "name": "The name of the author",
        "location": "Hometown or current city",
        "img": "https://www.images.com/my-avatar.jpg"
      },
       "info": [
        {"label": "My custom label 1", "value": "My custom value 1"},
        {"label": "My custom label 2", "value": "My custom value 2"},
        {"label": "My custom label 3", "value": "My custom value 3"},
        {"label": "My custom label n", "value": "My custom value n"}
      ],
       "keywords": [
        {"label": "Category 1", "value": ["Category 1 word 1", "Category 1 word 2", "Category 1 word 3", "Category 1 word n"]},
        {"label": "Category 2", "value": ["Category 2 word 1", "Category 2 word 2", "Category 2 word 3", "Category 2 word n"]},
        {"label": "Category 3", "value": ["Category 3 word 1", "Category 3 word 2", "Category 3 word 3", "Category 3 word n"]},
        {"label": "Category n", "value": ["Category n word 1", "Category n word 2", "Category n word 3", "Category n word n"]}
      ]
    }
  }
```
The last example below demostrate how to add the abstract property with a custom title (As an Object):
```json
  {
    "content": "docs/my-markdown-file.md",
    "img" : "elements/tuto-reader/tutorials/tutorial-n/my-image-file.jpg",
    "meta": {
      "abstract": {"label": "My custom title", "value": "This is a paragraph will be rendered on the top at leftsidebar menu"},
      "author": {
        "name": "The name of the author",
        "location": "Hometown or current city",
        "img": "https://www.images.com/my-avatar.jpg"
      },
       "info": [
        {"label": "My custom label 1", "value": "My custom value 1"},
        {"label": "My custom label 2", "value": "My custom value 2"},
        {"label": "My custom label 3", "value": "My custom value 3"},
        {"label": "My custom label n", "value": "My custom value n"}
      ],
       "keywords": [
        {"label": "Category 1", "value": ["Category 1 word 1", "Category 1 word 2", "Category 1 word 3", "Category 1 word n"]},
        {"label": "Category 2", "value": ["Category 2 word 1", "Category 2 word 2", "Category 2 word 3", "Category 2 word n"]},
        {"label": "Category 3", "value": ["Category 3 word 1", "Category 3 word 2", "Category 3 word 3", "Category 3 word n"]},
        {"label": "Category n", "value": ["Category n word 1", "Category n word 2", "Category n word 3", "Category n word n"]}
      ]
    }
  }
```
If this section is defined, will be placed on the first position at the leftsidebar.

1. **Links**: The main purpose of this property is to add an extra section with links to other tutorials, other content inside or outside the minnnow site, in this section we can add any number of 
links as we need, there are no limits to add links, the only rules to add this section properly is write the property ```links``` inside the ```meta``` section in our ```info.json``` file, this 
property is an ```Object``` and recive 2 mandatory properties, ```label``` and ```value```, the first one is an ```String``` and render the title for the section, and the second one is an 
```Array``` of ```Objects``` where each object on the array must to contains the ```title``` and ```location``` properties, and also we can specify a ```target``` as optional, this objects 
represent the links itself. The title is our descriptive text for our link. If we specify the ```target``` property we can select the proper target from: ```_blank, _parent, _self, _top``` that 
are the values allowed for the attributte, if we don't specify the ```target``` in the object, our link will be opened in the same window/tab in the browser. Below is an example of how to add 
related links in the leftsidebar:

```json
  {
    "content": "docs/my-markdown-file.md",
    "img" : "elements/tuto-reader/tutorials/tutorial-n/my-image-file.jpg",
    "meta": {
      "abstract": {"label": "My custom title", "value": "This is a paragraph will be rendered on the top at leftsidebar menu"},
      "author": {
        "name": "The name of the author",
        "location": "Hometown or current city",
        "img": "https://www.images.com/my-avatar.jpg"
      },
       "info": [
        {"label": "My custom label 1", "value": "My custom value 1"},
        {"label": "My custom label 2", "value": "My custom value 2"},
        {"label": "My custom label 3", "value": "My custom value 3"},
        {"label": "My custom label n", "value": "My custom value n"}
      ],
       "keywords": [
        {"label": "Category 1", "value": ["Category 1 word 1", "Category 1 word 2", "Category 1 word 3", "Category 1 word n"]},
        {"label": "Category 2", "value": ["Category 2 word 1", "Category 2 word 2", "Category 2 word 3", "Category 2 word n"]},
        {"label": "Category 3", "value": ["Category 3 word 1", "Category 3 word 2", "Category 3 word 3", "Category 3 word n"]},
        {"label": "Category n", "value": ["Category n word 1", "Category n word 2", "Category n word 3", "Category n word n"]}
      ],
      "links": {
        "label": "Other links",
        "value": [
            {"title": "Link 1", "location": "http://www.google.com"},
            {"title": "Link 2", "location": "http://www.google.com", "target": "_blank"},
            {"title": "Link 3", "location": "http://www.google.com", "target": "_self"}
        ]
      }
    }
  }
```
If this section is defined, will be placed on the last position at the leftsidebar (bottom).

1. **Steps**: The porpouse of this section is to show following steps related with the tutorial, next steps can be other tutorials inside the minnow site or can be other page external. This property can be defined inside the ```meta``` as ```meta.steps``` is an ```Array``` of ```Objects```  with the structure ```{"title": "Next step", "description": "A breaf summary of the next step", "location": "http://next.step"}```, all properties inside the object are mandatory if we need to show the next step properly, below is an expample of how to add the next steps section:
```json
  {
    "content": "docs/my-markdown-file.md",
    "img" : "elements/tuto-reader/tutorials/tutorial-n/my-image-file.jpg",
    "meta": {
      "abstract": {"label": "My custom title", "value": "This is a paragraph will be rendered on the top at leftsidebar menu"},
      "author": {
        "name": "The name of the author",
        "location": "Hometown or current city",
        "img": "https://www.images.com/my-avatar.jpg"
      },
       "info": [
        {"label": "My custom label 1", "value": "My custom value 1"},
        {"label": "My custom label 2", "value": "My custom value 2"},
        {"label": "My custom label 3", "value": "My custom value 3"},
        {"label": "My custom label n", "value": "My custom value n"}
      ],
       "keywords": [
        {"label": "Category 1", "value": ["Category 1 word 1", "Category 1 word 2", "Category 1 word 3", "Category 1 word n"]},
        {"label": "Category 2", "value": ["Category 2 word 1", "Category 2 word 2", "Category 2 word 3", "Category 2 word n"]},
        {"label": "Category 3", "value": ["Category 3 word 1", "Category 3 word 2", "Category 3 word 3", "Category 3 word n"]},
        {"label": "Category n", "value": ["Category n word 1", "Category n word 2", "Category n word 3", "Category n word n"]}
      ],
      "links": {
        "label": "Other links",
        "value": [
            {"title": "Link 1", "location": "http://www.google.com"},
            {"title": "Link 2", "location": "http://www.google.com", "target": "_blank"},
            {"title": "Link 3", "location": "http://www.google.com", "target": "_self"}
        ]
      },
      "steps": [
          {"title": "Power up the MinnowBoard Turbot", "description": "bla","location": "tutorials/powering-on-minnowboardturbot"},
          {"title": "Update the firmware", "description": "bla", "location": "tutorials/updating_your_firmware"},
          {"title": "Blinking the Turbot D2 LED", "description": "bla","location": "tutorials/Turbot-blinkx"}
        ]
    }
  }
```
If this section is defined inside our ```info.json``` file, each item of our array will be displayed next to the main content of our tutorial at the bottom.

## Special specs to take in consideration

1. ```content``` propety is the most important part of the config in our ```info.json``` file, this property must to point to a markdown file in order to render the html output. The file pointed can be in any location whitin the application (minnow app domain), but we suggest keep following a structured form to locate the content.
1. ```img``` and ```meta.author.img``` must to be an absolute url that points an image file, that means that we can place an external url and render the cover image wherever the image file is located as long as we have the proper access to the file, anyway, we suggest the use of local images and upload the assets in the tutorial folder.
1. The extra info will be placed at the left sidebar wthin our tutorial **ONLY IF** we defined the ```meta``` property in our ```info.json``` file, if we don't define the ```meta``` property no left sidebar will be rendered.
1. Regardless the properties ```author```, ```info```, ```abstract``` and ```keywords``` are independent one from each other, is required to define them whitin the ```meta``` property, otherwise no side bar will be rendered in the tutorial content.
1. Tutorials are one long page and not a separate page for each step.
1. The general grid is the responsible to render all the collection of tutorials and plays an important role extracting information since the original markdown content in order to determine which portion of the content is the title of the totorial and apply some rules to extract a primal summary. The rules applied to determine both attributes will be explained below:
  1. **Title**: First heading found in the markdown content.
  1. **Summary**: First paragraph found after the first heading, and then is trimmed to 200 chars if the paragraph exeed the lenght.
  To Render the tutorial item in the grid properly we suggest to add at least one header in our markdown file and one paragraph after the first header.






Nyaya Health
=====================

This site is using Yeoman http://yeoman.io/

####  Local Version
``` 
git clone git@github.com:alhertz/nyaya-health.git
cd nyaya-health
grunt server
```
####  Deploy to Github Pages
Right now the gh-pages branch is set up as a subtree that you can deploy too.
``` 
grunt build
git subtree push --prefix dist origin gh-pages
``` 
or if you want to just upload everything to another server via FTP or something like that.
``` 
grunt build
``` 
For more help with deployment (like deploying to Herokue) peep these docs: http://yeoman.io/deployment.html
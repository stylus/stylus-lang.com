# stylus-lang.com

#### Installation
- `gem install jekyll`

#### Develop
- `cd ~/stylus-lang.com`
- `svn checkout https://github.com/learnboost/stylus/trunk/docs/ _drafts`
- `jekyll serve --drafts`
- `stylus -u autoprefixer-stylus -w css/style.styl`

#### Build
- `jekyll build --drafts`

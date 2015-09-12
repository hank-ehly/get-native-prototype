# Get Native (Prototype)

This is an opensource prototype application of the will-be "Get Native" web app.
The purpose of this app is for advanced learners of a language to study videos
of native speakers and continue advancing in their language learning. I find the 
app useful because I haven't found a lot of resources *designated to advanced learners*
on the internet, unless you're reading books, watching movies, or talking to people..

Unofficial release date sometime in mid-2016

### Building instructions

##### 1. rails basic setup
```
$ git clone git@github.com:hehly/getNativePrototype.git
$ cd /getNativePrototype
$ bundle install *--path vendor/bundle*
$ rake db:migrate
```

##### 2. secret variables
```
$ echo "export SECRET_KEY_BASE_DEVELOPMENT=$(rake secret)" >> ~/.bash_profile 
$ echo "export SECRET_KEY_BASE_TEST=$(rake secret)" >> ~/.bash_profile *[or ~/.bashrc]*
$ echo "export SECRET_KEY_BASE_PRODUCTION=$(rake secret)" >> ~/.bash_profile *[or ~/.bashrc]*
```
* use ```~/.bashrc``` instead of ```~/.bash_profile``` if you want 

##### 3. setup devise configuration
* uncomment "config.secret_key" in /getNativePrototype/config/initializers/devise.rb
```
$ rails g devise:install
```

##### 4. angular basic setup
```
$ cd /getNativePrototype/angular
$ npm install
$ bower install
```

##### 5. Install mailcatcher if you already havent (sorry rails mailer isn't setup yet)
```
$ gem install mailcatcher
$ mailcatcher start
```
* then visit *http://127.0.0.1:1080/*

##### 6. Launch!
* first rails: 
```
$ cd /getNativePrototype
$ rails s
```
* open another cmd-line window and start angular:
```
$ cd /getNativePrototype/angular
$ grunt serve
```
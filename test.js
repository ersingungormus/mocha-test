var request = require('request');


request('https://team.sweetgreen.com/', function (error, response, body) {

    /*if (!error && response.statusCode == 200) {

 }*/
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode);
        
    
})

require('chai').should();

var assert = require('assert');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By;
    until = webdriver.until;

var driver = new webdriver.Builder()
	   .forBrowser('chrome')
	   .build();
	


describe('Index page', function(){

	this.timeout(5000);

		driver.get('https://team.sweetgreen.com/');

	it('should show team.sg.com', function (done){
      
      driver.findElement(By.Xpath('//*[@id="root"]/div/div/div/div/div[2]/div/div/div/div/div/form[1]/div/div[2]/div/div[2]/input'))
      .then(elem=>elem.getText() )
      .then(text=>assert.equal(text,'Sign in to get all the tools' ))
      .then(done);

	});
});
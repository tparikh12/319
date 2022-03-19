/**
 * @Author Tanay Parikh
 */

import graphql.VisibleForTesting;
import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.Assert;

import java.sql.Driver;

public class WebsiteTesting {

    @Test
    public void Pass()
    {
        //setup web driver getting data from html file
        System.setProperty("webdriver.chrome.driver","/Users/tparikh/Downloads/chromedriver");
        WebDriver web = new ChromeDriver();
        web.get("file:///Users/tparikh/Downloads/HW4-UITesting-Files/task1/validation.html");
        //identifying email and sending the string
        WebElement email = web.findElement(By.id("txtEmail"));
        email.sendKeys("tparikh@iastate.edu");
        //identifying first name  and sending the string
        WebElement fname = web.findElement(By.id("txtFirstName"));
        fname.sendKeys("Tanay");
        //identifying last name  and sending the string
        WebElement lname = web.findElement(By.id("txtlastName"));
        lname.sendKeys("Parikh");
        //identifying gender and sending the string
        WebElement gender = web.findElement(By.name("selectGender"));
        gender.sendKeys("Male");
        //identifying state and sending the string
        WebElement state = web.findElement(By.name("selectState"));
        state.sendKeys("California");
        //identifying phone number and sending the string
        WebElement phone = web.findElement(By.id("txtPhone"));
        phone.sendKeys("630-854-2527");
        //identifying address and sending the string
        WebElement address = web.findElement(By.id("txtAddress"));
        address.sendKeys("Naperville,IL");
       // clicking the button which runs the javascript code 
        WebElement validate = web.findElement(By.id("btnValidate"));
        validate.click();
        WebElement check = web.findElement(By.id("labelNotifytxtFinalResult"));
        String val = check.getText();
        //checking if it was okay
        Assert.assertEquals("OK",val);
    }
    @Test
    public void Fail()
    {
        System.setProperty("webdriver.chrome.driver","/Users/tparikh/Downloads/chromedriver");
        WebDriver web = new ChromeDriver();
        web.get("file:///Users/tparikh/Downloads/HW4-UITesting-Files/task1/validation.html");
        
        WebElement email = web.findElement(By.id("txtEmail"));
        email.sendKeys("tparikh@iastate.edu");
        WebElement fname = web.findElement(By.id("txtFirstName"));
        fname.sendKeys("Tanay");
        WebElement lname = web.findElement(By.id("txtlastName"));
        lname.sendKeys("Parikh");
        WebElement gender = web.findElement(By.name("selectGender"));
        gender.sendKeys("Male");
        WebElement state = web.findElement(By.name("selectState"));
        state.sendKeys("California");
        //The one that should fail
        WebElement phone = web.findElement(By.id("txtPhone"));
        phone.sendKeys("630-8549807");
        WebElement address = web.findElement(By.id("txtAddress"));
        address.sendKeys("Naperville,IL");
        WebElement check = web.findElement(By.id("labelNotifytxtFinalResult"));
        WebElement validate = web.findElement(By.id("btnValidate"));
        validate.click();
        WebElement check = web.findElement(By.id("labelNotifytxtFinalResult"));
        String val = check.getText();

        Assert.assertEquals("Error",val);
    }

}

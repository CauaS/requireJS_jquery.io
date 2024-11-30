define(['jquery'], function($){
    const methods = {}

    methods.sayHello = function(){
        console.log("hello");
        $('body').html("Hello from Jquery")
    }
    
    methods.sayHelloFromContacts = function(){
        $('body').html("Hello from Jquery for contanct page")
    }

    return methods;
})
export class EmailValidator{
    constructor(){
        this.subscribeButton = document.getElementById("b1");
    }

    emailValidator(){
        this.subscribeButton.addEventListener ('click', function () {
            var emailElement = document.querySelector('input[type=\'text\']');
            var inputText = emailElement.value;
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(inputText.match(mailformat)) {
                alert("Thank you for Subscribing");
                emailElement.focus();
                return true;
            } else {
                if(inputText===''){
                    alert("You have not entered any email address!");
                }else{
                    alert("You have entered an invalid email address!");
                }
                emailElement.focus();
                return false;
            }
        });
    }
}
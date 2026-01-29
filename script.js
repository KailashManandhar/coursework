 // simple function to check form
            function validateForm() {

                // to get input values
                var name = document.getElementById("name").value;
                var email = document.getElementById("email").value;
                var message = document.getElementById("message").value;

                
                if (name == "") {
                    alert("You need to enter your full name");
                    return false;
                }

                
                if (email == "") {
                    alert("You need to enter your email address");
                    return false;
                }

                
                if (message == "") {
                    alert("Write your message");
                    return false;
                }

                
                alert("Submitted successfully");

                
                return false;
            }
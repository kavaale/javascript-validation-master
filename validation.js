$(document).ready(function () {
    $("form").submit(runMyProgram);
    // Object containing the validation rules
    var myRules =
        {
            firstName: "required",
            grade: "required"
        };

    // Object containing the error messages
    var myMessages =
        {
            firstName: "Name required",
            grade: "Grade required"
        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            rules: myRules,
            messages: myMessages,
            submitHandler: runMyProgram()
        }
    );

    function runMyProgram() {
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.
        var firstNamex = $("#firstName").val();
        var gradex = $("#grade").val();

        $("#message").text("You have registered " + firstNamex + " for grade " + gradex + " camp!")


    }



});
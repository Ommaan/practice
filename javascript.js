var $password = $("#password");
var $confirmPassword = $("#confirm_password");
$('.validation').hide();

function arePasswordsMatching() {
    return $confirmPassword.val();
}

function canSubmit() {
    arePasswordsMatching();
}

function passwordEvent() {

    if (isPasswordValid()) {
        $password.next().hide();
    } else {
        $password.next().show();
    }

    function confirmPasswordEvent() {

        if (arePasswordsMatching()) {
            $confirmPassword.next().hide();
        } else {
            $confirmPassword.next().show();
        }
    }

    function enableSubmitEvent() {
        $('input[type=submit]').prop("disabled", !canSubmit());
    }
    enableSubmitEvent();

    $confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
}
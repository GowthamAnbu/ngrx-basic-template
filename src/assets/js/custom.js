function focusInput() {
    $("form input").each(function(n) {
        var t = this,
            i = setTimeout(function() {
                $(t).val().length >= 1 && $(t).parent().find('label').addClass("active");
            }, 100 * n);
    });
 
}
setInterval(function() {
	focusInput();
}, 1000);




// profile page tab for UI


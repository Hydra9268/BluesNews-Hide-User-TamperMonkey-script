// ==UserScript==
// @name         BluesNews Hide User
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Better than 'Ignore User' since it hides the entire comment block. Does not hide quotes (yet).
// @author       Kxmode
// @match        *://www.bluesnews.com/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// ==/UserScript==

$(document).ready(function() {
    var userArray = [   // Comma separated list of user IDs go here
                        58241,
                        58135,
                        22891,
                    ];
    var userProfileURL = "board.pl?action=userinfo&user=";
    var cnt = 0;
    $.each( userArray, function( i, val ) {
        $.each($("#BluesNews-Main .content table .content table font a"), function(index, value) {
            if ($(this).attr("href").substring(0, 30) == userProfileURL)
            {
                if ($(this).attr("title") !== undefined)
                {
                    if ($(this).attr("href").substring(30,50) == val)
                    {
                        cnt++;
                        $(this).parents().eq(4).attr("style","display:none;");
                    }
                }
            }
        });
    });
});

import '../css/layout.css';
import '../css/login.css';
// import {$} from 'jquery'; this syntax is taking $ as object , hence throwing an error
import $ from 'jquery';

// $('#testing').html('hello world !!');
$(document).ready(function(){
    $(document).on('click','._login',function(){
        // alert('click test pass');
    });
    $('#testing').text('hello world !! I am a part of jQuery DoM manipuation');
});

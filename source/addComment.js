$(document).ready(function(){
  // add your code here
  $('#new_comment_button').on( 'click', () => {
    $('#new_comment_button').hide();
    $('#new_comment').show();
  });

  $('#new_comment').submit( () => {
    event.preventDefault();

    let comment = $('textarea[name="comment"]').val()
    let author = $('input[id="authorName"]').val()

      $('#comment_list').append('<li>' + comment + "<span class='author'>" + author + "</span></li>");

      $('#new_comment_button').show();
      $('form#new_comment').hide();
  });
});

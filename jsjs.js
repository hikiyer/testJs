$('.icon-edit').one('click', function() {
            if ($(this).hasClass('fa-plus')) {
                  var idParentTagCookie;
                  idParentTagCookie = $.cookie('idTagParent')
                  var id_button = $(this).attr('id');
                  var valParent =  $(this).attr('data-value');
                  var idTag = id_button.replace(/[^0-9]/g,"");
                  var idParent = valParent.replace(/[^0-9]/g,"");
                  if ( idParentTagCookie !== idParent+idTag){
                        $.cookie('idTagParent', idParent+idTag);
                        var textTag = $('#noteinput_'+idTag +'_note').val();
                        widget_dashboard('add', null , 'tag', textTag, false, dropable = true, idParent);
                        var idReload = '#edit_pop_over_oncard_'+idParent;
                        $(idReload).append( '<div id="preloader_partial"  class="preloader_trello"></div>');
                  }
            }else if($(this).hasClass('fa-times')){
                  var idParentTagCookie;
                  idParentTagCookie = $.cookie('idTagParent')
                  var id_button = $(this).attr('id');
                  var valParent =  $(this).attr('data-value');
                  var idTag = id_button.replace(/[^0-9]/g,"");
                  var idParent = valParent.replace(/[^0-9]/g,"");
                  if ( idParentTagCookie !== idParent+idTag){
                        $.cookie('idTagParent', idParent+idTag);
                        var idReload = '#edit_pop_over_oncard_'+idParent;
                        $(idReload).append( '<div id="preloader_partial"  class="preloader_trello"></div>');
                  widget_dashboard('delete', idTag, null );
                  $('#card_element_'+idTag).remove();
                        return false;
                  }
            }
      });

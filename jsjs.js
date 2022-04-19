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
                        // console.log(idTag);
                        // console.log(idTag);
                        // console.log('idTagCookie-' + idParentCookie);
                        var textTag = $('#noteinput_'+idTag +'_note').val();
                        console.log(textTag);
                        widget_dashboard('add', null , 'tag', textTag, false, dropable = true, idParent);
                  }
            }
      });

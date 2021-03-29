$('.sidebar-topo').click(function (e) { 
    e.preventDefault();
    $( '#sidebar, .sidebar-menu, .sidebar-topo, .sidebar-footer' ).toggleClass( "sidebar-menu-show" );
});

var altura_document = $(document).height();

$('#sidebar').css('height', altura_document);
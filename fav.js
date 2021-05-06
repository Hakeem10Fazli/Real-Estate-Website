$( function() {

    var $gallery = $( "#gallery" ),
    $favList = $( "#favList" );
  
  $( "li", $gallery ).draggable({
    cancel: "a.ui-icon", 
    revert: "invalid", 
    containment: "document",
    helper: "clone",
    cursor: "move"
  });
  
  $favList.droppable({
    accept: "#gallery > li",
    classes: {
      "ui-droppable-active": "ui-state-highlight"
    },
    drop: function( event, ui ) {
      addToFav( ui.draggable );
    }
  });
  
  $gallery.droppable({
    accept: "#favList li",
    classes: {
      "ui-droppable-active": "custom-state-active"
    },
    drop: function( event, ui ) {
      removeFromfavList( ui.draggable );
    }
  });
  
  // Adding to the favList
  var remove_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Remove from Favorites' class='ui-icon ui-icon-arrowreturn-1-w'>Remove from list</a>";
  function addToFav( $item ) {
    $item.fadeOut(function() {
      var $list = $( "ul", $favList ).length ?
        $( "ul", $favList ) :
        $( "<ul class='gallery ui-helper-reset'/>" ).appendTo( $favList );
  
      $item.find( "a.ui-icon-plus" ).remove();
      $item.append( remove_icon ).appendTo( $list ).fadeIn(function() {
        $item
          .animate({ width: "80px" })
          .find( "img" )
            .animate({ height: "78px" });
      });
    });
  }
  
  // Removing from the favList
  var add_icon = "<a href='link/to/trash/script/when/we/have/js/off' title='Add to List' class='ui-icon ui-icon-plus'>Add to List</a>";
  function removeFromfavList( $item ) {
    $item.fadeOut(function() {
      $item
        .find( "a.ui-icon-arrowreturn-1-w" )
          .remove()
        .end()
        .css( "width", "180")
        .append( add_icon )
        .find( "img" )
          .css( "height", "120" )
        .end()
        .appendTo( $gallery )
        .fadeIn();
    });
  }
  
  // englarge image
  function enlargeImg( $link ) {
    var src = $link.attr( "href" ),
      title = $link.siblings( "img" ).attr( "alt" ),
      $modal = $( "img[src$='" + src + "']" );
  
    if ( $modal.length ) {
      $modal.dialog( "open" );
    } else {
      var img = $( "<img alt='" + title + "' width='384' height='288' style='display: none; padding: 8px;' />" )
        .attr( "src", src ).appendTo( "body" );
      setTimeout(function() {
        img.dialog({
          title: title,
          width: 400,
          modal: true
        });
      }, 1 );
    }
  }
  
  //icon functionality
  $( "ul.gallery > li" ).on( "click", function( event ) {
    var $item = $( this ),
      $target = $( event.target );
  
    if ( $target.is( "a.ui-icon-plus" ) ) {
      addToFav( $item );
    } else if ( $target.is( "a.ui-icon-zoomin" ) ) {
      enlargeImg( $target );
    } else if ( $target.is( "a.ui-icon-arrowreturn-1-w" ) ) {
      removeFromfavList( $item );
    }
  
    return false;
  });
  } );
  
  function clearList(){
    window.location.reload();
  }
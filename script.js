
(function(){ 

  let copyLiNode = $("ul li:first-child").clone();
        // stores copy of first 'li' of 'ul' for later use

  
  $("ul.shopping-list").on("click", "button.shopping-item-toggle", function(event) {
        // selects <button .shopping-item-toggle>, adds click event
    $(event.currentTarget).closest("li").find("span.shopping-item").toggleClass("shopping-item__checked");
        // from target event, finds <span w/class "shopping-item">, toggles class "shopping-item__checked"
  });


  $("ul.shopping-list").on("click", "button.shopping-item-delete", function(event) {
        // selects <ul .shopping-list> and adds click event
    $(event.currentTarget).closest("li").remove();
        // from event target, finds closest "li" node, removes it from the tree. 
  });


  $("form").find("button").on("click", function(event){
        // selects <Submit button>, adds click event
    event.preventDefault();
        // prevents submit from (refreshing page/attempt to send data to server)

    let createListItem = $("input#shopping-list-entry").val();
        // stores value of text input

    createLiNode = $(copyLiNode).clone();
        // copies LiNode for current use;
    createLiNode.find("span.shopping-item").text(`${createListItem}`);
        // names 'li' item after text input
    $("input#shopping-list-entry").val("");
        // clears text input area
    $("ul.shopping-list").append(createLiNode);
        // adds new 'li' to the end of 'ul'(adds item to the list)

    
  });

})();
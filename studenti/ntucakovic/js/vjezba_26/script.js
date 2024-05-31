(function(){

  function Todo(){

    var input = document.querySelector("#input-text");
    var addButton = document.querySelector("#input-add");
    var allButton = document.querySelector("#button-all");
    var activeButton = document.querySelector("#button-active");
    var complitedButton = document.querySelector("#button-complited");
    var clearAllComolitedButton = document.querySelector("#button-clear-complited");
    var list = document.querySelector("ul");

    function addListItem(){
      
      var text = input.value;

      if(text.trim().length !== 0) {

        var newItem = createListItem(text);
        list.appendChild(newItem);
        input.value = "";

      } else {
        alert("Please enter todo!");
      }
    }

    function createListItem(text){

      var listItem = document.createElement("li");
      var div = document.createElement("div");
      var intDiv = document.createElement("div");
      div.classList.add("li-container");
      intDiv.classList.add("li-container-int");
      intDiv.innerText = text;
      addCheckBox(intDiv);
      div.appendChild(intDiv);
      return listItem;
      
    }

    function addCheckBox(){
      var checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      item.insertBefore(checkBox, item.firstChild);
    }

    this.addListeners = function(){
      addButton.addEventListener("click", addListItem);
    }


  }

  Todo.prototype.init = function() {
    this.addListeners();

  }

  var todo = new Todo();

  window.addEventListener('load', todo.init());


})();
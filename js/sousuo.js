search.onfocus = function () {
    search.style.borderColor = "#FF6A00";
    searchbtn.style.borderColor = "#FF6A00";
    searchlianxiang.style.display = "block";
  };
  search.onblur = function () {
    search.style.borderColor = "#e0e0e0";
    searchbtn.style.borderColor = "#e0e0e0";
    searchlianxiang.style.display = "none";
  };
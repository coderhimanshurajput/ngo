$(function () {
  $("#chkeduction").click(function () {
    if ($(this).is(":checked")) {
      $("#eductionID").show();
    } else {
      $("#eductionID").hide();
    }
  });
});

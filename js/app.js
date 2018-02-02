$(document).ready(begin);

function begin() {
  $('#form').cvvValidation($('#input-cvv'));
  $('#form').nameValidation($('#input-name'));
  $('#form').isValidCard($('#num-card'));
  $('#form').dateExpiration($('#month'), $('#year'));
  $('#form').userValidation($('#btn-validation'));
}

(function(DOM) {
  'use strict';

  function filter(element, hasSiblings) {
    var $input = new DOM(element);
    $input.eventListener('on', 'change', onChangeValue);

    function onChangeValue() {
      if (hasSiblings === true) {
        $input.forEach(function(item) {
          var value = item.options;
        });
        return disableSiblings();
      }

      var value = this.options;
      return value;
    }

    function disableSiblings() {
      $input.eventListener('on', 'change', function() {
        if (this.nextElementSibling === null)
          return;
        if (this.selectedIndex !== 0)
          return this.nextElementSibling.removeAttribute('disabled');
        return this.nextElementSibling.setAttribute('disabled', 'disabled');
      });
    }

    function hiddenContent() {

    }
  }

  window.filter = filter;
})(window.DOM);

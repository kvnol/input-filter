(function(DOM) {
  'use strict';

  function filter(element, hasSiblings) {
    var $input = new DOM(element);
    $input.eventListener('on', 'change', onChangeValue);

    function onChangeValue() {
      if (hasSiblings === true) {
        $input.forEach(function(item, index) {
          var value = $input.get()[index].options[$input.get()[index].selectedIndex].value;
        });
      }

      var value = $input.get()[0].options[$input.get()[0].selectedIndex].value;
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
      var $filterItem = new DOM('[data-type="filter-item"]');
      $input.eventListener('on', 'change', function() {
        $filterItem.forEach(function(item) {
          if (onChangeValue() === '')
            return item.classList.remove('hidden');

          if (onChangeValue() !== item.dataset.value)
            return item.classList.add('hidden');
          return item.classList.remove('hidden');
        });
      });
    }

    disableSiblings();
    hiddenContent();
  }

  window.filter = filter;
})(window.DOM);

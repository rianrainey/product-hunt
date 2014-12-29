(function() {
  $(function() {
    return this.getToken();
  });

  ({
    getToken: function() {
      return alert('ready!');
    }
  });

}).call(this);

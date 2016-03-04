
var i = 0
  , stylusEditor
  , cssEditor;

function next(overrideCode) {
  var tryme = $('#try')
    , steps = $('.step')
    , lastStep = steps.length - 1
    , styl = tryme.find('.stylus')
    , css = tryme.find('.css');

  if (i < 0) {
    i = lastStep;
  }
  if (i > lastStep) {
    i = 0;
  }
  var step = steps.eq(i);

  if (i) {
    $('#prev').addClass('show');
  } else {
    $('#prev').removeClass('show');
  }

  if (i == lastStep) {
    $('#next').addClass('hide');
  } else {
    $('#next').removeClass('hide');
  }

  ++i;

  function render(_, e) {
    if (e) {
      if (e.type != 'keyup') return;
      switch (e.keyCode) {
        case 37:
        case 38:
        case 39:
        case 40:
          return;
      }
    }

    var str = stylusEditor.getValue().trim();
    setHash({code: str});
    stylus(str)
      .render(function(err, str){
        if (err) return;
        cssEditor.setValue(str.trim());
      });
  }

  if (!stylusEditor) {
    stylusEditor = CodeMirror.fromTextArea(styl.get(0), { onKeyEvent: render });
    cssEditor = CodeMirror.fromTextArea(css.get(0));
  }

  tryme.find('h2').text(step.find('h2').text());
  tryme.find('p:first').text(step.find('p:first').text());
  stylusEditor.setValue(overrideCode || step.find('.stylus').val().trim());

  render();
  return false;
}

function prev() {
  i -= 2;
  next();
  return false;
}

// The last URL hash that was set via setHash.
var lastHash;

function onHashChange() {
  // Ignore hash changes that we did ourselves.
  if(location.hash === lastHash) return;
  var hashValues = parseHash();
  if(hashValues && hashValues.code) {
    stylusEditor.setValue(hashValues.code);
  }
}

// Parse the URL hash into an object.
// Requires hash to be in query-param format (`?key=value&key2=value2`)
function parseHash() {
  var hash = location.hash.replace(/^#/, '');
  if(!/^\?([^=&?]+=[^=&?]*(&|$))*/.test(hash)) return null;
  var ret = {};
  hash.replace(/(?:\?)([^=&?]+)=([^=&?]*)(?:&|$)/g, function(all, key, value) {
    ret[decodeURIComponent(key)] = decodeURIComponent(value);
  });
  return ret;
}

// Set the URL hash based on an object of query params
function setHash(props) {
  var hash = '?' + $.map(props, function(v, k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(v);
      }).join('&');
  if(history.replaceState && location.protocol !== 'file:') {
    // Avoid creating a new history entry.
    history.replaceState(null, null, '#' + hash);
  } else {
    location.hash = hash;
  }
  // Remember this hash so we can ignore the corresponding hashchange event.
  lastHash = location.hash;
}

$(function(){
  $('#next').click(function() { next(); });
  $('#prev').click(prev);
  var hashValues = parseHash();
  var overrideCode = hashValues && hashValues.code || undefined;
  next(overrideCode);
  $(window).on('hashchange', onHashChange);
});

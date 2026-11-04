// Copy BibTeX to clipboard.
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('copy-bibtex');
  var pre = document.getElementById('bibtex-text');
  if (!btn || !pre) return;
  btn.addEventListener('click', function () {
    var text = pre.innerText;
    var done = function () {
      var old = btn.innerHTML;
      btn.innerHTML = '<span class="icon"><i class="fas fa-check"></i></span><span>Copied</span>';
      setTimeout(function () { btn.innerHTML = old; }, 1500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done);
    } else {
      var range = document.createRange();
      range.selectNodeContents(pre);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      try { document.execCommand('copy'); done(); } catch (e) {}
      sel.removeAllRanges();
    }
  });
});

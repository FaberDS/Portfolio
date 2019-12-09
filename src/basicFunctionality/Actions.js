const base = {
    recognizeScrolling: function(element) {
        if(!element) return;
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    },
    scrollToTop: function(){
        document.body.scrollTop=0;
        document.documentElement.scrollTop =0;
    }
}
export default base;


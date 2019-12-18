const base = {
    recognizeScrolling: function(element, navbar) {
        if(!element) return;
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        element.style.display = "block";
        document.getElementById(navbar).classList.add("solid");
      } else {
        element.style.display = "none";
        document.getElementById(navbar).classList.remove("solid");
      }
    },
    scrollToTop: function(){
        document.body.scrollTop=0;
        document.documentElement.scrollTop =0;
    },
    getWidth: function() {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
      );
    },
    getHeight: function() {
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
      );
    }
    
}
export default base;


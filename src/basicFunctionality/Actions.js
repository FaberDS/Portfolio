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
    
}
export default base;


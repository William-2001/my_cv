$(document).ready(function(){

    $("a").on('click', function(event) {

      if (this.hash !== "") {

        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          window.location.hash = hash;
        });
      }
    });

    function inViewport (el) {

        var r, html;
        if ( !el || 1 !== el.nodeType ) { return false; }
        html = document.documentElement;
        r = el.getBoundingClientRect();

        return ( !!r
          && r.bottom >= 0
          && r.right >= 0
          && r.top <= html.clientHeight
          && r.left <= html.clientWidth
        );

    }

    // function add_animation_to_slides(media){
    //     if(media.matches){
    //         const jumbo = document.getElementById('jumbo');
    //         const about = document.getElementById('about');
    //         const skills = document.getElementById('skills');
    //         const relevant = document.getElementById('relevant');

    //         $(window).on('scroll',function(){
    //             if(inViewport(jumbo)){
    //                 if(!jumbo.classList.contains('slide-in-bottom')){
    //                     jumbo.classList.add('slide-in-bottom');
    //                 }
    //             }
    //             if(!inViewport(jumbo)){
    //                 if(jumbo.classList.contains('slide-in-bottom')){
    //                     jumbo.classList.remove('slide-in-bottom');
    //                 }
    //             }
    //             if(inViewport(about)){
    //                 if(!about.classList.contains('slide-in-right')){
    //                     about.classList.add('slide-in-right');
    //                 }
    //             }
    //             if(!inViewport(about)){
    //                 if(about.classList.contains('slide-in-right')){
    //                     about.classList.remove('slide-in-right');
    //                 }
    //             }
    //             if(inViewport(skills)){
    //                 if(!skills.classList.contains('slide-in-left')){
    //                     skills.classList.add('slide-in-left');
    //                 }
    //             }
    //             if(!inViewport(skills)){
    //                 if(skills.classList.contains('slide-in-left')){
    //                     skills.classList.remove('slide-in-left');
    //                 }
    //             }
    //             if(inViewport(relevant)){
    //                 if(!relevant.classList.contains('slide-in-right')){
    //                     relevant.classList.add('slide-in-right');
    //                 }
    //             }
    //             if(!inViewport(relevant)){
    //                 if(relevant.classList.contains('slide-in-right')){
    //                     relevant.classList.remove('slide-in-right');
    //                 }
    //             }
    //         });
    //     }
    // }

    // const media = window.matchMedia("(min-width: 700px)");
    // add_animation_to_slides(media);
    // media.addListener(add_animation_to_slides);

});

// home animation



$(function(){
    
   
    
    $('#HL').vidbg({
        'mp4': "videos/_bg_video_11s.mp4",
        'poster': 'images/portada_principal.jpg',
    }, {
        volume: 1,
        playbackRate: 1,
        muted: true,
        loop: true,
        autoplay: true,
        position: '50% 50%',
        overlay: true,
        overlayColor: '#fff',
        overlayAlpha: .6,
        resizing: true
    });
    
    $("[data-fancybox]").fancybox({}); 
    
    initMap();
    function initMap() {
        setTimeout(function(){
            
            var uluru = {lat: 19.7438317, lng: -98.955508};
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 17,
                center: uluru,
                gestureHandling: 'cooperative'
            });
            var marker = new google.maps.Marker({
              position: uluru,
              map: map,
              title: 'Andalucia Jardín',
            });
            
        }, 300);
    }

});
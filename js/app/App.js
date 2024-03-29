define(['jquery', 'backbone', 'marionette'],
    function ($, Backbone, Marionette) {
        var App = new Marionette.Application();

        //Organize Application into regions corresponding to DOM elements
        //Regions can contain views, Layouts, or subregions nested as necessary
        App.addRegions({
            headerRegion:'header',
            mainRegion:'#main'
        });

        function isMobile() {
            var ua = (navigator.userAgent || navigator.vendor || window.opera, window, window.document);
            return (/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
        }

        App.mobile = isMobile();

        App.addInitializer(function (/*options*/) {
            Backbone.history.start();
        });

        return App;
    });
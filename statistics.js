document.addEventListener('DOMContentLoaded', function () {
    var statsElement = document.getElementById('site-statistics');
    if (statsElement) {
        var stats = JSON.parse(localStorage.getItem('site_statistics')) || {
            views: 0,
            uniqueVisitors: 0,
            lastVisit: null
        };

        // Increment total views
        stats.views++;

        // Check if the visitor is unique
        var now = new Date();
        if (!stats.lastVisit || (now - new Date(stats.lastVisit)) > 86400000) { // 24 hours
            stats.uniqueVisitors++;
            stats.lastVisit = now;
        }

        // Update localStorage
        localStorage.setItem('site_statistics', JSON.stringify(stats));

        // Display statistics
        statsElement.innerHTML = 'Total views: ' + stats.views + '<br>' +
                                 'Unique visitors: ' + stats.uniqueVisitors;
    }
});
